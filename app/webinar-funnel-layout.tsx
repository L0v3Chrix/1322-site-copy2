"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/context/modal-context"
import { VideoProvider } from "@/context/video-context"
import ContactFormModal from "@/components/contact-form-modal"
import { useModal } from "@/context/modal-context"
import MotionConfigWrapper from "@/components/motion-config"
import MinimalFooter from "@/components/minimal-footer"

export default function WebinarFunnelLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5F0E6]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ModalProvider>
            <VideoProvider>
              <MotionConfigWrapper>
                <div className="flex flex-col min-h-screen">
                  <main className="flex-grow">{children}</main>
                  <MinimalFooter />
                </div>
                <ContactFormModalWrapper />
              </MotionConfigWrapper>
            </VideoProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

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
