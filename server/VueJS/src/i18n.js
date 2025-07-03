import { createI18n } from 'vue-i18n';

// Define translations for French and English
const messages = {
  en: {
    menu: {
      home: 'Home',
      stages: 'Courses',
      about: 'About Us',
      contact: 'Contact',
    },
    banner: {
      home: 'An unforgettable experience',
      stages: 'Prepare your game, live the experience',
      about: 'From experience comes the method',
      contact: 'An exchange, a first step',
    },
    stages: {
      title: 'Our Courses',
      description:
        'Golf courses in Chamonix, led by a high-performance expert coach. Whether you are a beginner, passionate amateur, or a player seeking excellence, these courses adapt to your level: discovery, nature immersion, or intensive improvement. Each session combines technical progress, mental work, and the joy of the game in an exceptional setting at the foot of Mont-Blanc.',
      carousel: {
        highPerformance: 'High-Performance Course',
        discovery: 'Discovery Course',
        corporate: 'Corporate Course',
        intensive: 'Intensive Course',
        swinghouse: 'Swing House Course',
      },
    },
    stagesHome: {
      title: 'Our Courses',
      description:
        'Golf courses in Chamonix, led by a high-performance expert coach. Whether you are a beginner, passionate amateur, or a player seeking excellence, these courses adapt to your level: discovery, nature immersion, or intensive improvement. Each session combines technical progress, mental work, and the joy of the game in an exceptional setting at the foot of Mont-Blanc.',
      buttonText: 'View Courses',
    },
    stageCustom: {
      title: 'Custom Courses',
      description:
        'Do you have a specific need? A precise goal? Our golf courses in Chamonix are designed to adapt to your level and expectations. Each course combines technical progress, mental work, and the joy of the game in an exceptional setting at the foot of Mont-Blanc. Supervised by a high-performance expert coach, these courses allow you to progress quickly while enjoying a unique natural environment. Contact us to learn more.',
      descriptionMobile:
        'Golf courses in Chamonix, supervised by a high-performance expert coach. Whether you are a beginner, passionate amateur, or a player seeking excellence, these courses adapt to your level: discovery, nature immersion, or intensive improvement. Each session combines technical progress, mental work, and the joy of the game in an exceptional setting at the foot of Mont-Blanc.',
      buttonText: 'Contact Us',
    },
    presentation: {
      title: 'The Coach',
      description:
        'Pierre ASCEDU, a certified professional for over 30 years, teaches golf with passion and precision. A former coach of the French military ski team, he has unique expertise in high-performance coaching. His teaching is based on a personalized, technical, and mental approach, adapted to all levels of play. Whether you are a beginner or an experienced player, he guides you in your progress with accuracy, care, and efficiency.',
    },
    infoPratique: {
      title: 'Practical Information',
      contactUs: 'Contact us!',
      interested: 'Are you interested in our',
      stages: 'courses',
      sendMailOrCall: 'Send us an email or call us at:',
      phone: 'Phone: +33 (0) 6 21 62 05 86',
      email: 'Email: ',
    },
    footer: {
      home: 'Home',
      stages: 'Courses',
      about: 'About Us',
      contact: 'Contact',
      brand: 'AP GOLF',
    },
    descriptionStage: {
      programDetails: 'Program Details',
      information: 'Information',
      duration: 'Duration',
      dates: 'Dates',
      location: 'Location / Reception',
      price: 'Participant Price',
      participants: 'Number of Participants',
      level: 'Level',
      contactReserve: 'Contact Us / Reserve',
    },
    coachHome: {
      title: 'The Coach',
      description:
        'Pierre ASCEDU, a certified professional for over 30 years, teaches golf at the Chamonix Golf Club with passion and precision. A former coach of the French military ski team, he has unique expertise in high-performance coaching. His teaching is based on a personalized, technical, and mental approach, adapted to all levels of play. Whether you are a beginner or an experienced player, he guides you in your progress with accuracy, care, and efficiency. Using modern tools (Trackman, AimPoint, TPI) and extensive field experience, Pierre helps you achieve your goals, whether for leisure or competition.',
      buttonText: 'Learn More',
    },
    stageIntensif: {
      title: 'Intensive Golf Course',
      description:
        'This intensive course is designed for experienced golfers who want to improve their game and reach the next level. Led by Pierre ASCEDU, a professional coach with over 30 years of experience, this program combines technique, strategy, and mental preparation to optimize your performance on the course.',
      program: {
        day1: '<strong>Day 1: Technical analysis and goal setting</strong><br>Video analysis of your swing, evaluation of your short and long game. Personalized goal setting for the course.',
        day2: '<strong>Day 2: Swing improvement</strong><br>Work on posture, grip, and movement. Specific exercises to gain power and precision.',
        day3: '<strong>Day 3: Course strategy</strong><br>On-course session to learn how to handle different game situations. Focus on decision-making and risk management.',
        day4: '<strong>Day 4: Mental approach and stress management</strong><br>Concentration and relaxation techniques to improve your mental game. Competition preparation.',
        day5: '<strong>Day 5: Full course and review</strong><br>Full course with practical application of skills. Personalized review and recommendations for continued improvement.',
      },
      additionalInfo: {
        duration: '5 days',
        dates: 'From July 10 to July 14, 2025',
        location: 'Chamonix Golf Club',
        price: '€520 per person',
        participants: '3 to 5 people',
        level: 'Advanced',
      },
    },
    stageHautePerf: {
      title: 'High-Performance Golf Course',
      description:
        'This intensive course is designed for golfers who want to take their game to the next level. Led by Pierre ASCEDU, a professional coach with over 30 years of experience, this program combines technique, strategy, and mental preparation to optimize your performance on the course.',
      program: {
        day1: '<strong>Day 1: Technical analysis and goal setting</strong><br>Video analysis of your swing, evaluation of your short and long game. Personalized goal setting for the course.',
        day2: '<strong>Day 2: Swing improvement</strong><br>Work on posture, grip, and movement. Specific exercises to gain power and precision.',
        day3: '<strong>Day 3: Course strategy</strong><br>On-course session to learn how to handle different game situations. Focus on decision-making and risk management.',
        day4: '<strong>Day 4: Mental approach and stress management</strong><br>Concentration and relaxation techniques to improve your mental game. Competition preparation.',
        day5: '<strong>Day 5: Short game and putting</strong><br>Intensive exercises on chipping, pitching, and putting. Improvement of precision and consistency.',
        day6: '<strong>Day 6: Full course and review</strong><br>Full course with practical application of skills. Personalized review and recommendations for continued improvement.',
      },
      additionalInfo: {
        duration: '6 days',
        dates: 'From July 10 to July 15, 2025',
        location: 'Chamonix Golf Club',
        price: '€420 per person',
        participants: '3 to 5 people',
        level: 'Advanced',
      },
    },
    stageEntreprise: {
      title: 'Corporate Golf Course',
      description:
        'This corporate golf course is designed to strengthen team cohesion and provide a unique experience for your employees. Led by Pierre ASCEDU, a professional coach, this program combines golf initiation, fun activities, and moments of sharing in an exceptional setting.',
      program: {
        day1: '<strong>Day 1: Initiation and discovery</strong><br>Introduction to equipment, initiation to swing and putting. Fun activities to promote team cohesion.',
        day2: '<strong>Day 2: Challenges and workshops</strong><br>Technical workshops on short and long games. Team challenges to develop a spirit of collaboration.',
        day3: '<strong>Day 3: Course and moments of sharing</strong><br>Accompanied course to apply the skills learned. Debriefing and moments of conviviality to close the course.',
      },
      additionalInfo: {
        duration: '3 days',
        dates: 'From September 15 to September 17, 2025',
        location: 'Golf de Trévignin (73)',
        price: '€350 per person',
        participants: '8 to 12 people',
        level: 'All levels',
      },
    },
    stageDecouverte: {
      title: 'Discovery Golf Course',
      description:
        'This discovery course is ideal for beginner golfers or those wishing to learn the basics of golf in a friendly environment. Led by Pierre ASCEDU, a professional coach, this program introduces you to the technical and strategic fundamentals of golf while allowing you to enjoy a fun and enriching experience.',
      program: {
        day1: '<strong>Day 1: Initiation and discovery</strong><br>Introduction to equipment, initiation to swing and putting. Discovering the basics of the game on the practice range.',
        day2: '<strong>Day 2: Deepening techniques</strong><br>Work on grip, posture, and movement. Exercises on short and long games.',
        day3: '<strong>Day 3: Course and practical application</strong><br>Accompanied course to apply the skills learned. Personalized advice to progress and enjoy the game on the course.',
      },
      additionalInfo: {
        duration: '3 days',
        dates: 'From August 3 to August 5, 2025',
        location: 'Golf de Trévignin (73)',
        price: '€250 per person',
        participants: '6 to 8 people',
        level: 'Beginner',
      },
    },
    stageSwingHouse: {
      title: 'Swing House Course',
      description:
        'The Swing House course is a unique experience designed for golf enthusiasts who want to improve their game in a relaxed and friendly atmosphere. Led by Pierre ASCEDU, this course combines technical training.',
      program: {
        day1: '<strong>Day 1: Introduction to Swing House</strong><br>Welcome and introduction to the Swing House concept. Overview of the facilities and equipment. Initial assessment of each participant’s level.',
        day2: '<strong>Day 2: Technical training</strong><br>Focus on swing mechanics and body positioning. Individualized drills to improve technique. Video analysis of swings for personalized feedback.',
        day3: '<strong>Day 3: Course play and strategy</strong><br>On-course session to apply learned techniques. Emphasis on course management and shot selection. Group discussions on strategies for different course situations.',
      },
      additionalInfo: {
        duration: '3 days',
        dates: 'From August 10 to August 12, 2025',
        location: 'Swing House, Chamonix',
        price: '€300 per person',
        participants: '4 to 6 people',
        level: 'All levels',
      },
    },
    swingHouse: {
      title: 'Our partner',
      description:
        'Swing House is a dedicated space for golfers to refine their skills and enjoy a unique experience. Equipped with state-of-the-art technology and a welcoming atmosphere, it is the perfect place to practice, learn, and connect with fellow golf enthusiasts.',
    },
  },
  fr: {
    menu: {
      home: 'Accueil',
      stages: 'Stages',
      about: 'À propos',
      contact: 'Contact',
    },
    banner: {
      home: 'Une expérience inoubliable',
      stages: 'Préparez votre jeu, vivez l’expérience',
      about: 'De l’expérience naît la méthode',
      contact: 'Un échange, un premier pas',
    },
    stages: {
      title: 'Nos Stages',
      description:
        'Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.',
      carousel: {
        highPerformance: 'Stage Haute Performance',
        discovery: 'Stage Découverte',
        corporate: 'Stage Entreprise',
        intensive: 'Stage Intensif',
        swinghouse: 'Stage Swing House',
      },
    },
    stagesHome: {
      title: 'Nos Stages',
      description:
        'Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.',
      buttonText: 'Voir les stages',
    },
    stageCustom: {
      title: 'Stages personnalisés',
      description:
        'Vous avez un besoin particulier ? Un objectif précis ? Nos stages de golf à Chamonix sont conçus pour s’adapter à votre niveau et vos attentes. Chaque stage allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc. Encadrés par un coach expert de la haute performance, ces stages vous permettent de progresser rapidement tout en profitant d’un environnement naturel unique. Contactez-nous pour en savoir plus.',
      descriptionMobile:
        'Stages de golf à Chamonix, encadrés par un coach expert de la haute performance. Que vous soyez débutant, amateur passionné ou joueur en quête d’excellence, ces stages s’adaptent à votre niveau : découverte, immersion nature ou perfectionnement intensif. Chaque session allie progression technique, travail mental et plaisir du jeu dans un cadre exceptionnel, au pied du Mont-Blanc.',
      buttonText: 'Nous contacter',
    },
    presentation: {
      title: 'Le coach',
      description:
        'Pierre ASCEDU, professionnel diplômé depuis plus de 30 ans, enseigne le golf avec passion et exigence. Ancien entraîneur de l’équipe militaire française de ski, il possède une expertise unique dans le coaching en milieu de haute performance. Sa pédagogie repose sur une approche personnalisée, technique et mentale, adaptée à tous les niveaux de jeu. Que vous soyez débutant ou joueur confirmé, il vous accompagne dans votre progression avec précision, bienveillance et efficacité.',
    },
    infoPratique: {
      title: 'Infos Pratiques',
      contactUs: 'Contactez nous !',
      interested: 'Vous êtes intéressé par nos',
      stages: 'stages',
      sendMailOrCall: 'Envoyez nous un mail ou appelez nous au :',
      phone: 'Tél : +33 (0) 6 21 62 05 86',
      email: 'Mail : ',
    },
    footer: {
      home: 'Accueil',
      stages: 'Stages',
      about: 'À propos',
      contact: 'Contact',
      brand: 'AP GOLF',
    },
    descriptionStage: {
      programDetails: 'Le programme en détails',
      information: 'Informations',
      duration: 'Durée',
      dates: 'Dates',
      location: 'Lieu / Accueil',
      price: 'Tarif participant',
      participants: 'Nombre de personnes',
      level: 'Niveau',
      contactReserve: 'Nous contacter / Reserver',
    },
    coachHome: {
      title: 'Le Coach',
      description:
        'Professionnel diplômé depuis plus de 30 ans, Pierre Ascedu enseigne au Golf de Chamonix avec passion et exigence. Ancien entraîneur de l’équipe militaire française de ski, il possède une expertise unique du coaching en milieu de haute performance. Sa pédagogie repose sur une approche personnalisée, technique et mentale, adaptée à tous les niveaux de jeu. Que vous soyez débutant ou joueur confirmé, il vous accompagne dans votre progression avec précision, bienveillance et efficacité. Grâce à des outils modernes (Trackman, AimPoint, TPI) et une grande expérience de terrain, Pierre vous aide à atteindre vos objectifs, que ce soit pour le loisir ou la compétition.',
      buttonText: 'En savoir plus',
    },
    stageIntensif: {
      title: 'Stage de Golf Intensif',
      description:
        'Ce stage intensif est conçu pour les golfeurs confirmés souhaitant perfectionner leur jeu et atteindre un niveau supérieur. Encadré par Pierre ASCEDU, coach professionnel avec plus de 30 ans d’expérience, ce programme allie technique, stratégie et préparation mentale pour optimiser vos performances sur le parcours.',
      program: {
        day1: '<strong>Jour 1 : Analyse technique et mise en place des objectifs</strong><br>Analyse vidéo de votre swing, évaluation de votre jeu court et long. Définition des objectifs personnalisés pour le stage.',
        day2: '<strong>Jour 2 : Perfectionnement du swing</strong><br>Travail sur la posture, le grip et le mouvement. Exercices spécifiques pour gagner en puissance et en précision.',
        day3: '<strong>Jour 3 : Stratégie sur le parcours</strong><br>Session sur le parcours pour apprendre à gérer les différentes situations de jeu. Focus sur la prise de décision et la gestion des risques.',
        day4: '<strong>Jour 4 : Approche mentale et gestion du stress</strong><br>Techniques de concentration et de relaxation pour améliorer votre mental. Préparation à la compétition.',
        day5: '<strong>Jour 5 : Parcours complet et bilan</strong><br>Parcours complet avec mise en pratique des acquis. Bilan personnalisé et recommandations pour continuer à progresser.',
      },
      additionalInfo: {
        duration: '5 jours',
        dates: 'Du 10 au 14 juillet 2025',
        location: 'Golf de Chamonix',
        price: '520 € par personne',
        participants: '3 à 5 personnes',
        level: 'Confirmé',
      },
    },
    stageHautePerf: {
      title: 'Stage de Golf Haute Performance',
      description:
        'Ce stage intensif est conçu pour les golfeurs souhaitant améliorer leur jeu à un niveau supérieur. Encadré par Pierre ASCEDU, coach professionnel avec plus de 30 ans d’expérience, ce programme allie technique, stratégie et préparation mentale pour optimiser vos performances sur le parcours.',
      program: {
        day1: '<strong>Jour 1 : Analyse technique et mise en place des objectifs</strong><br>Analyse vidéo de votre swing, évaluation de votre jeu court et long. Définition des objectifs personnalisés pour le stage.',
        day2: '<strong>Jour 2 : Perfectionnement du swing</strong><br>Travail sur la posture, le grip et le mouvement. Exercices spécifiques pour gagner en puissance et en précision.',
        day3: '<strong>Jour 3 : Stratégie sur le parcours</strong><br>Session sur le parcours pour apprendre à gérer les différentes situations de jeu. Focus sur la prise de décision et la gestion des risques.',
        day4: '<strong>Jour 4 : Approche mentale et gestion du stress</strong><br>Techniques de concentration et de relaxation pour améliorer votre mental. Préparation à la compétition.',
        day5: '<strong>Jour 5 : Jeu court et putting</strong><br>Exercices intensifs sur le chipping, le pitching et le putting. Amélioration de la précision et de la régularité.',
        day6: '<strong>Jour 6 : Parcours complet et bilan</strong><br>Parcours complet avec mise en pratique des acquis. Bilan personnalisé et recommandations pour continuer à progresser.',
      },
      additionalInfo: {
        duration: '6 jours',
        dates: 'Du 10 au 15 juillet 2025',
        location: 'Golf de Chamonix',
        price: '420 € par personne',
        participants: '3 à 5 personnes',
        level: 'Confirmé',
      },
    },
    stageEntreprise: {
      title: 'Stage de Golf Entreprise',
      description:
        'Ce stage de golf pour entreprises est conçu pour renforcer la cohésion d\'équipe et offrir une expérience unique à vos collaborateurs. Encadré par Pierre ASCEDU, coach professionnel, ce programme allie initiation au golf, activités ludiques et moments de partage dans un cadre exceptionnel.',
      program: {
        day1: '<strong>Jour 1 : Initiation et découverte</strong><br>Présentation du matériel, initiation au swing et au putting. Activités ludiques pour favoriser la cohésion d’équipe.',
        day2: '<strong>Jour 2 : Challenges et ateliers</strong><br>Ateliers techniques sur le jeu court et le jeu long. Challenges en équipe pour développer l’esprit de collaboration.',
        day3: '<strong>Jour 3 : Parcours et moments de partage</strong><br>Parcours accompagné pour mettre en pratique les acquis. Débriefing et moments de convivialité pour clôturer le stage.',
      },
      additionalInfo: {
        duration: '3 jours',
        dates: 'Du 15 au 17 septembre 2025',
        location: 'Golf de Trévignin (73)',
        price: '350 € par personne',
        participants: '8 à 12 personnes',
        level: 'Tous niveaux',
      },
    },
    stageDecouverte: {
      title: 'Stage de Golf Découverte',
      description:
        'Ce stage découverte est idéal pour les golfeurs débutants ou ceux souhaitant découvrir les bases du golf dans un cadre convivial. Encadré par Pierre ASCEDU, coach professionnel, ce programme vous initiera aux fondamentaux techniques et stratégiques du golf tout en vous permettant de profiter d\'une expérience ludique et enrichissante.',
      program: {
        day1: '<strong>Jour 1 : Initiation et découverte</strong><br>Présentation du matériel, initiation au swing et au putting. Découverte des bases du jeu sur le practice.',
        day2: '<strong>Jour 2 : Approfondissement des techniques</strong><br>Travail sur le grip, la posture et le mouvement. Exercices sur le jeu court et le jeu long.',
        day3: '<strong>Jour 3 : Parcours et mise en pratique</strong><br>Parcours accompagné pour mettre en pratique les acquis. Conseils personnalisés pour progresser et prendre plaisir sur le terrain.',
      },
      additionalInfo: {
        duration: '3 jours',
        dates: 'Du 3 au 5 août 2025',
        location: 'Golf de Trévignin (73)',
        price: '250 € par personne',
        participants: '6 à 8 personnes',
        level: 'Débutant',
      },
    },
    stageSwingHouse: {
      title: 'Stage Swing House',
      description:
        'Le stage Swing House est une expérience unique conçue pour les passionnés de golf souhaitant améliorer leur jeu dans une ambiance détendue et conviviale. Encadré par Pierre ASCEDU, ce stage allie entraînement technique et moments de partage.',
      program: {
        day1: '<strong>Jour 1 : Introduction au Swing House</strong><br>Accueil et présentation du concept Swing House. Découverte des installations et du matériel. Évaluation initiale du niveau de chaque participant.',
        day2: '<strong>Jour 2 : Entraînement technique</strong><br>Focus sur la mécanique du swing et le positionnement du corps. Exercices individualisés pour améliorer la technique. Analyse vidéo des swings pour un retour personnalisé.',
        day3: '<strong>Jour 3 : Jeu sur le parcours et stratégie</strong><br>Session sur le parcours pour appliquer les techniques apprises. Accent mis sur la gestion du parcours et le choix des coups. Discussions en groupe sur les stratégies à adopter dans différentes situations de jeu.',
      },
      additionalInfo: {
        duration: '3 jours',
        dates: 'Du 10 au 12 août 2025',
        location: 'Swing House, Chamonix',
        price: '300 € par personne',
        participants: '4 à 6 personnes',
        level: 'Tous niveaux',
      },
    },
    swingHouse: {
      title: 'Notre partenaire',
      description:
        'Swing House est un espace dédié aux golfeurs pour perfectionner leurs compétences et vivre une expérience unique. Équipée de technologies de pointe et d’une ambiance conviviale, c’est l’endroit idéal pour pratiquer, apprendre et échanger avec d’autres passionnés de golf.',
    },
  },
};

// Load the saved language from localStorage or default to 'fr'
const savedLocale = localStorage.getItem('locale') || 'fr';

// Create the Vue I18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: savedLocale, // Use the saved language
  fallbackLocale: 'en', // Fallback language
  messages,
});

export default i18n;