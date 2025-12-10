'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * 1322 Legacy Strategies - Skeleton Loading Components
 *
 * Elegant loading states with shimmer effects for the "Principled Authority" aesthetic.
 *
 * Features:
 * - Gold-accented shimmer animation
 * - Multiple preset shapes and sizes
 * - Card, text, and image skeleton variants
 * - Accessible (uses appropriate ARIA attributes)
 */

/**
 * Base Skeleton Component
 *
 * A simple skeleton with shimmer animation
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to show the shimmer animation */
  animate?: boolean
}

function Skeleton({ className, animate = true, ...props }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading..."
      className={cn(
        'rounded-sm bg-navy/10',
        animate && 'animate-shimmer bg-gradient-to-r from-navy/10 via-gold/5 to-navy/10 bg-[length:200%_100%]',
        className
      )}
      {...props}
    />
  )
}

/**
 * Text Skeleton
 *
 * For loading text content with multiple lines
 */
export interface TextSkeletonProps {
  /** Number of lines to display */
  lines?: number
  /** Whether the last line should be shorter */
  lastLineShort?: boolean
  /** Line height preset */
  lineHeight?: 'sm' | 'md' | 'lg'
  /** Additional class names */
  className?: string
}

const lineHeights = {
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-5',
}

function TextSkeleton({
  lines = 3,
  lastLineShort = true,
  lineHeight = 'md',
  className,
}: TextSkeletonProps) {
  return (
    <div className={cn('space-y-3', className)} role="status" aria-label="Loading text...">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={cn(
            lineHeights[lineHeight],
            index === lines - 1 && lastLineShort ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}

/**
 * Heading Skeleton
 *
 * For loading heading text
 */
export interface HeadingSkeletonProps {
  /** Size of the heading */
  size?: 'h1' | 'h2' | 'h3' | 'h4'
  /** Width of the skeleton */
  width?: 'full' | '3/4' | '1/2' | '1/3'
  /** Additional class names */
  className?: string
}

const headingSizes = {
  h1: 'h-10',
  h2: 'h-8',
  h3: 'h-6',
  h4: 'h-5',
}

const widthClasses = {
  full: 'w-full',
  '3/4': 'w-3/4',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
}

function HeadingSkeleton({
  size = 'h2',
  width = '3/4',
  className,
}: HeadingSkeletonProps) {
  return (
    <Skeleton
      className={cn(headingSizes[size], widthClasses[width], className)}
      aria-label="Loading heading..."
    />
  )
}

/**
 * Image Skeleton
 *
 * For loading image placeholders with aspect ratio
 */
export interface ImageSkeletonProps {
  /** Aspect ratio of the image */
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | 'auto'
  /** Additional class names */
  className?: string
}

const aspectRatioClasses = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  'auto': '',
}

function ImageSkeleton({
  aspectRatio = '4/3',
  className,
}: ImageSkeletonProps) {
  return (
    <Skeleton
      className={cn(
        'w-full',
        aspectRatioClasses[aspectRatio],
        className
      )}
      aria-label="Loading image..."
    />
  )
}

/**
 * Card Skeleton
 *
 * A complete card loading state with image, title, and description
 */
export interface CardSkeletonProps {
  /** Whether to show the image area */
  showImage?: boolean
  /** Aspect ratio of the image */
  imageAspectRatio?: '16/9' | '4/3' | '3/2' | '1/1'
  /** Number of description lines */
  descriptionLines?: number
  /** Additional class names */
  className?: string
}

function CardSkeleton({
  showImage = true,
  imageAspectRatio = '4/3',
  descriptionLines = 2,
  className,
}: CardSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-sm shadow-card overflow-hidden',
        className
      )}
      role="status"
      aria-label="Loading card..."
    >
      {showImage && (
        <ImageSkeleton aspectRatio={imageAspectRatio} className="rounded-none" />
      )}
      <div className="p-6 space-y-4">
        <HeadingSkeleton size="h3" width="3/4" />
        <TextSkeleton lines={descriptionLines} lineHeight="sm" />
        <Skeleton className="h-4 w-24" /> {/* CTA/Link placeholder */}
      </div>
    </div>
  )
}

/**
 * Blog Card Skeleton
 *
 * Specific skeleton for blog post cards
 */
export interface BlogCardSkeletonProps {
  /** Additional class names */
  className?: string
}

function BlogCardSkeleton({ className }: BlogCardSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-sm shadow-card overflow-hidden',
        className
      )}
      role="status"
      aria-label="Loading blog post..."
    >
      <ImageSkeleton aspectRatio="16/9" className="rounded-none" />
      <div className="p-6 space-y-4">
        {/* Category and date */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
        {/* Title */}
        <HeadingSkeleton size="h3" width="full" />
        {/* Excerpt */}
        <TextSkeleton lines={2} lineHeight="sm" />
        {/* Author */}
        <div className="flex items-center gap-3 pt-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  )
}

/**
 * Feature Card Skeleton
 *
 * For loading feature/benefit cards with icon
 */
export interface FeatureCardSkeletonProps {
  /** Additional class names */
  className?: string
}

function FeatureCardSkeleton({ className }: FeatureCardSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-sm shadow-card p-8 text-center',
        className
      )}
      role="status"
      aria-label="Loading feature..."
    >
      {/* Icon placeholder */}
      <div className="flex justify-center mb-4">
        <Skeleton className="h-16 w-16 rounded-full" />
      </div>
      {/* Title */}
      <div className="flex justify-center mb-4">
        <HeadingSkeleton size="h3" width="1/2" />
      </div>
      {/* Description */}
      <TextSkeleton lines={2} lineHeight="sm" />
    </div>
  )
}

/**
 * Stat Card Skeleton
 *
 * For loading statistic/metric displays
 */
export interface StatCardSkeletonProps {
  /** Additional class names */
  className?: string
}

function StatCardSkeleton({ className }: StatCardSkeletonProps) {
  return (
    <div
      className={cn('text-center', className)}
      role="status"
      aria-label="Loading statistic..."
    >
      {/* Large number */}
      <Skeleton className="h-12 w-24 mx-auto mb-2" />
      {/* Label */}
      <Skeleton className="h-4 w-32 mx-auto" />
    </div>
  )
}

/**
 * Profile Skeleton
 *
 * For loading user/author profiles
 */
export interface ProfileSkeletonProps {
  /** Size of the avatar */
  avatarSize?: 'sm' | 'md' | 'lg'
  /** Whether to show description */
  showDescription?: boolean
  /** Additional class names */
  className?: string
}

const avatarSizes = {
  sm: 'h-10 w-10',
  md: 'h-16 w-16',
  lg: 'h-24 w-24',
}

function ProfileSkeleton({
  avatarSize = 'md',
  showDescription = true,
  className,
}: ProfileSkeletonProps) {
  return (
    <div
      className={cn('flex items-center gap-4', className)}
      role="status"
      aria-label="Loading profile..."
    >
      <Skeleton className={cn('rounded-full', avatarSizes[avatarSize])} />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
        {showDescription && <Skeleton className="h-3 w-48" />}
      </div>
    </div>
  )
}

/**
 * Table Row Skeleton
 *
 * For loading table rows
 */
export interface TableRowSkeletonProps {
  /** Number of columns */
  columns?: number
  /** Additional class names */
  className?: string
}

function TableRowSkeleton({
  columns = 4,
  className,
}: TableRowSkeletonProps) {
  return (
    <div
      className={cn('flex gap-4 py-4 border-b border-navy/10', className)}
      role="status"
      aria-label="Loading row..."
    >
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton
          key={index}
          className={cn(
            'h-4',
            index === 0 ? 'w-1/4' : 'flex-1'
          )}
        />
      ))}
    </div>
  )
}

/**
 * Navigation Skeleton
 *
 * For loading navigation menus
 */
export interface NavigationSkeletonProps {
  /** Number of items */
  items?: number
  /** Additional class names */
  className?: string
}

function NavigationSkeleton({
  items = 5,
  className,
}: NavigationSkeletonProps) {
  return (
    <div
      className={cn('flex gap-6', className)}
      role="status"
      aria-label="Loading navigation..."
    >
      {Array.from({ length: items }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-4 w-16"
        />
      ))}
    </div>
  )
}

/**
 * Page Skeleton
 *
 * Full page loading skeleton with hero and content sections
 */
function PageSkeleton() {
  return (
    <div className="min-h-screen" role="status" aria-label="Loading page...">
      {/* Hero section */}
      <div className="bg-navy/5 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <HeadingSkeleton size="h1" width="3/4" className="mx-auto" />
          <TextSkeleton lines={2} lineHeight="lg" className="max-w-2xl mx-auto" />
          <div className="flex justify-center gap-4 pt-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <HeadingSkeleton size="h2" width="1/2" className="mx-auto mb-4" />
            <TextSkeleton lines={1} className="max-w-xl mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Calculator Skeleton
 *
 * For loading calculator/tool interfaces
 */
function CalculatorSkeleton() {
  return (
    <div className="space-y-8" role="status" aria-label="Loading calculator...">
      {/* Input section */}
      <div className="bg-white rounded-sm shadow-card p-6 space-y-6">
        <HeadingSkeleton size="h3" width="1/2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
        <Skeleton className="h-12 w-40" />
      </div>

      {/* Results section */}
      <div className="bg-white rounded-sm shadow-card p-6 space-y-6">
        <HeadingSkeleton size="h3" width="1/3" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Lesson Skeleton
 *
 * For loading lesson/article content
 */
function LessonSkeleton() {
  return (
    <div className="max-w-4xl mx-auto" role="status" aria-label="Loading lesson...">
      {/* Header */}
      <div className="mb-8 space-y-4">
        <Skeleton className="h-5 w-32" /> {/* Breadcrumb */}
        <HeadingSkeleton size="h1" width="full" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <TextSkeleton lines={4} lineHeight="lg" />
        <ImageSkeleton aspectRatio="16/9" />
        <TextSkeleton lines={5} lineHeight="lg" />
        <div className="bg-gold/10 p-6 rounded-sm">
          <HeadingSkeleton size="h4" width="1/2" className="mb-4" />
          <TextSkeleton lines={3} lineHeight="md" />
        </div>
        <TextSkeleton lines={4} lineHeight="lg" />
      </div>
    </div>
  )
}

export {
  Skeleton,
  TextSkeleton,
  HeadingSkeleton,
  ImageSkeleton,
  CardSkeleton,
  BlogCardSkeleton,
  FeatureCardSkeleton,
  StatCardSkeleton,
  ProfileSkeleton,
  TableRowSkeleton,
  NavigationSkeleton,
  PageSkeleton,
  CalculatorSkeleton,
  LessonSkeleton,
}
