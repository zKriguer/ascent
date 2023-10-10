import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import styles from "./styles.module.css";

const button = tv({
  base: "rounded-lg font-medium tracking-wider text-black active:opacity-80",
  variants: {
    color: {
      primary:
        "bg-white font-sans transition-colors duration-300 ease-linear hover:bg-orange-600 hover:text-white",
      secondary:
        "bg-orange-600 text-white transition-colors  duration-300 ease-linear hover:bg-white hover:text-black",
      maionelga:
        "bg-white text-black transition-colors duration-300 ease-linear hover:bg-purple-700 hover:text-white",
      clean:
        "bg-transparent shadow-none transition-all duration-300 ease-in-out hover:scale-110",
      neon: twMerge(styles["custom-btn"], styles["neon-btn"]),
    },
    size: {
      sm: "p-2 text-xs",
      md: "p-2 text-base md:p-3 md:px-8",
      lg: "p-6 text-lg",
    },
  },
});

type Props = {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary" | "clean" | "neon" | "maionelga";
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
