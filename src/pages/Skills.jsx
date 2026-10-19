import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Imports des icônes de compétences ajoutées dans src/assets/images-skills
import htmlIcon from '../assets/images-skills/HTML.webp';
import cssIcon from '../assets/images-skills/CSS.webp';
import sassIcon from '../assets/images-skills/SASS.webp';
import jsIcon from '../assets/images-skills/JavaScript.webp';
import tsIcon from '../assets/images-skills/typescript.webp';
import reactIcon from '../assets/images-skills/react.webp';
import angularIcon from '../assets/images-skills/Angular.webp';
import phpIcon from '../assets/images-skills/PHP.webp';
import symfonyIcon from '../assets/images-skills/symfony.webp';
import mysqlIcon from '../assets/images-skills/Mysql.webp';
import tailwindIcon from '../assets/images-skills/tailwindcss.webp';
import bootstrapIcon from '../assets/images-skills/bootstrap.webp';
import gitIcon from '../assets/images-skills/git.webp';
import dockerIcon from '../assets/images-skills/docker.webp';

import psIcon from '../assets/images-skills/Adobe_Photoshop_CC_icon.svg.webp';
import aiIcon from '../assets/images-skills/Adobe_Illustrator_CC_icon.svg.webp';
import idIcon from '../assets/images-skills/Adobe_InDesign_CC_icon.svg.webp';
import prIcon from '../assets/images-skills/Adobe_Premiere_Pro_CC_icon.svg.webp';
import aeIcon from '../assets/images-skills/adobe-after-effects-icon.webp';
import xdIcon from '../assets/images-skills/Adobe_XD_CC_icon.svg.webp';
import figmaIcon from '../assets/images-skills/figma.webp';
import blenderIcon from '../assets/images-skills/blender.webp';
import unityIcon from '../assets/images-skills/unity.webp';
import godotIcon from '../assets/images-skills/godot.webp';
import githubIcon from '../assets/images-skills/github.webp';
import gitlabIcon from '../assets/images-skills/gitlab.webp';
import wordpressIcon from '../assets/images-skills/wordpress.webp';
import trelloIcon from '../assets/images-skills/trello.webp';
import canvaIcon from '../assets/images-skills/canva.webp';

const Langages = [
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'SCSS', icon: sassIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Angular', icon: angularIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Symfony', icon: symfonyIcon },
  { name: 'SQL', icon: mysqlIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Docker', icon: dockerIcon }
];

const Logiciels = [
  { name: 'Photoshop', icon: psIcon },
  { name: 'Illustrator', icon: aiIcon },
  { name: 'InDesign', icon: idIcon },
  { name: 'Premiere Pro', icon: prIcon },
  { name: 'After Effects', icon: aeIcon },
  { name: 'Adobe XD', icon: xdIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Blender', icon: blenderIcon },
  { name: 'Unity', icon: unityIcon },
  { name: 'Godot', icon: godotIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'GitLab', icon: gitlabIcon },
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Trello', icon: trelloIcon },
  { name: 'Canva', icon: canvaIcon }
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#111111] pt-32 pb-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        <div className="mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-[13px] uppercase tracking-[0.2em]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1]"
          >
            Mes Compétences
          </motion.h1>
        </div>

        <div className="space-y-12">
          
          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 pb-2 border-b border-white/10">
                  Sebastian Chisiu
                </h2>
                <p className="text-[15px] text-white/70 font-light leading-[1.8]">
                  Je suis Alex, développeur web en formation en 3ᵉ année de B.U.T MMI à l'Université Gustave Eiffel.<br /><br />
                  Passionné par le développement web et la création numérique, je combine compétences techniques, design et audiovisuel pour concevoir des expériences web modernes et interactives.
                  Curieux et polyvalent, j'aime transformer des idées en projets concrets, de la conception à la réalisation.<br /><br />
                  Je recherche actuellement une alternance en développement web pour continuer à progresser et mettre mes compétences au service de projets ambitieux.
                </p>
              </div>

              <div className="lg:col-span-3 space-y-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 pb-2 border-b border-white/10">
                  Langues
                </h2>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  <li>
                    <span className="font-medium text-white block">Français</span>
                    <span className="text-[13px] text-white/40">Langue maternelle</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Roumain</span>
                    <span className="text-[13px] text-white/40">Langue maternelle</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Anglais</span>
                    <span className="text-[13px] text-white/40">Niveau B2</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Espagnol</span>
                    <span className="text-[13px] text-white/40">Niveau B1</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-5">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 pb-2 border-b border-white/10">
                  Profil & Méthode
                </h2>
                <ul className="space-y-4 text-[15px] text-white/70 font-light">
                  <li>
                    <span className="font-medium text-white block">Créativité</span>
                    <span className="text-[13px] text-white/40">Passionné d'univers visuels</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Autonomie</span>
                    <span className="text-[13px] text-white/40">Gestion de projet de A à Z</span>
                  </li>
                  <li>
                    <span className="font-medium text-white block">Rigueur</span>
                    <span className="text-[13px] text-white/40">Méthodes agiles & organisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8 flex flex-col h-full">
              <div className="h-14 flex items-center border-b border-white/10 mb-8">
                <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/50 leading-tight">
                  Langages de programmation
                </h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {Langages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-[96px] flex flex-col items-center justify-center p-2.5 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors text-center"
                  >
                    <img src={lang.icon} alt={lang.name} className="w-8 h-8 object-contain mb-2 flex-shrink-0" loading="lazy" />
                    <span className="text-[11px] font-mono tracking-wider text-white/70 truncate w-full px-1">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8 flex flex-col h-full">
              <div className="h-14 flex items-center border-b border-white/10 mb-8">
                <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/50 leading-tight">
                  Logiciels & Outils
                </h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {Logiciels.map((tool) => (
                  <div
                    key={tool.name}
                    className="h-[96px] flex flex-col items-center justify-center p-2.5 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors text-center"
                  >
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain mb-2 flex-shrink-0" loading="lazy" />
                    <span className="text-[11px] font-mono tracking-wider text-white/70 truncate w-full px-1">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
