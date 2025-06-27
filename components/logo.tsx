import Image from "next/image"

export function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/1322-logo.avif"
        alt="1322 Legacy Strategies"
        width={300}
        height={80}
        className="h-auto w-auto max-w-[250px] md:max-w-[300px]"
        priority
      />
    </div>
  )
}
