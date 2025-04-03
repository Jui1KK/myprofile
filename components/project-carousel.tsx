'use client'

import { useState } from 'react'
import Image from 'next/image'
import SketchBorder from './sketch-border'
import SketchText from './sketch-text'
import ImageModal from './image-modal'
import { projectData } from '@/lib/data'

interface Project {
  id: number
  title: string
  description: string
  image: string
}

export default function ProjectCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project: Project) => (
          <div key={project.id} className="group relative">
            <SketchBorder className="absolute inset-0" />
            <div 
              className="relative aspect-square overflow-hidden p-3 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white">
                  <SketchText as="h3" className="text-xl font-bold">
                    {project.title}
                  </SketchText>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <ImageModal
        src={selectedImage || ''}
        alt="Project Preview"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  )
}