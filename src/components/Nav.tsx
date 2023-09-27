import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar.tsx";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="w-full bg-zinc-900 h-16 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 absolute items-center flex px-8 justify-around">
      <div className="flex items-center gap-4 text-zinc-400 hover:cursor-pointer underline-offset-8 ">
        <img src="/images/Ascent.svg" className="h-8" />
        <p className="hover:text-orange-600 hover:underline">Inicio</p>
        <p className="hover:text-orange-600 hover:underline">Preços</p>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://cdn.discordapp.com/attachments/1127027828811108383/1156223123662839859/image.png?ex=65143032&is=6512deb2&hm=445a5124b3d9a897bb9876f0b1ce01b121751d3baaeb946c061dcfe1641ba9c1&" />
          <AvatarFallback>Mamanse</AvatarFallback>
        </Avatar>
        <div className="leading-none">
          <p>Richard Machado</p>
          <p className="text-orange-600 text-xs selection:bg-white">
            Desenvolvedor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
