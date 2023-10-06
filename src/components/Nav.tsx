import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar.tsx";

const Nav = () => {
  return (
    <div className="w-full bg-zinc-900 h-16 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 absolute items-center flex px-8 justify-around">
      <div className="flex items-center gap-4 text-zinc-400 hover:cursor-pointer underline-offset-8 ">
        <img src="/images/Ascent.svg" className="h-8" />
        <p className="hover:text-orange-600 hover:underline">Inicio</p>
        <p className="hover:text-orange-600 hover:underline">Preços</p>
      </div>

      <div className="items-center gap-4 hidden md:flex">
        <Avatar>
          <AvatarImage src="https://cdn.discordapp.com/attachments/1003086571098087455/1159240429305335900/Default_Printable_sticker_about_minimal_cute_cartoon_friendly_1_2243daa5-b8ea-4200-a220-0a23abe36628_1.jpg?ex=65304dc7&is=651dd8c7&hm=af1ceac49f5631a72ffee2a1e7c3e6d6b4c5fd54c0e4a26cf4dd7009d4abbc6a&" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <div className="leading-none">
          <p>Usuário Anônimo</p>
          <p className="text-orange-600 text-xs selection:bg-white">Cliente</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
