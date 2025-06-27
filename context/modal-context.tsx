"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ModalContextType = {
  isContactModalOpen: boolean
  openContactModal: (title?: string, description?: string) => void
  closeContactModal: () => void
  modalTitle: string
  modalDescription: string
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("Begin Your Stewardship Journey")
  const [modalDescription, setModalDescription] = useState("We would be honored to walk alongside you.")

  const openContactModal = (
    title = "Begin Your Stewardship Journey",
    description = "We would be honored to walk alongside you.",
  ) => {
    setModalTitle(title)
    setModalDescription(description)
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        modalTitle,
        modalDescription,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
