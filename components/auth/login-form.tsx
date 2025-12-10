'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Login Form Component
 *
 * Placeholder component for future authentication system.
 * Includes email/password fields, social login options, and forgot password link.
 */

export interface LoginFormProps {
  /** Callback when form is submitted */
  onSubmit?: (data: { email: string; password: string }) => Promise<void>
  /** Whether the form is currently submitting */
  isLoading?: boolean
  /** Error message to display */
  error?: string
  /** Success message after login */
  successMessage?: string
  /** Redirect URL after successful login */
  redirectUrl?: string
  /** Additional class names */
  className?: string
}

export function LoginForm({
  onSubmit,
  isLoading = false,
  error,
  successMessage,
  redirectUrl = '/dashboard',
  className,
}: LoginFormProps) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [localError, setLocalError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError('')

    if (!email || !password) {
      setLocalError('Please fill in all fields')
      return
    }

    if (onSubmit) {
      try {
        await onSubmit({ email, password })
      } catch (err) {
        setLocalError('An error occurred. Please try again.')
      }
    }
  }

  const displayError = error || localError

  return (
    <motion.div
      className={cn('w-full max-w-md mx-auto', className)}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <h1 className="font-heading text-3xl text-navy mb-2">Welcome Back</h1>
        <p className="text-navy/70">
          Sign in to continue your learning journey
        </p>
      </motion.div>

      {/* Success Message */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-olive/10 border border-olive/30 rounded-sm"
        >
          <p className="text-sm text-olive font-medium">{successMessage}</p>
        </motion.div>
      )}

      {/* Error Message */}
      {displayError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-copper/10 border border-copper/30 rounded-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
          <p className="text-sm text-copper">{displayError}</p>
        </motion.div>
      )}

      {/* Form */}
      <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-12 pr-4 py-3 border border-navy/20 rounded-sm bg-white text-navy placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-navy mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-3 border border-navy/20 rounded-sm bg-white text-navy placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 border-navy/20 rounded-sm text-gold focus:ring-gold"
            />
            <span className="text-sm text-navy/70">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-gold hover:text-copper transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className={cn(
            'w-full py-3 px-6 flex items-center justify-center gap-2',
            'bg-gold text-navy font-medium tracking-wide uppercase text-sm',
            'transition-all duration-300',
            'hover:bg-gold/90 hover:scale-[1.02]',
            'active:scale-[0.98]',
            'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
          )}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
        >
          {isLoading ? (
            <>
              <span className="w-5 h-5 border-2 border-navy/20 border-t-navy rounded-full animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.form>

      {/* Divider */}
      <motion.div variants={fadeInUp} className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-navy/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-cream text-navy/50">Or continue with</span>
        </div>
      </motion.div>

      {/* Social Login Options */}
      <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-3 px-4 border border-navy/20 rounded-sm bg-white hover:bg-navy/5 transition-colors"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-sm font-medium text-navy">Google</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-3 px-4 border border-navy/20 rounded-sm bg-white hover:bg-navy/5 transition-colors"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span className="text-sm font-medium text-navy">GitHub</span>
        </button>
      </motion.div>

      {/* Sign Up Link */}
      <motion.p variants={fadeInUp} className="text-center mt-8 text-sm text-navy/70">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-gold hover:text-copper font-medium transition-colors">
          Create one now
        </Link>
      </motion.p>
    </motion.div>
  )
}

export default LoginForm
