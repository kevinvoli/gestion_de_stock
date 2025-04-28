# 🗃️ Gestion de Stock

📌 **Résumé** :  
Ce projet est une application web de **gestion de stocks**, développée en architecture **microservices**. Il inclut un front-end (panel admin) et plusieurs services back-end, dont un **gateway** et un **service d’authentification**.  
➡️ Ce projet a été réalisé en **collaboration**, chaque développeur s’est concentré sur des services spécifiques.

---

## 🙋‍♂️ À propos du projet

- 👤 **Kevin Voli** : Développement du **frontend** (React/Next.js), du **service d’authentification**, **gateway**, **stock**, **log**.
- 👥 **AZEEZ RIDWAN** : Développement d'une partie du **front-end**, des services **access-control**, **notification**, **commande**.



---

## 🔧 Stack technique

- 🔹 Frontend : React, Next.js, Tailwind CSS
- 🔹 Backend : NestJS, TypeORM, MySQL, Python, Fastapi, Asyncio
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
- Python >= 3.9
- MySQL installé et lancé localement
- Un fichier `.env` dans **chaque module** (frontend, gateway, auth-service, etc.)
- Un fichier `requirements.txt` dans **les modules** notification, access-control

### Exemple de `.env` à créer dans chaque service back-end :

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=motdepasse
MYSQL_DATABASE=gestion_stock
SERVER_PORT=3001 
```


### Exemple de `.env` à créer pour le frontEnd :

NEXTAUTH_SECRET="H2sn4MCR5tNjOrtVMll2TRUGZo/fnFbXJ+8Suc/9Ez8=" # Added by `npx auth`. Read more: https://cli.authjs.dev
NEXTAUTH_URL=http://localhost:3000 

# Lancer le projet

### Cloner le projet
```bash
git clone https://github.com/kevinvoli/gestion_de_stock/
cd gestion-stock
```

### Lancer les services backend ( NestJS + microservices )
>⚠️🚨 Commencer par lancer le module **gateway** en premier

```bash
cd ./module_gateway
npm install
npm run start:dev
```

```bash
cd ./module_auth
npm install
npm run start:dev
```

```bash
cd ./module_log
npm install
npm run start:dev
```

```bash
cd ./module_stock
npm install
npm run start:dev
```

### Lancer les services backend ( FastApi + microservices )
```bash
cd ./module_notification
python -m venv venv # Créer un environnement virtuel sur Mac/Linux/Windows
source venv/bin/activate # Activer l'environnement virtuel sur Mac/Linux
venv\Scripts\activate.bat # Activer l'environnement virtuel sur Windows (PowerShell)
pip install -r requiments.txt
cd ./src
python main.py
```

```bash
cd ./module_access_control
python -m venv venv # Créer un environnement virtuel sur Mac/Linux/Windows
source venv/bin/activate # Activer l'environnement virtuel sur Mac/Linux
venv\Scripts\activate.bat # Activer l'environnement virtuel sur Windows (PowerShell)
pip install -r requiments.txt
cd ./src
python main.py
```

```bash
cd ./module_commande
python -m venv venv # Créer un environnement virtuel sur Mac/Linux/Windows
source venv/bin/activate # Activer l'environnement virtuel sur Mac/Linux
venv\Scripts\activate.bat # Activer l'environnement virtuel sur Windows (PowerShell)
pip install -r requiments.txt
cd ./src
python main.py
```


### Lancer le frontend
```bash
cd ./frontEnd/
npm install
npm run dev
```