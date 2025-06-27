"use client"

import type { ImageProps } from "next/image"

// Define standard image sizes for different contexts
export const imageSizes = {
  // Hero and large banner images
  hero: {
    width: 1920,
    height: 1080,
    quality: 85,
  },
  // Medium-sized images like in cards and features
  medium: {
    width: 800,
    height: 600,
    quality: 80,
  },
  // Smaller images like thumbnails and icons
  small: {
    width: 400,
    height: 300,
    quality: 75,
  },
  // Profile pictures and avatars
  profile: {
    width: 300,
    height: 300,
    quality: 80,
  },
  // Logo and brand images
  logo: {
    width: 200,
    height: 200,
    quality: 90,
  },
}

// Helper function to get image props based on type
export function getImageProps(
  type: keyof typeof imageSizes,
  src: string,
  alt: string,
  customProps?: Partial<ImageProps>,
): ImageProps {
  const sizeConfig = imageSizes[type]

  return {
    src,
    alt,
    width: sizeConfig.width,
    height: sizeConfig.height,
    quality: sizeConfig.quality,
    placeholder: "blur",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg==",
    ...customProps,
  }
}

// Helper function to generate responsive image sizes
export function getResponsiveSizes(type: keyof typeof imageSizes): string {
  switch (type) {
    case "hero":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px"
    case "medium":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
    case "small":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
    case "profile":
      return "(max-width: 640px) 150px, 300px"
    case "logo":
      return "200px"
    default:
      return "100vw"
  }
}
