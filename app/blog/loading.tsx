export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1E1E2A]">
      <div className="container mx-auto px-4 py-12">
        {/* Header - show immediately */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1E1E2A]">Field Notes for Faithful Stewards</h1>
          <p className="text-xl text-[#1E1E2A]/80 max-w-3xl mx-auto">
            Wisdom, stories, and strategies to help you steward your blessings, control your capital, and build a
            lasting legacy.
          </p>
        </div>

        {/* Simple loading indicator */}
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37]"></div>
        </div>
      </div>
    </div>
  )
}
