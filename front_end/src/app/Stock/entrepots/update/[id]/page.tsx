'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useAddData, useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Categories, Entrepot } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";





  const pageInfo=[
    { label: "Stock", link: "/Stock" },
    { label: "categorie product", link: "/Stock/categories_produits" },
    { label: "Ajoute" }
  ]
const Request = new RequestData("ServiceStock","entrepot")
export default function  UpdateEntrepot () {

    const params = useParams();
    const {id} = params as {id:string}
    const {data:session} = useSession();
    const router = useRouter();
const { addData, loading:loadupdate, error:errorupdate } = useAddData();
    const [ entrepot,setEntrepot] = useState<Entrepot>()

    const {data:currentData, loading, error}=  getOne<Categories>(Request.endpoint.GETONE(id),"GET");

    useEffect(()=>{
  
        if (currentData) {   
            setEntrepot(currentData)
        }
    },[currentData])


    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
        
        const {name,value}= e.target;
        setEntrepot((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleUpdate= async (e:React.FormEvent)=>{
        e.preventDefault();
        console.log("transmission de la categorie:",entrepot);
        
        await addData(Request.endpoint.POST(), "POST","/Stock/entrepots",  entrepot);

    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Utilisateurs
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <BreadCrumb items={pageInfo}/>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">Ajouter</h3>
                        </div>
                        <form role="form" onSubmit={handleUpdate}>
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nom">{entrepot?.nom}</label>
                                    <input type="name" className="form-control" 
                                    id="nom" 
                                    placeholder="Entrer votre nom" 
                                    value={entrepot?.nom}
                                    name="nom"
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="adresse">{entrepot?.adresse}</label>
                                    <input type="name" className="form-control" 
                                    id="adresse" 
                                    placeholder="Entrer votre prénom"
                                    value={entrepot?.adresse}
                                    name="adresse"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                       
                        </div>

                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}


