"use client";
import DataTable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
import { RequestData } from "@/types/api/endpoint";
import { Corbeille } from "@/types/model/entity";

const pageInfo=[
  { label: "Logs", link: "#" },
  { label: "Corbeille", link: "#" },
  { label: "Listes" }
]


const RequestProduit = new RequestData("logService","corbeille")
export default function Corbeilles(){
  const {data:dataList, loading, error}= useFetchData<Corbeille[]>(RequestProduit.endpoint.GET(),"GET");

  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Corbeille
            <small>Corbeille</small>
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

  