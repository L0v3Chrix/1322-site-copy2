import {
  HeadingSkeleton,
  TextSkeleton,
  CardSkeleton,
  Skeleton,
} from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section Skeleton */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Skeleton className="h-5 w-32 mx-auto mb-6 !bg-cream/10" /> {/* Eyebrow */}
          <HeadingSkeleton size="h1" width="1/2" className="mx-auto mb-6 !bg-cream/10" />
          <TextSkeleton
            lines={2}
            lineHeight="lg"
            className="max-w-2xl mx-auto [&_div]:!bg-cream/10"
          />
        </div>
      </section>

      {/* Tools Grid Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-sm shadow-card p-8"
              >
                {/* Icon placeholder */}
                <Skeleton className="h-14 w-14 rounded-full mb-6" />
                {/* Tool title */}
                <HeadingSkeleton size="h3" width="3/4" className="mb-4" />
                {/* Tool description */}
                <TextSkeleton lines={2} lineHeight="sm" className="mb-6" />
                {/* Feature list */}
                <div className="space-y-2 mb-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-3 w-3/4" />
                    </div>
                  ))}
                </div>
                {/* CTA button */}
                <Skeleton className="h-10 w-36" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
