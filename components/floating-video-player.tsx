"use client"

import { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import { useVideo } from "@/context/video-context"
import OptimizedImage from "./optimized-image"

export default function FloatingVideoPlayer() {
  const { videoState, openVideo, minimizeVideo } = useVideo()
  const videoRef = useRef<HTMLDivElement>(null)

  const videoId = "apZKlq9S-NI"
  const youtubeEmbedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&mute=1`

  if (videoState === "closed") {
    return null
  }

  return (
    <AnimatePresence>
      {videoState === "open" && (
        <motion.div
          className="fixed z-50 bg-navy/90 rounded-lg shadow-xl overflow-hidden"
          style={{
            position: "fixed",
            right: "1rem",
            bottom: "1rem",
            width: "min(80vw, 384px)", // Slightly wider for controls
            maxWidth: "100%",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <button
              onClick={minimizeVideo}
              className="absolute top-2 right-2 z-20 bg-black/30 hover:bg-black/60 text-cream rounded-full p-1.5 transition-colors"
              aria-label="Minimize video"
            >
              <X className="h-4 w-4" />
            </button>

            <div ref={videoRef} className="relative aspect-video bg-navy overflow-hidden w-full">
              <iframe
                src={youtubeEmbedSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>

            <div className="p-3 bg-navy text-cream">
              <h3 className="font-bold text-sm mb-2">A Message from Brad</h3>
              <p className="text-xs text-cream/80">
                Welcome to 13:22 Legacy Strategies. I'd like to share how we can help you build a legacy that lasts for
                generations.{" "}
                <a
                  href="https://start.1322legacystrategies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline font-semibold"
                >
                  Stewardship starts here.
                </a>
              </p>
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
