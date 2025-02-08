import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Plus_Jakarta_Sans as Jakarta } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import SalAnimation from "@/components/SalAnimation";


const jakarta = Jakarta({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jakarta.className}>
      <SalAnimation />
      <NextNProgress color="#0286FF" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </main>
  );
}
