import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { debounce } from "lodash-es"

// Utility for combining Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility for gradient backgrounds
export function getGradientByColor(color: string) {
  const gradients: Record<string, string> = {
    emerald: "from-emerald-500 to-green-400",
    purple: "from-purple-600 to-pink-500",
    sky: "from-sky-600 to-indigo-500",
    amber: "from-amber-600 to-red-500",
    blue: "from-blue-500 to-blue-400",
  }

  return gradients[color] || "from-blue-500 to-blue-400"
}

// Debounce function for scroll events - with type-safe parameters
export const createDebouncedFunction = <T extends (...args: unknown[]) => unknown>(
  func: T, 
  wait = 50
) => {
  return debounce(func, wait)
}

