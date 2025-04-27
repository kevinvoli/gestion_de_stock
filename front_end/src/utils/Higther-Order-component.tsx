"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function withAuth(Component: any) {
  return function ProtectedRoute(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [client, setClient] = useState(false);

    useEffect(() => {
      setClient(true);
      if (status === "unauthenticated") {
        router.push("/auth/login");
      }
    }, [status, router]);
    if (!client) return null;

    if (status === "loading") return <p>Chargement...</p>;

    return <Component {...props} />;
  };
}
