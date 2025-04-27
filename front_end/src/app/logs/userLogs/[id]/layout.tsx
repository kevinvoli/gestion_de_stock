import type { Metadata } from "next";

import SessionProviderWrapper from "@/components/SessionProviderWrapper";



export default function StockLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <>

          {children}
    </>
   
  );
}
