"use client"

import Image, { type ImageProps } from "next/image"
import { getImageProps, getResponsiveSizes } from "./image-config"

interface OptimizedImageProps extends Partial<ImageProps> {
  src: string
  alt: string
  type: "hero" | "medium" | "small" | "profile" | "logo"
  className?: string
  fill?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  type,
  className = "",
  fill = false,
  ...props
}: OptimizedImageProps) {
  // Get base image props from config
  const baseProps = getImageProps(type, src, alt)

  // If fill is true, we don't need width and height
  if (fill) {
    const { width, height, ...restProps } = baseProps
    return (
      <Image
        {...restProps}
        src={src || "/placeholder.svg"}
        alt={alt}
        fill={true}
        sizes={getResponsiveSizes(type)}
        className={className}
        {...props}
      />
    )
  }

  // Otherwise return with explicit dimensions
  return (
    <Image
      {...baseProps}
      src={src || "/placeholder.svg"}
      alt={alt}
      sizes={getResponsiveSizes(type)}
      className={className}
      {...props}
    />
  )
}
