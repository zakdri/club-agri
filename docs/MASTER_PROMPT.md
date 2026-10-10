# Master prompt — Site Club AGRI

Ce prompt prépare la première version du site du Club de l’Agriculture. Il s’appuie sur « Proposition maquette club.docx » et sur les règles du projet FOS-Agri. Les textes ci-dessous sont des propositions à valider. Les informations chiffrées viennent du document fourni ; elles ne constituent pas une vérification indépendante.

---

## 1. Mission et périmètre de cette première version

Agis comme un designer UX/UI senior et un développeur frontend expérimenté. Conçois et réalise un site indépendant pour **Club AGRI — Club de l’Agriculture**, lié à FOS-Agri, avec une identité visuelle qui permet immédiatement de comprendre que l’on visite le site du Club.

Le livrable immédiat est une **page d’accueil complète, responsive, multilingue et présentable au client**. Prépare aussi les routes des autres pages, mais laisse leur contenu éditorial vide. Attends la validation explicite du contenu de l’accueil, de la charte graphique et de l’UX/UI avant de développer leur contenu.

Le Club est présenté ici comme un lieu de sport, de bien-être, de détente et de partage en famille à Rabat. Le texte actuel du site FOS-Agri sur les « avantages et partenariats » est un point d’entrée vers le Club, pas le contenu à recopier pour définir ce nouveau site.

Utilise le document joint comme référence de contenu et d’arborescence. Ses suggestions de formulaires d’inscription, tarifs, téléchargements ou fonctionnalités futures ne donnent pas l’autorisation de les mettre en production dans cette phase.

## 2. Règles de projet à respecter

- Avant toute modification dans le dépôt FOS-Agri, lire AGENTS.md, README.md, PROJECT_RULES.md, ARCHITECTURE.md, CONTENT_STRUCTURE.md, SEO_I18N_RULES.md, NO_DATABASE_PLAN.md et BACKLOG.md.
- Phase 1 : HTML, CSS et JavaScript statiques, compatibles GitHub Pages.
- Ne pas ajouter de dépendances, de backend, de base de données, de paiement, d’authentification ou de véritable réservation.
- Ne pas lancer une migration React/Next.js ni installer un CMS.
- Préserver le site FOS-Agri. Pour ce travail, créer les fichiers du Club dans un dossier dédié ; ne pas utiliser cette mission pour modifier l’accueil FOS-Agri.
- Inspecter l’état Git et conserver toutes les modifications existantes de l’utilisateur.
- Faire des changements ciblés et de petits commits ; résumer les fichiers modifiés après chaque commit.
- Fournir un lien de prévisualisation local lorsque l’implémentation est prête. Ne pas publier le site sans demande de publication.

Si l’on travaille dans le dépôt actuel, utiliser par exemple `club-agri/` avec ses propres fichiers HTML et assets. Garder CSS, JavaScript et traductions du Club isolés pour éviter les effets de bord sur FOS-Agri. Ce dossier est une proposition d’organisation ; suivre une convention existante pertinente si le dépôt en possède déjà une.

## 3. Publics et parcours prioritaires

Les principaux visiteurs sont les adhérents et leurs familles, les personnes intéressées par les activités du Club, les parents recherchant une école sportive et les visiteurs intéressés par les services mentionnés dans le document.

L’accueil doit répondre dans cet ordre :

1. Quel est ce lieu et où se trouve-t-il ?
2. Quelles activités et quels services propose-t-il ?
3. Quels packs existent ?
4. Quelles activités concernent les enfants ?
5. Comment se renseigner sur l’adhésion et préparer une visite ?

Ne pas supposer que tous les équipements sont accessibles au public, que tous les packs donnent accès aux mêmes services ou que toutes les familles sont automatiquement éligibles. Seul le restaurant est décrit comme ouvert au public dans la maquette.

## 4. Arborescence : 10 pages principales

Conserver les mêmes IDs de navigation dans les trois langues.

| ID | Libellé français | Route proposée | Périmètre actuel |
| --- | --- | --- | --- |
| home | Accueil | index.html | Seule page au contenu complet |
| club | Le Club | le-club.html | Structure vide |
| packs | Nos Packs | packs.html | Structure vide |
| services | Prestations | prestations.html | Structure vide |
| schedules | Cours et plannings | cours-plannings.html | Structure vide |
| experiences | Expériences | experiences.html | Structure vide |
| children | Écoles & Enfants | ecoles-enfants.html | Structure vide |
| gallery | Galerie | galerie.html | Structure vide |
| rules | Règlements | reglements.html | Structure vide |
| membership | Adhésion | adhesion.html | Structure vide ; entrée mise en valeur |

Ces 10 pages correspondent au menu du document : 9 entrées classiques et 1 entrée Adhésion mise en valeur. Les disciplines, les règlements PDF et les filtres de galerie ne deviennent pas automatiquement des pages supplémentaires.

Les coordonnées, les réseaux sociaux et les mentions légales sont prévus dans le footer. Une éventuelle page Contact ou Mentions légales fera l’objet d’une validation ultérieure et n’est pas incluse dans ces 10 pages.

Pour les 9 pages secondaires, créer uniquement la structure HTML, le titre de page traduit, le header et le footer partagés. Laisser le corps éditorial vide : aucun faux article, liste d’activités détaillée, grille tarifaire, formulaire, calendrier ou texte de remplissage. Ajouter `noindex` tant qu’elles sont vides et les exclure du sitemap public.

Ne pas afficher les consignes de développement ou de validation dans ces pages. Le visiteur ne doit pas voir des commentaires comme « cette page attend la validation UX/UI ».

## 5. Direction artistique proposée

### Positionnement

Créer une expérience accueillante, contemporaine et soignée, centrée sur les équipements réels et la vie du Club. Garder une parenté visuelle avec FOS-Agri, tout en donnant au Club un ton plus sportif, familial et vivant.

La différence doit être visible dès le premier écran : nom Club AGRI clairement affiché, images du Club, navigation propre, couleurs secondaires distinctes et contenu centré sur les activités.

### Palette proposée, à valider

- Vert FOS-Agri `#1F6A43` : couleur de filiation, liens et accents ponctuels.
- Vert profond `#153F32` : titres, footer et certains aplats sobres.
- Bleu-vert `#087F8C` : actions principales et repères aquatiques/bien-être.
- Corail `#D96552` : accents familiaux et événements, en petites touches.
- Doré FOS-Agri `#C8A44D` : détail de signature, usage limité.
- Blanc `#FFFFFF` et gris très clair `#F4F7F6` : fonds principaux.
- Texte sombre `#20352E` : corps de texte.

Ces couleurs sont une proposition, pas une charte déjà approuvée. Ajuster les combinaisons pour atteindre les contrastes accessibles. Ne pas utiliser systématiquement du texte blanc sur les couleurs d’accent si le contraste est insuffisant.

Éviter une dominante beige, les dégradés violets, les grandes zones sombres qui masquent les équipements et les effets décoratifs sans rapport avec le Club.

### Typographie et composants

- Reprendre la cohérence des polices existantes : Poppins pour le français, Tajawal pour l’arabe, Noto Sans Tifinagh pour l’amazigh, si leurs fichiers sont disponibles et réutilisables.
- Aucune nouvelle dépendance typographique ; préférer les ressources locales existantes ou des alternatives système.
- Hiérarchie claire, tailles fixes adaptées aux composants et retours à la ligne naturels.
- Ne pas appliquer de `word-break: break-all`, de tracking agressif ou de majuscules systématiques à l’arabe et au tifinagh.
- Rayons de 6 à 8 px pour les cartes ; boutons et éléments tactiles stables.
- Réserver les cartes aux packs, activités et actualités répétées. Les grandes sections restent des bandes ou des compositions ouvertes.
- Utiliser la bibliothèque d’icônes déjà disponible. Aucun nouveau paquet d’icônes et aucun pictogramme dessiné à la main lorsqu’un équivalent existe.

### Images et références du document

Utiliser en priorité des photos et vidéos authentiques du Club : tennis, padel, piscines, jardins, fitness, écoles et espaces de convivialité.

Le document contient aussi des références génériques de cartes animées et de comparaison tarifaire. Elles illustrent des intentions d’interaction ; elles ne définissent pas l’identité du Club. Ne pas reprendre les prix, les marques, la palette violette ou le contenu de ces exemples.

Ne pas présenter une photo de stock ou une image générée comme une photographie réelle du Club. Si aucun média authentique n’est disponible, signaler le besoin dans la note de livraison et utiliser un visuel provisoire clairement identifié dans cette note.

## 6. Accueil : contenu et ordre des sections

Les textes suivants constituent la base française proposée. Traduire intégralement les contenus retenus en arabe et en amazigh avant livraison de la version multilingue. Les chiffres et caractéristiques issus du document restent à confirmer par le client avant publication publique.

### A. Header

Afficher le logo officiel du Club s’il est fourni. À défaut, utiliser une signature typographique sobre **Club AGRI**, sans inventer un emblème officiel.

Sous le nom ou dans une zone de filiation discrète : **Club de l’Agriculture**.

Prévoir un lien secondaire **FOS-Agri** qui revient vers le site de la Fondation. Le nom, le lien et la navigation doivent rendre le changement de site explicite.

Utiliser le menu défini plus haut, un sélecteur FR / العربية / ⵜⴰⵎⴰⵣⵉⵖⵜ et une action **Adhésion**. La préférence linguistique du Club doit être isolée ou volontairement coordonnée avec celle de FOS-Agri ; ne pas écraser une préférence existante par accident.

Sur mobile, regrouper le menu dans un panneau accessible. Lorsque les 10 entrées ne tiennent plus correctement sur desktop, passer au menu compact avant qu’elles se chevauchent. Ne pas réduire la lisibilité pour conserver artificiellement toutes les entrées sur une ligne.

Pendant cette phase, l’action principale Adhésion du header peut pointer vers `#adhesion` sur l’accueil. La route secondaire `adhesion.html` reste préparée pour la prochaine phase.

### B. Hero immersif

**Sur-titre :** Club de l’Agriculture · Rabat

**H1 :** Club AGRI

**Accroche :** 8 hectares de sport, de détente et de partage au cœur de Rabat.

**Texte :** Un cadre verdoyant pour pratiquer vos activités, prendre du temps pour vous et partager des moments en famille.

**Action principale :** Découvrir le Club → `#le-club`

**Action secondaire :** Rejoindre le Club → `#adhesion`

Utiliser une vidéo courte authentique en fond plein écran de section, avec poster photo. Texte directement sur le média, sans carte de texte ni composition en deux panneaux. Préserver la visibilité du lieu avec un voile léger uniquement si nécessaire.

Si la vidéo est disponible : lecture muette, `playsinline`, chargement maîtrisé, contrôle pause/reprise accessible. En mode réduction des animations ou sur connexion limitée, privilégier la photo. Aucun son automatique.

Sur desktop et mobile, laisser apparaître un début de la section suivante pour inviter à poursuivre la visite. Garder un cadrage où les équipements restent identifiables.

### C. À la une du Club

**Titre :** À la une du Club

**Introduction :** Événements, compétitions, écoles sportives : retrouvez les rendez-vous du Club.

Prévoir une liste horizontale de cartes avec photo, catégorie, titre et date, uniquement à partir d’actualités réelles fournies. Badges possibles : **Événement**, **Nouveau**, **Inscriptions ouvertes**.

Ne pas inventer une compétition à venir, une date ou une campagne d’inscription. Si aucune actualité réelle n’est disponible, masquer ce module dans la prévisualisation plutôt que simuler une activité du Club.

Préférer le défilement manuel avec commandes accessibles. Si un défilement automatique est retenu, il doit pouvoir être arrêté et respecter la réduction des animations.

### D. Présentation du Club

Ancre : `#le-club`

**Sur-titre :** Un lieu à vivre

**Titre :** Le Club de l’Agriculture, au cœur de vos moments de vie

**Texte :** Au cœur de Rabat, le Club de l’Agriculture réunit sport, bien-être et convivialité dans un cadre verdoyant. Ses espaces accueillent des pratiques individuelles, des activités en famille et des moments de détente.

**Texte complémentaire :** Après une rénovation complète et une inauguration en 2022, le Club poursuit une histoire de plus de 40 ans, tournée vers le partage et la vie du Club.

**Repères :** 8 hectares d’espaces verts · Plus de 10 disciplines · Plus de 40 ans d’histoire.

**Ligne du temps :** Plus de 40 ans d’histoire → Rénovation complète → Inauguration en 2022.

Ne pas inventer une année de création à partir de « plus de 40 ans ». Les compteurs peuvent s’animer une fois lorsqu’ils entrent dans le viewport ; le chiffre final doit rester accessible et visible sans JavaScript.

Présenter cette section avec un vrai média du Club et une composition ouverte. Ne pas transformer les chiffres et la présentation en une accumulation de cartes décoratives.

### E. Activités et services

Ancre : `#activites`

**Sur-titre :** Les univers du Club

**Titre :** Du sport à la détente, trouvez votre rythme

**Introduction :** Découvrez les activités et les espaces du Club, selon vos envies et vos moments de vie.

Proposer des filtres visibles : **Tout**, **Sport**, **Bien-être**, **Famille**, **Business**. Ils filtrent réellement les éléments présents sur l’accueil ; ils ne font pas apparaître une page détaillée fictive. Permettre des catégories multiples et prévoir un état vide traduit.

Utiliser une même source de données pour les équipements, leurs catégories et leurs traductions. Les éléments suivants viennent de la maquette :

| Ensemble | Équipement ou service | Description courte proposée |
| --- | --- | --- |
| Activités extérieures | Tennis | Pour pratiquer et partager le plaisir du jeu. |
| Activités extérieures | Padel | Une activité à découvrir et à partager sur le terrain. |
| Activités extérieures | Piscines plein air | Des espaces aquatiques pour les moments de détente. |
| Activités extérieures | Mini-foot | Le plaisir du jeu en équipe. |
| Activités extérieures | Omnisport | Des espaces dédiés à différentes pratiques sportives. |
| Activités extérieures | Aire de jeux enfants | Un espace pour les moments de jeu en famille. |
| Activités extérieures | Gym plein air | Bouger et s’entraîner au grand air. |
| Activités extérieures | Échiquier géant | Un moment de réflexion et de jeu à partager. |
| Activités intérieures | Piscine couverte chauffée | Un espace aquatique couvert et chauffé. |
| Activités intérieures | Salle de fitness | Un espace consacré à l’entraînement. |
| Activités intérieures | SPA | Un espace dédié au bien-être et à la détente. |
| Hébergement et services | Motel | 13 chambres et 6 suites, selon la maquette fournie. |
| Hébergement et services | Restaurant | Un restaurant ouvert au public. |
| Hébergement et services | Salles de réunion | Une capacité annoncée de 25 personnes, à confirmer par salle ou pour l’ensemble. |

Dans le texte public du motel, employer **13 chambres et 6 suites** après confirmation, sans afficher « selon la maquette fournie ». Dans le texte public des salles, rester sur **Des espaces pour vos rencontres professionnelles** tant que la portée de la capacité de 25 personnes n’est pas confirmée.

Présenter **Infirmerie** et **Mosquée** dans une petite ligne distincte **Services sur place**, avec icônes adaptées. Éviter de les classer comme disciplines sportives ou de donner à l’infirmerie des capacités médicales non documentées.

Limiter la densité : afficher une sélection représentative de six équipements au départ et proposer **Afficher toutes les activités** pour révéler la liste complète sur l’accueil. Les éléments masqués doivent aussi être traduits. La présentation détaillée de chaque prestation attend la prochaine phase.

### F. Nos Packs

Ancre : `#packs`

**Sur-titre :** Les formules du Club

**Titre :** Découvrez les packs du Club AGRI

**Introduction :** Quatre packs à découvrir pour préparer votre adhésion au Club.

Créer quatre cartes de même niveau : **Astragal**, **Rhodiola**, **Ginseng**, **Spiruline**. Garder ces noms identiques dans toutes les langues, sauf si le client fournit leurs noms officiels traduits.

Donner à chaque carte un repère de couleur discret et un univers botanique soigné. L’identité du pack doit aussi être lisible dans son nom ; ne pas dépendre uniquement de la couleur.

Le document ne donne pas de tarifs, de conditions d’éligibilité ni de liste validée d’avantages par pack. L’exemple Ginseng est illustratif. Ne pas transformer cet exemple en promesse commerciale ; ne pas inventer des niveaux « Basic / Premium / VIP », une formule conseillée ou des accès fitness/piscine garantis.

Pendant cette phase, chaque carte affiche son nom, son visuel et une action **Se renseigner sur ce pack** qui mène au bloc d’adhésion de l’accueil. L’action peut conserver le pack choisi dans l’état de l’interface pour le rappeler dans ce bloc, sans formulaire ni envoi de données.

Préparer les champs de données nécessaires aux futurs avantages et PDF, mais les laisser vides et ne pas les rendre visibles. **Voir les avantages** et **Télécharger la grille tarifaire** ne sont affichés qu’après fourniture d’un contenu et d’un document réels.

### G. Écoles & Enfants

Ancre : `#ecoles-enfants`

**Sur-titre :** Grandir par le sport

**Titre :** Le plaisir d’apprendre, de bouger et de partager

**Texte :** Les écoles sportives du Club s’adressent aux enfants de 5 à 14 ans. Football, natation et tennis : trois disciplines pour découvrir le sport et vivre des moments avec d’autres enfants.

**Repères :** 5 à 14 ans · 2 séances par semaine.

**École de football :** Découvrir le jeu collectif et le plaisir de jouer ensemble.

**École de natation :** Découvrir la pratique de la natation dans le cadre des écoles du Club.

**École de tennis :** Découvrir la discipline et le plaisir de progresser sur le court.

**Action :** Se renseigner sur les écoles → `#informations-pratiques`.

Vérifier avec le client que les âges et la fréquence s’appliquent bien à toutes les écoles. Ne pas publier d’horaires, de tarifs, de niveaux, de dates d’inscription ou de qualifications d’encadrement sans source.

Utiliser une photo authentique autorisée pour publication. Concevoir cette section avec un ton familial et une hiérarchie claire.

### H. Galerie de l’accueil

Ancre : `#galerie`

**Sur-titre :** En images

**Titre :** Un aperçu de la vie au Club

**Texte :** Découvrez les espaces et les moments qui font vivre le Club de l’Agriculture.

Prévoir une sélection de quatre à six médias réels avec légendes et textes alternatifs traduits. Catégories futures : **Infrastructures**, **Écoles & cours**, **Compétitions**, **Événements & cérémonies**.

Une lightbox peut fonctionner sur l’accueil : fermeture visible, Échap, navigation clavier, retour du focus, commandes accessibles et absence de lecture sonore automatique. Ne pas créer le contenu de la page Galerie complète dans cette phase.

Masquer la galerie si aucun média réel n’est disponible. Ne pas inventer une cérémonie ou utiliser le même visuel pour plusieurs équipements différents.

### I. Adhésion

Ancre : `#adhesion`

**Sur-titre :** Rejoindre le Club

**Titre :** Préparez votre adhésion au Club AGRI

**Texte :** Découvrez les packs proposés et renseignez-vous auprès du Club sur les conditions d’accès, les pièces à fournir et les modalités d’inscription.

**Étape 1 :** Découvrir les packs.

**Étape 2 :** Se renseigner sur les conditions d’adhésion.

**Étape 3 :** Préparer son inscription selon les modalités communiquées par le Club.

**Action principale :** Découvrir les packs → `#packs`.

**Action secondaire :** Contacter le Club → coordonnées vérifiées dans `#informations-pratiques`.

Ces étapes sont une orientation éditoriale proposée, pas une procédure administrative certifiée. Ne pas lister de pièces ou de conditions inconnues. Ne pas afficher « Je m’inscris en ligne » ni une confirmation d’inscription réussie tant qu’aucun dispositif réel n’existe.

### J. Informations pratiques et footer

Ancre : `#informations-pratiques`

**Titre :** Retrouvez-nous à Rabat

**Texte :** Pour préparer votre visite ou vous renseigner sur les activités et l’adhésion, contactez le Club de l’Agriculture.

Prévoir les champs : adresse exacte, téléphone, email, horaires d’accueil, coordonnées GPS et liens sociaux. Afficher uniquement les informations vérifiées disponibles. Aucun faux numéro, email ou horaire.

Préférer un lien **Itinéraire** vers la bonne adresse cartographique. Une carte intégrée peut être ajoutée si l’adresse et les contraintes de confidentialité sont connues. Ne pas charger un script cartographique lourd par défaut.

Footer : signature **Club AGRI — Club de l’Agriculture**, filiation FOS-Agri discrète, liens rapides vers les sections de l’accueil, langue et coordonnées réelles. Afficher les liens sociaux et légaux uniquement si leur destination existe.

Ne pas publier une page Mentions légales inventée. Préparer la place pour ce lien et signaler les informations juridiques à fournir dans la livraison.

## 7. UX et interactions

- Les CTA de l’accueil doivent fonctionner dès cette phase : ancres, filtres, sélection de pack, galerie et commandes vidéo disponibles.
- Le menu conserve les routes préparées des pages secondaires. Les actions de conversion de l’accueil privilégient ses sections pour éviter de diriger vers un corps de page vide.
- Les ancres défilent progressivement en environ 350 à 500 ms, avec décalage pour le header fixe. En mode `prefers-reduced-motion`, utiliser un déplacement immédiat.
- Les animations de révélation restent brèves, discrètes et déclenchées une fois. Le contenu reste lisible si JavaScript ou les animations sont désactivés.
- Chaque cible tactile mesure au moins 44 × 44 px. Les zones de clic sont limitées au contrôle visible ; aucun bouton invisible ou calque ne doit intercepter les clics ailleurs sur la page.
- Les filtres sont des boutons ou contrôles sémantiques avec état sélectionné. Leur ordre, leurs résultats et leurs libellés correspondent dans toutes les langues.
- Aucun hover indispensable au fonctionnement mobile. Aucun changement de dimensions de carte au survol.
- Un composant de recherche globale n’est pas requis pour cette première version. S’il existe déjà dans un environnement réutilisé, ne pas l’ouvrir depuis des taps sans rapport avec son bouton.
- Utiliser des boutons pour les actions et des liens pour les destinations. Prévoir focus visible, navigation clavier, noms accessibles, gestion du focus dans les menus et modales.
- Prévoir titres hiérarchisés, landmarks, lien d’évitement, texte alternatif et contrastes au niveau WCAG AA.

## 8. Français, arabe et amazigh

- Le français est la base éditoriale proposée ; l’arabe et l’amazigh reprennent exactement les mêmes sections, IDs et nombres d’éléments.
- Inspecter le système de traduction existant avant de réutiliser ses conventions. Créer une source de données Club indépendante, structurée par IDs stables.
- Ne pas créer des tableaux par langue dont les éléments ou les IDs divergent. Traduire les labels et les contenus, pas les IDs.
- Traduire les titres, paragraphes, cartes, étapes, filtres, états vides, contrôles, aria-labels, légendes, textes alternatifs et contenus masqués.
- Ne pas considérer un objet traduit comme terminé s’il utilise un spread ou une valeur de repli française pour des données imbriquées visibles.
- AR : `lang="ar"`, `dir="rtl"`, propriétés CSS logiques, alignements adaptés et ordre visuel cohérent.
- Les nombres et groupes numériques, dates, téléphones, emails et sigles latins doivent conserver leur sens de lecture. Isoler les séquences nécessaires avec `<bdi dir="ltr">` ou une règle équivalente ciblée ; ne pas forcer tout le paragraphe arabe en LTR et ne pas inverser les caractères.
- FR et ZGH : LTR. Le tifinagh conserve une typographie adaptée, sans forcer les styles de capitalisation du français.
- Les noms officiels Club AGRI, FOS-Agri et les noms des packs peuvent rester inchangés. Les phrases qui les entourent doivent être traduites.
- Les nombres et caractéristiques conservent la même signification dans les trois langues.
- Toute traduction nécessitant une validation linguistique doit être signalée dans la note de livraison. Ne pas présenter une traduction non relue comme une traduction officielle approuvée.

## 9. Architecture technique et performance

Organiser les données partagées et les contenus pour que les futures pages puissent les reprendre après validation. Une organisation possible :

```text
club-agri/
  index.html
  le-club.html
  packs.html
  prestations.html
  cours-plannings.html
  experiences.html
  ecoles-enfants.html
  galerie.html
  reglements.html
  adhesion.html
  assets/
    club-data.js
    club-i18n.js
    club-app.js
    club-styles.css
    images/
    videos/
    documents/
```

Adapter ce découpage au dépôt sans multiplier les abstractions. Le dossier documents reste vide tant qu’aucun PDF validé n’est fourni.

Utiliser des chemins relatifs compatibles avec un hébergement en sous-dossier GitHub Pages. Ne pas coder en dur une URL de production ou un domaine qui n’a pas été validé.

Définir les dimensions et ratios des médias pour éviter les décalages de mise en page. Optimiser les images et charger paresseusement les médias sous le premier écran. Ne pas charger toutes les vidéos de la galerie à l’ouverture.

L’accueil reçoit un title, une description et des métadonnées sociales cohérents. Ne pas inventer les horaires, l’adresse ou les profils sociaux dans des données structurées. Les routes et canonical définitifs attendent le domaine retenu.

Dans la phase de prévisualisation, le site peut rester intégralement non indexable. Lors d’une publication autorisée, indexer seulement les pages complètes et conserver `noindex` sur les pages vides.

## 10. Validation et livraison

Vérifier l’accueil en français, arabe et amazigh, sur mobile et desktop. Vérifier notamment 360 px, 390 px, 768 px et 1440 px, avec captures d’écran représentatives.

Contrôler :

1. Club AGRI est identifiable dès le premier écran ; la relation avec FOS-Agri est compréhensible.
2. Les 10 entrées de navigation correspondent entre les trois langues.
3. Les 9 pages secondaires ont uniquement leur structure et leur titre, sans contenu éditorial développé.
4. Les cartes, contenus cachés, contrôles et textes accessibles sont traduits.
5. Aucun texte français de repli ne fuit dans les nouvelles sections AR/ZGH.
6. Le RTL, les nombres, les téléphones et les sigles restent correctement lisibles.
7. Aucun débordement horizontal, texte hors carte, chevauchement ou mot cassé lettre par lettre.
8. Les taps mobiles atteignent le bon contrôle ; aucun calque de recherche n’intercepte les clics.
9. Les filtres, ancres, menus et contrôles médias fonctionnent au clavier et sur mobile.
10. La réduction des animations est respectée ; les médias réels sont visibles et bien cadrés.
11. Aucun tarif, avantage de pack, actualité, horaire, lien de téléchargement ou contact n’a été inventé.
12. Aucun contenu ni style protégé de FOS-Agri n’a été modifié.

Livrer la page d’accueil, les routes secondaires vides, le lien de prévisualisation et une note courte recensant les fichiers modifiés, les vérifications et les informations manquantes.

Dans cette note, séparer clairement : les informations reprises du document, les propositions éditoriales et graphiques, et les données à confirmer. Ne pas afficher cette note dans le site public.

**Point d’arrêt : après la livraison de l’accueil et des structures vides, attendre la validation explicite du client sur les textes, les couleurs, les images et l’UX/UI avant de développer les autres pages.**

## 11. Informations nécessaires avant publication

- Logo officiel du Club et éventuelle charte existante.
- Photos/vidéos réelles, droits de diffusion et autorisations pour les personnes reconnaissables.
- Confirmation des 8 hectares, du nombre de disciplines, de l’historique et de l’inauguration 2022.
- Validation de l’inventaire des équipements et des conditions d’accès.
- Contenu officiel des quatre packs, tarifs et grilles PDF.
- Confirmation des âges, de la fréquence et des modalités des écoles.
- Confirmation de la capacité des salles de réunion et des caractéristiques du motel.
- Actualités et événements réels si le bandeau À la une doit apparaître.
- Adresse, téléphone, email, horaires, itinéraire et réseaux sociaux officiels.
- Modalités réelles d’adhésion, documents et mentions légales.
- Relecture et validation des traductions arabe et amazigh.

Les manques n’empêchent pas de préparer l’accueil et sa direction visuelle. Ils empêchent de présenter des données provisoires comme des informations officielles confirmées.
