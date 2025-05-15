"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type VideoState = "open" | "minimized" | "closed"

type VideoContextType = {
  videoState: VideoState
  openVideo: () => void
  minimizeVideo: () => void
  closeVideo: () => void
  hasBeenSeen: boolean
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: ReactNode }) {
  // Initialize state safely for SSR
  const [videoState, setVideoState] = useState<VideoState>("closed")
  const [hasBeenSeen, setHasBeenSeen] = useState(false)

  // Auto-open the video when the page loads, but only once
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      try {
        // Check if we've already shown the video in this session
        const hasSeenVideo = sessionStorage.getItem("hasSeenVideo") === "true"

        // Check if we're on a mobile device
        const isMobile = window.innerWidth < 768

        if (hasSeenVideo) {
          setHasBeenSeen(true)
          // On mobile, keep it minimized by default after seen once
          setVideoState(isMobile ? "minimized" : "minimized")
          return
        }

        const timer = setTimeout(() => {
          // On first visit, open the video on desktop, but keep minimized on mobile
          setVideoState(isMobile ? "minimized" : "open")
          setHasBeenSeen(true)
          // Store in session storage to remember during this session
          sessionStorage.setItem("hasSeenVideo", "true")
        }, 2000) // Delay opening by 2 seconds

        return () => clearTimeout(timer)
      } catch (e) {
        // If there's any error with storage or timers, just continue without showing the video
        console.error("Error in video context:", e)
      }
    }
  }, [])

  const openVideo = () => setVideoState("open")
  const minimizeVideo = () => setVideoState("minimized")
  // Keep closeVideo for compatibility but make it minimize instead
  const closeVideo = () => setVideoState("minimized")

  return (
    <VideoContext.Provider
      value={{
        videoState,
        openVideo,
        minimizeVideo,
        closeVideo,
        hasBeenSeen,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo() {
  const context = useContext(VideoContext)
  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider")
  }
  return context
}
