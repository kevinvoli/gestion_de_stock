"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddData, useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Categories } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";
import { link } from "fs";


const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const permissionRequest = new RequestData("authService","permission")


const AjouterCategorie = () => {

  const { addData, loading, error } = useAddData();
  const [ categorie,setCategorie] = useState<Categories>()
  const [ AllCate,setAllCate] = useState<Categories[]>([])
  const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(permissionRequest.endpoint.GET(),"GET")

   useEffect(()=>{
    if (Allcategories) {
        setAllCate(Allcategories)
        console.log("touter les categorie:", Allcategories);
    }   
  },[Allcategories])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addData(permissionRequest.endpoint.POST(), "POST","#", categorie, );
  };
  // /Stock/categories_produits
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
      console.log("changement de valeu",e.target);
    
      const {name,value}= e.target;
      setCategorie((prev)=>({
          ...prev,
          [name]:name ==="parentId" ? parseInt(value) : value,
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
              value={categorie?.nom} 
              required
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="description">Description</label>
              <textarea  className="form-control" id="description"  name="description"
              value={categorie?.description ??""} 
              placeholder="Description"
              onChange={handleChange}
              ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="parentId">
                Categorie parent
            </label>
            <select 
            className="form-control" 
            id="parentId" 
            name="parentId"
            value={categorie?.parentId}
            onChange={(e)=>{setCategorie({parentId:+e.target.value})}}
            >
                <option  value={0}>selectionne une categorie parent
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

export default AjouterCategorie;
