import { useEffect, useState } from "react";

import { CheckCircle2, XCircle } from "lucide-react";

import type { Plan } from "../lib/utils";
import { Button } from "./Button/Button";
import CalModal from "./CalModal";
import { Checkbox } from "./ui/checkbox";

type Props = {
  plan: Plan;
  checkboxKey: string;
};

type PlanWithImprovements = {
  id: string;
  improvements: { title: string; price: number }[];
};

const PriceCard = ({ plan, checkboxKey }: Props) => {
  const [price, setPrice] = useState<number>(plan.price);

  function getLocalStorage(key: string) {
    const data = window.localStorage.getItem(key);

    return JSON.parse(data || "[]");
  }

  function setLocalStorage(key: string, value: unknown) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  useEffect(() => {
    window.localStorage.removeItem("plansImprovements");
  }, []);

  const insertPlanWithImprovementsSelected = (
    planId: string,
    selectedImprovement: { title: string; price: number },
  ) => {
    const actualPlans = getLocalStorage("plansImprovements");

    const planExists = actualPlans.find((plan: PlanWithImprovements) => {
      return plan.id === planId;
    });

    if (planExists) {
      actualPlans.map((plan: PlanWithImprovements) => {
        if (plan.id === planId) {
          const improvementExists = plan.improvements.find((improvement) => {
            return improvement.title === selectedImprovement.title;
          });

          if (improvementExists) {
            plan.improvements = plan.improvements.filter((improvement) => {
              return improvement.title !== selectedImprovement.title;
            });

            if (plan.improvements.length < 1) {
              return actualPlans.splice(actualPlans.indexOf(plan), 1);
            }
          } else {
            plan.improvements.push(selectedImprovement);
          }
        } else {
          return plan;
        }
      });

      setLocalStorage("plansImprovements", actualPlans);
    } else {
      const newPlan = {
        id: planId,
        improvements: [selectedImprovement],
      };

      actualPlans.push(newPlan);
      setLocalStorage("plansImprovements", actualPlans);
    }
  };

  return (
    <div className="flex h-[44rem] w-96 flex-col justify-around gap-12 overflow-y-scroll rounded-lg border border-zinc-600 bg-black/40 bg-clip-padding p-5 backdrop-blur-md transition-all duration-100 hover:scale-[101%] hover:bg-zinc-900/50">
      <div className="flex flex-col items-start gap-1">
        <div className="flex w-full justify-between">
          <p className="w-fit text-base font-black">{plan.name}</p>
          <img src={plan.image} alt={plan.name} />
        </div>
        <p className="select-none text-sm text-orange-600">a partir de:</p>
        <p className="text-4xl font-semibold">R$ {price}</p>
        <p className="h-28 text-base text-zinc-300">{plan.description}</p>
        <p className="select-none text-center text-xs font-semibold text-orange-600">
          {plan.warning}
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-x-hidden overflow-y-scroll">
        {plan.features.map((feature) =>
          feature.available ? (
            <div
              className="flex w-full items-center gap-2 text-sm font-bold"
              key={feature.name + plan.id}
            >
              <CheckCircle2 size={18} color="white" />
              <p>{feature.name}</p>
            </div>
          ) : (
            <div
              className="flex w-full items-center gap-2 text-xs font-bold"
              key={feature.name + plan.id}
            >
              <XCircle size={18} color="white" />
              <p>{feature.name}</p>
            </div>
          ),
        )}
      </div>

      <div className="flex h-16 flex-col gap-2">
        {plan.improvements.map((improvement) => (
          <div
            className="flex w-full items-center gap-2 text-sm font-bold"
            key={improvement.title + plan.id}
          >
            <Checkbox
              id={plan.id + improvement.title + checkboxKey}
              onCheckedChange={(checked) => {
                if (checked) {
                  setPrice(price + improvement.price);
                  insertPlanWithImprovementsSelected(plan.id, improvement);
                } else {
                  setPrice(price - improvement.price);
                  insertPlanWithImprovementsSelected(plan.id, improvement);
                }
              }}
            />
            <label
              htmlFor={plan.id + improvement.title + checkboxKey}
              className="cursor-pointer text-base font-light only:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {improvement.title}
            </label>
          </div>
        ))}
      </div>
      <CalModal>
        <Button size="md" color="primary" className="group flex h-fit w-full">
          <p className="w-full text-center">Quero contratar</p>
        </Button>
      </CalModal>
    </div>
  );
};

export default PriceCard;
