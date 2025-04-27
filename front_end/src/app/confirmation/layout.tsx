import type { Metadata } from "next";

export default function ConfirmationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
    <html lang="en">
 
    <body className="register-page">
        <div className="wrapper">
        {children}
        </div>
      </body>
    </html>
    
    
    </>
   
  );
}
