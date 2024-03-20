import { Cutive_Mono, Chakra_Petch, Press_Start_2P } from "next/font/google";

const display = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

const digital = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-digital",
});

export const fontDisplay = display.variable;
export const fontMono = mono.variable;
export const fontDigital = digital.variable;
