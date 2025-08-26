# 🌍 Portfolio Monde Interactif - Rayane ALLAOUI

Un portfolio unique et immersif présentant mon parcours de développeur à travers une carte du monde interactive.

## ✨ Caractéristiques

### 🗺️ Carte du Monde Interactive
- **Carte Leaflet** avec OpenStreetMap pour une expérience immersive
- **Marqueurs positionnés stratégiquement** représentant chaque élément de mon parcours
- **Navigation fluide** avec zoom, déplacement et contrôles tactiles
- **Vue satellite optionnelle** pour plus de réalisme

### 🎯 Projets Positionnés sur la Carte
1. **Sartrouville, France** - Système ERP en Java (ND-IT)
2. **San Francisco, USA** - Clone Airbnb en Python
3. **Stockholm, Suède** - Shell Simple en C (Holberton School)
4. **Charbonnières-les-Bains, France** - Formation IT-Akademy
5. **Thonon-les-Bains, France** - Formation Holberton School
6. **New York, USA** - Certifications IBM

### 🎨 Design Moderne et Immersif
- **Interface épurée** avec animations fluides
- **Gradients et ombres** pour la profondeur visuelle
- **Responsive design** adapté à tous les appareils
- **Micro-interactions** pour une expérience engageante

### 📱 Fonctionnalités Interactives
- **Modales détaillées** pour chaque projet avec texte parfaitement lisible
- **Navigation fluide** entre les sections
- **Animations au scroll** pour révéler le contenu
- **Header intelligent** qui se cache au scroll
- **Mode sombre/clair** avec toggle dans la navbar
- **Formulaire de contact fonctionnel** avec envoi d'emails via EmailJS

## 🚀 Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec animations et variables CSS
- **JavaScript ES6+** - Logique interactive et gestion des thèmes
- **Leaflet.js** - Carte interactive avec marqueurs personnalisés

### Design
- **Inter Font** - Typographie moderne
- **CSS Grid & Flexbox** - Layout responsive
- **CSS Animations** - Transitions fluides
- **Backdrop Filter** - Effets de flou
- **Variables CSS** - Système de thèmes dynamiques
- **Mode sombre/clair** - Interface adaptative

## 📁 Structure du Projet

```
portfolio/
├── index.html          # Page principale
├── styles.css          # Styles et animations
├── script.js           # Logique interactive
└── README.md           # Documentation
```

## 🎮 Comment Utiliser

### Navigation
1. **Scroll** pour explorer les sections
2. **Cliquez sur les marqueurs** de la carte pour voir les projets
3. **Utilisez les contrôles** de la carte pour naviguer
4. **Cliquez sur "Explorer la carte"** pour aller directement à la carte

### Carte Interactive
- **Zoom** avec la molette ou les boutons +/-
- **Déplacement** en cliquant et glissant
- **Marqueurs** cliquables avec popups informatifs
- **Vue satellite** disponible via le contrôle de couches

### Sections
- **Hero** - Introduction immersive avec texte centré
- **Carte du Monde** - Projets positionnés géographiquement avec marqueurs interactifs
- **À propos** - Présentation personnelle avec statistiques
- **Compétences** - Technologies maîtrisées organisées par catégories
- **Contact** - Informations de contact et liens sociaux
- **Formulaire de Contact** - Formulaire fonctionnel avec validation et envoi d'emails

## 🎨 Personnalisation

### Couleurs et Thèmes
Les couleurs et thèmes peuvent être modifiés dans `styles.css` :
```css
:root {
    --bg-primary: #f8fafc;
    --bg-secondary: #e2e8f0;
    --text-primary: #1f2937;
    --accent-color: #4f46e5;
    --accent-secondary: #7c3aed;
}

[data-theme="dark"] {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f8fafc;
    /* ... autres variables sombres */
}
```

### Marqueurs de Projets
Ajoutez de nouveaux projets dans `script.js` :
```javascript
{
    id: 'nouveau-projet',
    name: 'Nom du Projet',
    location: [latitude, longitude],
    description: 'Description du projet',
    technologies: ['Tech1', 'Tech2'],
    // ... autres propriétés
}
```

## 📱 Responsive Design

Le portfolio s'adapte automatiquement à :
- **Desktop** - Vue complète avec toutes les fonctionnalités
- **Tablet** - Layout adapté aux écrans moyens
- **Mobile** - Navigation optimisée pour le tactile

## 🌐 Compatibilité

- **Navigateurs modernes** : Chrome, Firefox, Safari, Edge
- **Support mobile** : iOS Safari, Chrome Mobile
- **Accessibilité** : Navigation clavier, contraste optimisé

## 🚀 Déploiement

### Local
1. Clonez le repository
2. Ouvrez `index.html` dans un navigateur
3. Ou utilisez un serveur local : `python -m http.server 8000`

### Production
- **GitHub Pages** - Déploiement automatique (https://RayaneAll.github.io)
- **Netlify** - Déploiement avec drag & drop
- **Vercel** - Déploiement optimisé

### Configuration EmailJS
Pour activer le formulaire de contact :
1. Créez un compte sur [EmailJS.com](https://www.emailjs.com/)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Remplacez les IDs dans `script.js` :
   - `YOUR_USER_ID` → Votre User ID
   - `YOUR_SERVICE_ID` → Votre Service ID
   - `YOUR_TEMPLATE_ID` → Votre Template ID

## 🔧 Développement

### Prérequis
- Navigateur web moderne
- Éditeur de code (VS Code recommandé)
- Serveur local (optionnel)
- Compte EmailJS pour le formulaire de contact

### Structure du Code
- **Modulaire** - Classe `WorldMapPortfolio`
- **Event-driven** - Gestion des interactions
- **Responsive** - CSS mobile-first avec breakpoints optimisés
- **Accessible** - Navigation clavier et sémantique
- **Thèmes** - Système de variables CSS pour mode clair/sombre
- **Validation** - Formulaire avec validation en temps réel

## 📈 Améliorations Futures

- [x] **Mode sombre/clair** pour l'interface ✅
- [x] **Formulaire de contact fonctionnel** avec EmailJS ✅
- [x] **Marqueurs interactifs** avec animations ✅
- [x] **Interface responsive** optimisée ✅
- [ ] **Filtres** par technologie ou type de projet
- [ ] **Timeline** interactive des projets
- [ ] **Intégration** avec des APIs externes
- [ ] **Mode hors ligne** avec PWA

## 🤝 Contribution

Les suggestions et améliorations sont les bienvenues ! N'hésitez pas à :
- Ouvrir une issue pour signaler un bug
- Proposer de nouvelles fonctionnalités
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

## 👨‍💻 Auteur

**Rayane ALLAOUI** - Développeur Web & Web Mobile
- 📧 Email : rayane.allaoui03@gmail.com
- 💼 LinkedIn : [linkedin.com/in/rayaneallaoui](https://linkedin.com/in/rayaneallaoui)
- 💻 GitHub : [RayaneAll](https://github.com/RayaneAll)
- 📄 CV : Téléchargeable depuis le portfolio

---

*Créé avec ❤️ et beaucoup de café ☕*