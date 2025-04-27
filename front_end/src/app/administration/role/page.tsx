"use client";
import Datatable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
import { RequestData } from "@/types/api/endpoint";
import { Categories } from "@/types/model/entity";


const pageInfo=[
  { label: "Stock", link: "Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Listes" }
]

const rolesRequest = new RequestData("authService","roles")
export default function Categorie(){

 const {data:dataList, loading, error}=  useFetchData<Categories[]>(rolesRequest.endpoint.GET(),"GET");
 
console.log("🛠 Colonnes détectées1 :",dataList);
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
                <Box title="Liste des journaux" link=" role/add">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <Datatable tableau={dataList} link=" role/update"/>}
              </Box>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

  