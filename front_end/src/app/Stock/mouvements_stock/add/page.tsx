"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddData, useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { MouvementStock, Produit, Rangements } from "@/types/model/entity";
import Rangement from '../../rangements/page';
import { RequestData } from "@/types/api/endpoint";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const RequestMouvement = new RequestData("ServiceStock","mouvementsStock")
const RequestRangement = new RequestData("ServiceStock","rangement")
const RequestProduit = new RequestData("ServiceStock","produit")
const AddMouvementStock = () => {
  const router = useRouter();
  const [ mouvementStock,setMouvementStock] = useState<MouvementStock>()
    const { addData, loading, error } = useAddData();
  const [ AllProduit,setAllProduit] = useState<Produit[]>([])
  const {data:produits, loading:loadProduit, error:ErrProduit} = useFetchData<Produit[]>(RequestProduit.endpoint.GET(),"GET")

  const [ AllRangement,setRangemnet] = useState<Rangements[]>([])
  const {data:rangement, loading:loadCat, error:ErrCat} = useFetchData<Rangements[]>(RequestRangement.endpoint.GET(),"GET")


   useEffect(()=>{
  
        if (produits) {
            setAllProduit(produits)
            console.log("touter les categorie:", produits);
        }
        if (rangement) {
            setRangemnet(rangement)
            console.log("touter les categorie:", rangement);
        }
        
      },[produits,rangement])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCategorie =mouvementStock;
    await addData(RequestMouvement.endpoint.POST(), "POST","/Stock/categories_produits", mouvementStock, );
  };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
    console.log("changement de valeu",e.target);
  
    const {name,value}= e.target;
    setMouvementStock((prev)=>({
        ...prev,
        [name]:name ==="parentId" ? 
              parseInt(value) : 
              name==="date" ?
              new Date(value) :
              value,
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
              <label htmlFor="typeMouvement">type de mouvemenkt</label>
              <input type="text" className="form-control" id="typeMouvement"  name="typeMouvement"
              value={mouvementStock?.typeMouvement} 
              required
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="date">date</label>
              <input  className="form-control" id="date"  name="date"
              type="date"
              value={mouvementStock?.date ? mouvementStock?.date: ""} 
              placeholder="date"
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="stockActuel">stockActuel</label>
              <textarea  className="form-control" id="stockActuel"  name="stockActuel"
              value={mouvementStock?.quantite} 
              placeholder="stockActuel"
              onChange={handleChange}
              ></textarea>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="produitId">
                choisir le produit
            </label>
            <select 
            className="form-control" 
            id="produitId" 
            name="produitId"
            value={mouvementStock?.produitId?.toString()}

            onChange={(e)=> setMouvementStock({produitId:+ e.target.value})}
            >
                <option  value={0}>selectionne un produit
                </option>
                {AllProduit.map((produit)=>(
                    <option key={produit.id} value={produit.id}>
                    {produit.nom}
                  </option>
                ))}
            </select>
                
            </div>

            <div className="form-group col-md-6">
            <label htmlFor="rangementId">
                chisir le rangemnt
            </label>
            <select 
            className="form-control" 
            id="rangementId" 
            name="rangementId"
            value={mouvementStock?.rangementId?.toString()}
            onChange={(e)=> setMouvementStock({rangementId:+ e.target.value})}>
                <option  value={0}>selectionne un Rangement 
                </option>
                {AllRangement.map((rangement)=>(
                    <option key={rangement.id} value={rangement.id}>
                    {rangement.nom}
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

export default AddMouvementStock;
