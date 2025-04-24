"use client";

import { getOne, useAddData, useFetchData } from "@/hooks/useFetchData";
import { RequestData } from "@/types/api/endpoint";
import { Entrepot, Rayons } from "@/types/model/entity";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



const pageInfo=[
    { label: "Stock", link: "/Stock" },
    { label: "categorie product", link: "/Stock/categories_produits" },
    { label: "Ajoute" }
  ]
  const RequestRayon = new RequestData("ServiceStock","rayon")
  const RequestEntrepot = new RequestData("ServiceStock","entrepot")
export default function  UpdateRayons () {
    const params = useParams();
    const {id} = params as {id:string}
    const { addData, loading, error } = useAddData();
    const router = useRouter();
    const [ rayon,setRayon] = useState<Rayons>({nom:"",})

    const {data:session, status} = useSession();
    const [ AllEntrepot,setAllCate] = useState<Entrepot[]>([])
    const {data:Entrepots, loading:loadCat, error:ErrCat} = useFetchData<Entrepot[]>(RequestEntrepot.endpoint.GET(),"GET")
    const {data:currentData, loading:loadCurrent, error:errCurrent}=  getOne<Rayons>(RequestRayon.endpoint.GETONE(id),"GET");

    useEffect(()=>{
        if (Entrepots) {
            setAllCate(Entrepots)
        }
        if (currentData) {   
            setRayon(currentData)
        }
    },[Entrepots,currentData])

        
          const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
            console.log("changement de valeu",e.target);
          
            const {name,value}= e.target;
            setRayon((prev)=>({
                ...prev,
                [name]:name ==="parentId" ? parseInt(value) : value,
            }));
        }
        const handleUpdate= async (e: React.FormEvent)=>{
            await addData(RequestRayon.endpoint.PAtCH(id), "POST","/Stock/rayons",  rayon);
        }
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Utilisateurs
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">Utilisateurs</a></li>
                    <li className="active"> Listes</li>
                </ol>
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
                                <label htmlFor="nom">Nom</label>
                                <input type="text" className="form-control" id="nom"  name="nom"
                                value={rayon?.nom} 
                                required
                                onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group col-md-6">
                                <label htmlFor="entrepotId">
                                    Entrepot
                                </label>
                                <select 
                                className="form-control" 
                                id="entrepotId" 
                                name="entrepotId"
                                value={rayon?.entrepotId ?? ""}
                                onChange={(e)=> setRayon({entrepotId:+ e.target.value})}>
                                    <option  value={0}>selectionne un entrpot 
                                    </option>
                                    {AllEntrepot.map((entreprot)=>(
                                        <option key={entreprot.id} value={entreprot.id}>
                                        {entreprot.nom}
                                    </option>
                                    ))}
                                </select>
                                    
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

