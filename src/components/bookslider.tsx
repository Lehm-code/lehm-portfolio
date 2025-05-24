"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";

const bookImages: [string, string][] = [
  ["/books/978-4-47-802221-4.jpg", "統計学が最強の学問である"],
  ["/books/978-4-80-140147-1.jpg", "空想教室"],
  [
    "/books/978-4-06-520612-6.jpg",
    "ゼロからつくるPython機械学習プログラミング入門",
  ],
  ["/books/978-4-87311-935-9.jpg", "Pythonチュートリアル"],
  ["/books/978-4-10-205212-9.jpg", "百年の孤独"],
];

const BookSlider: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const breakpoints: { [width: number]: SwiperOptions } = {
    320: { slidesPerView: 2, spaceBetween: 10 },
    640: { slidesPerView: 3, spaceBetween: 15 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    1024: { slidesPerView: 5, spaceBetween: 20 },
  };

  const autoplayConfig = {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="text-center text-2xl font-semibold mb-8">読書歴</h2>
      <div className="w-full py-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          speed={500}
          autoplay={autoplayConfig}
          modules={[Autoplay]}
          breakpoints={breakpoints}
          className="w-full"
        >
          {bookImages.map(([src, title], index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center p-4 h-60">
                <div className="flex justify-center items-center h-40 mb-2">
                  <Image
                    src={src}
                    alt={`書籍カバー: ${title}`}
                    width={100}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium leading-tight line-clamp-3 h-[4.5rem]">
                  {title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookSlider;
