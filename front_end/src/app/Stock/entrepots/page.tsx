"use client";
import Datatable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
import { RequestData } from "@/types/api/endpoint";
import { Entrepot } from "@/types/model/entity";



const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "entrepot", link: "#" },
  { label: "Listes" }
]
const Request = new RequestData("ServiceStock","entrepot")
export default function Entrepots(){

const {data:dataList, loading, error}= useFetchData<Entrepot[]>(Request.endpoint.GET(),"GET");

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
                <Box title="Liste des journaux" link="/Stock/entrepots/add">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <Datatable tableau={dataList} link="entrepots/update"/>}
              </Box>
            </div>
            </div>
        </section>
    </div>
    </>
  )
}

  