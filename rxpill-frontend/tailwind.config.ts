import type { Config } from "tailwindcss"

const config: Config = {
  content: [ "./src/**/*.{ts,tsx}",            // all TS/TSX in src
    "./src/components/**/*.{ts,tsx}", // all TS/TSX in components
    "./app/**/*.{ts,tsx}",            // all TS/TSX in app
    "./pages/**/*.{ts,tsx}",          // if you have pages folder
],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
