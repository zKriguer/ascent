import React, { useState } from "react";
import type { Plan } from "../lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./Button/Button";

type Props = {
  plan: Plan;
};

const PriceCard = ({ plan }: Props) => {
  const [price, setPrice] = useState<number>(plan.price);
  return (
    <div className="bg-black w-80 rounded-lg bg-opacity-40 h-full bg-clip-padding backdrop-filter backdrop-blur-md p-5 flex flex-col gap-8 justify-around transition ease-in-out delay-150 border-1 border-zinc-600 border">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex justify-between w-full">
          <p className="font-black text-base w-fit">{plan.name}</p>
          <img src={plan.image} alt={plan.name} />
        </div>

        <p className="text-2xl font-semibold">R$ {price}</p>
        <p className="text-sm text-zinc-300 h-28">{plan.description}</p>

        <p className="text-center text-xs text-orange-600 font-semibold select-none">
          {plan.warning}
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-y-scroll overflow-x-hiddens max-h-24">
        {plan.features.map((feature) =>
          feature.available ? (
            <div className="text-xs font-bold w-full flex gap-2 items-center">
              <CheckCircle2 className="inline-block" size={18} color="white" />
              <p>{feature.name}</p>
            </div>
          ) : (
            <div className="text-xs font-bold w-full flex gap-2 items-center">
              <XCircle className="inline-block" size={18} color="white" />
              <p>{feature.name}</p>
            </div>
          ),
        )}
      </div>

      <div className="flex flex-col gap-2 h-16">
        {plan.improvements.map((improvement) => (
          <div className="text-xs font-bold w-full flex gap-2">
            <Checkbox
              id={plan.id + improvement.title}
              onCheckedChange={(checked) => {
                if (checked) {
                  setPrice(price + improvement.price);
                } else {
                  setPrice(price - improvement.price);
                }
              }}
            />
            <label
              htmlFor={plan.id + improvement.title}
              className="text-sm only:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-light"
            >
              {improvement.title}
            </label>
          </div>
        ))}
      </div>
      <Button size="md" color="primary">
        Contratar plano
      </Button>
    </div>
  );
};

export default PriceCard;
