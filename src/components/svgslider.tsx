"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";

const techStacks: {
  languages: [string, string][];
  frameworks: [string, string][];
  others: [string, string][];
} = {
  languages: [
    ["/svg_logo/python.svg", "Python"],
    ["/svg_logo/dart.svg", "Dart"],
    ["/svg_logo/html.svg", "HTML"],
    ["/svg_logo/css.svg", "CSS"],
    ["/svg_logo/javascript.svg", "JavaScript"],
    ["/svg_logo/typescript.svg", "TypeScript"],
    ["/svg_logo/latex.svg", "LATEX"],
  ],
  frameworks: [
    ["/svg_logo/flutter.svg", "Flutter"],
    ["/svg_logo/next-js.svg", "Next.js"],
    ["/svg_logo/flask.svg", "Flask"],
    ["/svg_logo/nest-js.svg", "Nest.js"],
    ["/svg_logo/tailwind-css.svg", "Tailwind CSS"],
  ],
  others: [
    ["/svg_logo/aws.svg", "AWS"],
    ["/svg_logo/google-cloud.svg", "Google Cloud"],
    ["/svg_logo/docker.svg", "Docker"],
    ["/svg_logo/postgresql.svg", "PostgreSQL"],
    ["/svg_logo/postman.svg", "Postman"],
    ["/svg_logo/supabase.svg", "Supabase"],
    ["/svg_logo/prisma.svg", "Prisma"],
    ["/svg_logo/shadcn-ui.svg", "shadcn/ui"],
    ["/svg_logo/vscode.svg", "VSCode"],
    ["/svg_logo/figma.svg", "Figma"],
    ["/svg_logo/github.svg", "Github"],
    ["/svg_logo/gitlab.svg", "Gitlab"],
  ],
};

const SvgSlider: React.FC = () => {
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

  const renderSwiper = (title: string, items: [string, string][]) => (
    <div className="w-full py-4">
      <h3 className="text-center text-xl mb-4 font-semibold">{title}</h3>
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
        {items.map(([src, label], index) => (
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

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="text-center text-2xl font-semibold mb-8">技術スタック</h2>
      {renderSwiper("言語", techStacks.languages)}
      {renderSwiper("フレームワーク", techStacks.frameworks)}
      {renderSwiper("その他", techStacks.others)}
    </div>
  );
};

export default SvgSlider;
