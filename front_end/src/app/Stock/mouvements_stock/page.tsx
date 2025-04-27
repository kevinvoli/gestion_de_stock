"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";
import Box from "@/components/UI/Box";
import { MouvementStock, Produit } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";


const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "produit", link: "#" },
  { label: "Listes" }
]

const Request = new RequestData("ServiceStock","mouvementsStock")
export default function MouvementStocks(){

const {data:dataList, loading, error}= useFetchData<MouvementStock[]>(Request.endpoint.GET(),"GET");

  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Logs
            <small>Journal Service</small>
          </h1>
          <BreadCrumb items={pageInfo}/>

        </section>

        <section className="content">
            <div className="row">
            <div className="col-xs-12">
                <Box title="Liste des journaux" link="/Stock/mouvements_stock/add">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <Datatable tableau={dataList} link="mouvements_stock/update"/>}
              </Box>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

  