(function (root) {
  'use strict';
  const l = (fr, ar, zgh) => ({ fr, ar, zgh });
  const navigation = [
    { id: 'home', file: 'index.html', label: l('Accueil', 'الرئيسية', 'ⴰⵙⵏⵓⴱⴳ') },
    { id: 'club', file: 'le-club.html', label: l('Le Club', 'النادي', 'ⴰⵏⴰⴷⵉ') },
    { id: 'packs', file: 'packs.html', label: l('Nos Packs', 'باقاتنا', 'ⵜⵉⴽⵎⵎⵉⵍⵉⵏ ⵏⵏⵖ') },
    { id: 'services', file: 'prestations.html', label: l('Prestations', 'الخدمات', 'ⵜⵉⵎⵙⵙⵓⵔⵉⵏ') },
    { id: 'schedules', file: 'cours-plannings.html', label: l('Cours et plannings', 'الدروس والبرامج', 'ⵜⵉⵎⵙⵉⵔⵉⵏ ⴷ ⵉⵖⴰⵡⴰⵙⵏ') },
    { id: 'experiences', file: 'experiences.html', label: l('Expériences', 'تجارب', 'ⵜⵉⵔⵎⵉⵜⵉⵏ') },
    { id: 'children', file: 'ecoles-enfants.html', label: l('Écoles & Enfants', 'المدارس والأطفال', 'ⵜⵉⵏⵎⵍ ⴷ ⵉⴼⵔⴰⵅⵏ') },
    { id: 'gallery', file: 'galerie.html', label: l('Galerie', 'معرض الصور', 'ⴰⵙⴽⴰⵏ ⵏ ⵜⵡⵍⴰⴼⵉⵏ') },
    { id: 'rules', file: 'reglements.html', label: l('Règlements', 'الأنظمة', 'ⵉⵍⵓⴳⵏ') },
    { id: 'membership', file: 'adhesion.html', label: l('Adhésion', 'الانخراط', 'ⴰⵎⵓⵏ') }
  ];
  const text = {
    clubName: l('Club de l’Agriculture', 'نادي الفلاحة', 'ⴰⵏⴰⴷⵉ ⵏ ⵜⴼⵍⴰⵃⵜ'),
    rabat: l('Rabat, Maroc', 'الرباط، المغرب', 'ⵕⵕⴱⴰⵟ، ⵍⵎⵖⵔⵉⴱ'),
    skip: l('Aller au contenu', 'الانتقال إلى المحتوى', 'ⴷⴷⵓ ⵖⵔ ⵓⴳⴱⵓⵔ'),
    homeLabel: l('Club AGRI, accueil', 'Club AGRI، الرئيسية', 'Club AGRI، ⴰⵙⵏⵓⴱⴳ'),
    language: l('Choisir la langue', 'اختيار اللغة', 'ⴼⵔⵏ ⵜⵓⵜⵍⴰⵢⵜ'),
    navigation: l('Navigation principale', 'التنقل الرئيسي', 'ⴰⵏⴰⵡ ⴰⵎⵥⵡⴰⵔⵓ'),
    menu: l('Ouvrir le menu', 'فتح القائمة', 'ⵕⵥⵎ ⵜⴰⴱⴷⴰⵔⵜ'),
    close: l('Fermer', 'إغلاق', 'ⵔⴳⵍ'),
    pauseVideo: l('Mettre la vidéo en pause', 'إيقاف الفيديو مؤقتًا', 'ⵙⴱⴷⴷ ⴰⵙⴼⵉⵍⵎ'),
    playVideo: l('Lire la vidéo', 'تشغيل الفيديو', 'ⵙⵙⵍⴽⵎ ⴰⵙⴼⵉⵍⵎ'),
    heroVideo: l('Vidéo de présentation du Club', 'فيديو تعريفي بالنادي', 'ⴰⵙⴼⵉⵍⵎ ⵏ ⵓⵙⵙⵏ ⵏ ⵓⵏⴰⴷⵉ'),
    packsVideo: l('Vidéo de football', 'فيديو كرة القدم', 'ⴰⵙⴼⵉⵍⵎ ⵏ ⵜⴽⵓⵔⵜ'),
    history: l('L’histoire du Club', 'تاريخ النادي', 'ⴰⵎⵣⵔⵓⵢ ⵏ ⵓⵏⴰⴷⵉ'),
    renovation: l('Rénovation complète', 'تجديد شامل', 'ⴰⵎⴰⵢⵏⵓ ⴰⴽⵎⴰⵎ'),
    inauguration: l('Inauguration en 2022', 'افتتاح في 2022', 'ⴰⵕⵥⵓⵎ ⴳ 2022'),
    schoolsCta: l('Se renseigner sur les écoles', 'الاستفسار عن المدارس', 'ⵙⵇⵙⴰ ⵖⴼ ⵜⵉⵏⵎⵍ'),
    explore: l('Découvrir le Club', 'اكتشاف النادي', 'ⵙⵙⵏ ⴰⵏⴰⴷⵉ'),
    join: l('Rejoindre le Club', 'الانضمام إلى النادي', 'ⴰⵎⵓⵏ ⵖⵔ ⵓⵏⴰⴷⵉ'),
    heroKicker: l('Club de l’Agriculture · Rabat', 'نادي الفلاحة · الرباط', 'ⴰⵏⴰⴷⵉ ⵏ ⵜⴼⵍⴰⵃⵜ · ⵕⵕⴱⴰⵟ'),
    heroTitle: l('Le sport. La nature. Le plaisir d’être ensemble.', 'الرياضة. الطبيعة. متعة اللقاء.', 'ⵜⵓⵏⵏⵓⵏⵜ. ⴰⴳⴰⵎⴰ. ⵜⴰⴷⵓⵙⵉ ⵏ ⵓⵎⵓⵏ.'),
    heroIntro: l('8 hectares de sport, de détente et de partage au cœur de Rabat.', '8 هكتارات من الرياضة والاسترخاء واللقاء في قلب الرباط.', '8 ⵏ ⵀⵉⴽⵜⴰⵕⵏ ⵏ ⵜⵓⵏⵏⵓⵏⵜ ⴷ ⵓⵙⵓⵏⴼⵓ ⴳ ⵡⵓⵍ ⵏ ⵕⵕⴱⴰⵟ.'),
    scroll: l('Explorer', 'استكشف', 'ⵙⵙⵏ'),
    natureKicker: l('Un lieu à vivre', 'مكان للحياة', 'ⴰⴷⵖⴰⵔ ⵏ ⵜⵓⴷⵔⵜ'),
    natureTitle: l('Un autre rythme, au cœur de Rabat.', 'إيقاع مختلف في قلب الرباط.', 'ⵢⴰⵏ ⵓⵙⵓⵔⵙ ⵏⵉⴹⵏ ⴳ ⵡⵓⵍ ⵏ ⵕⵕⴱⴰⵟ.'),
    natureIntro: l('Au Club de l’Agriculture, le sport rencontre la nature et les moments partagés. Un cadre verdoyant pour pratiquer vos activités, prendre du temps pour vous et vous retrouver en famille.', 'في نادي الفلاحة، تلتقي الرياضة بالطبيعة واللحظات المشتركة. فضاء أخضر لممارسة أنشطتكم والاستمتاع بوقت لأنفسكم واللقاء مع العائلة.', 'ⴳ ⵓⵏⴰⴷⵉ ⵏ ⵜⴼⵍⴰⵃⵜ، ⵜⵜⵎⵓⵏ ⵜⵓⵏⵏⵓⵏⵜ ⴷ ⵓⴳⴰⵎⴰ ⴷ ⵜⵡⵏⴰⴷⵉⵏ ⵏ ⵓⵎⵓⵏ. ⴰⴷⵖⴰⵔ ⴰⵣⴳⵣⴰⵡ ⵉ ⵡⴰⵔⴰⵔ ⴷ ⵓⵙⵓⵏⴼⵓ ⴷ ⵜⵡⴰⵛⵓⵏⵜ.'),
    natureHistory: l('Une histoire de plus de 40 ans, une rénovation complète et une inauguration en 2022 : le Club poursuit sa vocation de sport et de partage.', 'أكثر من 40 سنة من التاريخ، وتجديد شامل وافتتاح في 2022: يواصل النادي رسالته في الرياضة واللقاء.', 'ⵓⴳⴳⴰⵔ ⵏ 40 ⵏ ⵉⵙⴳⴳⵯⴰⵙⵏ ⵏ ⵓⵎⵣⵔⵓⵢ، ⴰⵎⴰⵢⵏⵓ ⴰⴽⵎⴰⵎ ⴷ ⵓⵕⵥⵓⵎ ⴳ 2022: ⵉⵙⵎⴷ ⵓⵏⴰⴷⵉ ⴰⴱⵔⵉⴷ ⵏ ⵜⵓⵏⵏⵓⵏⵜ ⴷ ⵓⵎⵓⵏ.'),
    poolCaption: l('La piscine couverte du Club', 'المسبح المغطى للنادي', 'ⴰⵎⵙⵙⵓⵙ ⵉⵜⵜⵓⴷⵍⵏ ⵏ ⵓⵏⴰⴷⵉ'),
    activitiesKicker: l('Les univers du Club', 'عوالم النادي', 'ⵉⵎⴰⴹⴰⵍⵏ ⵏ ⵓⵏⴰⴷⵉ'),
    activitiesTitle: l('À chacun son envie.', 'لكل شخص ما يحب.', 'ⵉ ⴽⵓ ⵢⴰⵏ ⴰⵢⵏⵏⴰ ⵉⵔⴰ.'),
    activitiesIntro: l('Bouger, se détendre, se retrouver. Découvrez les activités et les espaces qui donnent vie au Club.', 'الحركة والاسترخاء واللقاء. اكتشفوا الأنشطة والفضاءات التي تمنح النادي حيويته.', 'ⴰⵎⵓⵙⵙⵓ، ⴰⵙⵓⵏⴼⵓ ⴷ ⵓⵎⵓⵏ. ⵙⵙⵏⴰⵜ ⵜⵉⵔⵎⵉⵜⵉⵏ ⴷ ⵉⴷⵖⴰⵔⵏ ⵏ ⵓⵏⴰⴷⵉ.'),
    filters: l('Filtrer les activités', 'تصفية الأنشطة', 'ⴼⵔⵏ ⵜⵉⵔⵎⵉⵜⵉⵏ'),
    allActivities: l('Toutes les activités', 'جميع الأنشطة', 'ⵎⴰⵕⵕⴰ ⵜⵉⵔⵎⵉⵜⵉⵏ'),
    fewerActivities: l('Voir la sélection', 'عرض الاختيار', 'ⵙⴽⵏ ⴰⴼⵔⴰⵏ'),
    empty: l('Aucune activité dans cette sélection.', 'لا توجد أنشطة ضمن هذا الاختيار.', 'ⵓⵔ ⵍⵍⵉⵏⵜ ⵜⵉⵔⵎⵉⵜⵉⵏ ⴳ ⵓⴼⵔⴰⵏ ⴰⴷ.'),
    onSite: l('Également sur place', 'متوفر أيضًا في الموقع', 'ⴰⵡⴷ ⴳ ⵓⴷⵖⴰⵔ'),
    infirmary: l('Infirmerie', 'قاعة التمريض', 'ⴰⴷⵖⴰⵔ ⵏ ⵓⵙⴳⵏⴼⵓ'),
    mosque: l('Mosquée', 'مسجد', 'ⵜⵉⵎⵣⴳⵉⴷⴰ'),
    packsKicker: l('Les formules du Club', 'صيغ النادي', 'ⵜⵉⴽⵎⵎⵉⵍⵉⵏ ⵏ ⵓⵏⴰⴷⵉ'),
    packsTitle: l('Votre prochaine parenthèse commence ici.', 'لحظاتكم القادمة تبدأ هنا.', 'ⵜⵉⵡⵏⴰⴷⵉⵏ ⵏⵏⵓⵏ ⵜⵜⵉⵣⵡⵉⵔⵏⵜ ⴷⴰ.'),
    packsIntro: l('Quatre packs à découvrir pour préparer votre adhésion au Club AGRI.', 'أربع باقات لاكتشافها استعدادًا لانخراطكم في Club AGRI.', 'ⴽⴽⵓⵥ ⵏ ⵜⴽⵎⵎⵉⵍⵉⵏ ⵉ ⵓⵙⵡⵊⴷ ⵏ ⵓⵎⵓⵏ ⴳ Club AGRI.'),
    packLabel: l('Pack', 'باقة', 'ⵜⴰⴽⵎⵎⵉⵍⵜ'),
    packCta: l('Se renseigner', 'الاستفسار', 'ⵙⵇⵙⴰ'),
    packSelected: l('Le pack qui vous intéresse', 'الباقة التي تهمكم', 'ⵜⴰⴽⵎⵎⵉⵍⵜ ⵍⵍⵉ ⵜⵔⴰⵎ'),
    removePack: l('Retirer le pack sélectionné', 'إلغاء اختيار الباقة', 'ⴽⴽⵙ ⵜⴰⴽⵎⵎⵉⵍⵜ ⵉⵜⵜⵓⴼⵔⵏⵏ'),
    schoolsKicker: l('Grandir par le sport', 'النمو بالرياضة', 'ⴰⴳⵎⵓ ⵙ ⵜⵓⵏⵏⵓⵏⵜ'),
    schoolsTitle: l('Les petites passions font les grands moments.', 'شغف صغير، ولحظات كبيرة.', 'ⵜⵉⵔⵎⵉⵜⵉⵏ ⵉⵎⵥⵥⵢⴰⵏⵏ ⵜⵜⴰⴽⴽⴰⵏⵜ ⵜⵉⵡⵏⴰⴷⵉⵏ ⵉⵎⵇⵇⵓⵔⵏ.'),
    schoolsIntro: l('Football, natation et tennis : les écoles sportives du Club invitent les enfants à découvrir le plaisir d’apprendre et de jouer ensemble.', 'كرة القدم والسباحة والتنس: تدعو مدارس النادي الرياضية الأطفال لاكتشاف متعة التعلم واللعب معًا.', 'ⵜⴰⴽⵓⵔⵜ، ⴰⵙⵙⵓⵙ ⴷ ⵜⵉⵏⵉⵙ: ⵜⵉⵏⵎⵍ ⵏ ⵓⵏⴰⴷⵉ ⵜⵜⴰⵡⵙⵏⵜ ⵉⴼⵔⴰⵅⵏ ⴰⴷ ⵍⵎⴷⵏ ⴷ ⴰⴷ ⵓⵔⴰⵔⵏ ⵉⵎⵓⵏⵏ.'),
    age: l('5 à 14 ans', 'من 5 إلى 14 سنة', 'ⵙⴳ 5 ⴰⵔ 14 ⵏ ⵉⵙⴳⴳⵯⴰⵙⵏ'),
    sessions: l('2 séances par semaine', 'حصتان في الأسبوع', '2 ⵏ ⵜⵎⵙⵉⵔⵉⵏ ⴳ ⵉⵎⴰⵍⴰⵙⵙ'),
    galleryKicker: l('En images', 'بالصور', 'ⵙ ⵜⵡⵍⴰⴼⵉⵏ'),
    galleryTitle: l('Bienvenue dans votre Club.', 'مرحبًا بكم في ناديكم.', 'ⴰⵏⵙⵓⴼ ⵖⵔ ⵓⵏⴰⴷⵉ ⵏⵏⵓⵏ.'),
    galleryIntro: l('Une promenade à travers les espaces du Club de l’Agriculture.', 'جولة عبر فضاءات نادي الفلاحة.', 'ⴰⵙⵏⴰⵡ ⴳ ⵉⴷⵖⴰⵔⵏ ⵏ ⵓⵏⴰⴷⵉ ⵏ ⵜⴼⵍⴰⵃⵜ.'),
    enlarge: l('Agrandir la photo', 'تكبير الصورة', 'ⵙⵉⵎⵖⵓⵔ ⵜⴰⵡⵍⴰⴼⵜ'),
    previous: l('Photo précédente', 'الصورة السابقة', 'ⵜⴰⵡⵍⴰⴼⵜ ⵉⵣⵔⵉⵏ'),
    next: l('Photo suivante', 'الصورة التالية', 'ⵜⴰⵡⵍⴰⴼⵜ ⴷ ⵉⴷⴷⴰⵏ'),
    membershipKicker: l('Rejoindre le Club', 'الانضمام إلى النادي', 'ⴰⵎⵓⵏ ⵖⵔ ⵓⵏⴰⴷⵉ'),
    membershipTitle: l('Et si votre prochain rendez-vous était ici ?', 'ما رأيكم أن يكون لقاؤكم القادم هنا؟', 'ⵎⴰ ⵜⵏⵏⴰⵎ ⴰⴷ ⵉⵍⵉ ⵓⵎⵓⵏ ⵏⵏⵓⵏ ⴷⴰ؟'),
    membershipIntro: l('Découvrez les packs et préparez votre adhésion. Les conditions d’accès et les modalités d’inscription sont à consulter auprès du Club.', 'اكتشفوا الباقات واستعدوا للانخراط. يمكن الاستفسار لدى النادي عن شروط الولوج وكيفية التسجيل.', 'ⵙⵙⵏⴰⵜ ⵜⵉⴽⵎⵎⵉⵍⵉⵏ ⴷ ⵙⵡⵊⴷⴰⵜ ⴰⵎⵓⵏ. ⵙⵇⵙⴰⵜ ⴰⵏⴰⴷⵉ ⵖⴼ ⵜⵉⵡⵜⵜⴰⵙ ⴷ ⵓⵙⵙⵊⵍ.'),
    discoverPacks: l('Découvrir les packs', 'اكتشاف الباقات', 'ⵙⵙⵏ ⵜⵉⴽⵎⵎⵉⵍⵉⵏ'),
    locationTitle: l('Retrouvez-nous à Rabat.', 'تجدوننا في الرباط.', 'ⴰⴼⴰⵜ ⴰⵏⵖ ⴳ ⵕⵕⴱⴰⵟ.'),
    locationIntro: l('Un lieu dédié au sport, à la détente et aux moments partagés.', 'مكان للرياضة والاسترخاء واللحظات المشتركة.', 'ⴰⴷⵖⴰⵔ ⵏ ⵜⵓⵏⵏⵓⵏⵜ ⴷ ⵓⵙⵓⵏⴼⵓ ⴷ ⵓⵎⵓⵏ.'),
    footerIntro: l('Sport, nature et convivialité au cœur de Rabat.', 'الرياضة والطبيعة واللقاء في قلب الرباط.', 'ⵜⵓⵏⵏⵓⵏⵜ، ⴰⴳⴰⵎⴰ ⴷ ⵓⵎⵓⵏ ⴳ ⵡⵓⵍ ⵏ ⵕⵕⴱⴰⵟ.'),
    quickLinks: l('Explorer le Club', 'استكشاف النادي', 'ⵙⵙⵏ ⴰⵏⴰⴷⵉ'),
    filiation: l('Dans la famille FOS-Agri', 'ضمن عائلة FOS-Agri', 'ⴳ ⵜⵡⴰⵛⵓⵏⵜ ⵏ FOS-Agri'),
    top: l('Retour en haut', 'العودة إلى الأعلى', 'ⵓⵖⵓⵍ ⵖⵔ ⵓⴼⵍⵍⴰ'),
    description: l('Découvrez le Club de l’Agriculture à Rabat : sport, bien-être, écoles sportives et moments en famille.', 'اكتشفوا نادي الفلاحة بالرباط: رياضة ورفاهية ومدارس رياضية ولحظات مع العائلة.', 'ⵙⵙⵏⴰⵜ ⴰⵏⴰⴷⵉ ⵏ ⵜⴼⵍⴰⵃⵜ ⴳ ⵕⵕⴱⴰⵟ: ⵜⵓⵏⵏⵓⵏⵜ ⴷ ⵓⵙⵓⵏⴼⵓ ⴷ ⵜⵡⴰⵛⵓⵏⵜ.')
  };
  const stats = [
    { value: '8', unit: l('hectares', 'هكتارات', 'ⵀⵉⴽⵜⴰⵕⵏ'), label: l('de nature et de vie', 'من الطبيعة والحياة', 'ⵏ ⵓⴳⴰⵎⴰ ⴷ ⵜⵓⴷⵔⵜ') },
    { value: '10+', unit: l('disciplines', 'رياضات', 'ⵜⵓⵏⵏⵓⵏⵉⵏ'), label: l('pour trouver votre rythme', 'لتجدوا إيقاعكم', 'ⵉ ⵓⴼⴰ ⵏ ⵓⵙⵓⵔⵙ ⵏⵏⵓⵏ') },
    { value: '40+', unit: l('ans d’histoire', 'سنة من التاريخ', 'ⵏ ⵉⵙⴳⴳⵯⴰⵙⵏ ⵏ ⵓⵎⵣⵔⵓⵢ'), label: l('et de moments partagés', 'ومن اللحظات المشتركة', 'ⴷ ⵜⵡⵏⴰⴷⵉⵏ ⵏ ⵓⵎⵓⵏ') }
  ];
  const filters = [
    { id: 'all', icon: 'fa-border-all', label: l('Tout', 'الكل', 'ⵎⴰⵕⵕⴰ') },
    { id: 'sport', icon: 'fa-person-running', label: l('Sport', 'رياضة', 'ⵜⵓⵏⵏⵓⵏⵜ') },
    { id: 'wellness', icon: 'fa-water', label: l('Bien-être', 'رفاهية', 'ⴰⵙⵓⵏⴼⵓ') },
    { id: 'family', icon: 'fa-people-group', label: l('Famille', 'عائلة', 'ⵜⴰⵡⴰⵛⵓⵏⵜ') },
    { id: 'business', icon: 'fa-briefcase', label: l('Business', 'أعمال', 'ⵜⴰⵎⵙⵙⵓⵔⵜ') }
  ];
  const activities = [
    { id: 'tennis', categories: ['sport','family'], icon: 'fa-baseball', title: l('Tennis', 'تنس', 'ⵜⵉⵏⵉⵙ'), description: l('Le plaisir du jeu, à votre rythme.', 'متعة اللعب بإيقاعكم.', 'ⵜⴰⴷⵓⵙⵉ ⵏ ⵡⴰⵔⴰⵔ ⵙ ⵓⵙⵓⵔⵙ ⵏⵏⵓⵏ.') },
    { id: 'padel', categories: ['sport'], icon: 'fa-table-tennis-paddle-ball', title: l('Padel', 'بادل', 'ⴱⴰⴷⵍ'), description: l('Se retrouver et partager le terrain.', 'اللقاء ومشاركة الملعب.', 'ⴰⵎⵓⵏ ⴷ ⵓⴱⴹⵓ ⵏ ⵓⵏⵔⴰⵔ.') },
    { id: 'covered-pool', categories: ['sport','wellness','family'], icon: 'fa-person-swimming', title: l('Piscine couverte', 'مسبح مغطى', 'ⴰⵎⵙⵙⵓⵙ ⵉⵜⵜⵓⴷⵍⵏ'), description: l('Un espace aquatique couvert et chauffé.', 'فضاء مائي مغطى ومدفأ.', 'ⴰⴷⵖⴰⵔ ⵏ ⵡⴰⵎⴰⵏ ⵉⵜⵜⵓⴷⵍⵏ ⴷ ⵉⵣⵖⵍⵏ.') },
    { id: 'fitness', categories: ['sport','wellness'], icon: 'fa-dumbbell', title: l('Fitness', 'لياقة بدنية', 'ⵜⴰⴷⵓⵙⵉ ⵏ ⵜⴼⴳⴳⴰ'), description: l('Un espace consacré à votre entraînement.', 'فضاء مخصص لتدريبكم.', 'ⴰⴷⵖⴰⵔ ⵉ ⵓⵙⵙⵍⵎⴷ ⵏ ⵜⴼⴳⴳⴰ.') },
    { id: 'spa', categories: ['wellness'], icon: 'fa-spa', title: l('SPA', 'سبا', 'ⵙⴱⴰ'), description: l('Une parenthèse dédiée à la détente.', 'لحظات مخصصة للاسترخاء.', 'ⵜⵉⵡⵏⴰⴷⵉⵏ ⵉ ⵓⵙⵓⵏⴼⵓ.') },
    { id: 'restaurant', categories: ['family','business'], icon: 'fa-utensils', title: l('Restaurant', 'مطعم', 'ⴰⵙⴰⵔⴰⵎ'), description: l('Un lieu de convivialité ouvert au public.', 'مكان للقاء مفتوح للعموم.', 'ⴰⴷⵖⴰⵔ ⵏ ⵓⵎⵓⵏ ⵉⵕⵥⵎⵏ ⵉ ⵎⴰⵕⵕⴰ.') },
    { id: 'outdoor-pools', categories: ['wellness','family'], icon: 'fa-water', title: l('Piscines plein air', 'مسابح في الهواء الطلق', 'ⵉⵎⵙⵙⵓⵙⵏ ⴳ ⵓⴳⴰⵎⴰ'), description: l('Des moments de détente au grand air.', 'لحظات استرخاء في الهواء الطلق.', 'ⵜⵉⵡⵏⴰⴷⵉⵏ ⵏ ⵓⵙⵓⵏⴼⵓ ⴳ ⵓⴳⴰⵎⴰ.') },
    { id: 'football', categories: ['sport','family'], icon: 'fa-futbol', title: l('Mini-foot', 'كرة قدم مصغرة', 'ⵜⴰⴽⵓⵔⵜ ⵜⴰⵎⵥⵥⵢⴰⵏⵜ'), description: l('Le plaisir du jeu en équipe.', 'متعة اللعب الجماعي.', 'ⵜⴰⴷⵓⵙⵉ ⵏ ⵡⴰⵔⴰⵔ ⴳ ⵜⵔⴰⴱⴱⵓⵜ.') },
    { id: 'omnisport', categories: ['sport'], icon: 'fa-basketball', title: l('Omnisport', 'رياضات متعددة', 'ⵜⵓⵏⵏⵓⵏⵉⵏ ⵉⴳⴳⵓⵜⵏ'), description: l('Des espaces pour différentes pratiques sportives.', 'فضاءات لممارسات رياضية متنوعة.', 'ⵉⴷⵖⴰⵔⵏ ⵉ ⵜⵓⵏⵏⵓⵏⵉⵏ ⵉⴳⴳⵓⵜⵏ.') },
    { id: 'playground', categories: ['family'], icon: 'fa-child-reaching', title: l('Aire de jeux', 'فضاء ألعاب', 'ⴰⴷⵖⴰⵔ ⵏ ⵡⴰⵔⴰⵔ'), description: l('Les petits aussi ont leur espace.', 'للصغار أيضًا فضاؤهم.', 'ⵉⵍⵍⴰ ⵓⴷⵖⴰⵔ ⴰⵡⴷ ⵉ ⵉⴼⵔⴰⵅⵏ.') },
    { id: 'outdoor-gym', categories: ['sport','wellness'], icon: 'fa-person-walking', title: l('Gym plein air', 'رياضة في الهواء الطلق', 'ⵜⵓⵏⵏⵓⵏⵜ ⴳ ⵓⴳⴰⵎⴰ'), description: l('Bouger et s’entraîner au grand air.', 'الحركة والتدريب في الهواء الطلق.', 'ⴰⵎⵓⵙⵙⵓ ⴷ ⵓⵙⵙⵍⵎⴷ ⴳ ⵓⴳⴰⵎⴰ.') },
    { id: 'chess', categories: ['family'], icon: 'fa-chess', title: l('Échiquier géant', 'شطرنج عملاق', 'ⵛⵛⴰⵜⵕⴰⵏⵊ ⴰⵎⵇⵇⵓⵔ'), description: l('Un moment de réflexion et de jeu à partager.', 'لحظة للتفكير واللعب معًا.', 'ⵜⴰⵡⵏⴰⴷⵜ ⵏ ⵓⵙⵡⵉⵏⴳⵎ ⴷ ⵡⴰⵔⴰⵔ.') },
    { id: 'motel', categories: ['family','business'], icon: 'fa-bed', title: l('Motel', 'موتيل', 'ⵎⵓⵜⵉⵍ'), description: l('L’hébergement au sein du Club.', 'الإقامة داخل النادي.', 'ⴰⵙⵏⵙⵓ ⴳ ⵓⵏⴰⴷⵉ.') },
    { id: 'meetings', categories: ['business'], icon: 'fa-people-roof', title: l('Salles de réunion', 'قاعات اجتماعات', 'ⵉⴷⵖⴰⵔⵏ ⵏ ⵓⵎⵓⵏ'), description: l('Des espaces pour vos rencontres professionnelles.', 'فضاءات للقاءاتكم المهنية.', 'ⵉⴷⵖⴰⵔⵏ ⵉ ⵓⵎⵓⵏ ⵏ ⵜⵎⵙⵙⵓⵔⵜ.') }
  ];
  const packs = [
    { id: 'astragal', name: 'Astragal', icon: 'fa-leaf', color: 'sage' },
    { id: 'rhodiola', name: 'Rhodiola', icon: 'fa-seedling', color: 'coral' },
    { id: 'ginseng', name: 'Ginseng', icon: 'fa-tree', color: 'teal' },
    { id: 'spiruline', name: 'Spiruline', icon: 'fa-water', color: 'gold' }
  ];
  const schools = [
    { id: 'football', icon: 'fa-futbol', title: l('École de football', 'مدرسة كرة القدم', 'ⵜⵉⵏⵎⵍ ⵏ ⵜⴽⵓⵔⵜ'), description: l('Le jeu collectif et le plaisir de jouer ensemble.', 'اللعب الجماعي ومتعة المشاركة.', 'ⴰⵔⴰⵔ ⴰⴳⵔⴰⵡⴰⵏ ⴷ ⵜⴰⴷⵓⵙⵉ ⵏ ⵓⵎⵓⵏ.') },
    { id: 'swimming', icon: 'fa-person-swimming', title: l('École de natation', 'مدرسة السباحة', 'ⵜⵉⵏⵎⵍ ⵏ ⵓⵙⵙⵓⵙ'), description: l('Découvrir le plaisir de la natation.', 'اكتشاف متعة السباحة.', 'ⴰⵙⵙⵏ ⵏ ⵜⴷⵓⵙⵉ ⵏ ⵓⵙⵙⵓⵙ.') },
    { id: 'tennis', icon: 'fa-baseball', title: l('École de tennis', 'مدرسة التنس', 'ⵜⵉⵏⵎⵍ ⵏ ⵜⵉⵏⵉⵙ'), description: l('Découvrir le jeu et progresser sur le court.', 'اكتشاف اللعب والتقدم في الملعب.', 'ⴰⵙⵙⵏ ⵏ ⵡⴰⵔⴰⵔ ⴷ ⵓⴳⵎⵓ ⴳ ⵓⵏⵔⴰⵔ.') }
  ];
  const gallery = [
    { id: 'entrance', file: 'club-entrance.jpg', title: l('L’entrée du Club', 'مدخل النادي', 'ⴰⵏⴳⴳⵯⵔ ⵏ ⵓⵏⴰⴷⵉ') },
    { id: 'pool', file: 'club-pool.jpg', title: l('La piscine couverte', 'المسبح المغطى', 'ⴰⵎⵙⵙⵓⵙ ⵉⵜⵜⵓⴷⵍⵏ') },
    { id: 'fitness', file: 'club-fitness.jpg', title: l('La salle de fitness', 'قاعة اللياقة البدنية', 'ⴰⴷⵖⴰⵔ ⵏ ⵜⴷⵓⵙⵉ ⵏ ⵜⴼⴳⴳⴰ') },
    { id: 'cafe', file: 'club-cafe.jpg', title: l('La cafétéria de la piscine plein air', 'مقهى المسبح الخارجي', 'ⴰⵙⴰⵔⴰⵎ ⵏ ⵓⵎⵙⵙⵓⵙ ⴳ ⵓⴳⴰⵎⴰ') }
  ];
  const steps = [
    l('Découvrir les packs', 'اكتشاف الباقات', 'ⴰⵙⵙⵏ ⵏ ⵜⴽⵎⵎⵉⵍⵉⵏ'),
    l('Se renseigner sur les conditions', 'الاستفسار عن الشروط', 'ⴰⵙⵇⵙⵉ ⵖⴼ ⵜⵉⵡⵜⵜⴰⵙ'),
    l('Préparer son inscription', 'الاستعداد للتسجيل', 'ⴰⵙⵡⵊⴷ ⵏ ⵓⵙⵙⵊⵍ')
  ];
  root.ClubData = { navigation, text, stats, filters, activities, packs, schools, gallery, steps, languages: ['fr','ar','zgh'] };
})(globalThis);
