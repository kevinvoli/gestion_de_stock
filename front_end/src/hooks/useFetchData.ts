"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export function useFetchData<T>(endpoint:string, method:"GET" | "POST" | "PUT" | "DELETE" |"PATCH",body?:any)
: {data:[],loading:boolean,error:string|null}{
  
  console.log("🔄 Chargement...",endpoint);
  
  const {data:session, status} = useSession();
  const [data, setData]= useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (status !== "authenticated") return; // Ne fait rien si l'utilisateur n'est pas connecté
            setLoading(true);
            setError(null);
  
            // console.log("🔄 Chargement des journaux...",session?.user?.accessToken);
            try{
              const options: RequestInit = {
                method,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${session?.user?.accessToken}`,
                },
                body: body ? JSON.stringify(body) : undefined,
              };
              const response = await fetch(`http://localhost:3003/${endpoint}`, options);
              if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status} ${response.statusText}`);
              }
              // drgodrogo
              const result : []= await response.json();
              // Vérifie que les données sont un tableau
            console.log("🔄 Chargement...",result);

              if (!Array.isArray(result )) {
                throw new Error("Les données reçues ne sont pas un tableau de journaux.");
              }
            console.log("🔄 Chargement des journaux...",result);

              setData(result);    
            }catch(error){
              console.error("❌ Erreur lors du chargement des journaux :", error);
              setError(error instanceof Error ? error.message: "Error inconnue")
            }finally{
              setLoading(false)
            }
        };
        fetchData();
    }, [session, status, endpoint,method,body]);
    return {data,loading,error}
}

export function getOne<T>(endpoint:string, method:"GET", body?:any){
  const {data:session, status} = useSession();
  const [data, setData]= useState<T>();
  // const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        if (status !== "authenticated") return; // Ne fait rien si l'utilisateur n'est pas connecté
        setLoading(true);
        setError(null);

        // console.log("🔄 Chargement des journaux...",session?.user?.accessToken);
        try{
          const options: RequestInit = {
            method,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
            body: body ? JSON.stringify(body) : undefined,
          };
          const response = await fetch(`http://localhost:3003/${endpoint}`, options);
          if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status} ${response.statusText}`);
          }
          // drgodrogo
          const result:T = await response.json();
          console.log("📜 Journaux reçus :", result);
          // Vérifie que les données sont un tableau
          // if (!Array.isArray(result )) {
          //   throw new Error("Les données reçues ne sont pas un tableau de journaux.");
          // }
        console.log("🔄 Chargement des journaux...",result);

          setData(result);    
        }catch(error){
          console.error("❌ Erreur lors du chargement des journaux :", error);
          setError(error instanceof Error ? error.message: "Error inconnue")
        }finally{
          setLoading(false)
        }
    };
    fetchData();
}, [session, status, endpoint,method,body]);
return {data,loading,error}
}


export function useAddData() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addData = async (endpoint: string, method: "POST"|"PATCH",link:string, body: any) => {
    if (status !== "authenticated") return;

    setLoading(true);
    setError(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(body),
      };

      const response = await fetch(`http://localhost:3003/${endpoint}`, options);
      console.log("response update",response);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      console.log("link redirection",link);
      
      router.push(link);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  return { addData, loading, error };
}
