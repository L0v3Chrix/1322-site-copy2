'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, AlertCircle, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

/**
 * 1322 Legacy Strategies - Register Form Component
 *
 * Placeholder component for future user registration.
 * Includes name, email, password fields with validation feedback.
 */

export interface RegisterFormProps {
  /** Callback when form is submitted */
  onSubmit?: (data: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) => Promise<void>
  /** Whether the form is currently submitting */
  isLoading?: boolean
  /** Error message to display */
  error?: string
  /** Additional class names */
  className?: string
}

interface PasswordStrength {
  score: number
  label: string
  color: string
}

const getPasswordStrength = (password: string): PasswordStrength => {
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password)) score++
  if (/[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  if (score <= 2) return { score, label: 'Weak', color: 'bg-copper' }
  if (score <= 4) return { score, label: 'Fair', color: 'bg-gold' }
  return { score, label: 'Strong', color: 'bg-olive' }
}

const passwordRequirements = [
  { label: 'At least 8 characters', test: (p: string) => p.length >= 8 },
  { label: 'One uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'One lowercase letter', test: (p: string) => /[a-z]/.test(p) },
  { label: 'One number', test: (p: string) => /[0-9]/.test(p) },
]

export function RegisterForm({
  onSubmit,
  isLoading = false,
  error,
  className,
}: RegisterFormProps) {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [localError, setLocalError] = React.useState('')
  const [acceptTerms, setAcceptTerms] = React.useState(false)

  const passwordStrength = getPasswordStrength(password)
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError('')

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setLocalError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match')
      return
    }

    if (passwordStrength.score < 3) {
      setLocalError('Please choose a stronger password')
      return
    }

    if (!acceptTerms) {
      setLocalError('Please accept the terms and conditions')
      return
    }

    if (onSubmit) {
      try {
        await onSubmit({ firstName, lastName, email, password })
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
        <h1 className="font-heading text-3xl text-navy mb-2">Create Your Account</h1>
        <p className="text-navy/70">
          Start your journey to financial independence
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
      <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-5">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className="w-full pl-12 pr-4 py-3 border border-navy/20 rounded-sm bg-white text-navy placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
                disabled={isLoading}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="w-full px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors"
              disabled={isLoading}
            />
          </div>
        </div>

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
              placeholder="Create a strong password"
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

          {/* Password Strength Indicator */}
          {password && (
            <div className="mt-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-1.5 bg-navy/10 rounded-full overflow-hidden">
                  <motion.div
                    className={cn('h-full rounded-full', passwordStrength.color)}
                    initial={{ width: 0 }}
                    animate={{ width: `${(passwordStrength.score / 6) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className={cn('text-xs font-medium', {
                  'text-copper': passwordStrength.label === 'Weak',
                  'text-gold': passwordStrength.label === 'Fair',
                  'text-olive': passwordStrength.label === 'Strong',
                })}>
                  {passwordStrength.label}
                </span>
              </div>

              {/* Password Requirements */}
              <ul className="space-y-1">
                {passwordRequirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs">
                    {req.test(password) ? (
                      <Check className="w-3.5 h-3.5 text-olive" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-navy/30" />
                    )}
                    <span className={req.test(password) ? 'text-olive' : 'text-navy/50'}>
                      {req.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-navy mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className={cn(
                'w-full pl-12 pr-12 py-3 border rounded-sm bg-white text-navy placeholder:text-navy/40 focus:ring-1 focus:outline-none transition-colors',
                confirmPassword && !passwordsMatch
                  ? 'border-copper focus:border-copper focus:ring-copper'
                  : passwordsMatch
                  ? 'border-olive focus:border-olive focus:ring-olive'
                  : 'border-navy/20 focus:border-gold focus:ring-gold'
              )}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy transition-colors"
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {confirmPassword && !passwordsMatch && (
            <p className="mt-1 text-xs text-copper">Passwords do not match</p>
          )}
          {passwordsMatch && (
            <p className="mt-1 text-xs text-olive flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Passwords match
            </p>
          )}
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="w-4 h-4 mt-0.5 border-navy/20 rounded-sm text-gold focus:ring-gold"
          />
          <span className="text-sm text-navy/70">
            I agree to the{' '}
            <Link href="/terms" className="text-gold hover:text-copper transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-gold hover:text-copper transition-colors">
              Privacy Policy
            </Link>
          </span>
        </label>

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
              Creating account...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.form>

      {/* Sign In Link */}
      <motion.p variants={fadeInUp} className="text-center mt-8 text-sm text-navy/70">
        Already have an account?{' '}
        <Link href="/login" className="text-gold hover:text-copper font-medium transition-colors">
          Sign in instead
        </Link>
      </motion.p>
    </motion.div>
  )
}

export default RegisterForm
