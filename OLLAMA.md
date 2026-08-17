# Qualita Guide avec Ollama

La démo possède deux modes.

## 1. Mode Démo

Fonctionne directement sur GitHub Pages. Le navigateur analyse la question localement et recommande les pôles Qualita correspondants. Aucun message n'est envoyé à un serveur IA.

## 2. Mode Ollama local

Ollama expose son API locale par défaut sur `http://localhost:11434/api`.

### Mise en route

1. Installer Ollama.
2. Installer un modèle, par exemple `ollama pull gemma3:1b` (léger) ou `ollama pull gemma3:4b`.
3. Vérifier qu'Ollama est lancé.
4. Dans ce dépôt, lancer `npm start` ou `node server.mjs`.
5. Ouvrir `http://localhost:4173`.
6. Ouvrir **Qualita IA → Ollama**.
7. L'adresse `/ollama` est utilisée automatiquement en local. Cliquer sur **Tester**, puis choisir le modèle détecté.

Le fichier `server.mjs` sert la démo et fait proxy vers Ollama sur le même ordinateur. Cette méthode évite les problèmes CORS et les restrictions du navigateur entre une page HTTPS et `http://localhost:11434`.

## Sécurité

- Ne jamais entrer de Teoudat Zehout, passeport, carte bancaire ou mot de passe.
- Le mode Démo ne contacte aucune IA.
- En mode Ollama, les messages sont envoyés uniquement au serveur Ollama configuré.
- L'assistant sert à orienter vers les services Qualita ; il ne remplace pas un professionnel juridique, médical ou administratif.
