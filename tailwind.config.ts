import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#E8E8E8",
        text: "#111111",
        muted: "#888888",
        "tag-bg": "#F2F2F2",
        "tag-text": "#444444",
      },
    },
  },
  plugins: [],
};
export default config;
