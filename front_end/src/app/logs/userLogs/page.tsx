"use client";
import DataTable from "@/components/tables/dataTable";
import Datatable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
import { RequestData } from "@/types/api/endpoint";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Logs = {
  id: number;

  userId: number | null;

  typeAction: string | null;
 
  dateAction: Date | null;

  module: string | null;

  description: string | null;
}

const pageInfo=[
  { label: "Logs", link: "#" },
  { label: "user logs", link: "#" },
  { label: "Listes" }
]

const RequestProduit = new RequestData("logService","log")
export default function Log(){
const {data:dataList, loading, error}= useFetchData<Logs[]>(RequestProduit.endpoint.GET(),"GET");


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
              <Box title="Liste des journaux" link="">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <DataTable tableau={dataList} link="/update" />}
              </Box>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

  