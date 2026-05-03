import { Epilogue, Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-man",
  subsets: ["latin"],
});
const epilogue = Epilogue({
  variable: "--font-epi",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nakshi Tiles | Modern Tile Collection Platform",
  description:
    "Explore a curated collection of modern and premium tile designs. Nakshi Tiles offers a seamless browsing experience with detailed product views and a clean, responsive interface.",
  keywords: [
    "tiles",
    "nakshi tiles",
    "tile design",
    "modern tiles",
    "floor tiles",
    "wall tiles",
    "interior design",
    "tile catalog",
  ],
  authors: [{ name: "Nakshi Tiles Team" }],
  creator: "Nakshi Tiles",
  metadataBase: new URL("https://noksha-tiles.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster toastOptions={{ style: { textAlign: "left" } }} />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
