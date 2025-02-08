import DealCard from "@/components/card/dealsCard";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  DealsCard: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    discount: string;
    dealOfTheDay: string;
  }>;
};

function Deals({ DealsCard }: Props) {
  return (
    <section className="p-6 lg:px-24">
      {/* Heading */}
      <h1 className="main-heading">Today&apos;s Top Deals</h1>

      {/* Swiper Slider for Cards */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {DealsCard.map((card, key) => (
          <SwiperSlide key={key}>
            <DealCard cardData={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Deals;
