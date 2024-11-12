import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    100: "var(--primary-100)",
                    200: "var(--primary-200)",
                },
                base: {
                    100: "var(--base-100)",
                },
                success: "var(--success)",
            },
            screens: {
                xs: "360px",
                s: "480px",
                md: "768px",
                lg: "1024px",
                large: "1280px",
                xlarge: "1536px",
            },
            opacity: {
                10: "0.1",
                20: "0.2",
                95: "0.95",
              },
              keyframes: {
                scroll: {
                  '0%': { transform: 'translateX(100)' },
                  '100%': { transform: 'translateX(-100%)' }  // Moves exactly one set width (including gap)
                }
              },
              animation: {
                'scroll': 'scroll 20s linear infinite',
                'scroll-paused': 'scroll 20s linear infinite paused',
              }
        },
        variants: {
            extend: {
              animation: ['hover', 'group-hover'],
            },
          },
    },
    plugins: [],
} satisfies Config;