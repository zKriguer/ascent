import plansData from "@/src/data/Plans.json";
import type { Plan } from "../lib/utils";

import PriceCard from "./PriceCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
type Props = {};

const PlansSection = (props: Props) => {
  const [plans, setPlans] = useState<Plan[]>(
    JSON.parse(JSON.stringify(plansData)),
  );

  return (
    <div className="flex w-full items-center justify-center gap-12 h-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={"auto"}
        navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className={twMerge("mySwiper", "flex sm:hidden")}
      >
        {plans.map((item: Plan) => (
          <SwiperSlide
            className="flex items-center justify-center"
            key={item.id}
          >
            <PriceCard plan={item} checkboxKey="slider" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gap-8 flex-wrap items-center justify-center hidden sm:flex">
        {plans.map((item: Plan) => (
          <PriceCard plan={item} key={item.id} checkboxKey="flexbox" />
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
