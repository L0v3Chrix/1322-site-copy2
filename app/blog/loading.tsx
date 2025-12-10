import {
  HeadingSkeleton,
  TextSkeleton,
  BlogCardSkeleton,
} from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section Skeleton */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <HeadingSkeleton size="h1" width="1/2" className="mx-auto mb-6 !bg-cream/10" />
          <TextSkeleton
            lines={2}
            lineHeight="lg"
            className="max-w-2xl mx-auto [&_div]:!bg-cream/10"
          />
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
