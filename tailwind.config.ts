import { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#d9ecf4",
        background: "#09191f",
        primary: "#086787",
        secondary: "#32813a",
      },
    },
  },
}

export default config
