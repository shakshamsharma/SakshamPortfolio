import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Typed cubic-bezier easing for Framer Motion — satisfies the `Easing` type.
// [0.22, 1, 0.36, 1] is an "expo out" curve: fast start, smooth deceleration.
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
