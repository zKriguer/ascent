import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: "font-medium text-black active:opacity-80 tracking-wider rounded-lg",
  variants: {
    color: {
      primary:
        "transition-colors duration-300 ease-linear bg-brand-pink hover:bg-orange-600 font-sans bg-white hover:text-white",
      secondary:
        "transition-colors duration-300 ease-linear bg-orange-600 text-white  hover:text-black hover:bg-white",
      clean:
        "bg-transparent hover:scale-110 transition-all duration-300 ease-in-out text-brand-pink-dark shadow-none",
    },
    size: {
      sm: "text-xs p-2",
      md: "text-base p-2 px-8",
      lg: "p-6 text-lg",
    },
  },
});

type Props = {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary" | "clean";
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  color,
  size,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(button({ size: size, color: color }), className)}
    >
      {children}
    </button>
  );
};
