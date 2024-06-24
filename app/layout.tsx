import type { Metadata } from "next";

import "./globals.css";
import { NAVBAR } from "@/components/Navbar";




export const metadata: Metadata = {
  title: "Trailblazers",
  description: "Travel app for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
   
       
        <main className="relative overflow-hidden">
          {children}
          </main>
     
      

      </body>
      
    </html>
  );
}
