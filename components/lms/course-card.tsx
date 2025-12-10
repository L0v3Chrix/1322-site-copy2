'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, BookOpen, CheckCircle, Lock, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import { AnimatedIcon } from '@/components/ui/animated-icon'

/**
 * 1322 Legacy Strategies - LMS Course Card Component
 *
 * Placeholder component for future course/lesson display in the Learning Management System.
 * Includes progress tracking, lesson count, and locked state support.
 */

export interface CourseCardProps {
  /** Course title */
  title: string
  /** Course description */
  description: string
  /** Image URL for the course thumbnail */
  imageUrl?: string
  /** Number of lessons in the course */
  lessonCount: number
  /** Estimated duration in minutes */
  duration: number
  /** User's progress percentage (0-100) */
  progress?: number
  /** Whether the course is locked (requires subscription/payment) */
  isLocked?: boolean
  /** Whether the course is completed */
  isCompleted?: boolean
  /** Link to the course page */
  href: string
  /** Additional class names */
  className?: string
}

export function CourseCard({
  title,
  description,
  imageUrl,
  lessonCount,
  duration,
  progress = 0,
  isLocked = false,
  isCompleted = false,
  href,
  className,
}: CourseCardProps) {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  return (
    <EnhancedCard
      className={cn('group overflow-hidden', className)}
      interactive
      padding="none"
    >
      <Link href={isLocked ? '#' : href} className="block">
        {/* Course Image */}
        <div className="relative aspect-video overflow-hidden bg-navy/5">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/10 to-gold/10">
              <BookOpen className="w-12 h-12 text-navy/30" />
            </div>
          )}

          {/* Overlay for locked courses */}
          {isLocked && (
            <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
              <div className="text-center text-cream">
                <Lock className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm font-medium">Premium Course</span>
              </div>
            </div>
          )}

          {/* Completed badge */}
          {isCompleted && (
            <div className="absolute top-3 right-3 bg-olive text-cream px-3 py-1 rounded-sm text-xs font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Completed
            </div>
          )}

          {/* Play button overlay on hover */}
          {!isLocked && !isCompleted && (
            <motion.div
              className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gold flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 text-navy ml-1" fill="currentColor" />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Course Info */}
        <div className="p-6">
          <h3 className="font-heading text-xl text-navy mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-navy/70 text-sm mb-4 line-clamp-2">{description}</p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-navy/60 mb-4">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {lessonCount} lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {formatDuration(duration)}
            </span>
          </div>

          {/* Progress Bar */}
          {progress > 0 && !isCompleted && (
            <div className="mt-4">
              <div className="flex justify-between text-xs text-navy/60 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 bg-navy/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </EnhancedCard>
  )
}

/**
 * Lesson Progress Component
 *
 * Shows progress through a module or track
 */
export interface LessonProgressProps {
  /** Current lesson number */
  currentLesson: number
  /** Total number of lessons */
  totalLessons: number
  /** Lessons completed */
  completedLessons: number
  /** Additional class names */
  className?: string
}

export function LessonProgress({
  currentLesson,
  totalLessons,
  completedLessons,
  className,
}: LessonProgressProps) {
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className={cn('bg-white rounded-sm shadow-card p-6', className)}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-heading text-lg text-navy">Your Progress</h4>
        <span className="text-2xl font-heading text-gold">{progressPercentage}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-navy/10 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-gold to-copper rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between text-sm">
        <span className="text-navy/60">
          Lesson {currentLesson} of {totalLessons}
        </span>
        <span className="text-navy/60">
          {completedLessons} completed
        </span>
      </div>
    </div>
  )
}

/**
 * Module Accordion Component
 *
 * Expandable module with lessons list
 */
export interface ModuleAccordionProps {
  /** Module title */
  title: string
  /** Module description */
  description?: string
  /** Lessons in this module */
  lessons: Array<{
    id: string
    title: string
    duration: number
    isCompleted: boolean
    isLocked?: boolean
  }>
  /** Whether the module is expanded */
  isExpanded?: boolean
  /** Toggle callback */
  onToggle?: () => void
  /** Additional class names */
  className?: string
}

export function ModuleAccordion({
  title,
  description,
  lessons,
  isExpanded = false,
  onToggle,
  className,
}: ModuleAccordionProps) {
  const completedCount = lessons.filter((l) => l.isCompleted).length
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0)

  return (
    <div className={cn('border border-navy/10 rounded-sm overflow-hidden', className)}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-cream/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-navy" />
          </div>
          <div className="text-left">
            <h4 className="font-heading text-navy">{title}</h4>
            <p className="text-xs text-navy/60">
              {completedCount}/{lessons.length} lessons · {Math.round(totalDuration / 60)}h total
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-5 h-5 text-navy/40" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </button>

      {/* Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="border-t border-navy/10 bg-cream/30">
          {description && (
            <p className="px-6 py-3 text-sm text-navy/70 border-b border-navy/10">
              {description}
            </p>
          )}
          <ul className="divide-y divide-navy/10">
            {lessons.map((lesson, index) => (
              <li key={lesson.id}>
                <Link
                  href={lesson.isLocked ? '#' : `/learn/lesson/${lesson.id}`}
                  className={cn(
                    'flex items-center gap-4 px-6 py-3 hover:bg-white transition-colors',
                    lesson.isLocked && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium bg-navy/10 text-navy">
                    {lesson.isCompleted ? (
                      <CheckCircle className="w-4 h-4 text-olive" />
                    ) : lesson.isLocked ? (
                      <Lock className="w-3 h-3" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span className="flex-1 text-sm text-navy">{lesson.title}</span>
                  <span className="text-xs text-navy/50">{lesson.duration}min</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default CourseCard
