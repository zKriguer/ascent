import type React from "react";

import clsx from "clsx";

import type { Cards } from "@/src/lib/types/Cards";
import type { GithubRepository } from "@/src/lib/types/GithubRepository";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

type Props = {
  projects: GithubRepository[];
  divsCards: Cards[];
  reverse: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function CardsProjects({ projects, divsCards, reverse }: Props) {
  return (
    <div className=" relative hidden w-full md:flex">
      {divsCards.map((div, index) => (
        <div
          key={div.id + 10}
          className={clsx(
            `absolute flex h-[500px]  w-[600px] rounded-md border-2 border-zinc-700 bg-zinc-800 text-white ${div.zIndex}  ${div.top} ${div.left} animate-fade-right flex-col duration-500 animation-delay-200`,
            reverse && "animate-fade-right",
          )}
        >
          <div className="flex items-center justify-center">
            <a
              href={projects[div.id]?.link}
              target="_blank"
              className=" h-[5%]"
              style={{ fontFamily: "Inter Variable" }}
            >
              {projects[div.id]?.link}
            </a>
          </div>
          <img
            className="h-[85%] select-none rounded-3xl object-cover p-4"
            src={projects[div.id]?.image}
          />
          <div className="flex flex-row gap-10 px-4 ">
            {projects[div.id]?.Contributors.map((contributor) => (
              <div key={contributor.github_url} className="h-[20%] ">
                {!reverse && index === 4 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src={contributor.avatar_url} />
                          <AvatarFallback>{contributor.name}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <a href={contributor.github_url} target="_blank">
                          {contributor.name}
                        </a>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  reverse &&
                  index === 0 && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar>
                            <AvatarImage src={contributor.avatar_url} />
                            <AvatarFallback>{contributor.name}</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                          <a href={contributor.github_url} target="_blank">
                            {contributor.name}
                          </a>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
