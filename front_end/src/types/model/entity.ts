export type Categories = {
  id?:number;
  nom?: string;

  description?: string |null ;
  parentId?: number ;
  parent?:Categories
}

export type Entrepot = {
  id?:number;
  nom?: string;
  adresse?: string ;
}

export type Produit = {
  id?:number;

  nom?: string;

  description?: string ;

  categorieId?: number ;

  stockActuel?: number;

  seuilAlerte?: number;
}

export type Rangements = {
  id?:number;
  nom?: string;
  rayonId?: number;
  rayon?: Rayons
}

export  type Rayons = {
  id?:number;
  nom?: string;
  entrepotId?: number | null;
  entrepot?:Entrepot
}

export enum typeMouvement {
  entree= "entrée",
  sortie = "sortie"
}

export type MouvementStock = {

  typeMouvement?:typeMouvement ;
  
  quantite?: number;
 
  date?: '' ;
  
  rangementId?: number | null;

  rengemnt?: Rangements;
  produitId?: number;

  produit?: Produit
}


export type Permission = {
  id?: number
  nom?: string ;
  
  action?: string;

  module?: string;

  
  conditions?: string;
  
  isAdmin?: boolean | null; 

  ressource?: Ressources;
}

export type Ressources= {
  id?: string;
  nom?: string ;

  serviceName?: string ;

  permission?: Permission[];
}

export type Role= {
  
  nom?: string;
  
  description?: string;

  permissions?: Permission[];
 

  utilisateurs?: Users[];
  
}

export type data ={

  
  
  serviceName?:string;

  
  
  moduleName?:string;

  

  data?:{}|null;

  
  
  method?:string;

  
  
  serviceSource?:string;
}

export type  Corbeille= {
  Id?:number
  typeElement?: string | null;
  contenu?: string | null;
}


export type Log= {
    
  
  userId?: number | null;


  Id?: number | null;

  
  typeAction?: string | null;

 
  module?: string | null;

  description?: string | null;

 
}

export type Users = {
  id?: number;

  name?: string;

  email?: string;


  roleId?: number ;


  role?: Role;

  isAdmin?:boolean;
}

export type Fournisseur = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}
export type Client = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}
export type Commandes = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}
export type DetailsCommandes = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}
export type Notifications = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}
export type Services = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}
export type Journal_services = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}