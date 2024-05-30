# City API

Cette API permet de retourner le nom des villes correspondant à un code postal français en utilisant l'API `geo.api.gouv.fr`.

## Prérequis

- Node.js (version 14 ou plus)
- npm (version 6 ou plus)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/votre-utilisateur/tes-node-js.git
    cd city-api
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Créez un fichier `.env` à la racine du projet et ajoutez l'URL de base de l'API :

    ```env
    API_BASE_URL=https://geo.api.gouv.fr/communes?codePostal=
    ```

## Utilisation

1. Démarrez le serveur :

    ```bash
    npm start
    ```

2. L'API sera accessible à `http://localhost:3000`.

### Endpoints

#### GET /cities

Retourne les noms des villes correspondant à un code postal français.
