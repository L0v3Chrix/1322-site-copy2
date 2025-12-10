'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Bell,
  Search,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 1322 Legacy Strategies - Dashboard Layout Component
 *
 * Placeholder component for future user dashboard.
 * Includes sidebar navigation, header, and content area.
 */

export interface DashboardUser {
  id: string
  name: string
  email: string
  avatar?: string
  role?: 'member' | 'moderator' | 'admin'
}

export interface DashboardLayoutProps {
  /** Current user information */
  user?: DashboardUser
  /** Dashboard content */
  children: React.ReactNode
  /** Additional class names */
  className?: string
}

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
  badge?: number
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Courses', href: '/dashboard/courses', icon: BookOpen, badge: 3 },
  { label: 'Community', href: '/dashboard/community', icon: Users },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
  { label: 'Help Center', href: '/dashboard/help', icon: HelpCircle },
]

export function DashboardLayout({ user, children, className }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  return (
    <div className={cn('min-h-screen bg-cream', className)}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-64 bg-navy transform transition-transform duration-300',
          'lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-cream/10">
            <Link href="/" className="block">
              <span className="font-heading text-xl text-cream">1322</span>
              <span className="block text-xs text-cream/60 tracking-wider">LEGACY STRATEGIES</span>
            </Link>
          </div>

          {/* Close button (mobile) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 text-cream/60 hover:text-cream lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-sm transition-colors group',
                    isActive
                      ? 'bg-gold text-navy'
                      : 'text-cream/70 hover:text-cream hover:bg-cream/10'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className={cn(
                      'px-2 py-0.5 text-xs font-medium rounded-full',
                      isActive ? 'bg-navy/20 text-navy' : 'bg-gold/20 text-gold'
                    )}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className={cn(
                    'w-4 h-4 opacity-0 -translate-x-2 transition-all',
                    'group-hover:opacity-100 group-hover:translate-x-0'
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-cream/10">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream/10 overflow-hidden flex items-center justify-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-medium text-cream">{user.name.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-cream truncate">{user.name}</p>
                  <p className="text-xs text-cream/50 truncate">{user.email}</p>
                </div>
                <button
                  className="p-2 text-cream/50 hover:text-cream transition-colors"
                  aria-label="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="block w-full py-2 px-4 text-center text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-cream/95 backdrop-blur-sm border-b border-navy/10">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 text-navy lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-4 lg:mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                <input
                  type="search"
                  placeholder="Search courses, discussions..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-navy/10 rounded-sm text-sm placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="relative p-2 text-navy/60 hover:text-navy transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gold" />
              </button>

              {/* Mobile user avatar */}
              <div className="w-8 h-8 rounded-full bg-navy/10 overflow-hidden flex items-center justify-center lg:hidden">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user?.name || ''} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs font-medium text-navy">{user?.name?.charAt(0) || 'U'}</span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

/**
 * Dashboard Page Header Component
 */
export interface DashboardHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  breadcrumbs?: Array<{ label: string; href?: string }>
  className?: string
}

export function DashboardHeader({
  title,
  description,
  actions,
  breadcrumbs,
  className,
}: DashboardHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm text-navy/50 mb-4">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-navy">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl text-navy">{title}</h1>
          {description && (
            <p className="text-navy/70 mt-1">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Dashboard Stats Card Component
 */
export interface DashboardStatProps {
  label: string
  value: string | number
  change?: number
  icon?: React.ElementType
  className?: string
}

export function DashboardStat({ label, value, change, icon: Icon, className }: DashboardStatProps) {
  return (
    <motion.div
      className={cn('bg-white rounded-sm shadow-card p-6', className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(44, 62, 80, 0.15)' }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-navy/60 mb-1">{label}</p>
          <p className="text-3xl font-heading text-navy">{value}</p>
          {change !== undefined && (
            <p className={cn(
              'text-xs mt-2 flex items-center gap-1',
              change >= 0 ? 'text-olive' : 'text-copper'
            )}>
              <span>{change >= 0 ? '↑' : '↓'}</span>
              <span>{Math.abs(change)}% from last month</span>
            </p>
          )}
        </div>
        {Icon && (
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-gold" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

/**
 * Dashboard Section Component
 */
export interface DashboardSectionProps {
  title: string
  description?: string
  action?: {
    label: string
    href: string
  }
  children: React.ReactNode
  className?: string
}

export function DashboardSection({
  title,
  description,
  action,
  children,
  className,
}: DashboardSectionProps) {
  return (
    <section className={cn('mb-8', className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-heading text-xl text-navy">{title}</h2>
          {description && (
            <p className="text-sm text-navy/60 mt-1">{description}</p>
          )}
        </div>
        {action && (
          <Link
            href={action.href}
            className="text-sm text-gold hover:text-copper transition-colors flex items-center gap-1"
          >
            {action.label}
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}

export default DashboardLayout
