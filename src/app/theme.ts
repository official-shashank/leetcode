'use client'

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Define custom theme configuration
const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "480px",    // Small screens
      md: "768px",    // Tablets
      lg: "992px",    // Desktop
      xl: "1200px",   // Large screens
      "2xl": "1400px" // Extra large screens
    },
    tokens: {
      colors: {
        brand: {
          50: { value: "#e8f2ff" },
          100: { value: "red" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          950: { value: "#001a33" }
        }
      }
    }
  }
});

          
export const theme = createSystem(defaultConfig, config);
