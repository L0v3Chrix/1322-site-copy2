"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Minimize2, Play, Volume2, X } from "lucide-react"
import { useVideo } from "@/context/video-context"
import OptimizedImage from "./optimized-image"

export default function FloatingVideoPlayer() {
  const { videoState, openVideo, minimizeVideo } = useVideo()
  const [isMuted] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  // This is a placeholder function until a real video is implemented
  const handlePlayClick = () => {
    // In a real implementation, this would play the video
    console.log("Play button clicked - video would play here")
    // For now, we'll just show a message
    alert("Video playback will be available when a real video is added.")
  }

  if (videoState === "closed") {
    return null
  }

  return (
    <AnimatePresence>
      {videoState === "open" && (
        <motion.div
          className="fixed z-50 bg-navy/90 rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          style={{
            position: "fixed",
            right: "1rem",
            bottom: "1rem",
            width: "min(90vw, 440px)",
            maxWidth: "100%",
          }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Close button in top-right corner */}
            <button
              onClick={minimizeVideo}
              className="absolute top-2 right-2 z-10 bg-navy/70 hover:bg-navy text-cream rounded-full p-1.5 transition-colors"
              aria-label="Close video"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Video Placeholder */}
            <div ref={videoRef} className="relative aspect-video bg-navy overflow-hidden w-full">
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <OptimizedImage
                    src="/images/1322-welcome.png"
                    alt="Welcome to 1322 Legacy Strategies"
                    type="medium"
                    fill
                    className="object-contain object-top scale-[1.3] -translate-y-[5%]"
                    priority
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                  onClick={handlePlayClick}
                >
                  <div className="bg-cream/90 rounded-full p-3 hover:bg-cream transition-colors">
                    <Play className="h-8 w-8 text-navy" />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-3 sm:p-4 bg-navy text-cream">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-base sm:text-lg">A Message from Brad</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={minimizeVideo}
                    className="text-cream/80 hover:text-cream transition-colors"
                    aria-label="Minimize video"
                  >
                    <Minimize2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cream/80 mb-2 sm:mb-3">
                Welcome to 13:22 Legacy Strategies. I'd like to share how we can help you build a legacy that lasts for
                generations.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <button
                    onClick={handlePlayClick}
                    className="text-cream/80 hover:text-cream transition-colors"
                    aria-label="Play"
                  >
                    <Play className="h-5 w-5" />
                  </button>
                  <button
                    className="text-cream/80 hover:text-cream transition-colors opacity-50 cursor-not-allowed"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    disabled
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {videoState === "minimized" && (
        <motion.div
          className="fixed z-50 bottom-6 right-6 bg-navy rounded-full shadow-lg cursor-pointer overflow-hidden"
          style={{ maxWidth: "100%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={openVideo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
              <Play className="h-6 w-6 text-cream" />
            </div>
            <OptimizedImage
              src="/images/brad-headshot.jpeg"
              alt="Brad Raschke"
              type="profile"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
