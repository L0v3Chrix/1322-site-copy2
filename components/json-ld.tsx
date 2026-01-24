// JSON-LD Schema Components for SEO

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.1322legacystrategies.com/#organization",
  name: "1322 Legacy Strategies",
  url: "https://www.1322legacystrategies.com",
  logo: "https://www.1322legacystrategies.com/images/1322-header-logo.png",
  description:
    "Infinite Banking education and implementation for Christian entrepreneurs earning $250K+. Learn how to become your own banker and build multi-generational wealth.",
  founder: {
    "@type": "Person",
    "@id": "https://www.1322legacystrategies.com/about#brad-raschke",
    name: "Brad Raschke",
  },
  areaServed: [
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Illinois" },
    { "@type": "State", name: "Wisconsin" },
  ],
  knowsAbout: [
    "Infinite Banking Concept",
    "Whole Life Insurance",
    "Family Banking",
    "Wealth Transfer",
    "Christian Financial Stewardship",
    "Generational Wealth",
  ],
  slogan: "Control Your Capital. Build Your Legacy.",
  foundingDate: "2020",
  sameAs: ["https://www.skool.com/ibc-academy-5448"],
}

// Person Schema for Brad Raschke
export const bradRaschkeSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.1322legacystrategies.com/about#brad-raschke",
  name: "Brad Raschke",
  jobTitle: "Authorized Infinite Banking Practitioner",
  description:
    "Founder of 1322 Legacy Strategies, helping Christian entrepreneurs build multi-generational wealth through the Infinite Banking Concept. Licensed insurance professional in Texas, Illinois, Wisconsin, and other states.",
  url: "https://www.1322legacystrategies.com/about",
  image: "https://www.1322legacystrategies.com/images/brad-raschke.jpg",
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.1322legacystrategies.com/#organization",
    name: "1322 Legacy Strategies",
  },
  knowsAbout: [
    "Infinite Banking Concept",
    "Whole Life Insurance",
    "IBC Policy Design",
    "Family Banking Systems",
    "Christian Financial Stewardship",
    "Generational Wealth Building",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Authorized Infinite Banking Practitioner Certification",
  },
  sameAs: ["https://www.skool.com/ibc-academy-5448"],
}

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.1322legacystrategies.com/#website",
  url: "https://www.1322legacystrategies.com",
  name: "1322 Legacy Strategies",
  description: "Infinite Banking education for Christian entrepreneurs",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.1322legacystrategies.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.1322legacystrategies.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

// Component to inject JSON-LD
export function JsonLd({ data }: { data: object | object[] }) {
  const jsonLdData = Array.isArray(data) ? data : [data]

  return (
    <>
      {jsonLdData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}

// Pre-configured schema bundles
export function OrganizationJsonLd() {
  return <JsonLd data={[organizationSchema, websiteSchema]} />
}

export function AboutPageJsonLd() {
  return <JsonLd data={[bradRaschkeSchema, organizationSchema]} />
}
