import plans from "@/src/data/Plans.json";
import type { Plan } from "../lib/utils";

import PriceCard from "./PriceCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PlansSection = () => {
  return (
    <div className="flex w-full items-center justify-center gap-12 h-full pb-2">
      <div className="gap-8 flex-wrap items-center justify-center flex">
        {plans.map((item: Plan) => (
          <PriceCard
            plan={item}
            key={item.id + "flexbox"}
            checkboxKey="flexbox"
          />
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
