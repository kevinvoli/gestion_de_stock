import ImportScript from "@/components/layout/importJs";
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
