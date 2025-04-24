"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddData, useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Categories, Produit } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]

const RequestCategorie = new RequestData("ServiceStock","categorie")
const RequestProduit = new RequestData("ServiceStock","categorie")

const AddProduit = () => {

  const router = useRouter();
  const [ produit,setProduit] = useState<Produit>({nom:"",})
const { addData, loading, error } = useAddData();
  const {data:session, status} = useSession();
  const [ AllCate,setAllCate] = useState<Categories[]>([])
  const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(RequestCategorie.endpoint.GET(),"GET")

    useEffect(()=>{
      if (Allcategories) {
        setAllCate(Allcategories)
      }
    
    },[Allcategories])
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await addData(RequestProduit.endpoint.POST(), "POST","/Stock/Produits", produit, );
    };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
  
    const {name,value}= e.target;
    setProduit((prev)=>({
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
        <h3 className="box-title">Ajouter une catégorie</h3>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="box-body">
          <div className="row">
          <div className="form-group col-md-6">
              <label htmlFor="nom">Nom</label>
              <input type="text" className="form-control" id="nom"  name="nom"
              value={produit?.nom} 
              required
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="description">Description</label>
              <input  className="form-control" id="description"  name="description"
              value={produit?.description ? produit?.description: ""} 
              placeholder="Description"
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="stockActuel">stockActuel</label>
              <input  className="form-control" id="stockActuel"  name="stockActuel"
              value={produit?.stockActuel} 
              placeholder="stockActuel"
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="seuilAlerte">seuilAlerte</label>
              <textarea  className="form-control" id="description"  name="seuilAlerte"
              value={produit?.seuilAlerte} 
              placeholder="seuilAlerte"
              onChange={handleChange}
              ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="categorieId">
                Categorie produit
            </label>
            <select 
            className="form-control" 
            id="categorieId" 
            name="categorieId"
            value={produit?.categorieId ? produit.categorieId: ""}
            onChange={(e)=>{setProduit({categorieId:+e.target.value})}}
            >
                <option  value={0}>selectionne une categorie 
                </option>
                {AllCate.map((categorie)=>(
                    <option key={categorie.id} value={categorie.id}>
                    {categorie.nom}
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

export default AddProduit;
