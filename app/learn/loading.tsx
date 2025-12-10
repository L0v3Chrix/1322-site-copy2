import {
  HeadingSkeleton,
  TextSkeleton,
  FeatureCardSkeleton,
  Skeleton,
} from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section Skeleton */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Skeleton className="h-5 w-40 mx-auto mb-6 !bg-cream/10" /> {/* Eyebrow */}
          <HeadingSkeleton size="h1" width="3/4" className="mx-auto mb-6 !bg-cream/10" />
          <TextSkeleton
            lines={2}
            lineHeight="lg"
            className="max-w-2xl mx-auto [&_div]:!bg-cream/10"
          />
        </div>
      </section>

      {/* Learning Tracks Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <HeadingSkeleton size="h2" width="1/2" className="mx-auto mb-4" />
            <TextSkeleton lines={1} className="max-w-xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-sm shadow-card p-8"
              >
                {/* Track number */}
                <Skeleton className="h-12 w-12 rounded-full mx-auto mb-6" />
                {/* Track title */}
                <HeadingSkeleton size="h3" width="3/4" className="mx-auto mb-4" />
                {/* Track description */}
                <TextSkeleton lines={3} lineHeight="sm" className="mb-6" />
                {/* Lessons list */}
                <div className="space-y-3 mb-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
                {/* CTA button */}
                <Skeleton className="h-10 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Skeleton */}
      <section className="py-16 md:py-20 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <HeadingSkeleton size="h2" width="1/3" className="mx-auto mb-4" />
            <TextSkeleton lines={1} className="max-w-lg mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <FeatureCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
