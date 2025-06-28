import type { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="bg-[#F5F0E6] min-h-screen">{children}</div>
}
