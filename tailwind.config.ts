import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/app/**/*.tsx", "src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#f5e5f2",
        background: "#260f21",
        primary: "#d99acb",
        secondary: "#c59f65",
      },
    },
  },
}

export default config
