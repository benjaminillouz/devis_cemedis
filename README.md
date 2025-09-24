# Interface Devis Dentaire CEMEDIS

Interface moderne et responsive pour l'affichage des devis dentaires avec système de financement intégré.

## 🌐 Déploiement

**Domaine de production :** `devis.cemedis.app`

## 📁 Structure des fichiers

### Fichiers principaux
- `devis-dentaire.html` - Interface principale du devis
- `devis-styles.css` - Styles CSS modernes et responsives
- `devis-script.js` - Logique JavaScript interactive

### Fichiers de test
- `test-financement.html` - Page de test complète avec tous les paramètres

### Anciens fichiers (à conserver pour compatibilité)
- `index.html` - Ancienne interface
- `styles.css` - Anciens styles
- `script.js` - Ancien script
- `internalveasy.html` - Interface Veasy
- `script-internalveasy.js` - Script Veasy

## 🚀 Fonctionnalités

### ✅ Fonctionnalités implémentées
- **Interface moderne** avec design responsive
- **Logo du centre** dynamique depuis le paramètre URL `logo`
- **Tableau des honoraires** avec données dynamiques
- **Système de financement** avec 3 options :
  - Klarna 3x 4x
  - Oney 3x 4x  
  - Cartes Bancaires
- **Comparateur de mutuelles** avec iframe Looker Studio (zoom 75%)
- **Chat widget** intégré
- **Signature électronique** des devis
- **Téléchargement PDF** des devis

### 📊 Paramètres URL supportés
- `idDevis` - ID du devis
- `centre` - Nom du centre dentaire
- `praticien` - Nom du praticien
- `date` - Date du devis
- `patientnom` - Nom du patient
- `patientprenom` - Prénom du patient
- `wtype` - Données JSON des traitements
- `total` - Montant total
- `ss` - Remboursement Sécurité Sociale
- `mut` - Remboursement Mutuelle
- `rac` - Reste à charge
- `logo` - URL du logo du centre
- `quotation_pdf` - URL du PDF du devis
- Et tous les autres paramètres métier...

## 🔧 Configuration

### Variables d'environnement
Les URLs des APIs sont configurées dans `devis-script.js` :
```javascript
const CONFIG = {
    VEASY_WEBHOOK_URL: 'https://webhook.site/...',
    STRIPE_WEBHOOK_URL: 'https://webhook.site/...'
};
```

### APIs intégrées
- **Veasy SSP** - Financement en 3x/4x
- **Stripe** - Paiements par carte bancaire
- **Klarna** - Financement Klarna

## 📱 Responsive Design

L'interface s'adapte automatiquement à tous les écrans :
- **Desktop** : Layout complet avec sidebar
- **Tablet** : Layout adapté avec navigation horizontale
- **Mobile** : Interface optimisée tactile

## 🎨 Design System

### Couleurs
- **Primaire** : Bleu médical (#2563eb)
- **Secondaire** : Vert santé (#10b981)
- **Accent** : Orange (#f59e0b)
- **Neutre** : Gris (#6b7280)

### Typographie
- **Police principale** : Inter, system-ui, sans-serif
- **Tailles** : Responsive avec clamp()
- **Poids** : 400, 500, 600, 700

## 🔒 Sécurité

- Validation des paramètres URL
- Sanitisation des données d'entrée
- HTTPS obligatoire en production
- Protection XSS intégrée

## 📈 Performance

- **CSS optimisé** avec variables CSS
- **JavaScript modulaire** avec lazy loading
- **Images optimisées** avec lazy loading
- **Cache-friendly** pour les assets statiques

## 🧪 Tests

Utiliser `test-financement.html` pour tester avec les paramètres réels :
```
https://devis.cemedis.app/test-financement.html?idDevis=10960427&centre=Centre+Sant%C3%A9+Dentaire+Cr%C3%A9teil+Pointe+du+Lac&praticien=Doctor+MONTERO+GARCIA+Monica&date=24/09/2025&patientnom=F%20CHAOUCHE&patientprenom=Samia&wtype=%7B%22code_ccam%22%3A%22HBLD073%22%2C%22date%22%3A%2224%2F09%2F2025%22%2C%22tooth_number%22%3A%2246%22%2C%22price%22%3A%22440%2C00%22%2C%22libelle%22%3A%22Couronne%22%7D%2C%7B%22code_ccam%22%3A%22HBLD724%22%2C%22date%22%3A%2224%2F09%2F2025%22%2C%22tooth_number%22%3A%2246%22%2C%22price%22%3A%2260%2C00%22%2C%22libelle%22%3A%22Couronne+transitoire%22%7D%2C%7B%22code_ccam%22%3A%22HBLD745%22%2C%22date%22%3A%2224%2F09%2F2025%22%2C%22tooth_number%22%3A%2246%22%2C%22price%22%3A%22175%2C00%22%2C%22libelle%22%3A%22Inlay-core%22%7D&total=675&ss=132&mut=&rac=543&idCentre=3515&idPat=15019167&quotation_pdf=https%3A%2F%2Feurope-west9-pecapi-app.cloudfunctions.net%2Fstorage%2Fdownload%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRldmlzXzEwOTYwNDI3XzM1MTUucGRmIiwiaWF0IjoxNzU4NzI0NjQ1fQ.r-ole1hRjhNysi4EFPArME-UVpIyYQUJBiCTJdEv5_o%2F&idPodio=3170109246&br=5831950025152703&tel=0755017044&idPraticien=23070843&idCentre=3515&mail=samiachaouche516@gmail.com&logo=https://static.wixstatic.com/media/b07e07_829fb71a56b44b6b80e3974bd04a24d2~mv2.png
```

## 📝 Changelog

### Version 2.0 (Actuelle)
- ✅ Interface moderne et responsive
- ✅ Système de financement intégré
- ✅ Logo du centre dynamique
- ✅ Comparateur de mutuelles
- ✅ Chat widget
- ✅ Signature électronique

### Version 1.0 (Legacy)
- Interface basique
- Fonctionnalités limitées

## 🤝 Support

Pour toute question ou problème, contacter l'équipe de développement CEMEDIS.

---

**© 2024 CEMEDIS - Interface Devis Dentaire**