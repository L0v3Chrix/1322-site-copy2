import { Shield, Heart, BookOpen, Users, Star } from "lucide-react"

const Values = () => {
  const values = [
    {
      title: "Faithful Stewardship",
      description: "We believe wealth is a blessing to be stewarded with wisdom and purpose, not merely accumulated.",
      icon: Shield,
    },
    {
      title: "Client Empowerment",
      description: "We equip families to take control of their capital and lead their own financial future.",
      icon: Star,
    },
    {
      title: "Boutique Expertise",
      description: "We provide personalized, high-touch service tailored to each family's unique legacy vision.",
      icon: BookOpen,
    },
    {
      title: "Legacy First",
      description: "We focus on multi-generational impact, not just short-term financial gains.",
      icon: Users,
    },
    {
      title: "Authentic Relationships",
      description: "We build lasting partnerships based on trust, transparency, and shared values.",
      icon: Heart,
    },
  ]

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Values</h2>
          <p className="text-xl max-w-3xl mx-auto text-navy/80">
            These core pillars guide everything we do at 1322 Legacy Strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <div
                key={index}
                className="bg-cream/50 p-8 rounded-lg border border-navy/10 shadow-sm flex flex-col h-full"
              >
                <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-copper" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-navy">{value.title}</h3>
                <p className="text-navy/80">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Values
