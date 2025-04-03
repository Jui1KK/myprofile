'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div className="relative h-auto max-h-[90vh] w-auto max-w-[90vw]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="h-auto w-auto object-cover"
          quality={100}
          priority
        />
      </div>
    </div>
  )
}