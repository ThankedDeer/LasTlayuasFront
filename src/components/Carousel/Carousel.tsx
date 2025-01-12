import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/zoom";

import "./Carousel.scss";

import { EffectCoverflow, Pagination, Zoom } from "swiper/modules";
import TestimonialCard, {
  ITestimonial,
} from "../TestimonialCard/TestimonialCard";

const testimonials: ITestimonial[] = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Laura Smith",
    opinion: "Increíble servicio, muy recomendable.",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    opinion: "La experiencia fue excelente, volveré pronto.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Johnson",
    opinion: "Me encantó, todo fue perfecto.",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Brown",
    opinion: "Un servicio excepcional, muy profesional.",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Davis",
    opinion: "Fue una experiencia maravillosa, lo recomiendo mucho.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Laura Smith",
    opinion: "Increíble servicio, muy recomendable.",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    opinion: "La experiencia fue excelente, volveré pronto.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Johnson",
    opinion: "Me encantó, todo fue perfecto.",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Brown",
    opinion: "Un servicio excepcional, muy profesional.",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Davis",
    opinion: "Fue una experiencia maravillosa, lo recomiendo mucho.",
  },
];

const colors = [
  "#FF009E", // Vibrant Pink
  "#00BFA6", // Turquoise
  "#FFD700", // Corn Yellow
  "#228B22", // Deep Green
  "#FF5733", // Bright Orange
  "#8B008B", // Deep Purple
];
const Carousel = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 20,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      zoom={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Zoom]}
      className="w-auto  max-w-full overflow-visible"
    >
      {testimonials.length > 0
        ? testimonials.map((test, index) => {
            const color = colors[index % colors.length]; // Selección cíclica del color
            return (
              <SwiperSlide key={`${test.name}-${index}-swiperSlide`}>
                <TestimonialCard
                  testimonial={test}
                  color={color}
                  key={`${test.name}-${index}-card`}
                />
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
};

export default Carousel;
