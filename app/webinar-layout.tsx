"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/context/modal-context"
import { VideoProvider } from "@/context/video-context"
import ContactFormModal from "@/components/contact-form-modal"
import { useModal } from "@/context/modal-context"
import MotionConfigWrapper from "@/components/motion-config"
import MinimalFooter from "@/components/minimal-footer"

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

export default function WebinarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <MotionConfigWrapper>
        <VideoProvider>
          <ModalProvider>
            <div className="flex flex-col min-h-screen">
              {/* No header here */}
              <main className="flex-grow">{children}</main>
              <MinimalFooter />
            </div>
            <ContactFormModalWrapper />
          </ModalProvider>
        </VideoProvider>
      </MotionConfigWrapper>
    </ThemeProvider>
  )
}
