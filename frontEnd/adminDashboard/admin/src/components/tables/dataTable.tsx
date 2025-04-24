"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";


interface TableauProps{
  tableau: Record<string, any>[];
  link:string
}

const Datatable : React.FC<TableauProps>=({tableau,link})=>{
  const [currentPage, setCurrentPage]= useState(1);
  const itemsPerPage= 30; //🔥 Nombre d'éléments par page
  const router = useRouter();

  if (!tableau || tableau.length===0) {
    return <p className="text-center text-gray-500">Aucune donnée disponible</p>;
  }
  console.log("🔥",tableau)
  const columns= Object.keys(tableau[0]);

  const totalPages= Math.ceil(tableau.length/itemsPerPage);
  const startIndex = (currentPage -1) * itemsPerPage;
  const currentData = tableau.slice(startIndex, startIndex + itemsPerPage);
  const handleView = (row: Record<string, any>) => {
    console.log("🔍 Voir :", row);
    alert(`Voir l'élément : ${JSON.stringify(row, null, 2)}`);
  };

  // Fonction pour modifier un élément
  const handleEdit = (id: Record<string, any>) => {
    console.log("✏️ Modifier :", id);
    alert(`Modifier l'élément : ${JSON.stringify(id, null, 2)}`);
    router.push(`${link}/${id}`)

  };

  // Fonction pour supprimer un élément
  const handleDelete = (row: Record<string, any>) => {
    console.log("🗑️ Supprimer :", row);
    if (confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      alert(`Élément supprimé : ${JSON.stringify(row, null, 2)}`);
    }
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const renderCellValue = (value: any): React.ReactNode => {
    if (value === null || value === undefined) return "";
  
    // Si c'est un tableau (ex: tags, produits)
    if (Array.isArray(value)) {
      if (value.length === 0) return "";
      return value.map((item, index) => {
        if (typeof item === "object" && item !== null) {
          return <span key={index}>{item.nom || "[objet]"}{index < value.length - 1 ? ", " : ""}</span>;
        }
        return <span key={index}>{String(item)}{index < value.length - 1 ? ", " : ""}</span>;
      });
    }
    let lundi = new Date(value)

    if (typeof lundi==="object" && lundi.toDateString()!=="Invalid Date" && lundi.toLocaleDateString() !=="01/01/1970" ) {
      console.log("ma nouvel data",lundi.toDateString());
      
      return lundi.toLocaleDateString() || "[objet]";
    }

    // Date.prototype.toDateString()
    // Si c'est un objet (relation simple)
    if (typeof value === "object") {
      return value.nom || "[objet]";
    }
  
    return String(value);
  };
  

  return (
    <>
             
      <table id="example2" className="table table-bordered table-hover">
        <thead>
          <tr>
            {
              columns.map((col)=>(
                <th key={col} >
                  {col}
                </th>
              ))
            }
            <th key="action">action</th>
          </tr>
        </thead>
        <tbody>
            {
              currentData.map((row, rowIndex)=>(
                <tr key={rowIndex}>
                  {columns.map((col,colIndex)=>(
                    <td key={`${rowIndex}-${colIndex}`}>
                    {renderCellValue(row[col])}
                    </td>
                    
                  ))}
                <td style={{display:"flex",flexDirection:"row"}}>
                <button className="btn btn-info btn-sm" onClick={() => handleView(row)}>👁</button>
                {row.id !== undefined && (
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(row.id)}>✏</button>
                )}
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row)}>🗑</button>
              </td>
                </tr>
              ))
            }
        </tbody>
        <tfoot>
        </tfoot>
      </table>

      <div className="pagination">
        <button onClick={
          ()=>setCurrentPage((prev)=>Math.max(prev-1,1))
        }
        disabled={currentPage===1}>
          precedent
        </button>

        <span>
          page {currentPage} sur {totalPages}
        </span>

        <button onClick={
          ()=>setCurrentPage((prev)=> Math.min(prev + 1, totalPages))
        }
        disabled= {currentPage === totalPages}>
          Suivant
        </button>
      </div>
        {/* 🔥 Styles CSS */}
        <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
        }
        button {
          padding: 5px 10px;
          border: none;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          border-radius: 5px;
          margin: 2px;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .btn {
          padding: 5px 8px;
          margin: 2px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
        .btn-info {
          background-color: #17a2b8;
          color: white;
        }
        .btn-warning {
          background-color: #ffc107;
          color: black;
        }
        .btn-danger {
          background-color: #dc3545;
          color: white;
        }
      `}</style>
    </>
  )
};

export default Datatable;

