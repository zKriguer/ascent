import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Plan {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  features: {
    available: boolean;
    name: string;
  }[];
  improvements: Improvement[];
  warning?: string;
}

type Improvement = {
  title: string;
  type: IMPROVEMENT_TYPE;
  price: number;
};

export enum IMPROVEMENT_TYPE {
  MAINTENANCE = 1,
  DESIGN = 2,
  PAYMENT_FUNCTION = 3,
}
