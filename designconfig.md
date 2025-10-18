# 🎯 AI Bootcamp Design Theme Documentation

## 🎨 Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Yellow** | `#FFD700` | CTAs, buttons, highlights, accents |
| **Primary Black** | `#000000` | Headings, text, dark backgrounds |
| **Primary White** | `#FFFFFF` | Backgrounds, cards, light text |

### Secondary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Yellow Dark** | `#FFA500` | Hover states, secondary buttons |
| **Black Light** | `#1A1A1A` | Subtle backgrounds, borders |
| **Gray Dark** | `#333333` | Secondary text, muted elements |
| **Gray Light** | `#F5F5F5` | Card backgrounds, subtle dividers |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Success Green** | `#10B981` | Success states, checkmarks |
| **Warning Orange** | `#F59E0B` | Warnings, progress indicators |
| **Blue Accent** | `#3B82F6` | Links, AI-related highlights |

### Semantic Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#FFFFFF` | Main background |
| **Surface** | `#FAFAFA` | Cards, sections |
| **Muted** | `#E5E7EB` | Borders, dividers |
| **Text Primary** | `#000000` | Main text |
| **Text Secondary** | `#6B7280` | Subtext, descriptions |

---

## 🎨 Shadcn Theme Configuration

### `components/ui/button.tsx` Variants
```tsx
const buttonVariants = {
  primary: "bg-yellow-500 hover:bg-yellow-600 text-black font-bold",
  secondary: "bg-black hover:bg-gray-800 text-white border border-yellow-500",
  outline: "border border-yellow-500 text-yellow-500 hover:bg-yellow-50",
  ghost: "hover:bg-yellow-50 text-black hover:text-yellow-600",
  destructive: "bg-red-500 hover:bg-red-600 text-white"
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


@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --primary: 51 100% 50%; /* Yellow */
    --primary-foreground: 0 0% 0%;
    --secondary: 0 0% 0%;
    --secondary-foreground: 0 0% 100%;
    --accent: 51 100% 50%;
    --destructive: 0 84.2% 60.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 51 100% 50%;
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --primary: 51 100% 70%;
    --primary-foreground: 0 0% 0%;
  }
}