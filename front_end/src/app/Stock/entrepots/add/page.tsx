"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddData, useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Entrepot } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";





const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "entrepot", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const Request = new RequestData("ServiceStock","entrepot")

const AddEntrepot = () => {
  const router = useRouter();
  const [ entrepot,setEntrepot] = useState<Entrepot>()
 const { addData, loading, error } = useAddData();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addData(Request.endpoint.POST(), "POST","/Stock/categories_produits", entrepot, );
  };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{ 
    const {name,value}= e.target;
    setEntrepot((prev)=>({
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
              value={entrepot?.nom} 
              required
              onChange={handleChange}
              />
          </div>

          <div className="form-group col-md-6">
              <label htmlFor="adresse">adresse</label>
              <input type="text" className="form-control" id="adresse"  name="adresse"
              value={entrepot?.adresse ?? "" } 
              required
              onChange={handleChange}
              />
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

export default AddEntrepot;
