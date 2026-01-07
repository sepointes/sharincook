# Sharincook

Sharincook est un projet de site web dédié à la création et au partage de recettes de cuisine.  
Ce dépôt comprend à la fois la partie **Frontend** (Angular 21) et la partie **Backend** (Spring Boot 3.5.9) ainsi que la configuration de la base de données (PostgreSQL et H2 pour l’environnement de développement local).

---

## Sommaire
1. [Aperçu du projet](#aperçu-du-projet)
2. [Architecture](#architecture)
3. [Technologies utilisées](#technologies-utilisées)
4. [Structure du dépôt](#structure-du-dépôt)
5. [Prérequis](#prérequis)
6. [Installation](#installation)
7. [Configuration de la base de données](#configuration-de-la-base-de-données)
8. [Exécution du projet](#exécution-du-projet)
9. [API](#api)
10. [Contribuer](#contribuer)
11. [Licence](#licence)

---

## Aperçu du projet

- **Objectif :**  
  Créer une plateforme en ligne permettant aux utilisateurs de créer, partager et découvrir des recettes de cuisine.

- **Fonctionnalités principales :**
  - Création et publication de recettes.
  - Consultation et partage de recettes.
  - Commentaires et interactions sociales.
  - Recherche avancée par ingrédients, temps de cuisson, etc.

Le projet est organisé en deux parties distinctes :
- **Frontend :** Application Angular (SPA).
- **Backend :** API REST développée avec Spring Boot.

---

## Architecture

- Architecture **client / serveur**
- Frontend Angular communiquant avec une API REST Spring Boot
- Backend **stateless**
- Authentification basée sur **JWT**
- Séparation claire des responsabilités (Frontend / Backend / Base de données)

---

## Technologies utilisées

### Frontend
- [Angular 21](https://angular.io/)
- TypeScript
- HTML5 / CSS3

### Backend
- [Spring Boot 3.5.9](https://spring.io/)
- Java 21
- [Maven](https://maven.apache.org/)
- Spring Web, Spring Data JPA, Spring Security

### Base de données
- [PostgreSQL](https://www.postgresql.org/) (production)
- [H2](https://www.h2database.com/) (développement local rapide)

### Outils
- Git & GitHub
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) (recommandé)

---

## Structure du dépôt

```text
sharincook/
├── frontend/    # Application Angular 21
├── backend/     # Application Spring Boot 3.5.9
├── infra/       # Configuration Docker (PostgreSQL, etc.)
└── docs/        # Documentation technique
