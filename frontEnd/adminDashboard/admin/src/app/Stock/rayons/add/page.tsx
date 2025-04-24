"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddData, useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Entrepot, Rayons } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const RequestRayon = new RequestData("ServiceStock","rayon")
const RequestEntrepot = new RequestData("ServiceStock","entrepot")

const AddRayon = () => {
  
 

  const router = useRouter();
  const [ rayon,setRayon] = useState<Rayons>()
const { addData, loading:loadUpdate, error:errUpdate } = useAddData();
  const {data:session, status} = useSession();
  const [ AllEntrepot,setAllCate] = useState<Entrepot[]>([])
  const {data:Entrepots, loading:loadCat, error:ErrCat} = useFetchData<Entrepot[]>(RequestEntrepot.endpoint.GET(),"GET")

  useEffect(()=>{
  
          if (Entrepots) {
              setAllCate(Entrepots)
          }
        
  },[Entrepots])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addData(RequestRayon.endpoint.POST(), "POST","/Stock/entrepots",  rayon);
  };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
    console.log("changement de valeu",e.target);
  
    const {name,value}= e.target;
    setRayon((prev)=>({
        ...prev,
        [name]:value,
    }));
}

  return (
    <>
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
      <div className="box box-primary ">
      <div className="box-header">
        <h3 className="box-title">Ajouter un Rayons</h3>
      </div>
      <form onSubmit={handleSubmit} >
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
            onChange={(e)=> setRayon({entrepotId:+ e.target.value})}
            >
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Ajouter
        </button>
        </div>
       
        
      </form>
    
      
    
    </div>
    </div>
      </section>
</div>
    </>
  

  );
};

export default AddRayon;
