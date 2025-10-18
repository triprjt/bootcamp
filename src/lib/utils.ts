import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colors = {
  primary: {
    DEFAULT: "#FFD700",
    foreground: "#000000",
  },
  secondary: {
    DEFAULT: "#000000",
    foreground: "#FFFFFF",
  },
  yellow: {
    DEFAULT: "#FFD700",
    50: "#FFFBEB",
    100: "#FEF3C7",
    500: "#FFD700",
    600: "#FFA500",
    900: "#B8860B"
  },
  black: {
    DEFAULT: "#000000",
    100: "#1A1A1A",
    200: "#333333",
    900: "#000000"
  }
} as const;


