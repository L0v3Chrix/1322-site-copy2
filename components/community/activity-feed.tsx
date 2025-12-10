'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Heart,
  Award,
  UserPlus,
  BookOpen,
  Trophy,
  CheckCircle,
  Bell,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Community Activity Feed Component
 *
 * Placeholder component for displaying community activity.
 * Shows recent discussions, replies, likes, and achievements.
 */

export type ActivityType =
  | 'discussion_created'
  | 'reply_posted'
  | 'like_received'
  | 'badge_earned'
  | 'member_joined'
  | 'course_completed'
  | 'lesson_completed'
  | 'milestone_reached'

export interface ActivityItem {
  id: string
  type: ActivityType
  actor: {
    id: string
    name: string
    avatar?: string
  }
  target?: {
    id: string
    title: string
    href: string
  }
  metadata?: Record<string, unknown>
  createdAt: Date
  isRead?: boolean
}

export interface ActivityFeedProps {
  /** Activity items to display */
  activities: ActivityItem[]
  /** Whether there are more items to load */
  hasMore?: boolean
  /** Whether currently loading more items */
  isLoading?: boolean
  /** Callback when load more is clicked */
  onLoadMore?: () => void
  /** Callback when an activity is clicked */
  onActivityClick?: (activity: ActivityItem) => void
  /** Whether to show as compact list */
  compact?: boolean
  /** Maximum number of items to show initially */
  limit?: number
  /** Additional class names */
  className?: string
}

const activityIcons: Record<ActivityType, React.ElementType> = {
  discussion_created: MessageCircle,
  reply_posted: MessageCircle,
  like_received: Heart,
  badge_earned: Award,
  member_joined: UserPlus,
  course_completed: Trophy,
  lesson_completed: BookOpen,
  milestone_reached: CheckCircle,
}

const activityColors: Record<ActivityType, string> = {
  discussion_created: 'bg-navy/10 text-navy',
  reply_posted: 'bg-gold/10 text-gold',
  like_received: 'bg-copper/10 text-copper',
  badge_earned: 'bg-gold/10 text-gold',
  member_joined: 'bg-olive/10 text-olive',
  course_completed: 'bg-gold/10 text-gold',
  lesson_completed: 'bg-olive/10 text-olive',
  milestone_reached: 'bg-copper/10 text-copper',
}

const getActivityMessage = (activity: ActivityItem): React.ReactNode => {
  const { type, actor, target } = activity

  switch (type) {
    case 'discussion_created':
      return (
        <>
          <strong>{actor.name}</strong> started a new discussion
          {target && (
            <>
              : <Link href={target.href} className="text-gold hover:underline">{target.title}</Link>
            </>
          )}
        </>
      )
    case 'reply_posted':
      return (
        <>
          <strong>{actor.name}</strong> replied to
          {target && (
            <> <Link href={target.href} className="text-gold hover:underline">{target.title}</Link></>
          )}
        </>
      )
    case 'like_received':
      return (
        <>
          <strong>{actor.name}</strong> liked your{' '}
          {target && (
            <Link href={target.href} className="text-gold hover:underline">{target.title}</Link>
          )}
        </>
      )
    case 'badge_earned':
      return (
        <>
          <strong>{actor.name}</strong> earned the{' '}
          <span className="text-gold font-medium">{(activity.metadata?.badgeName as string) || 'badge'}</span>
        </>
      )
    case 'member_joined':
      return (
        <>
          <strong>{actor.name}</strong> joined the community
        </>
      )
    case 'course_completed':
      return (
        <>
          <strong>{actor.name}</strong> completed{' '}
          {target && (
            <Link href={target.href} className="text-gold hover:underline">{target.title}</Link>
          )}
        </>
      )
    case 'lesson_completed':
      return (
        <>
          <strong>{actor.name}</strong> finished a lesson in{' '}
          {target && (
            <Link href={target.href} className="text-gold hover:underline">{target.title}</Link>
          )}
        </>
      )
    case 'milestone_reached':
      return (
        <>
          <strong>{actor.name}</strong> reached a milestone:{' '}
          <span className="text-gold font-medium">{(activity.metadata?.milestone as string) || 'milestone'}</span>
        </>
      )
    default:
      return <strong>{actor.name}</strong>
  }
}

const formatTimeAgo = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (seconds < 60) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return date.toLocaleDateString()
}

export function ActivityFeed({
  activities,
  hasMore = false,
  isLoading = false,
  onLoadMore,
  onActivityClick,
  compact = false,
  limit,
  className,
}: ActivityFeedProps) {
  const displayedActivities = limit ? activities.slice(0, limit) : activities

  return (
    <motion.div
      className={cn('bg-white rounded-sm shadow-card overflow-hidden', className)}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-navy/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-navy/60" />
          <h3 className="font-heading text-lg text-navy">Activity</h3>
        </div>
        {activities.some((a) => !a.isRead) && (
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        )}
      </div>

      {/* Activity List */}
      <div className={cn('divide-y divide-navy/5', compact ? '' : 'max-h-[500px] overflow-y-auto')}>
        <AnimatePresence>
          {displayedActivities.length === 0 ? (
            <motion.div
              variants={fadeInUp}
              className="py-12 text-center"
            >
              <Bell className="w-12 h-12 mx-auto text-navy/20 mb-4" />
              <p className="text-navy/50">No activity yet</p>
            </motion.div>
          ) : (
            displayedActivities.map((activity, index) => {
              const Icon = activityIcons[activity.type]
              const colorClass = activityColors[activity.type]

              return (
                <motion.div
                  key={activity.id}
                  variants={fadeInUp}
                  custom={index}
                  className={cn(
                    'flex gap-4 p-4 hover:bg-navy/5 transition-colors cursor-pointer',
                    !activity.isRead && 'bg-gold/5'
                  )}
                  onClick={() => onActivityClick?.(activity)}
                >
                  {/* Actor Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-navy/10 overflow-hidden flex items-center justify-center relative">
                      {activity.actor.avatar ? (
                        <img
                          src={activity.actor.avatar}
                          alt={activity.actor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-medium text-navy">
                          {activity.actor.name.charAt(0)}
                        </span>
                      )}
                      {/* Activity type indicator */}
                      <div
                        className={cn(
                          'absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center',
                          colorClass
                        )}
                      >
                        <Icon className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-navy leading-relaxed">
                      {getActivityMessage(activity)}
                    </p>
                    <p className="text-xs text-navy/50 mt-1">
                      {formatTimeAgo(activity.createdAt)}
                    </p>
                  </div>

                  {/* Unread indicator */}
                  {!activity.isRead && (
                    <div className="flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-gold block" />
                    </div>
                  )}
                </motion.div>
              )
            })
          )}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="p-4 border-t border-navy/10">
          <motion.button
            onClick={onLoadMore}
            disabled={isLoading}
            className={cn(
              'w-full py-3 flex items-center justify-center gap-2',
              'text-sm font-medium text-navy/70 hover:text-navy',
              'bg-navy/5 hover:bg-navy/10 transition-colors',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-navy/20 border-t-navy rounded-full animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Load More
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </div>
      )}
    </motion.div>
  )
}

/**
 * Activity Feed Widget
 *
 * Compact version for sidebar or dashboard
 */
export interface ActivityWidgetProps {
  activities: ActivityItem[]
  maxItems?: number
  className?: string
}

export function ActivityWidget({ activities, maxItems = 5, className }: ActivityWidgetProps) {
  return (
    <ActivityFeed
      activities={activities}
      limit={maxItems}
      compact
      className={className}
    />
  )
}

export default ActivityFeed
