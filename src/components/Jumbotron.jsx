import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const Jumbotron = () => {
  const slides = [
    {
      imgSrc: "img/jumbotron/clothes.webp",
      imgAlt: "Clothes",
    },
    {
      imgSrc: "img/jumbotron/jewelrys.webp",
      imgAlt: "Jewelrys",
    },
    {
      imgSrc: "img/jumbotron/electronics.webp",
      imgAlt: "Electronics",
    },
  ];

  return (
    <section
      id="jumbotron"
      className="mt-[calc(56px+16px)] xl:mt-[calc(64px+16px)]"
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="swiper swiper-jumbotron h-44 rounded-lg shadow-lg md:h-52 xl:h-56"
        >
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <SwiperSlide
                className="swiper-slide h-full"
                key={slide.imgAlt}
              >
                <img
                  className="h-full w-full object-cover"
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                />
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Jumbotron;
