'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import SketchBorder from "@/components/sketch-border"
import SketchText from "@/components/sketch-text"

export default function WorkSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <SwiperSlide key={item}>
          <div className="group relative">
            <SketchBorder className="absolute inset-0" />
            <div className="relative aspect-square overflow-hidden p-3">
              <Image
                src={`/placeholder.svg?height=400&width=400&text=Project ${item}`}
                alt={`Project ${item}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white">
                  <SketchText as="h3" className="text-xl font-bold">
                    Project {item}
                  </SketchText>
                  <p className="mt-2 text-sm">Illustration / Branding</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}