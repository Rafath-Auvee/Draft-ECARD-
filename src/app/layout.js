import "./globals.css";
import { Fraunces } from "next/font/google";
import localFont from "@next/font/local";

// const satoshi = localFont({
//   src: "../../public/fonts/Satoshi-Variable.ttf", // Adjust the path based on the actual location
//   variable: "--font-satoshi",
// });

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata = {
  title: "Save The Date",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable}`}>{children}</body>
    </html>
  );
}
