import type { Metadata } from "next"
import PrivacyPolicyClientPage from "./PrivacyPolicyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy | 1322 Legacy Strategies",
  description: "Privacy Policy for 1322 Legacy Strategies, LLC.",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />
}
