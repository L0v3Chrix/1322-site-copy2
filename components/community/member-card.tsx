'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle, Award, Calendar, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Community Member Card Component
 *
 * Placeholder component for displaying community member profiles.
 * Includes avatar, stats, badges, and quick action buttons.
 */

export interface MemberBadge {
  id: string
  name: string
  icon?: 'award' | 'star' | 'check' | 'flame'
  color?: 'gold' | 'olive' | 'copper' | 'navy'
}

export interface MemberCardProps {
  /** Member ID */
  id: string
  /** Member name */
  name: string
  /** Member avatar URL */
  avatar?: string
  /** Member bio/tagline */
  bio?: string
  /** Member role */
  role?: 'member' | 'moderator' | 'admin' | 'expert' | 'founding-member'
  /** Whether the member is verified */
  isVerified?: boolean
  /** Member location */
  location?: string
  /** When the member joined */
  joinedAt: Date
  /** Number of discussions started */
  discussionCount?: number
  /** Number of replies */
  replyCount?: number
  /** Badges earned */
  badges?: MemberBadge[]
  /** Whether the current user is following this member */
  isFollowing?: boolean
  /** Link to full profile */
  href: string
  /** Callback when follow button is clicked */
  onFollow?: () => void
  /** Callback when message button is clicked */
  onMessage?: () => void
  /** Additional class names */
  className?: string
  /** Card variant */
  variant?: 'default' | 'compact' | 'featured'
}

const roleStyles = {
  member: { bg: 'bg-navy/5', text: 'text-navy/70', label: 'Member' },
  moderator: { bg: 'bg-olive/10', text: 'text-olive', label: 'Moderator' },
  admin: { bg: 'bg-navy', text: 'text-cream', label: 'Admin' },
  expert: { bg: 'bg-gold/10', text: 'text-gold', label: 'Expert' },
  'founding-member': { bg: 'bg-copper/10', text: 'text-copper', label: 'Founding Member' },
}

const badgeColors = {
  gold: 'bg-gold/10 text-gold',
  olive: 'bg-olive/10 text-olive',
  copper: 'bg-copper/10 text-copper',
  navy: 'bg-navy/10 text-navy',
}

export function MemberCard({
  id,
  name,
  avatar,
  bio,
  role = 'member',
  isVerified = false,
  location,
  joinedAt,
  discussionCount = 0,
  replyCount = 0,
  badges = [],
  isFollowing = false,
  href,
  onFollow,
  onMessage,
  className,
  variant = 'default',
}: MemberCardProps) {
  const [following, setFollowing] = React.useState(isFollowing)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const handleFollow = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFollowing(!following)
    onFollow?.()
  }

  const handleMessage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onMessage?.()
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className={cn('flex items-center gap-3 p-3 bg-white rounded-sm shadow-sm', className)}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 4 }}
      >
        <div className="w-10 h-10 rounded-full bg-navy/10 overflow-hidden flex items-center justify-center flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-sm font-medium text-navy">{name.charAt(0)}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Link href={href} className="font-medium text-navy hover:text-gold transition-colors truncate">
              {name}
            </Link>
            {isVerified && <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />}
          </div>
          <p className="text-xs text-navy/50 truncate">{bio || roleStyles[role].label}</p>
        </div>
      </motion.div>
    )
  }

  if (variant === 'featured') {
    return (
      <motion.article
        className={cn(
          'bg-gradient-to-br from-navy to-navy/90 text-cream rounded-sm overflow-hidden',
          'shadow-lg hover:shadow-xl transition-shadow duration-300',
          className
        )}
        variants={fadeInUp}
        whileHover={{ y: -4 }}
      >
        <div className="p-8 text-center">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto rounded-full bg-cream/10 overflow-hidden flex items-center justify-center mb-4 ring-4 ring-gold/30">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl font-heading text-cream">{name.charAt(0)}</span>
            )}
          </div>

          {/* Name & Role */}
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Link href={href} className="font-heading text-xl text-cream hover:text-gold transition-colors">
                {name}
              </Link>
              {isVerified && <CheckCircle className="w-4 h-4 text-gold" />}
            </div>
            <span className={cn(
              'inline-block px-3 py-1 text-xs font-medium rounded-sm',
              role === 'admin' ? 'bg-cream/20 text-cream' : roleStyles[role].bg + ' ' + roleStyles[role].text
            )}>
              {roleStyles[role].label}
            </span>
          </div>

          {/* Bio */}
          {bio && (
            <p className="text-cream/80 text-sm mb-6 line-clamp-2">{bio}</p>
          )}

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-6">
            <div>
              <p className="text-2xl font-heading text-gold">{discussionCount}</p>
              <p className="text-xs text-cream/60">Discussions</p>
            </div>
            <div>
              <p className="text-2xl font-heading text-gold">{replyCount}</p>
              <p className="text-xs text-cream/60">Replies</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <motion.button
              onClick={handleFollow}
              className={cn(
                'px-6 py-2 text-sm font-medium transition-all duration-300',
                following
                  ? 'bg-cream/20 text-cream hover:bg-cream/30'
                  : 'bg-gold text-navy hover:bg-gold/90'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {following ? 'Following' : 'Follow'}
            </motion.button>
            <motion.button
              onClick={handleMessage}
              className="px-4 py-2 border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.article>
    )
  }

  // Default variant
  return (
    <motion.article
      className={cn(
        'bg-white rounded-sm shadow-card overflow-hidden',
        'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      variants={fadeInUp}
      whileHover={{ y: -2 }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-navy/10 overflow-hidden flex items-center justify-center flex-shrink-0">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-heading text-navy">{name.charAt(0)}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Link href={href} className="font-heading text-lg text-navy hover:text-gold transition-colors truncate">
                {name}
              </Link>
              {isVerified && <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />}
            </div>
            <span className={cn(
              'inline-block px-2 py-0.5 text-xs font-medium rounded-sm',
              roleStyles[role].bg,
              roleStyles[role].text
            )}>
              {roleStyles[role].label}
            </span>
          </div>
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-sm text-navy/70 mb-4 line-clamp-2">{bio}</p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-navy/50 mb-4">
          {location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Joined {formatDate(joinedAt)}
          </span>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.slice(0, 3).map((badge) => (
              <span
                key={badge.id}
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-sm',
                  badgeColors[badge.color || 'navy']
                )}
              >
                <Award className="w-3 h-3" />
                {badge.name}
              </span>
            ))}
            {badges.length > 3 && (
              <span className="text-xs text-navy/50">+{badges.length - 3} more</span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex gap-6 pt-4 border-t border-navy/10">
          <div>
            <p className="text-lg font-heading text-navy">{discussionCount}</p>
            <p className="text-xs text-navy/50">Discussions</p>
          </div>
          <div>
            <p className="text-lg font-heading text-navy">{replyCount}</p>
            <p className="text-xs text-navy/50">Replies</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <motion.button
            onClick={handleFollow}
            className={cn(
              'flex-1 py-2 text-sm font-medium transition-all duration-300',
              following
                ? 'bg-navy/10 text-navy hover:bg-navy/20'
                : 'bg-gold text-navy hover:bg-gold/90'
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {following ? 'Following' : 'Follow'}
          </motion.button>
          <motion.button
            onClick={handleMessage}
            className="px-4 py-2 border border-navy/20 text-navy hover:bg-navy/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Send message"
          >
            <MessageCircle className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

export default MemberCard
