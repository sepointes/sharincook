# Sharincook

Sharincook est un projet de site web dédié à la création et au partage de recettes de cuisine.  
Ce dépôt comprend à la fois la partie **Frontend** (Angular 19) et la partie **Backend** (Spring Boot 3.4.1) ainsi que la configuration de la base de données (PostgreSQL et H2 pour l’environnement de développement).

---

## Sommaire
1. [Aperçu du projet](#aperçu-du-projet)
2. [Technologies utilisées](#technologies-utilisées)
3. [Prérequis](#prérequis)
4. [Installation](#installation)
5. [Configuration de la base de données](#configuration-de-la-base-de-données)
6. [Exécution du projet](#exécution-du-projet)
7. [Contribuer](#contribuer)
8. [Licence](#licence)

---

## Aperçu du projet

- **Objectif :** Créer une plateforme en ligne pour partager des recettes de cuisine.
- **Fonctionnalités principales :**
    - Création et publication de recettes.
    - Lecture, partage et commentaire de recettes.
    - Recherche avancée par ingrédients, temps de cuisson, etc.

Le projet est organisé en deux parties distinctes :
- **Frontend :** Basé sur Angular 19 pour l’interface utilisateur.
- **Backend :** Développé en Spring Boot 3.4.1 pour la gestion des données et des API REST.

---

## Technologies utilisées

- **Frontend :**
    - [Angular 19](https://angular.io/)
    - TypeScript, HTML5, CSS3

- **Backend :**
    - [Spring Boot 3.4.1](https://spring.io/)
    - Java 17+
    - [Maven](https://maven.apache.org/) pour la gestion des dépendances

- **Base de données :**
    - [PostgreSQL](https://www.postgresql.org/) pour la production
    - [H2](https://www.h2database.com/) pour les environnements de développement et de test

- **IDE :**
    - [IntelliJ IDEA](https://www.jetbrains.com/idea/) (dernière version)

---

## Prérequis

Avant de cloner le projet et de l’exécuter localement, assure-toi d’avoir installé :

- **Java 17 ou plus**
- **Maven** (dernière version recommandée)
- **Node.js et npm** (versions compatibles avec Angular 19)
- **Git** pour cloner le projet
- (Optionnel) **IntelliJ IDEA** ou tout autre IDE prenant en charge Maven et Angular

---

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/ton-compte/sharincook.git
