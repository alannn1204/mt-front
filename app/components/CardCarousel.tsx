"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MapPinIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsBusFront } from "react-icons/bs";

const cards = [
  { title: "KL to Penang", subtitle: "Fastest Route", img: "/cards/penang.jpg" },
  { title: "KL to Johor", subtitle: "Comfort Travel", img: "/cards/johor.jpg" },
  { title: "KL to Langkawi", subtitle: "Beach Holiday", img: "/cards/langkawi.jpg" },
  { title: "KL to Melaka", subtitle: "Scenic Route", img: "/cards/melaka.jpg" },
];

export default function CardCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    className="!pb-10" // tambah padding bawah supaya bullets keluar bawah
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3.5, spaceBetween: 24 },
    }}
  >
    {cards.map((card, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex items-center gap-2">
              <BsBusFront className="w-5 h-5 text-rose-600" />
              <h3 className="font-bold text-gray-600 font-sans text-md">{card.title}</h3>
            </div>
            <p className="text-gray-600 font-sans text-sm mt-1">{card.subtitle}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
