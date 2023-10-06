import { useEffect, useState } from "react";
import type { Plan } from "../lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./Button/Button";
import CalModal from "./CalModal";

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
    <div className="bg-black w-96 rounded-lg bg-opacity-40 h-full bg-clip-padding backdrop-filter backdrop-blur-md p-5 flex flex-col gap-12 justify-around border-1 border-zinc-600 border overflow-y-scroll hover:bg-zinc-900 hover:bg-opacity-50 hover:scale-[101%] transition-all duration-100 ">
      <div className="flex flex-col gap-1 items-start">
        <div className="flex justify-between w-full">
          <p className="font-black text-base w-fit">{plan.name}</p>
          <img src={plan.image} alt={plan.name} />
        </div>
        <p className="text-sm text-orange-600 select-none">a partir de:</p>
        <p className="text-4xl font-semibold">R$ {price}</p>
        <p className="text-base text-zinc-300 h-28">{plan.description}</p>
        <p className="text-center text-xs text-orange-600 font-semibold select-none">
          {plan.warning}
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-y-scroll overflow-x-hidden">
        {plan.features.map((feature) =>
          feature.available ? (
            <div
              className="text-sm font-bold w-full flex gap-2 items-center"
              key={feature.name + plan.id}
            >
              <CheckCircle2 size={18} color="white" />
              <p>{feature.name}</p>
            </div>
          ) : (
            <div
              className="text-xs font-bold w-full flex gap-2 items-center"
              key={feature.name + plan.id}
            >
              <XCircle size={18} color="white" />
              <p>{feature.name}</p>
            </div>
          ),
        )}
      </div>

      <div className="flex flex-col gap-2 h-16">
        {plan.improvements.map((improvement) => (
          <div
            className="text-sm font-bold w-full flex gap-2 items-center"
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
              className="text-base only:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-light"
            >
              {improvement.title}
            </label>
          </div>
        ))}
      </div>
      <CalModal>
        <Button
          size="md"
          color="primary"
          className="h-fit group flex w-full"
          onClick={async () => {
            console.log("oi");
          }}
        >
          <p className="text-center w-full">Quero contratar</p>
        </Button>
      </CalModal>
    </div>
  );
};

export default PriceCard;
