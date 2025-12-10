'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Forgot Password Component
 *
 * Placeholder component for password reset flow.
 * Includes email input, success state, and back to login navigation.
 */

export interface ForgotPasswordFormProps {
  /** Callback when form is submitted */
  onSubmit?: (email: string) => Promise<void>
  /** Whether the form is currently submitting */
  isLoading?: boolean
  /** Error message to display */
  error?: string
  /** Additional class names */
  className?: string
}

export function ForgotPasswordForm({
  onSubmit,
  isLoading = false,
  error,
  className,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = React.useState('')
  const [localError, setLocalError] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError('')

    if (!email) {
      setLocalError('Please enter your email address')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setLocalError('Please enter a valid email address')
      return
    }

    if (onSubmit) {
      try {
        await onSubmit(email)
        setIsSubmitted(true)
      } catch (err) {
        setLocalError('An error occurred. Please try again.')
      }
    } else {
      // Demo mode - just show success
      setIsSubmitted(true)
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
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: -20 }}
            variants={staggerContainer}
          >
            {/* Back Link */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm text-navy/70 hover:text-gold transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to login
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-heading text-3xl text-navy mb-2">Forgot Password?</h1>
              <p className="text-navy/70">
                No worries! Enter your email and we&apos;ll send you reset instructions.
              </p>
            </motion.div>

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
                <label htmlFor="reset-email" className="block text-sm font-medium text-navy mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                  <input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 border border-navy/20 rounded-sm bg-white text-navy placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
                    disabled={isLoading}
                    autoComplete="email"
                  />
                </div>
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
                    Sending...
                  </>
                ) : (
                  <>
                    Send Reset Link
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-olive/10 flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-olive" />
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-heading text-3xl text-navy mb-2">Check Your Email</h1>
              <p className="text-navy/70 mb-2">
                We&apos;ve sent password reset instructions to:
              </p>
              <p className="text-navy font-medium mb-6">{email}</p>
              <p className="text-sm text-navy/60 mb-8">
                Didn&apos;t receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold hover:text-copper transition-colors"
                >
                  try again
                </button>
              </p>
            </motion.div>

            {/* Back to Login */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/login"
                className={cn(
                  'inline-flex items-center justify-center gap-2 py-3 px-8',
                  'border-2 border-navy text-navy font-medium tracking-wide uppercase text-sm',
                  'transition-all duration-300',
                  'hover:bg-navy hover:text-cream hover:scale-[1.02]',
                  'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2'
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/**
 * Reset Password Form Component
 *
 * Form for entering new password after clicking reset link
 */
export interface ResetPasswordFormProps {
  /** Token from the reset link */
  token?: string
  /** Callback when form is submitted */
  onSubmit?: (data: { token: string; password: string }) => Promise<void>
  /** Whether the form is currently submitting */
  isLoading?: boolean
  /** Error message to display */
  error?: string
  /** Additional class names */
  className?: string
}

export function ResetPasswordForm({
  token = '',
  onSubmit,
  isLoading = false,
  error,
  className,
}: ResetPasswordFormProps) {
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [localError, setLocalError] = React.useState('')
  const [isSuccess, setIsSuccess] = React.useState(false)

  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError('')

    if (!password || !confirmPassword) {
      setLocalError('Please fill in all fields')
      return
    }

    if (password.length < 8) {
      setLocalError('Password must be at least 8 characters')
      return
    }

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match')
      return
    }

    if (onSubmit) {
      try {
        await onSubmit({ token, password })
        setIsSuccess(true)
      } catch (err) {
        setLocalError('An error occurred. Please try again.')
      }
    } else {
      setIsSuccess(true)
    }
  }

  const displayError = error || localError

  if (isSuccess) {
    return (
      <motion.div
        className={cn('w-full max-w-md mx-auto text-center', className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-olive/10 flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-olive" />
        </motion.div>
        <h1 className="font-heading text-3xl text-navy mb-2">Password Reset!</h1>
        <p className="text-navy/70 mb-8">
          Your password has been successfully reset. You can now sign in with your new password.
        </p>
        <Link
          href="/login"
          className={cn(
            'inline-flex items-center justify-center gap-2 py-3 px-8',
            'bg-gold text-navy font-medium tracking-wide uppercase text-sm',
            'transition-all duration-300',
            'hover:bg-gold/90 hover:scale-[1.02]',
            'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2'
          )}
        >
          Sign In
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn('w-full max-w-md mx-auto', className)}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <h1 className="font-heading text-3xl text-navy mb-2">Reset Your Password</h1>
        <p className="text-navy/70">
          Enter your new password below
        </p>
      </motion.div>

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
        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-navy mb-2">
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="confirm-new-password" className="block text-sm font-medium text-navy mb-2">
            Confirm New Password
          </label>
          <input
            id="confirm-new-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className={cn(
              'w-full px-4 py-3 border rounded-sm bg-white text-navy placeholder:text-navy/40 focus:ring-1 focus:outline-none transition-colors',
              confirmPassword && !passwordsMatch
                ? 'border-copper focus:border-copper focus:ring-copper'
                : passwordsMatch
                ? 'border-olive focus:border-olive focus:ring-olive'
                : 'border-navy/20 focus:border-gold focus:ring-gold'
            )}
            disabled={isLoading}
          />
        </div>

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
              Resetting...
            </>
          ) : (
            <>
              Reset Password
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default ForgotPasswordForm
