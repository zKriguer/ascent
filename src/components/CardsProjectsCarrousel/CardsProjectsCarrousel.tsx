import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { GithubRepository } from "@/src/lib/types/GithubRepository";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

type Props = {
  projects: GithubRepository[];
};

export default function CardsProjectsCarrousel({ projects }: Props) {
  return (
    <div className="flex h-full w-full  justify-center md:hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.link} className="flex flex-col gap-9 p-4">
            <h1>{project.name}</h1>
            <p className="text-sm">{project.description}</p>
            <img src={project.image} />
            <div className={"flex flex-row self-start"}>
              {project.Contributors.map((contributor) => {
                return (
                  <a
                    key={contributor.github_url}
                    target="_blank"
                    href={contributor.github_url}
                  >
                    <Avatar>
                      <AvatarImage src={contributor.avatar_url} />
                      <AvatarFallback>{contributor.name}</AvatarFallback>
                    </Avatar>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
