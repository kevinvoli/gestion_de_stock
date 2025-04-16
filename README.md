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

```bash
# Cloner le projet
git clone https://github.com/tonpseudo/gestion-stock
cd gestion-stock

# Lancer les services backend (exemple avec NestJS + microservices)
cd api-gateway
npm install
npm run start:dev

cd ../auth-service
npm install
npm run start:dev

# Lancer le frontend
cd ../frontend
npm install
npm run dev
