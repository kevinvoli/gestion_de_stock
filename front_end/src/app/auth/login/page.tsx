"use client";

import Checkbox from "@/components/UI/input/inputChackbox";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";


export default function Login(){
  const {data:session, status}= useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"; // Page cible


  const router = useRouter();
  console.error("⛔ session je suis arrive")
  useEffect(()=>{
  console.error("⛔ session",session)

    if (status === "loading") {
      setError('vous ete connecte')
    }
  
    if (status === "authenticated") {
      router.push(callbackUrl); // Redirige après connexion
    }
  },[status,session,callbackUrl])
 

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant l'envoi
    console.log("handleSubmit:", email, "  ", password);

    try {
  console.error("⛔ dans le try catch")

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("la response de SignIn !", response);

      if (!response || response.error) {
        throw new Error(response?.error || "⛔Échec de connexion"+response);
      }
      console.log("Connexion réussie !");
    } catch (err: any) {
        console.error("⛔ Erreur: Email ou mot de passe manquan 11",err)
      
      console.error("Erreur de connexion:", err);
      setError(err.message); // Stocker le message d'erreur
    }

    
  }
  return (
    <>
  <div  className="login-box">
    <div  className="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    {/* <!-- /.login-logo --> */}
    <div  className="login-box-body">
      
      {session ? <p className="login-box-msg">Vous êtes connecté</p> : <p  className="login-box-msg">Sign in to start your session</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} method="post">
        <div  className="form-group has-feedback">
          <input type="email" onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Email"/>
          <span  className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div  className="form-group has-feedback">
          <input type="password" onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="Password"/>
          <span  className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div  className="row">
          <div  className="col-xs-8">    
            <div  className="checkbox icheck">
              <Checkbox/>
            </div>                        
          </div>
          {/* <!-- /.col --> */}
          <div  className="col-xs-4">
            <button type="submit"  className="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
        {/* <!-- /.col --> */}
        </div>
      </form>

      <div  className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#"  className="btn btn-block btn-social btn-facebook btn-flat"><i  className="fa fa-facebook"></i> Sign in using Facebook</a>
      <a href="#"  className="btn btn-block btn-social btn-google-plus btn-flat"><i  className="fa fa-google-plus"></i> Sign in using Google+</a>
      </div>
      {/* <!-- /.social-auth-links --> */}

      <a href="#">I forgot my password</a><br/>
      <a href="register.html"  className="text-center">Register a new membership</a>

    </div>
    {/* <!-- /.login-box-body --> */}
    
  </div>
  {/* <!-- /.login-box --> */}

  {/* <!-- jQuery 2.1.3 --> */}
  <script src="/plugins/jQuery/jQuery-2.1.3.min.js"></script>
  {/* <!-- Bootstrap 3.3.2 JS --> */}
  <script src="/js/bootstrap.min.js" type="text/javascript"></script>
  {/* <!-- iCheck --> */}
  <script src="/plugins/iCheck/icheck.min.js" type="text/javascript"></script>


    </>
  )
}

 