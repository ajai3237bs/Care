import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

export const metadata = {
  title: "Celedon Elder Care — Care That Comes Home",
  description:
    "Expert elder care, 24/7 support, and warm companionship — right to your parents' doorstep. Trusted by 10,000+ families across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
