"use client"

import type React from "react"

import { useState } from "react"
import { scheduleCall } from "../actions/schedule-action"
import Link from "next/link"

export default function ScheduleCallPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  // Sample available time slots
  const availableTimes = [
    { id: "1", day: "Monday", date: "May 20", times: ["9:00 AM", "11:30 AM", "2:00 PM"] },
    { id: "2", day: "Tuesday", date: "May 21", times: ["10:00 AM", "1:00 PM", "4:30 PM"] },
    { id: "3", day: "Wednesday", date: "May 22", times: ["9:30 AM", "12:00 PM", "3:30 PM"] },
    { id: "4", day: "Thursday", date: "May 23", times: ["11:00 AM", "2:30 PM", "4:00 PM"] },
  ]

  const [selectedDay, setSelectedDay] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    preferredPhone: "",
    questions: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      // Find the selected day object
      const dayObj = availableTimes.find((day) => day.id === selectedDay)
      if (!dayObj || !selectedTime) {
        setResult({
          success: false,
          message: "Please select a day and time for your call.",
        })
        setIsSubmitting(false)
        return
      }

      const formDataToSend = new FormData()
      formDataToSend.append("day", dayObj.day)
      formDataToSend.append("date", dayObj.date)
      formDataToSend.append("time", selectedTime)
      formDataToSend.append("preferredPhone", formData.preferredPhone)
      formDataToSend.append("questions", formData.questions)

      const result = await scheduleCall(formDataToSend)
      setResult(result)

      if (result.success) {
        setIsScheduled(true)
      }
    } catch (error) {
      console.error("Error scheduling call:", error)
      setResult({
        success: false,
        message: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isScheduled) {
    return (
      <div className="min-h-screen bg-[#F5F0E6] pt-20 pb-16 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-navy">Your Call is Scheduled!</h1>

            <p className="text-lg mb-6">Your one-on-one legacy session with Brad has been confirmed for:</p>

            <div className="bg-navy/5 p-6 rounded-lg mb-8">
              <div className="text-xl font-bold text-navy">
                {availableTimes.find((day) => day.id === selectedDay)?.day},{" "}
                {availableTimes.find((day) => day.id === selectedDay)?.date}
              </div>
              <div className="text-2xl font-bold text-copper mt-2">{selectedTime} CST</div>
            </div>

            <p className="mb-6">
              You'll receive a calendar invitation and confirmation email shortly. Brad is looking forward to speaking
              with you!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded font-medium transition-colors"
              >
                Return to Homepage
              </Link>
              <Link
                href="/webinar"
                className="bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-3 px-6 rounded font-medium transition-colors"
              >
                Back to Webinar
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Schedule Your One-on-One Legacy Session</h1>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            Select a time that works for you to speak directly with Brad about your legacy goals.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Calendar/Time Selection - 3 columns */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 text-navy">Select a Day & Time</h2>

            {result && (
              <div
                className={`p-4 mb-6 rounded ${
                  result.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {result.message}
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-medium mb-3 text-navy">Available Days:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {availableTimes.map((day) => (
                  <button
                    key={day.id}
                    type="button"
                    className={`p-3 border rounded-md text-center transition-colors ${
                      selectedDay === day.id ? "bg-navy text-white border-navy" : "border-gray-300 hover:border-navy"
                    }`}
                    onClick={() => {
                      setSelectedDay(day.id)
                      setSelectedTime("")
                    }}
                  >
                    <div className="font-bold">{day.day}</div>
                    <div className="text-sm">{day.date}</div>
                  </button>
                ))}
              </div>
            </div>

            {selectedDay && (
              <div>
                <h3 className="font-medium mb-3 text-navy">Available Times (CST):</h3>
                <div className="grid grid-cols-3 gap-3">
                  {availableTimes
                    .find((day) => day.id === selectedDay)
                    ?.times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`p-3 border rounded-md text-center transition-colors ${
                          selectedTime === time ? "bg-navy text-white border-navy" : "border-gray-300 hover:border-navy"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Form - 2 columns */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 text-navy">Additional Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="preferredPhone" className="block mb-2 font-medium text-navy">
                  Best Phone Number for the Call*
                </label>
                <input
                  id="preferredPhone"
                  name="preferredPhone"
                  type="tel"
                  value={formData.preferredPhone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="questions" className="block mb-2 font-medium text-navy">
                  Any specific questions or topics? (Optional)
                </label>
                <textarea
                  id="questions"
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Share any specific questions you'd like Brad to address during your call..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !selectedDay || !selectedTime}
                className={`w-full py-3 rounded font-medium transition-colors ${
                  !selectedDay || !selectedTime
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-copper hover:bg-copper/90 text-white"
                }`}
              >
                {isSubmitting ? "Scheduling..." : "Confirm Appointment"}
              </button>

              <p className="text-xs text-navy/60 text-center">
                You'll receive a calendar invitation and confirmation email after scheduling.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-navy/80 mb-4">Need to change your qualification information?</p>
          <Link href="/qualify/virtual" className="text-copper hover:text-copper/80 font-medium">
            Return to qualification page
          </Link>
        </div>
      </div>
    </div>
  )
}
