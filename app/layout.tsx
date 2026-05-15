import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick the weights you need
});
import "./globals.css";

import ClientLayout from "./components/ClientLayout";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "AppOTG School admin",
  icons:"/images/Screenshot 2025-08-25 190316.png"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
      className={`${poppins.className} flex flex-col`}      >
       
        {children}
      </body>
    </html>
  );
}
