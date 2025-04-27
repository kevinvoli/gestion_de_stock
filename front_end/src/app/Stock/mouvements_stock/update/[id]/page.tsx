'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useAddData, useFetchData } from "@/hooks/useFetchData";
import { Categories, MouvementStock, Produit, Rangements } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";



const RequestMouvement = new RequestData("ServiceStock","mouvementsStock")
const RequestRangement = new RequestData("ServiceStock","rangement")
const RequestProduit = new RequestData("ServiceStock","produit")
export default function  UpdateMouvementStock () {
     const { addData, loading:loadUpdate, error:errUpdate } = useAddData();
    const params = useParams();
    const {id} = params as {id:string}
    const {data:session} = useSession();
    const router = useRouter();

    const [ mouvementStock,setMouvementStock] = useState<MouvementStock>()
    const [ Allproduit,setProduit] = useState<Produit[]>([])
    const {data:produit, loading:loadProduit, error:ErrProduit} = useFetchData<Produit[]>(RequestProduit.endpoint.GET(),"GET")
    const [ allrengement,setRangemnt] = useState<Rangements[]>([])
    const {data:rangemnt, loading:loadRangemnt, error:ErrRangemnt} = useFetchData<Rangements[]>(RequestRangement.endpoint.GET(),"GET")

    const {data:currentData, loading, error}=  getOne<MouvementStock>(RequestMouvement.endpoint.GETONE(id),"GET");
    useEffect(()=>{

        if (produit) {
            setProduit(produit)
        }
        if (rangemnt) {   
            setRangemnt(rangemnt)
        }
        if (currentData) {   
            setMouvementStock(currentData)
        }
    },[produit,rangemnt,currentData])
 
    const handleUpdate= async (e:React.FormEvent)=>{
        e.preventDefault();
        console.log("transmission de la categorie:",mouvementStock);
        await addData(RequestMouvement.endpoint.PAtCH(id), "POST","/Stock/entrepots",  mouvementStock);

    }

    const handleChange= async (e: { target: { name: any; value: any; }; })=>{

        const {name,value}= e.target;
        setMouvementStock((prev)=>({
            ...prev,
            [name]:value
        }))
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
                                    {Allproduit.map((produit)=>(
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
                                    {allrengement.map((rangement)=>(
                                        <option key={rangement.id} value={rangement.id}>
                                        {rangement.nom}
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

