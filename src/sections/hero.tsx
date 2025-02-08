import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  Backgrounds: Array<{ title: string; description: string; image: string }>;
};

function Hero({ Backgrounds }: Props) {
  return (
    <section className="w-full bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-screen"
      >
        {Backgrounds.map((slide, key) => (
          <SwiperSlide key={key}>
            <div className="h-full w-full bg-cover bg-center flex items-center text-white text-4xl">
              <Image
                src={slide.image}
                width={1000}
                height={600}
                className="w-full h-full absolute object-cover brightness-50"
                alt="cursor"
              />
              <div>
                <div className="drop-shadow-md p-6 xl:p-24">
                  <p className="text-5xl capitalize font-extrabold leading-tight xl:w-3/4">
                    {slide.title}
                  </p>
                  <p className="text-lg capitalize mt-3 xl:w-2/4">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
