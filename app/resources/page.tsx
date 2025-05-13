import Link from "next/link"
import { ArrowRight, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ContactButton from "@/components/contact-button"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Family Legacy Journal Template",
      description: "Document your family's values, stories, and vision for future generations.",
      icon: FileText,
      link: "#",
    },
    {
      title: "Annual Stewardship Checklist",
      description: "A comprehensive guide to reviewing and refining your legacy strategy each year.",
      icon: FileText,
      link: "#",
    },
    {
      title: "Guide to Infinite Banking and Capital Control",
      description: "Learn the principles of becoming your own banker and taking control of your capital.",
      icon: FileText,
      link: "#",
    },
    {
      title: "Selected 1322 Blog Articles",
      description: "Curated insights on stewardship, legacy, and faithful financial leadership.",
      icon: FileText,
      link: "/blog",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight text-center">
              Empower Your Stewardship
            </h1>

            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center">
              Stewardship is leadership. Leadership requires wisdom.
            </p>

            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center">
              We equip you with resources that help you steward more faithfully:
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-navy/10">
                <CardHeader>
                  <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <resource.icon className="h-6 w-6 text-copper" />
                  </div>
                  <CardTitle className="text-xl font-bold text-navy">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-navy/70 text-base">{resource.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="text-copper border-copper hover:bg-copper/10">
                    <Link href={resource.link} className="inline-flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resource
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <ContactButton
              title="Access Stewardship Tools"
              description="Get the resources you need to steward your legacy faithfully."
              className="inline-flex items-center"
            >
              Access Stewardship Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  )
}
