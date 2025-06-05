import type { Metadata } from "next"
import TermsAndConditionsClientPage from "./TermsAndConditionsClientPage"

export const metadata: Metadata = {
  title: "Terms & Conditions | 1322 Legacy Strategies",
  description: "Terms & Conditions for 1322 Legacy Strategies, LLC.",
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClientPage />
}
