"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation"


export default function Confirmation(){
  const searchParams = useSearchParams();
  const router = useRouter()

  const token = searchParams.get("token");
  const [message, setMessage] = useState("verification en cours ...");


  useEffect(()=>{
    if (!token) {
      setMessage("Token invalide")
      return;
    }
    fetch(`http://localhost:3003/gateway/confirmation?service=authService&module=auth&token=${token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || "Erreur lors de la vérification")
        console.log("le message de retour:",data);
        setTimeout(()=> router.push("/login"),2000)
        if (message=== "Email vérifié avec succès !") {
          setTimeout(()=> router.push("/login"),2000)
        } 
      })
      .catch(() => setMessage("Erreur serveur !"));
  }, [token]);

  return (
    <>
      <h1 className="bg-blue-500">{message}</h1>;
    </>
  )
};
