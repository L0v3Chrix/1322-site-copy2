"use client"

import { useState, useEffect } from "react"

const getNextThursdayCST = () => {
  const now = new Date()
  const today = now.getDay() // Sunday = 0, Thursday = 4
  const daysUntilThursday = (4 - today + 7) % 7

  const nextThursday = new Date(now)
  nextThursday.setDate(now.getDate() + daysUntilThursday)

  // Set time to 7 PM CST (UTC-5 during DST, UTC-6 standard). Let's use a fixed offset for simplicity.
  // Note: A robust solution would use a library like `date-fns-tz` to handle timezones correctly.
  nextThursday.setUTCHours(24, 0, 0, 0) // 7 PM CST is 1 AM next day UTC

  // If it's Thursday but past 7 PM, get next week's Thursday
  if (daysUntilThursday === 0 && now.getUTCHours() >= 24) {
    nextThursday.setDate(nextThursday.getDate() + 7)
  }

  return nextThursday
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = getNextThursdayCST()

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 text-center text-white">
      <div>
        <div className="font-playfair text-4xl">{timeLeft.days}</div>
        <div className="text-xs uppercase tracking-wider">Days</div>
      </div>
      <div>
        <div className="font-playfair text-4xl">{timeLeft.hours}</div>
        <div className="text-xs uppercase tracking-wider">Hours</div>
      </div>
      <div>
        <div className="font-playfair text-4xl">{timeLeft.minutes}</div>
        <div className="text-xs uppercase tracking-wider">Minutes</div>
      </div>
      <div>
        <div className="font-playfair text-4xl">{timeLeft.seconds}</div>
        <div className="text-xs uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  )
}
