import type React from "react";

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

export default function name({ projects, divsCards, reverse }: Props) {
  return (
    <div className=" relative hidden w-full md:flex">
      {divsCards.map((div, index) => (
        <div
          key={div.id + 10}
          className={`absolute flex h-[500px]  w-[600px] rounded-md border-2 border-zinc-700 bg-zinc-800 text-white transition-all duration-500  ease-linear  ${div.zIndex}  ${div.top} ${div.left}  flex-col`}
        >
          <a
            href={projects[div.id]?.link}
            target="_blank"
            className="h-[5%] text-center"
            style={{ fontFamily: "Inter Variable" }}
          >
            {projects[div.id]?.link}
          </a>
          <img
            className="h-[85%] select-none rounded-3xl p-4"
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
