import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
// const inter = Inter({ subsets: ["latin"] });
import LoadingSkeleton from "@/components/LoadingSkeleton";



export const metadata: Metadata = {
  title: "mrwilbroadnextjs",
  description: "Learn nextjs framework ...",
  authors:{
    url : "mrwilbroad.com",
    name: "mrwilbroadmark"
  },
  keywords : ['mrwilbroad',"learn nextjs",'SEO optimization']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="nl">
      <body>
        <Navigation/>
        {children}
        
        </body>
    </html>
  );
}
