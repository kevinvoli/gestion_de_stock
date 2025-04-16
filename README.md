# 🗃️ Gestion de Stock

📌 **Résumé** :  
Ce projet est une application web de **gestion de stocks**, développée en architecture **microservices**. Il inclut un front-end (panel admin) et plusieurs services back-end, dont un **gateway** et un **service d’authentification**.  
➡️ Ce projet a été réalisé en **collaboration**, chaque développeur s’est concentré sur des services spécifiques.

---

## 🙋‍♂️ À propos du projet

- 👤 **Kevin Voli** : Développement du **frontend** (React/Next.js), du **service d’authentification**, et du **gateway**.
- 👥 Autre développeur : En charge d’autres services back-end.

> 💡 Cette répartition permet de simuler une vraie équipe de production dans une architecture distribuée.

---

## 🔧 Stack technique

- 🔹 Frontend : React, Next.js, Tailwind CSS
- 🔹 Backend : NestJS, TypeORM, MySQL
- 🔹 Architecture : Microservices (communication via protocole TCP)
- 🔹 Authentification : JWT
- 🔹 Permissions : Rôles, autorisations dynamiques
- 🔹 Export de données : PDF, CSV

---

## ✨ Fonctionnalités

- ✅ Authentification avec JWT
- ✅ Gestion des rôles et permissions
- ✅ CRUD Produits / Utilisateurs / Stocks
- ✅ Exportation des données en PDF et CSV
- ✅ Recherche dynamique
- ✅ Interface d'administration (Next.js)

---

## 📸 Aperçu

![Aperçu de l'application](https://via.placeholder.com/800x400.png?text=Screenshot+disponible+bientôt)

---

## 🚀 Lancer le projet localement

### Prérequis

- Node.js >= 18
- MySQL installé et lancé localement
- Un fichier `.env` dans **chaque module** (frontend, gateway, auth-service, etc.)

### Exemple de `.env` à créer dans chaque service back-end :

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=motdepasse
MYSQL_DATABASE=gestion_stock
SERVER_PORT=3001


### Exemple de `.env` à créer pour le frontEnd :

NEXTAUTH_SECRET="H2sn4MCR5tNjOrtVMll2TRUGZo/fnFbXJ+8Suc/9Ez8=" # Added by `npx auth`. Read more: https://cli.authjs.dev
NEXTAUTH_URL=http://localhost:3000 

```bash
# Cloner le projet
git clone https://github.com/kevinvoli/gestion_de_stock/
cd gestion-stock

# Lancer les services backend ( NestJS + microservices)
cd ./module_auth
npm install
npm run start:dev

cd ./module_gateway
npm install
npm run start:dev

cd ./module_log
npm install
npm run start:dev

cd ./module_stock
npm install
npm run start:dev

# Lancer le frontend
cd ./frontEnd/admin
npm install
npm run dev
