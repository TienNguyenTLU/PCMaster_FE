"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type CategoryItem = {
  title: string;
  subtitle: string;
  image: string;
};

type PcMasterCategoriesSectionProps = {
  categories: CategoryItem[];
};

export function PcMasterCategoriesSection({ categories }: PcMasterCategoriesSectionProps) {
  return (
    <section id="explore" className="space-y-8">
      <div className="flex items-end justify-between gap-4 border-b border-[#c2c6d633] pb-5">
        <div>
          <p className="text-xs tracking-[0.12em] text-[#0058be]">INVENTORY</p>
          <h2 className="mt-2 text-3xl tracking-[-0.04em] text-[#191c1e] sm:text-[40px]">
            Precision Categories
          </h2>
        </div>
      </div>

      <div className="pcmaster-categories-swiper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 1.35 },
            768: { slidesPerView: 2.05 },
            1024: { slidesPerView: 3 },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.title}>
              <article className="group h-full rounded-lg bg-white p-6 shadow-[0_20px_40px_rgba(0,26,66,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(0,26,66,0.12)]">
                <div className="overflow-hidden rounded-lg bg-[#f2f4f6]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={520}
                    height={320}
                    className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[260px]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[28px] leading-8 tracking-[-0.03em] text-[#191c1e]">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#424754]">{category.subtitle}</p>
                  </div>

                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c2c6d633] text-[#0058be] transition-all duration-300 group-hover:border-[#0058be66] group-hover:bg-[#0058be12]">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
