'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Heart, Share2, MoreHorizontal, Clock, Pin, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Community Discussion Thread Component
 *
 * Placeholder component for future community discussion features.
 * Includes thread preview, author info, and engagement metrics.
 */

export interface Author {
  id: string
  name: string
  avatar?: string
  role?: 'member' | 'moderator' | 'admin' | 'expert'
  isVerified?: boolean
}

export interface DiscussionThreadProps {
  /** Thread ID */
  id: string
  /** Thread title */
  title: string
  /** Thread excerpt/preview */
  excerpt: string
  /** Thread author */
  author: Author
  /** Number of replies */
  replyCount: number
  /** Number of likes */
  likeCount: number
  /** When the thread was created */
  createdAt: Date
  /** When the last reply was posted */
  lastActivityAt?: Date
  /** Whether the thread is pinned */
  isPinned?: boolean
  /** Whether the thread is locked */
  isLocked?: boolean
  /** Whether the thread is solved (for Q&A) */
  isSolved?: boolean
  /** Tags/categories */
  tags?: string[]
  /** Link to full thread */
  href: string
  /** Additional class names */
  className?: string
}

const roleStyles = {
  member: '',
  moderator: 'bg-olive/10 text-olive',
  admin: 'bg-navy text-cream',
  expert: 'bg-gold/10 text-gold',
}

const roleLabels = {
  member: '',
  moderator: 'Mod',
  admin: 'Admin',
  expert: 'Expert',
}

export function DiscussionThread({
  id,
  title,
  excerpt,
  author,
  replyCount,
  likeCount,
  createdAt,
  lastActivityAt,
  isPinned = false,
  isLocked = false,
  isSolved = false,
  tags = [],
  href,
  className,
}: DiscussionThreadProps) {
  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`
    return date.toLocaleDateString()
  }

  return (
    <motion.article
      className={cn(
        'bg-white rounded-sm shadow-card overflow-hidden',
        'border-l-4',
        isPinned ? 'border-l-gold' : isSolved ? 'border-l-olive' : 'border-l-transparent',
        'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
    >
      <Link href={href} className="block p-6">
        {/* Header with badges */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {isPinned && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-sm">
                <Pin className="w-3 h-3" />
                Pinned
              </span>
            )}
            {isSolved && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-olive/10 text-olive text-xs font-medium rounded-sm">
                <CheckCircle className="w-3 h-3" />
                Solved
              </span>
            )}
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-navy/5 text-navy/70 text-xs rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            className="p-1 text-navy/40 hover:text-navy transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-navy/70 mb-4 line-clamp-2">{excerpt}</p>

        {/* Footer with author and stats */}
        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-navy/10 overflow-hidden flex items-center justify-center">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm font-medium text-navy">
                  {author.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-navy">{author.name}</span>
              {author.isVerified && (
                <CheckCircle className="w-3.5 h-3.5 text-gold" />
              )}
              {author.role && author.role !== 'member' && (
                <span className={cn(
                  'px-1.5 py-0.5 text-xs font-medium rounded-sm',
                  roleStyles[author.role]
                )}>
                  {roleLabels[author.role]}
                </span>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-navy/50">
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              {replyCount}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" />
              {likeCount}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {formatTimeAgo(lastActivityAt || createdAt)}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

/**
 * Discussion Thread List Component
 */
export interface DiscussionThreadListProps {
  threads: DiscussionThreadProps[]
  className?: string
}

export function DiscussionThreadList({ threads, className }: DiscussionThreadListProps) {
  return (
    <motion.div
      className={cn('space-y-4', className)}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {threads.map((thread, index) => (
        <motion.div
          key={thread.id}
          variants={fadeInUp}
          custom={index}
        >
          <DiscussionThread {...thread} />
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * Create Discussion Button
 */
export interface CreateDiscussionButtonProps {
  onClick?: () => void
  className?: string
}

export function CreateDiscussionButton({ onClick, className }: CreateDiscussionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'w-full py-4 px-6 flex items-center justify-center gap-3',
        'bg-white border-2 border-dashed border-navy/20 rounded-sm',
        'text-navy/60 hover:text-navy hover:border-gold hover:bg-gold/5',
        'transition-all duration-300',
        className
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium">Start a New Discussion</span>
    </motion.button>
  )
}

export default DiscussionThread
