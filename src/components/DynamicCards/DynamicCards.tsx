import { useState } from "react";

import clsx from "clsx";
import { Minus, Plus } from "lucide-react";

import "@fontsource-variable/roboto-mono";
import "@fontsource-variable/inter";
import type { Data } from "@/src/lib/types/GithubRepository";

import CardsProjects from "../CardsProjects/CardsProjects";
import CardsProjectsCarrousel from "../CardsProjectsCarrousel/CardsProjectsCarrousel";
function DynamicCards(data: Data) {
  const projects = data.data;
  console.log(projects);

  const [divsCards, setDivsCards] = useState([
    {
      top: "top-[100px]",
      left: "left-[100px]",
      zIndex: "z-10",

      id: 4,
    },
    {
      top: "top-[80px]",
      left: "left-[80px]",
      zIndex: "z-20",

      id: 3,
    },
    {
      top: "top-[60px]",
      left: "left-[60px]",
      zIndex: "z-30",

      id: 2,
    },
    {
      top: "top-[40px]",
      left: "left-[40px]",
      zIndex: "z-40",

      id: 1,
    },
    {
      top: "top-[20px]",
      left: "left-[20px]",
      zIndex: "z-50",

      id: 0,
    },
  ]);

  const [divsOptions, setDivsOptions] = useState([
    {
      height: "h-2/6",
      id: 0,
    },
    {
      height: "h-1/6",
      id: 1,
    },
    {
      height: "h-1/6",
      id: 2,
    },
    {
      height: "h-1/6",
      id: 3,
    },
    {
      height: "h-1/6",
      id: 4,
    },
  ]);

  const [cardClicked, setCardClicked] = useState([{ id: 0, clicked: false }]);
  const [reverse, setReverse] = useState(false);
  console.log(reverse);

  function switchCard(id: number) {
    const newDivsOptions = divsOptions.map((div, index) => {
      if (div.height === "h-2/6" && id !== index) {
        setCardClicked([{ id: id, clicked: true }]);
        return { ...div, height: "h-1/6" };
      } else if (id === index && div.height === "h-1/6") {
        return { ...div, height: "h-2/6" };
      } else {
        return div;
      }
    });

    let reverseDivsCards;

    const newDivsCards = [...divsCards];
    if (!reverse) {
      reverseDivsCards = newDivsCards.reverse();
      setReverse(true);
    } else {
      reverseDivsCards = newDivsCards;
    }
    const cardClickedIndex = reverseDivsCards.findIndex((div) => div.id === id);
    const cardsAfterClick = reverseDivsCards.splice(
      cardClickedIndex,
      reverseDivsCards.length,
    );
    const cardsBeforeClick = reverseDivsCards.splice(0, cardClickedIndex);

    const cardsNewOrder = [...cardsAfterClick, ...cardsBeforeClick];
    cardsNewOrder.forEach((div, index) => {
      div.zIndex = `z-${(cardsNewOrder.length - index) * 10}`;
      div.top = `top-[${(index + 1) * 20}px]`;
      div.left = `left-[${(index + 1) * 20}px]`;
    });

    setDivsCards(cardsNewOrder);
    setDivsOptions(newDivsOptions);
  }

  return (
    <div className="flex h-[600px] w-full flex-row">
      <div className="hidden w-full flex-col items-center gap-2 text-white md:flex">
        {divsOptions.map(
          (div) => (
            console.log(div.id, "ID 3"),
            (
              <div
                key={div.id}
                onClick={() => switchCard(div.id)}
                className={clsx(
                  cardClicked[0]?.id === div.id ? "gap-4" : "justify-center",
                  `bg-gradient-to-br from-gray-400/10 to-black/20 bg-clip-padding p-4 shadow-inner backdrop-blur-md ${div.height} relative flex w-72 flex-col rounded-md border-2 border-zinc-700 transition-all duration-500 ease-in `,
                )}
              >
                <div className={"flex justify-between"}>
                  <h1
                    className={clsx(
                      cardClicked[0]?.id === div.id &&
                        "animate-fade animate-delay-200",
                      "select-none",
                    )}
                    style={{ fontFamily: "Roboto Mono Variable" }}
                  >
                    {projects[div.id]?.name}
                  </h1>
                  {cardClicked[0]?.id === div.id ? (
                    <Minus
                      className={clsx(
                        cardClicked[0]?.id === div.id &&
                          "animate-fade animate-delay-200 hover:cursor-pointer",
                      )}
                    />
                  ) : (
                    <Plus
                      className={clsx(
                        cardClicked[0]?.id === div.id &&
                          "animate-fade animate-delay-200",
                        "hover:cursor-pointer",
                      )}
                    />
                  )}
                </div>

                <p
                  className={clsx(
                    "text-sm font-light text-orange-400 selection:bg-orange-500",
                    div.id === cardClicked[0]?.id
                      ? "block animate-fade  animation-delay-200 "
                      : "hidden",
                  )}
                  style={{ fontFamily: "Roboto Mono Variable" }}
                >
                  {projects[div.id]?.description}
                </p>
              </div>
            )
          ),
        )}
      </div>
      {/* Cards */}
      <CardsProjects
        projects={projects}
        divsCards={divsCards}
        reverse={reverse}
      />
      <CardsProjectsCarrousel projects={projects} />
      {/*  */}
    </div>
  );
}

export default DynamicCards;
