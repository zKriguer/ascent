import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type ProfileProps = {
  name: string;
  avatarUrl: string;
};

export function Profile({ name, avatarUrl }: ProfileProps) {
  return (
    <Avatar>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}
