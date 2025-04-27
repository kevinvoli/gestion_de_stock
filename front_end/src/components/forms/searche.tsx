"use client";

import { useState } from "react";



export default function Searche(){
  const [search, setSearch] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/search", {  // Ton API NestJS
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ search}),
    });

    if (res.ok) {
      alert("Compte créé ! Vérifie ton email.");
    } else {
      alert("Erreur à l'inscription.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}  className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <span className="input-group-btn">
            <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
          </span>
        </div>
      </form>
    </>
  )
}