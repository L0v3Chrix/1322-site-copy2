"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Minimize2, Play, Volume2, VolumeX, X } from "lucide-react"
import { useVideo } from "@/context/video-context"
import OptimizedImage from "./optimized-image"

export default function FloatingVideoPlayer() {
  const { videoState, openVideo, minimizeVideo } = useVideo()
  const [isMuted, setIsMuted] = useState(false) // Start unmuted as per user request and click interaction
  const iframeRef = useRef<HTMLIFrameElement>(null) // Ref for the iframe

  const toggleMute = () => {
    if (iframeRef.current) {
      iframeRef.current.muted = !iframeRef.current.muted
      setIsMuted(iframeRef.current.muted)
    }
  }

  if (videoState === "closed") {
    return null
  }

  // YouTube embed URL with parameters for autoplay, controls, and unmuted
  // The 'mute=0' parameter attempts to unmute the video.
  // Autoplay with sound is generally allowed if triggered by a user gesture (like clicking the minimized icon).
  const youtubeEmbedSrc =
    "https://www.youtube.com/embed/apZKlq9S-NI?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&mute=0"

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
            width: "min(80vw, 320px)",
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
              <X className="h-3 w-3" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-navy overflow-hidden w-full">
              <iframe
                ref={iframeRef}
                width="100%"
                height="100%"
                src={youtubeEmbedSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Controls */}
            <div className="p-2 sm:p-3 bg-navy text-cream">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-sm">A Message from Brad</h3>
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

              <p className="text-xs text-cream/80 mb-2">
                Welcome to 13:22 Legacy Strategies. I'd like to share how we can help you build a legacy that lasts for
                generations.
              </p>

              <p className="text-xs text-cream/80 mb-2">
                <a
                  href="https://start.1322legacystrategies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gold transition-colors"
                >
                  Click here to start your path to stewardship
                </a>
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {/* Play button removed as video autoplays on open */}
                  <button
                    onClick={toggleMute}
                    className="text-cream/80 hover:text-cream transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
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
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
              <Play className="h-4 w-4 text-cream" />
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
