"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddData, useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Rangements, Rayons } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]

const RequestRayon = new RequestData("ServiceStock","rayon")
const RequestRangement = new RequestData("ServiceStock","rangement")
const AddRengement = () => {

  const router = useRouter();
const [ Rangements,setRangements] = useState<Rangements>()
    const { addData, loading, error } = useAddData();
  const {data:session, status} = useSession();
  const [ royon,setRayon] = useState<Rayons[]>([])
  const {data:AllRayons, loading:loadCat, error:ErrCat} = useFetchData<Rayons[]>(RequestRayon.endpoint.GET(),"GET")

   useEffect(()=>{
  
          if (AllRayons) {
            setRayon(AllRayons)
          }
        
      },[AllRayons])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addData(RequestRangement.endpoint.POST(), "POST","/Stock/rangements", Rangements, );
  };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
    console.log("changement de valeu",e.target);
  
    const {name,value}= e.target;
    setRangements((prev)=>({
        ...prev,
        [name]: value,
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
        <h3 className="box-title">Ajouter une catégorie</h3>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="box-body">
          <div className="row">
          <div className="form-group col-md-6">
              <label htmlFor="nom">Nom</label>
              <input type="text" className="form-control" id="nom"  name="nom"
              value={Rangements?.nom} 
              required
              onChange={handleChange}
              />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="rayonId">
                Rayon 
            </label>
            <select 
            className="form-control" 
            id="rayonId" 
            name="rayonId"
            value={Rangements?.rayonId}
            onChange={(e)=> setRangements({rayonId:+ e.target.value})}
            >
                <option  value={0}>selectionne un rayon 
                </option>
                {royon.map((ray)=>(
                    <option key={ray.id} value={ray.id}>
                    {ray.nom}
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

export default AddRengement;
