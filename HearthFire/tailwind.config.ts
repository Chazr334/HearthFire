import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0E0E0E",
        ember: "#D9A441",
        iron: "#7A2E1F",
        bone: "#F3F1E9",
        smoke: "#555555",
        moss: "#4C5B3D"
      },
      backgroundImage: {
        "stone-texture": "url('/textures/stone.jpg')",
        "radial-ember":
          "radial-gradient(circle at top, rgba(217,164,65,0.12), transparent 60%)"
      },
      fontFamily: {
        display: ["var(--font-cinzel)"],
        serif: ["var(--font-crimson)"],
        body: ["var(--font-merriweather)"]
      },
      boxShadow: {
        ember: "0 0 25px rgba(217, 164, 65, 0.25)",
        "inner-ember": "inset 0 0 30px rgba(122, 46, 31, 0.25)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
