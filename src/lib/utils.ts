import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  priceWithDesign: number;
  priceWithPaymentFunction: number;
  description: string;
  features: {
    available: boolean;
    name: string;
  }[];
  improvements: string[];
  warning?: string;
}
