"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/context/modal-context"
import { VideoProvider } from "@/context/video-context"
import ContactFormModal from "@/components/contact-form-modal"
import { useModal } from "@/context/modal-context"
import MotionConfigWrapper from "@/components/motion-config"
import ConditionalLayout from "@/components/conditional-layout"

const inter = Inter({ subsets: ["latin"] })

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F0E6]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ModalProvider>
            <VideoProvider>
              <MotionConfigWrapper>
                <ConditionalLayout>{children}</ConditionalLayout>
                <ContactFormModalWrapper />
              </MotionConfigWrapper>
            </VideoProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
