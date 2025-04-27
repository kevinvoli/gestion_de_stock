import type { Metadata } from "next";



import Head from "@/components/layout/heardComponent";
import Header from "@/components/layout/header";
import ImportScript from "@/components/layout/importJs";
import Footer from "@/components/layout/footer";
import Aside from "@/components/layout/aside";



export default function IndexLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <>
    
    <html lang="fr">
      <Head/>
      <body className="skin-blue">
        <div className="wrapper">
        <Header/>
        <Aside/>
        {children}
        <Footer/>
        </div>
        <ImportScript/>
    
      </body>
    </html>
    
    
    </>
   
  );
}
