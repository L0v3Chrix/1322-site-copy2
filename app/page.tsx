import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, RotateCw, FileSearch, Users, Puzzle, Check } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"

export default function WebinarRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-soft-cream text-deep-navy">
      <header className="container mx-auto px-4 py-2 md:px-6">
        <div className="flex justify-center">
          <Logo />
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4 md:px-6 lg:py-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="aspect-video w-full bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-gray-500">[VIDEO_PLACEHOLDER]</span>
              </div>
              <h1 className="font-playfair text-3xl font-bold leading-tight md:text-4xl">
                Retirement Was Never the Goal.
                <br />
                Legacy Is.
              </h1>
              <p className="max-w-[60ch] text-lg text-deep-navy/90">
                Stop guessing, start aligning. Join our free 60-minute masterclass to secure income, reclaim capital,
                and build a legacy that endures.
              </p>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-playfair text-2xl font-bold">What You'll Learn</h2>
                  <ul className="space-y-4 text-deep-navy/90">
                    <li className="flex items-start gap-4">
                      <Shield className="h-6 w-6 flex-shrink-0 text-harvest-gold mt-1" />
                      <span>
                        <span className="font-bold">The 5-Minute Shield Check</span> – stress-test your income plan.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <RotateCw className="h-6 w-6 flex-shrink-0 text-harvest-gold mt-1" />
                      <span>
                        <span className="font-bold">The Capital-Control Flywheel</span> – reclaim interest, fees & taxes
                        you're leaking today.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <FileSearch className="h-6 w-6 flex-shrink-0 text-harvest-gold mt-1" />
                      <span>
                        <span className="font-bold">The Legacy Litmus</span> – a single question to reveal hidden gaps.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Users className="h-6 w-6 flex-shrink-0 text-harvest-gold mt-1" />
                      <span>
                        <span className="font-bold">The One-Table Advantage</span> – coordinate tax, legal & banking
                        decisions without advisor ping-pong.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
                <Puzzle className="h-6 w-6 text-harvest-gold" />
                <p className="font-semibold">All your professionals. One table. One strategy.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card className="bg-deep-navy text-white rounded-lg shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-center">Next Live Webinar:</h2>
                    <p className="text-center text-white/80">Thursday at 7:00 p.m. CST</p>
                  </div>
                  <CountdownTimer />
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="font-playfair text-lg">
                          First Name*
                        </Label>
                        <Input id="first-name" placeholder="First name" className="bg-soft-cream/90 text-deep-navy" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="font-playfair text-lg">
                          Last Name*
                        </Label>
                        <Input id="last-name" placeholder="Last name" className="bg-soft-cream/90 text-deep-navy" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-playfair text-lg">
                        Email Address*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-soft-cream/90 text-deep-navy"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-playfair text-lg">
                        Phone Number*
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone"
                        className="bg-soft-cream/90 text-deep-navy"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-harvest-gold text-deep-navy font-bold text-lg py-6 hover:bg-harvest-gold/90"
                    >
                      Reserve My Spot
                    </Button>
                  </form>
                  <p className="text-xs text-center text-white/60">
                    By registering, you agree to receive communications about this and future events.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-playfair text-2xl font-bold">Is This You?</h2>
                  <ul className="space-y-3 text-deep-navy/90">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-1" />
                      <span>You've built wealth but want alignment, not fragmentation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-1" />
                      <span>You juggle aging parents & growing kids—the sandwich generation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-1" />
                      <span>You're tired of conflicting advice—you want one clear playbook.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-1" />
                      <span>You care about impact more than hype.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
