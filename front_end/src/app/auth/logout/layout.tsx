import type { Metadata } from "next";


import SessionProviderWrapper from "@/components/SessionProviderWrapper";




export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
      
        {children}
   
  
    
    
    </>
   
  );
}
