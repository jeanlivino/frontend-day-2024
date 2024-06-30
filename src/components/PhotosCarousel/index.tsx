"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function PhotosCarousel() {
  return (
    <CarouselContainer
      plugins={[
        AutoScroll({
          speed: 1,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
        }),
      ]}
      opts={{
        loop: true,
        active: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-0"
          >
            <div className="aspect-video bg-zinc-200">
              <Image
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer"
                src={"/carousel/1.jpeg"}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
}
