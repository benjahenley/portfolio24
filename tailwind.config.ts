import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      scale: {
        "110": "1.1",
      },
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #e85a4f, #d43d37, #bf2622, #aa0f0d)",
        "text-gradient":
          "linear-gradient(45deg, #FFFFFF, #F8F8FF, #FFFAFA, #FFFFF0, #FFF5EE)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover", "focus"],
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-gradient": {
          background:
            "linear-gradient(45deg, #FFFFFF, #F8F8FF, #FFFAFA, #FFFFF0, #FFF5EE)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;
