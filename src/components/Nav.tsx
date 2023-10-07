import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar.tsx";

const Nav = () => {
  return (
    <div className="absolute flex h-16 w-full items-center justify-around rounded-md bg-zinc-900/25 bg-clip-padding px-8 backdrop-blur-md">
      <div className="flex items-center gap-4 text-zinc-400 underline-offset-8 hover:cursor-pointer ">
        <img src="/images/Ascent.svg" className="h-8" />
        <p className="hover:text-orange-600 hover:underline">Inicio</p>
        <p className="hover:text-orange-600 hover:underline">Preços</p>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <Avatar>
          <AvatarImage src="https://cdn.discordapp.com/attachments/1003086571098087455/1159240429305335900/Default_Printable_sticker_about_minimal_cute_cartoon_friendly_1_2243daa5-b8ea-4200-a220-0a23abe36628_1.jpg?ex=65304dc7&is=651dd8c7&hm=af1ceac49f5631a72ffee2a1e7c3e6d6b4c5fd54c0e4a26cf4dd7009d4abbc6a&" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <div className="leading-none">
          <p>Usuário Anônimo</p>
          <p className="text-xs text-orange-600 selection:bg-white">Cliente</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
