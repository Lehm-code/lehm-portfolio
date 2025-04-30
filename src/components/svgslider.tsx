"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

// スタイルのインポート
import "swiper/css";
import "swiper/css/autoplay";

// 画像パスとラベルの配列を定義
const svgImages: [string, string][] = [
  ["/svg_logo/python.svg", "Python"],
  ["/svg_logo/flutter.svg", "Flutter"],
  ["/svg_logo/next-js.svg", "Next.js"],
  ["/svg_logo/dart.svg", "Dart"],
  ["/svg_logo/html.svg", "HTML"],
  ["/svg_logo/css.svg", "CSS"],
  ["/svg_logo/tailwind-css.svg", "Tailwind CSS"],
  ["/svg_logo/javascript.svg", "JavaScript"],
  ["/svg_logo/typescript.svg", "TypeScript"],
  ["/svg_logo/google-cloud.svg", "Google Cloud"],
  ["/svg_logo/docker.svg", "Docker"],
  ["/svg_logo/postgresql.svg", "PostgreSQL"],
  ["/svg_logo/supabase.svg", "Supabase"],
  ["/svg_logo/prisma.svg", "Prisma"],
];

const SvgSlider: React.FC = () => {
  // ハイドレーションエラー対策
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // レスポンシブ対応のブレークポイント設定
  const breakpoints: { [width: number]: SwiperOptions } = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  };

  // Autoplayの設定
  const autoplayConfig = {
    //delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  if (!mounted) {
    return null; // クライアントサイドレンダリングが完了するまで何も表示しない
  }

  return (
    <div className="w-full py-4">
      <h2 className="text-center text-2xl">技術スタック</h2>
      <Swiper
        // svg間のスペースを設定
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        speed={500}
        autoplay={autoplayConfig}
        modules={[Autoplay]}
        breakpoints={breakpoints}
        className="w-full"
      >
        {svgImages.map(([src, label], index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center p-4 h-40">
              <Image
                src={src}
                alt={`技術ロゴ ${label}`}
                width={80}
                height={80}
                className="object-contain mb-2"
              />
              <p className="text-center text-sm font-medium">{label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SvgSlider;
