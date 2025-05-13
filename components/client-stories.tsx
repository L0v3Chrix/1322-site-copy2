"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientStories() {
  const [activeTab, setActiveTab] = useState("story1")

  const stories = [
    {
      id: "story1",
      title: "Bryan & Carol: Downsizing without Downsides",
      subtitle: "Ages: 63",
      challenge:
        "Bryan and Carol wanted to sell their suburban house and move closer to their grandkids and a nearby golf course. In our discovery call they voiced two fears: taking on a new mortgage in retirement and shrinking their kids' inheritance.",
      solution: [
        {
          title: "Legacy Blueprint",
          content: "",
        },
        {
          title: "Stewardship in Action",
          content:
            'Instead of paying cash for the new lake-home or borrowing from a traditional lender, Bryan and Carol "borrowed" from their policy. Each "mortgage" payment they now make goes back into their own system, repaying the loan and earning dividends.',
        },
        {
          title: "Impact",
          content:
            "They enjoy a paid-off home by age 78, a projected six-figure tax-free dividend stream for travel, and a $6.6 million death benefit slated for their children and grandchildren—all without touching Wall Street or bankers.",
        },
      ],
      disclaimer:
        "*Illustrations are hypothetical, assume current dividend scales, and are not guarantees of future results.",
    },
    {
      id: "story2",
      title: 'David & Linda: Defusing the "Tax Time-Bomb"',
      subtitle: "Ages: 67 & 65",
      challenge:
        'David and Linda had nearly $1 million saved, but 85 percent sat in taxable accounts, leaving them anxious about three threats: longevity (outliving their money), taxes (ever-larger RMDs), and markets (another 2008 gut-punch). In our first conversation David called it "a ticking tax bomb."',
      solution: [
        {
          title: "Legacy Blueprint",
          content:
            "Our tax strategists mapped a 10-year withdrawal plan: each year we shifted about $80,000 out of the brokerage account while markets were healthy, paid the tax at today's known rates, and redirected the after-tax dollars—roughly $60,000—into a specially structured whole-life policy, their new Family Bank.",
        },
        {
          title: "Stewardship in Action",
          content:
            "• Liquidity Now: Cash value stayed accessible for emergencies or opportunities.\n• Tax Control Later: Growth and policy loans come out income-tax-free—no RMD shocks.\n• Longevity Buffer: A rising death benefit guarantees Linda—or their heirs—a multimillion-dollar, tax-free legacy even if they spend every liquid dollar while alive.",
        },
        {
          title: "Five-Year Impact",
          content:
            'Forty percent of the old "tax bomb" is already defused, their prepaid taxes now sit inside the policy\'s cash value, and projections show income lasting well past age 100—even under conservative assumptions. As David put it, "Tax season doesn\'t scare us anymore, and living to 100 sounds exciting—not expensive."',
        },
      ],
    },
  ]

  return (
    <section className="bg-cream py-16 md:py-24" id="client-stories">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Client Stories</h2>
          <p className="text-xl max-w-3xl mx-auto text-navy/80">Real families, real solutions, real impact.</p>
        </div>

        <Tabs defaultValue="story1" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="story1" className="text-lg py-3">
              Bryan & Carol
            </TabsTrigger>
            <TabsTrigger value="story2" className="text-lg py-3">
              David & Linda
            </TabsTrigger>
          </TabsList>

          {stories.map((story) => (
            <TabsContent key={story.id} value={story.id} className="mt-6">
              <motion.div
                className="bg-cream p-8 rounded-lg border border-navy/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-navy">{story.title}</h3>
                <p className="text-lg text-copper mb-6">{story.subtitle}</p>

                <div className="mb-8">
                  <p className="text-lg">{story.challenge}</p>
                </div>

                <div className="space-y-8">
                  {story.solution.map((step, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-bold mb-3 text-navy flex items-center">
                        <ChevronRight className="text-gold mr-2" />
                        {step.title}
                      </h4>
                      <div className="pl-8">
                        {step.content.split("\n").map((line, i) => (
                          <p key={i} className="mb-3">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {story.disclaimer && <p className="text-sm text-navy/60 italic mt-6">{story.disclaimer}</p>}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
