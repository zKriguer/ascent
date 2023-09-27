import React, { useState } from "react";
import type { Plan } from "../lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./Button/Button";

type Props = {
  plan: Plan;
};

const PriceCard = ({ plan }: Props) => {
  const initialText = plan.description.slice(0, 80) + "...";
  const [expanded, setExpanded] = useState(false);
  const [displayText, setDisplayText] = useState(initialText);

  const handleSeeMoreClick = () => {
    if (expanded) {
      setDisplayText(initialText);
    } else {
      setDisplayText(plan.description);
    }
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black w-80 rounded-lg bg-opacity-40 h-full bg-clip-padding backdrop-filter backdrop-blur-md p-5 flex flex-col gap-8 justify-around transition ease-in-out delay-150">
      <div className="flex flex-col gap-2 items-start">
        <p className="font-black text-base">{plan.name}</p>
        <p className="text-2xl font-semibold">R$ {plan.price}</p>
        <p className="text-sm text-zinc-400">{displayText}</p>
        <button onClick={handleSeeMoreClick} className="text-sm self-end">
          {expanded ? "Ver Menos" : "Ver Mais"}
        </button>
        <p className="text-center text-xs text-orange-600 font-semibold select-none">
          {plan.warning}
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-scroll max-h-24">
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

      <div className="flex flex-col gap-2">
        {plan.improvements.map((improvement) => (
          <div className="text-xs font-bold w-full flex gap-2">
            <Checkbox id={plan.id + improvement} />
            <label
              htmlFor={plan.id + improvement}
              className="text-sm only:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-light"
            >
              {improvement}
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
