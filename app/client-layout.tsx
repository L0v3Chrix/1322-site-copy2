"use client"

import type React from "react"
import Layout from "@/components/layout"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/context/modal-context"
import { VideoProvider } from "@/context/video-context"
import ContactFormModal from "@/components/contact-form-modal"
import FloatingVideoPlayer from "@/components/floating-video-player"
import { useModal } from "@/context/modal-context"
import { usePathname } from "next/navigation"
import MotionConfigWrapper from "@/components/motion-config"

function ContactFormModalWrapper() {
  const { isContactModalOpen, closeContactModal, modalTitle, modalDescription } = useModal()

  return (
    <ContactFormModal
      isOpen={isContactModalOpen}
      onClose={closeContactModal}
      title={modalTitle}
      description={modalDescription}
    />
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isBlogPage = pathname.startsWith("/blog")

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <MotionConfigWrapper>
        <VideoProvider>
          <ModalProvider>
            <Layout isBlogPage={isBlogPage}>{children}</Layout>
            <ContactFormModalWrapper />
            <FloatingVideoPlayer />
          </ModalProvider>
        </VideoProvider>
      </MotionConfigWrapper>
    </ThemeProvider>
  )
}
