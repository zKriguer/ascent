import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

const button = tv({
  base: "font-medium text-black active:opacity-80 tracking-wider rounded-lg",
  variants: {
    color: {
      primary:
        "transition-colors duration-300 ease-linear bg-brand-pink hover:bg-orange-600 font-sans bg-white hover:text-white",
      secondary:
        "transition-colors duration-300 ease-linear  hover:text-white bg-white text-black hover:bg-orange-600",
      maionelga:
        "transition-colors duration-300 ease-linear hover:bg-purple-700 hover:text-white text-black bg-white",
      clean:
        "bg-transparent hover:scale-110 transition-all duration-300 ease-in-out text-brand-pink-dark shadow-none",
      neon: twMerge(styles["custom-btn"], styles["neon-btn"]),
    },
    size: {
      sm: "text-xs p-2",
      md: "text-base p-3 px-8",
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
