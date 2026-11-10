# Agence Démo — Immobilier à Ouagadougou

Site vitrine d'une agence immobilière based à Ouagadougou (Burkina Faso).
Construit avec React + Vite.

## Prérequis

- **Node.js** 18 ou supérieur (testé sur Node 24)
- **npm** 9 ou supérieur

## Lancer le projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev
```

Le site est ensuite disponible sur **http://localhost:5173**.

## Scripts npm

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement avec rechargement à chaud |
| `npm run build` | Compile le site dans le dossier `dist/` |
| `npm run preview` | Prévisualise le build de production en local |

## Stack technique

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- CSS Modules pour le style des composants

## Structure du projet

```
.
├── index.html          # Page d'entrée HTML
├── vite.config.js      # Configuration Vite
├── public/             # Fichiers statiques copiés tels quels
└── src/
    ├── main.jsx        # Point d'entrée React
    ├── App.jsx         # Composition des sections
    ├── index.css       # Styles globaux
    ├── components/     # Navbar, Hero, Contact, Footer
    └── data/
        └── agence.js   # Données de l'agence et des biens
```

## Contenu du site

Les données de l'agence (nom, téléphone, WhatsApp, adresse) et la liste des biens
sont centralisées dans `src/data/agence.js` : modifiez ce fichier pour mettre à jour
le contenu sans toucher aux composants.

## Déploiement

```bash
npm run build
```

Le build statique est généré dans `dist/`. Ce dossier est ignoré par Git et doit être
régénéré à chaque déploiement. Il est prêt à être hébergé sur Vercel, Netlify,
GitHub Pages ou tout hébergeur de fichiers statiques.

## Licence

Projet privé — tous droits réservés.
