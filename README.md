# QUALITA — Prototype UX/UI

Prototype **non officiel** d'une nouvelle expérience numérique pour l'association QUALITA.

## Objectif

Transformer une logique de site vitrine en portail de services orienté utilisateur :

- moteur d'orientation par besoin ;
- parcours d'intégration personnalisé ;
- espace **Mon Qualita** ;
- Qualita Map repensée ;
- événements ;
- intégration de Studio Qualita ;
- responsive mobile ;
- interface français / hébreu ;
- PWA installable.

## Démo locale

Aucune compilation n'est nécessaire.

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## GitHub Pages

1. Uploader tous les fichiers à la racine du dépôt.
2. Aller dans **Settings → Pages**.
3. Choisir **Deploy from a branch**.
4. Sélectionner `main` et `/ (root)`.
5. Enregistrer.

Le site sera disponible sous la forme :

`https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT/`

## Important

- Ce projet est une **maquette conceptuelle non commandée et non officielle**.
- Les événements et indicateurs de la démo sont fictifs.
- Les coordonnées et descriptions de services renvoient aux pages publiques de Qualita consultées en août 2026.
- La photographie de Jérusalem est de **Levi Meir Clancy / Unsplash**.

## Fichiers

- `index.html` — structure de l'application
- `styles.css` — UI responsive
- `app.js` — interactions, orientation, langue, modales
- `manifest.webmanifest` + `sw.js` — PWA
- `assets/jerusalem-community.jpg` — visuel hero
