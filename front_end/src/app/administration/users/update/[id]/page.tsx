'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useAddData, useFetchData } from "@/hooks/useFetchData";
import { Categories } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";


const usersRequest = new RequestData("authService","utilisateurs")
export default function  UpdateCategories () {
    const params = useParams();
    const {id} = params as {id:string};
    const { addData, loading:loadupdate, error:errorupdate } = useAddData();
    const [ categories,setCategories] = useState<Categories>()
    const [ AllCate,setAllCate] = useState<Categories[]>([])
    const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(usersRequest.endpoint.GET(),"GET")

    const {data:dataList, loading:list, error:erreulist}=  getOne<Categories>(usersRequest.endpoint.GETONE(id),"GET");
    useEffect(()=>{

        if (Allcategories) {
            setAllCate(Allcategories)
            console.log("touter les categorie:", Allcategories);
        }
        if (dataList) {   
            setCategories(dataList)
        }
    },[Allcategories,dataList])
 
    const handleUpdate= async (e:React.FormEvent)=>{
        e.preventDefault();
        console.log("transmission de la categorie:",categories);
        
        await addData(usersRequest.endpoint.POST(), "POST","/Stock/categories_produits",  categories);

    }

    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
      
        const {name,value}= e.target;
        setCategories((prev)=>({
            ...prev,
            [name]: value,
        }));
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
                    <li><a href="#">update</a></li>
                    <li className="active"> Categorie</li>
                </ol>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">update</h3>
                        </div>
                        <form role="form" onSubmit={handleUpdate}>
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nom">Nom</label>
                                    <input type="text" className="form-control" id="nom"  name="nom"
                                    value={categories?.nom} 
                                     onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Description</label>
                                    <input name="description" type="text" className="form-control" id="description" placeholder="Entrer votre prénom" 
                                    value={categories?.description ?? ""}
                                    onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="form-group col-md-6">
                                <label htmlFor="parentId">
                                    Categorie parent
                                </label>
                                <select 
                                className="form-control" 
                                id="parentId" 
                                name="parentId"
                                value={categories?.parentId}
                                onChange={(e)=>{setCategories({parentId:+e.target.value})}}

                                >
                                    <option  value={0}>{categories?.parent?.nom ?? "selectionne une categorie parent"}
                                    </option>
                                    {AllCate.map((categorie)=>(
                                        categorie?.id === categories?.parentId?"":
                                        <option key={categorie.id} value={categorie.id}>
                                            {categorie.nom}
                                        </option>
                                    ))}
                                </select>
                                    
                                </div>
                            </div>
                           
                        </div>

                        <div className="box-footer">
                            <button type="submit"  className="btn btn-primary">Ajouter</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

