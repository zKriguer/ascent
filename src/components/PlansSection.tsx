import plansData from "@/src/data/Plans.json";
import type { Plan } from "../lib/utils";

import PriceCard from "./PriceCard";
type Props = {};

const PlansSection = (props: Props) => {
  const plans: Plan[] = JSON.parse(JSON.stringify(plansData));
  return (
    <section className="flex w-full items-center justify-center gap-12 h-full">
      {plans.map((item: Plan) => (
        <PriceCard plan={item} key={item.id} />
      ))}
    </section>
  );
};

export default PlansSection;
