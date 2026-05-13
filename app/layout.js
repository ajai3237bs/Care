import { Lora, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Celedon Elder Care — Care That Comes Home",
  description:
    "Expert elder care, 24/7 support, and warm companionship — right to your parents' doorstep. Trusted by 10,000+ families across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} ${dancingScript.variable}`}>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
