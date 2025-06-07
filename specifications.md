# Cahier des Charges Préliminaire : Application "Décide Mieux"

## Introduction

Ce document présente les spécifications fonctionnelles et techniques initiales pour le développement de l'application web "Votons Mieux". L'objectif est de fournir un outil simple et intuitif pour faciliter la prise de décision collective en utilisant le système de Jugement Majoritaire, tout en sensibilisant aux lacunes du vote majoritaire traditionnel. Ce projet est conçu comme une initiative open source et collaborative.

**Public Cible :** Associations, collectifs, petites entreprises, groupes d'amis, familles – toute entité souhaitant prendre des décisions de manière plus nuancée et éclairée.


**Nom proposé (à débattre) :** Décide Mieux / Jugement Éclairé / Vote Juste / Décidons Mieux / Décidez mieux

---

## I. Vision et Objectifs du Projet

### A. Problème à Résoudre
Le **vote majoritaire** classique, bien qu'omniprésent, est souvent inefficace et potentiellement **dangereux** pour la prise de décision collective. Il conduit à :
* Des **décisions polarisantes** : favorise les options extrêmes ou les moins rejetées, plutôt que les plus consensuelles.
* Le **"vote utile" toxique** : force les participants à voter stratégiquement plutôt que sincèrement.
* Un **faux consensus et de la frustration** : ne reflète pas la nuance des préférences individuelles et peut laisser un sentiment d'injustice.

### B. La Solution Proposée : Le Jugement Majoritaire
L'application "Votons Mieux" mettra en œuvre le **Jugement Majoritaire**, un système de vote qui permet une évaluation plus nuancée des options et favorise le consensus. Chaque participant évalue chaque option selon une **échelle de mentions** (ex: "Insuffisant", "Passable", "Bien", "Excellent"). L'option gagnante est celle dont la **mention médiane** est la plus élevée, reflétant le véritable jugement collectif.

### C. Objectifs de l'Application
* **Faciliter la création et la gestion** de sondages en Jugement Majoritaire: Permettre à n'importe qui de lancer un sondage avec ses propres options, facilement.
* Offrir une **expérience de vote intuitive** et engageante pour les participants: Guider les participants pour évaluer chaque option sans friction.
* **Présenter les résultats** de manière claire, transparente et facilement interprétable: Afficher l'option gagnante et la distribution des scores.
* **Éduquer** les utilisateurs sur les avantages du Jugement Majoritaire et les limites du vote majoritaire:  Intégrer des messages d'alerte et des explications concises.
* Être **simple, ergonomique et moderne** dans son design et son utilisation: esign épuré, réactif, facile à utiliser sur tout appareil.
* Développer le projet dans un esprit **open source et collaboratif**.

---

### II. Fonctionnalités Clés

#### A. Côté Créateur de Sondage

1.  **Création de Compte / Connexion (simplifiée) :**
    * Possibilité de créer un compte avec email/mot de passe ou via des services tiers (Google, Apple).
    * Option pour créer un sondage sans compte (avec lien de gestion envoyé par email) pour une friction minimale.
2.  **Formulaire de Création de Sondage :**
    * **Titre du Sondage :** Ex: "Choix de la destination pour les vacances d'été"
    * **Description du Sondage :** Contexte et informations complémentaires.
    * **Options de Vote :**
        * Champ texte pour ajouter chaque option (ex: "Montagne", "Plage", "Ville").
        * Possibilité d'ajouter des descriptions courtes pour chaque option.
        * Boutons "Ajouter une option", "Supprimer une option".
    * **Durée du Sondage :** Date et heure de fin.
    * **Anonymat des Participants :** Option pour que les votes soient anonymes ou non (par défaut anonyme).
    * **Paramètres de Partage :** Génération d'un lien unique pour le sondage.
    * **Messages d'alerte sur le vote majoritaire (intégration subtile) :**
        * Lors de la création, un petit encadré ou un tooltip expliquant pourquoi le jugement majoritaire est préférable au vote majoritaire classique, avec un lien vers une explication plus détaillée.
        * "Pourquoi le Jugement Majoritaire ? Découvrez comment il permet des décisions plus justes et représentatives."

#### B. Côté Participant (Votant)

1.  **Accès Facile :**
    * Lien unique du sondage (via email, message, etc.).
    * Interface claire et épurée, pas besoin de se connecter ou de créer un compte pour voter.
2.  **Interface de Vote par Jugement Majoritaire :**
    * Affiche le titre et la description du sondage.
    * Liste claire de toutes les options à évaluer.
    * Pour chaque option, des "mentions" (échelles d'évaluation) à sélectionner :
        * **Exemples d'échelles de mentions :**
            * "Insuffisant", "Passable", "Assez Bien", "Bien", "Très Bien", "Excellent" (classique).
            * Ou une échelle plus simple : "À Éviter", "Neutre", "J'Adore".
            * Il est crucial d'expliquer ce que signifie chaque mention au participant.
    * Bouton "Soumettre mon vote" (avec confirmation).
    * **Message d'information sur le jugement majoritaire :** Rappel rapide de comment fonctionne le système et de son avantage par rapport au vote majoritaire.

#### C. Affichage des Résultats

1.  **Page de Résultat (pour le créateur et potentiellement les participants) :**
    * **Option Gagnante :** Clairement affichée avec sa mention médiane.
    * **Visualisation des Mentions :** Pour chaque option, un graphique (histogramme ou barres) montrant la répartition des mentions reçues.
        * Ex: Pour l'option "Plage", on verrait combien de personnes ont voté "Excellent", combien "Bien", etc.
    * **Classement des Options :** Liste des options classées par mention médiane décroissante. En cas d'égalité des médianes, une règle de départage doit être appliquée (ex: celle ayant le moins de mentions "insuffisant" ou le plus de mentions "excellent").
    * **Tableau Récapitulatif :** Afficher le nombre total de participants, la date de fin du sondage.
    * **Comparaison Subtile avec le Vote Majoritaire (optionnel mais puissant) :**
        * "Si nous avions utilisé le vote majoritaire classique, l'option [X] aurait pu gagner avec [Y] voix, alors que le Jugement Majoritaire a révélé que [Z] est l'option la plus consensuelle."
        * Ceci pourrait être un petit encadré "Le saviez-vous ?"

#### D. Gestion du Sondage (pour le créateur)

1.  **Tableau de Bord :** Lister tous les sondages créés, leur statut (ouvert, fermé), et l'accès aux résultats.
2.  **Gestion des Sondages :** Possibilité de modifier le titre/description (tant que le sondage n'a pas commencé), de clôturer un sondage, de le dupliquer.
3.  **Partage :** Accès facile au lien de partage du sondage.


---

## III. Fonctionnalités Détaillées (MVP - Produit Minimum Viable)

Pour la première version (MVP), nous nous concentrerons sur les fonctionnalités essentielles pour valider le concept et offrir une première expérience utilisateur.

### A. Côté Créateur de Sondage (Administrateur)

#### A.1 Authentification et Gestion de Compte
* **Création de Compte :** Par email/mot de passe simple.
* **Connexion :** Email/mot de passe.
* **Option "Sondage Rapide" (sans compte) :** Permet de créer un sondage sans inscription, avec un lien de gestion envoyé par email. Ce lien est temporaire ou révocable.
* **Tableau de Bord :** Liste tous les sondages créés par l'utilisateur, avec leur statut (Ouvert, Clôturé) et un accès rapide aux résultats et au lien de partage.

#### A.2 Création de Sondage
* **Titre du Sondage :** Champ texte libre (obligatoire).
* **Description du Sondage :** Champ texte libre pour le contexte ou les instructions (optionnel).
* **Options de Vote :**
    * Ajout dynamique de champs texte pour chaque option (minimum 2, pas de maximum strict mais limiter à 10-15 pour la lisibilité).
    * Possibilité d'ajouter une courte description ou image pour chaque option (pour le futur).
    * Boutons "Ajouter une option", "Supprimer une option".
* **Mentions d'Évaluation :** Utilisation d'une échelle de mentions fixe pour le MVP (ex: "Insuffisant", "Passable", "Assez Bien", "Bien", "Très Bien", "Excellent"). La possibilité de personnaliser cette échelle sera une fonctionnalité future.
* **Paramètres du Sondage :**
    * **Date et Heure de Fin :** Pour clôturer automatiquement le sondage.
    * **Anonymat des Votes :** Option par défaut "Anonyme".
    * **Accès aux Résultats :** "Public" (tout le monde peut voir les résultats une fois le sondage clôturé) ou "Privé" (seul le créateur peut les voir).
* **Génération du Lien de Partage :** Un URL unique et facile à copier/partager pour chaque sondage.

#### A.3 Gestion du Sondage
* **Modification :** Permettre de modifier le titre, la description, et les options tant que le sondage n'a pas commencé à recevoir des votes.
* **Clôture Manuelle :** Possibilité de clôturer un sondage avant la date de fin prévue.
* **Duplication :** Créer une copie d'un sondage existant.

### B. Côté Participant (Votant)

#### B.1 Accès au Sondage
* Accès via le lien unique du sondage.
* **Interface claire et épurée** : Pas de connexion ou d'inscription requise pour voter (si le sondage est anonyme).

#### B.2 Interface de Vote
* Affichage du titre et de la description du sondage.
* Liste de toutes les options à évaluer.
* Pour chaque option : une **interface intuitive pour sélectionner une mention** (ex: curseurs, boutons radio, ou une série de "pastilles" cliquables).
* **Explication des Mentions :** Un petit texte ou une info-bulle expliquant ce que signifie chaque mention (ex: "Excellent = J'adore cette option", "Insuffisant = Je ne veux absolument pas de cette option").
* **Bouton "Soumettre mon vote" :** Avec une confirmation visuelle.
* **Message d'information :** Un petit encart informatif rappelant brièvement le fonctionnement et les avantages du Jugement Majoritaire.

### C. Affichage des Résultats

* **Accès :** Automatiquement visible une fois le sondage clôturé (si l'option "Public" est activée).
* **Option Gagnante :** Clairement affichée en tête, avec sa mention médiane.
* **Classement des Options :** Liste toutes les options, classées par mention médiane décroissante.
* **Visualisation Détaillée :** Pour chaque option, un **histogramme** ou un graphique à barres montrant la distribution des mentions reçues (ex: combien de "Excellent", "Bien", "Passable" pour chaque option).
* **Règles de Départage :** En cas d'égalité des mentions médianes, une règle sera appliquée (ex: l'option avec le moins de "Insuffisant", ou le plus de "Excellent").
* **Statistiques Clés :** Nombre total de participants, date de début/fin du sondage.
* **"Le saviez-vous ?" :** Un encadré optionnel montrant "Si nous avions utilisé le vote majoritaire classique, l'option [X] aurait pu gagner, alors que le Jugement Majoritaire a révélé que [Z] est l'option la plus consensuelle." (pour la sensibilisation).

### D. Aspects Éducatifs et de Sensibilisation

L'éducation des utilisateurs est un pilier central du projet.
* **Page "Pourquoi le Jugement Majoritaire ?" :** Une page dédiée accessible depuis l'application, expliquant en détail :
    * Les limites et dangers du vote majoritaire (avec des exemples simples).
    * Les principes et bénéfices du Jugement Majoritaire.
    * Des ressources complémentaires (liens vers des articles, vidéos).
* **Messages Contextuels :** Petites infos-bulles ou bannières discrètes lors de la création de sondage ou du vote, rappelant les avantages du système.
* **Affichage des Résultats Comparatifs :** Le "Le saviez-vous ?" sur la page de résultats.
* **Blog/Articles (à terme) :** Des articles de blog réguliers sur les différents systèmes de vote, la prise de décision collective, etc.


---

## IV. Aspects Techniques Préliminaires

### A. Technologies Recommandées
* **Frontend :** React, Vue.js ou Svelte (pour une interface utilisateur moderne et réactive).
* **Backend :** Node.js (avec Express.js ou NestJS), Python (avec FastAPI ou Flask), ou Ruby on Rails (pour une API robuste et une gestion des données).
* **Base de Données :** PostgreSQL (pour la robustesse et la flexibilité) ou MongoDB (pour la rapidité de développement si la structure des données est très flexible).
* **Hébergement :** Vercel/Netlify (Frontend), Render/Heroku/AWS (Backend).

### B. Architecture Générale
* **API RESTful :** Le frontend communiquera avec le backend via une API RESTful.
* **Sécurité :** Mise en œuvre des bonnes pratiques de sécurité (authentification token, protection contre les injections SQL/XSS, HTTPS).
* **Scalabilité :** Conception pour permettre une croissance future en termes d'utilisateurs et de sondages.

---

## V. Design et Expérience Utilisateur (UX/UI)

* **Design Minimaliste :** Priorité à la clarté et à la simplicité. Moins de clics, moins de texte superflu.
* **Palette de Couleurs :** Douce et professionnelle, avec des accents pour mettre en valeur les informations clés.
* **Typographie :** Claire et facile à lire.
* **Responsive Design :** Optimisation pour tous les appareils (mobile-first).
* **Accessibilité :** Respect des normes WCAG (Web Content Accessibility Guidelines) autant que possible.
* **Interactivité :** Animations subtiles, retours visuels instantanés lors des interactions.

---

## VI. Feuille de Route et Contribution

### A. Étapes Initiales
1.  **Mise en place du Dépôt GitHub :** Initialisation du code et des fichiers de contribution (`README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`).
2.  **Mise en place d'un canal de communication :** (Discord/Slack/Forum) pour faciliter les échanges entre contributeurs.
3.  **Développement du MVP :** Focus sur les fonctionnalités clés décrites ci-dessus.

### B. Comment Contribuer
* **Développement :** Contribuer au code Frontend ou Backend.
* **Design :** Proposer des maquettes, améliorer l'UX/UI.
* **Contenu :** Rédiger des textes explicatifs, des articles de blog.
* **Tests :** Identifier les bugs, proposer des améliorations.
* **Traduction :** Rendre l'application multilingue.
* **Gestion de Projet :** Aider à coordonner les efforts et les tâches.

Nous recherchons des personnes passionnées par la prise de décision éclairée, désireuses d'apprendre et de partager leurs compétences dans un cadre collaboratif.
