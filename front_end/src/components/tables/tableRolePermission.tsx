"use client"

import { Ressources } from "@/types/model/entity"
import { Permission } from '../../types/model/entity';

export default function TableRolePermission({ressource}:{ressource:Ressources}){
  return (
    <>
    {ressource.permission ?
    <>
      <thead>
          <tr>
            <th className="l220">{ressource.nom}</th>
            <th className="l60">visioner</th>
            <th className="l60">ajouter</th>
            <th className="l60">modifier</th>
            <th className="l60">supprimer</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">Autorisation</td>
          {ressource.permission.map((permission)=>(

            
            <td className="">
              <div className="form-group">
              <label htmlFor={permission.nom } style={{ display: "margin-left:10px" }}>
          
           
                <input type="checkbox" name={permission.nom} id={permission.nom } value={permission.id}   onChange={
                  (e)=>{
                    console.log(    e.target.getAttribute("checked")); 
                  }
                } className="flat-red" />
                <span></span>
            </label>
              </div>
            
          </td>
          ))}  
        </tr>
      </tbody>
    </>


    : {} }
      
      
         
    </>
  )
}