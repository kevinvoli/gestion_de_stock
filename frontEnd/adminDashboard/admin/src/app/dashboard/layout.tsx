"use client";

import Aside from "@/components/layout/aside";
import Header from "@/components/layout/header";
import ImportScript from '../../components/layout/importJs';
import Footer from "@/components/layout/footer";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <link href="http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet" type="text/css" />    

            
        </head>
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
  );
}
