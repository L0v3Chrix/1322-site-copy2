"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"
import { Calendar, Download, Copy } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ThankYouPage() {
  const { toast } = useToast()
  const inviteLink = "https://example.com/webinar-invite" // Replace with actual link

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink)
    toast({
      title: "Link Copied!",
      description: "The invite link has been copied to your clipboard.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-soft-cream text-deep-navy">
      <header className="container mx-auto px-4 py-2 md:px-6">
        <div className="flex justify-center">
          <Logo />
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
          <CardContent className="p-6 md:p-8 text-center space-y-6">
            <div className="aspect-video w-full bg-gray-300 rounded-md flex items-center justify-center mb-6">
              <span className="text-gray-500">[THANK_YOU_VIDEO_PLACEHOLDER]</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">You’re Registered—Here’s What Happens Next</h2>
            <div className="text-left space-y-6 border-t border-b border-gray-200 py-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-navy text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg">Add to Calendar</h3>
                  <p className="text-deep-navy/80">Don't miss out. Add the event to your calendar with one click.</p>
                  <a
                    href="/path-to-your-ics-file.ics"
                    download
                    className="inline-flex items-center gap-2 text-harvest-gold font-bold mt-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>[ICS_LINK]</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-navy text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg">Download the Legacy Prep Worksheet</h3>
                  <p className="text-deep-navy/80">Get a head start with our preparatory worksheet.</p>
                  <a
                    href="/path-to-your-pdf-file.pdf"
                    download
                    className="inline-flex items-center gap-2 text-harvest-gold font-bold mt-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>[PDF_LINK]</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-navy text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg">Invite a Friend</h3>
                  <p className="text-deep-navy/80">
                    Legacy is better built together. Share this with someone who needs it.
                  </p>
                  <Button
                    variant="outline"
                    onClick={copyToClipboard}
                    className="mt-2 gap-2 border-harvest-gold text-harvest-gold hover:bg-harvest-gold/10 hover:text-harvest-gold bg-transparent"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy Invite Link</span>
                  </Button>
                </div>
              </div>
            </div>
            <Link href="/schedule">
              <Button
                size="lg"
                className="w-full max-w-md bg-harvest-gold text-deep-navy font-bold text-lg py-6 hover:bg-harvest-gold/90"
              >
                Optional: Book My Discovery Call
              </Button>
            </Link>
          </CardContent>
        </Card>
        <div className="mt-12 text-center">
          <p className="font-playfair text-2xl italic text-deep-navy/90">“Control Your Capital. Build Your Legacy.”</p>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
