// Le Cube
import lecube0 from '../assets/images-projets/images-LeCube/lecube0-BMYTLHQb.webp';
import lecube1 from '../assets/images-projets/images-LeCube/lecube1-BSZBp0s0.webp';
import lecube2 from '../assets/images-projets/images-LeCube/lecube2-BVL9JYwt.webp';
import lecube3 from '../assets/images-projets/images-LeCube/lecube3-DUB-3PTI.webp';
import lecube4 from '../assets/images-projets/images-LeCube/lecube4-D4XrBW5y.webp';
import lecube5 from '../assets/images-projets/images-LeCube/lecube5-CQbLgJ75.webp';
import lecube6 from '../assets/images-projets/images-LeCube/lecube6-B1ZTD1x5.webp';

// Dataviz
import dataviz1 from '../assets/images-projets/images-Dataviz/dataviz1-CYVjQ7SB.webp';
import dataviz2 from '../assets/images-projets/images-Dataviz/dataviz2-DBt65cD_.webp';
import dataviz3 from '../assets/images-projets/images-Dataviz/dataviz3-Bc0FGwBy.webp';
import dataviz4 from '../assets/images-projets/images-Dataviz/dataviz4-Cs8C8EW-.webp';
import dataviz5 from '../assets/images-projets/images-Dataviz/dataviz5-BTF5G4J9.webp';
import dataviz6 from '../assets/images-projets/images-Dataviz/dataviz6-C7lmoBUD.webp';
import dataviz7 from '../assets/images-projets/images-Dataviz/dataviz7-DqlLjO8x.webp';

// Sushn'go
import sushngo1 from '../assets/images-projets/images-Sushngo/sushngo1-F-pyb1g0.webp';
import sushngo2 from '../assets/images-projets/images-Sushngo/sushngo2-t35ACHS9.webp';
import sushngo3 from '../assets/images-projets/images-Sushngo/sushngo3-Dmc-itW3.webp';
import sushngo5 from '../assets/images-projets/images-Sushngo/sushngo5-CiHeCzvY.webp';
import sushngo6 from '../assets/images-projets/images-Sushngo/sushngo6-B8rhCsiM.webp';
import sushngo8 from '../assets/images-projets/images-Sushngo/sushngo8-qPEcMGgQ.webp';
import sushngo9 from '../assets/images-projets/images-Sushngo/sushngo9-5OLe1nIF.webp';

// Aurora
import aurora1 from '../assets/images-projets/images-Aurora/aurora1-accueil.webp';
import aurora2 from '../assets/images-projets/images-Aurora/aurora2-DEAE_t6e.webp';
import aurora3 from '../assets/images-projets/images-Aurora/aurora3-D8gozF7i.webp';
import aurora3p1 from '../assets/images-projets/images-Aurora/aurora3p1-BOyk1m1a.webp';
import aurora4 from '../assets/images-projets/images-Aurora/aurora4-KF8jzkym.webp';
import aurora5 from '../assets/images-projets/images-Aurora/aurora5-DPnXPuIv.webp';

// Palais d'Été
import palaisete1 from '../assets/images-projets/images-Palaisete/palaisete1-_50zyvET.webp';
import palaisete2 from '../assets/images-projets/images-Palaisete/palaisete2-M-b5FbuS.webp';
import palaisete3 from '../assets/images-projets/images-Palaisete/palaisete3-0WdZlCMm.webp';
import palaisete4 from '../assets/images-projets/images-Palaisete/palaisete4-DiEOkgJO.webp';

// ACF2L
import acf2l1 from '../assets/images-projets/images-acf2l/acf2l-1.webp';
import acf2l2 from '../assets/images-projets/images-acf2l/acf2l-2.webp';
import acf2l3 from '../assets/images-projets/images-acf2l/acf2l-3.webp';
import acf2l4 from '../assets/images-projets/images-acf2l/acf2l-4.webp';
import acf2l5 from '../assets/images-projets/images-acf2l/acf2l-5.webp';

export const projectsData = [
  {
    id: 1,
    type: "Académique",
    importance: 1,
    title: "Le Cube",
    tag: "Développement Web",
    description: `Le Cube est un webdocumentaire consacré au speedcubing et à ses compétitions internationales. Réalisé en équipe dans un cadre universitaire, il associe contenus documentaires et animations GSAP pour proposer une découverte immersive de cette discipline.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel", "Maxime Derènes"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/","https://www.linkedin.com/in/maxime-derènes-9b997932a/"],
    technologies: ["HTML", "CSS", "Javascript", "GSAP"],
    date: "Octobre 2025",
    imagemain: lecube0,
    images: [
      lecube0,
      lecube1,
      lecube2,
      lecube3,
      lecube4,
      lecube5,
      lecube6
    ],
    lien: ["https://mloks77.github.io/SAE302-LeCube/"],
    visitable: true,
    lienSite: "https://mloks77.github.io/SAE302-LeCube/",
    objectifs: ["Faire découvrir le speedcubing", "Réaliser un site web immersif", "Optimiser les animations GSAP"],
    contribution: "J'ai assuré le tournage des vidéos et rédigé un article sur les Piliers Rubik's cube pour faire découvrir l'univers du speedcubing.\nEn parallèle de cette création de contenus, j'ai développé une partie du site avec Maxime, notamment la galerie photo. Mon rôle couvrait ainsi plusieurs aspects du projet, de la production audiovisuelle à l'intégration web.",
    difficultés:"Un problème matériel sur mon ordinateur a ralenti ma progression pendant la phase de développement. Cet imprévu a réduit le temps disponible pour mes tâches et compliqué l'organisation de mon travail sur cette période."
  },
  {
    id: 2,
    type: "Académique",
    importance: 2,
    title: "Dataviz",
    tag: "Développement Web",
    description: `Dataviz est une application de visualisation de données consacrée à la répartition des logements sociaux en France. Elle présente ces informations à travers un tableau de bord interactif et une représentation cartographique. Réalisé en équipe, le projet associe une interface React, une API REST développée avec Symfony et une base de données MySQL.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Maxime Derènes","Joachim Tocqueville"],
    linkcollab: ["https://www.linkedin.com/in/maxime-derènes-9b997932a/", "https://www.linkedin.com/in/joachim-tocqueville-1356b2339/"],
    technologies: ["React.JS", "TailwindCSS" ,"Symfony", "Chart.js", "API REST", "MySQL"],
    date: "Mars 2026",
    imagemain: dataviz1,
    images: [
      dataviz1,
      dataviz2,
      dataviz3,
      dataviz4,
      dataviz5,
      dataviz6,
      dataviz7
    ],
    lien: ["https://github.com/MLoks77/SAE401"],
    visitable: false,
    lienSite: "",
    objectifs: ["Apprendre React", "Créer une API REST performante", "Restituer des données complexes"],
    contribution: "J'ai participé au tri et à la préparation des informations issues du fichier Excel fourni, afin de préparer leur exploitation dans l'application. \nJ'ai ensuite participé à la mise en place de l'environnement React et développé la partie cartographique ainsi que la fonctionnalité de comparaison. \nJ'ai également contribué à la mise en place de Symfony et de l'API, intervenant ainsi sur l'interface et sur les échanges de données avec le back-end.",
    difficultés:"Un problème de certificat dans mon environnement local a perturbé la communication avec l'API. \nLorsque son adresse passait de HTTP à HTTPS, les données ne s'affichaient plus sur mon ordinateur. Ce comportement a nécessité un long travail de diagnostic pour comprendre pourquoi l'application ne fonctionnait pas correctement dans mon environnement, ce qui a ralenti ma progression."
  },
  {
    id: 3,
    type: "Académique",
    importance: 3,
    title: "Sushn'go",
    tag: "Développement Web",
    description: `Sushn'go est une application web de commande et de réservation pour un restaurant japonais. Développée en équipe avec Angular, PHP et MySQL, elle met en relation une interface client et une API REST. Ce projet aborde notamment les échanges entre le front-end et le back-end ainsi que la gestion des sessions utilisateurs.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel", "Maxime Derènes", "Joachim Tocqueville"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/", "https://www.linkedin.com/in/maxime-derènes-9b997932a/", "https://www.linkedin.com/in/joachim-tocqueville-1356b2339/"],
    technologies: ["Angular", "TailwindCSS", "PHP", "MySQL", "API REST"],
    date: "Décembre 2025",
    imagemain: sushngo1,
    images: [
      sushngo1,
      sushngo2,
      sushngo3,
      sushngo5,
      sushngo6,
      sushngo8,
      sushngo9
    ],
    lien: null,
    visitable: false,
    lienSite: "",
    objectifs: ["Apprendre à utiliser les API REST", "Approfondir connaissances en Back-end","Apprendre à utiliser les systèmes de sessions"],
    contribution:"J'ai mis en place l'application Angular et configuré les liens de navigation depuis la page d'accueil. \nJ'ai ensuite développé plusieurs éléments du parcours de commande : le catalogue, la page produit, la fenêtre modale affichée au clic sur un produit et le panier. J'ai également réalisé les pages Contact et Nos points de retrait, puis participé à la mise en place de la base de données. \nMon travail portait principalement sur l'interface et la navigation entre les différentes pages.",
    difficultés:"Le départ d'un membre de l'équipe en échange universitaire au Canada a nécessité une réorganisation du travail. \nUne partie de ses tâches nous a été déléguée, augmentant la charge à répartir entre les membres présents. Nous avons dû adapter notre organisation pour intégrer ces nouvelles responsabilités et poursuivre le développement du projet."
  },
  {
    id: 4,
    type: "Personnel",
    importance: 4,
    title: "Aurora",
    tag: "Développement Web",
    description: `Aurora est une expérience web interactive autour de l'astronomie et de l'exploration spatiale, réalisée en équipe lors d'un hackathon de 48 heures. Le projet mobilise notamment Three.js pour créer un univers 3D immersif, avec le défi de concevoir et livrer une expérience cohérente dans un temps limité.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Maxime Derènes", "Témi Kergastel"],
    linkcollab: ["https://www.linkedin.com/in/maxime-derènes-9b997932a/", "https://www.linkedin.com/in/témi-kergastel/"],
    technologies: ["HTML", "CSS", "Javascript", "TailwindCSS"],
    date: "Juin 2026",
    imagemain: aurora1,
    images: [
      aurora1,
      aurora2,
      aurora3,
      aurora3p1,
      aurora4,
      aurora5
    ],
    lien: ["https://aurora3pc-cca.infinityfree.me/?i=1"],
    visitable: true,
    lienSite: "https://aurora3pc-cca.infinityfree.me/?i=1",
    objectifs: ["Participer et performer lors d'un hackathon de 48h", "Concevoir un univers 3D immersif"],
    contribution: "Pendant ce hackathon de 48 heures, j'ai rédigé les articles et les contenus éditoriaux du site autour de l'astronomie et de l'exploration spatiale.\n J'ai également développé les sections Missions et Services et créé les visuels demandés dans le cadre de l'événement.\n En complément de ces tâches, j'ai travaillé avec Maxime sur plusieurs autres missions, en intervenant selon les besoins pour faire avancer l'ensemble du projet.",
    difficultés:"Une baisse de motivation au sein de l'équipe a ralenti notre progression pendant le hackathon.\n Dans un délai aussi court, cette situation a rendu la coordination et la répartition du travail plus difficiles. Nous avons dû composer avec une implication inégale tout en poursuivant les différentes tâches nécessaires à la réalisation du site."
  },
  {
    id: 5,
    type: "Académique",
    importance: 5,
    title: "Le Palais d'Été",
    tag: "Développement Web",
    description: `Le Palais d'Été est un projet universitaire associant modélisation 3D et développement web. Réalisé en binôme, il consiste à modéliser des bâtiments du palais avec Blender puis à les intégrer dans un site web pour en proposer une présentation numérique.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Maxime Derènes"],
    linkcollab: ["https://www.linkedin.com/in/maxime-derènes-9b997932a/"],
    technologies: ["HTML", "JavaScript", "API", "TailwindCSS", "Blender"],
    date: "Avril 2026",
    imagemain: palaisete1,
    images: [
      palaisete1,
      palaisete2,
      palaisete3,
      palaisete4
    ],
    lien: ["https://mloks77.github.io/SAE402/index.html"],
    visitable: true,
    lienSite: "https://mloks77.github.io/SAE402/index.html",
    objectifs: ["Apprendre à intégrer des modèles 3D", "Modéliser en 3D"],
    contribution:"J'ai développé les animations déclenchées au clic sur les points d'intérêt et assuré le positionnement de ces points et des cartes d'information dans l'interface. \nCe travail participait à la découverte des différents éléments présentés sur le site.\n J'ai également modélisé le Bateau de Marbre avec Blender, en associant ainsi une contribution au développement web et à la création de contenus 3D.",
    difficultés:"Je découvrais Blender pendant la réalisation du projet et devais apprendre à utiliser ses outils tout en avançant sur la modélisation.\n Le Bateau de Marbre m'a donc demandé davantage de temps que prévu, pour un résultat encore perfectible.\n Cette première expérience m'a permis de prendre en main le logiciel et de mieux identifier les techniques à approfondir pour mes prochaines réalisations."
  },
  {
    id: 6,
    type: "Académique",
    importance: 6,
    title: "ACF2L",
    tag: "Développement Web",
    description: "ACF2L est un projet universitaire de refonte d'un site d'entreprise, réalisé en binôme avec Bootstrap comme framework imposé. L'exercice porte sur l'intégration des pages et l'utilisation des composants et du système de grille de Bootstrap.",
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/"],
    technologies: ["HTML", "CSS", "Bootstrap"],
    date: "Décembre 2025",
    imagemain: acf2l1,
    images: [
      acf2l1,
      acf2l2,
      acf2l3,
      acf2l4,
      acf2l5
    ],
    lien: ["https://alexouuuu.github.io/ACF2L/"],
    visitable: true,
    lienSite: "https://alexouuuu.github.io/ACF2L/",
    objectifs: ["Apprendre à utiliser Bootstrap"],
    contribution:"J'ai développé l'intégralité du site web à partir de la maquette réalisée par mon binôme, qui était également chargé du travail de recherche. \nJ'ai pris en charge l'intégration des différentes pages en respectant la contrainte d'utilisation de Bootstrap. Mon rôle consistait à traduire la maquette en une interface web, en m'appuyant sur les composants et le système de grille du framework.",
    difficultés:"Le développement s'est déroulé sans difficulté majeure. \nLa répartition des responsabilités était claire : mon binôme se concentrait sur la recherche et la conception de la maquette, tandis que j'assurais sa réalisation technique.\n Cette organisation m'a permis d'avancer de manière fluide et de consolider ma pratique de Bootstrap sur un site complet."
  },
  {
    id: 7,
    type: "Académique",
    importance: 7,
    title: "ChronoShift",
    tag: "Jeu Vidéo",
    description: "ChronoShift est un jeu d'infiltration et d'action en cours de développement avec Godot, dans le cadre du projet tutoré de troisième année de BUT MMI. Réalisé en équipe, il vise à construire une expérience jouable en réunissant conception du gameplay, création des contenus et développement.",
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel", "Maxime Derènes", "Ethan Bouquet"],
    technologies: ["Godot Engine"],
    date: "En cours...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: ["Créer un jeu vidéo complet en autonomie", "Mettre en avant les compétences MMI", "Gagner le festival MMI"]
  },
  {
    id: 8,
    type: "Académique",
    importance: 8,
    title: "JPO MMI 2027",
    tag: "Développement Web",
    description: "Projet universitaire de conception d'une application web dédiée aux journées portes ouvertes du département MMI. Accessible via un QR code, elle vise à accompagner les visiteurs grâce à une visite virtuelle interactive intégrant des contenus à 360° et en 3D, tout en facilitant l'organisation de l'événement. L'objectif est de permettre aux futurs étudiants et à leurs parents de découvrir les formations, les locaux et les équipements, sur place ou à distance",
    video: null,
    sourcevideo: null,
    collaborateurs: ["Maxime Derènes", "Témi Kergastel", "Ethan Bouquet"],
    technologies: ["React","TailwindCSS","SpringBoot","Java"],
    date: "En cours...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: ["Faciliter la découverte du département MMI sur place et à distance", "Intégrer une visite virtuelle en 3D", "Simplifier la gestion et l'organisation des journées portes ouvertes"]
  },
  {
    id: 9,
    type: "Personnel",
    importance: 9,
    title: "Popa Detailing",
    tag: "Développement Web",
    description: "Popa Detailing est un projet de site vitrine en cours de développement avec React et Tailwind CSS. Il vise à présenter l'activité de detailing automobile de l'entreprise, à mettre en valeur ses prestations et à faciliter la prise de contact.",
    video: null,
    sourcevideo: null,
    collaborateurs: [],
    technologies: ["React", "TailwindCSS"],
    date: "En cours...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: ["Création d'un site Vitrine", "Se faire recommander"],
  },
  {
    id: 10,
    type: "Personnel",
    importance: 10,
    title: "AutoStock",
    tag: "Développement Web",
    description: "AutoStock est un projet personnel de site web pour un garage spécialisé dans la vente de voitures d'occasion. Développé avec React et Tailwind CSS, il vise à présenter les véhicules disponibles et leurs caractéristiques dans une interface claire.",
    video:null,
    sourcevideo:null,
    collaborateurs: [],
    technologies: ["React", "TailwindCSS", "SpringBoot" ,"Java"],
    date : "En cours...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: ["Approfondir connaissances en React"],
  }
];
