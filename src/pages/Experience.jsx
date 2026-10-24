import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Avril 2026 - Juin 2026',
    title: 'Développeur Full-stack - Stage 2 mois',
    company: 'TSMGO - The Show Must Go On !',
    description: "Réalisation d'une application web complète pour la gestion de la paie et des employés en interne. Le but était de monter en compétences sur l'aspect Back-end qui était fragile , et approfondir les compétences en front-end.",
  },
  {
    period: 'Juillet 2025',
    title: 'Stage Audit SEO - 1 mois',
    company: 'ACARIS Logistics',
    description: "Réalisation d'un audit SEO complet du site web de l'entreprise , et proposition d'améliorations pour une meilleure visibilité en ligne.",
  },
];

const formations = [
  {
    period: '2024 - Présent',
    title: "BUT MMI (Métiers du Multimédia et de l'Internet)",
    school: 'Université Gustave Eiffel - Campus de Meaux',
    description: 'Spécialisation en développement web',
  },
  {
    period: '2020 - 2024',
    title: 'Lycée Général et Technologique',
    school: 'Lycée Les Pierres Vives - Carrières-sur-Seine',
    description: 'Spécialités Mathématiques , LLCE Anglais et NSI (Numérique et Sciences Informatiques)',
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-[#111111] pt-40 pb-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="mb-32">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-[13px] uppercase tracking-[0.2em]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour
          </Link>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,10vw,8rem)] font-light tracking-tighter text-white leading-none"
          >
            Mon Expérience
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center"
          >
            <a 
              href="/cv.pdf" 
              download="CV_Sebastian_Chisiu.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white transition-all text-white text-[11px] uppercase tracking-widest bg-white/5 hover:bg-white hover:text-black"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 3v13.5m0 0L7.5 12m4.5 4.5l4.5-4.5" />
              </svg>
              Télécharger CV (PDF)
            </a>
            <a
              href="/calendrier_alternance.pdf"
              download="Calendrier_alternance.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white transition-all text-white text-[11px] uppercase tracking-widest bg-white/5 hover:bg-white hover:text-black"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger calendrier alternance (PDF)
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-7">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/20 mb-20 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/10" />
              Expériences
            </h2>
            
            <div className="flex flex-col border-t border-white/5">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative py-12 border-b border-white/5 cursor-default"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[120px] font-bold text-white/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-700 select-none pointer-events-none -translate-x-10 group-hover:translate-x-0">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-porsche-red text-[12px] font-mono tracking-widest">{exp.period}</span>
                      </div>
                      <h3 className="text-[32px] md:text-[42px] font-light text-white group-hover:text-porsche-red transition-colors duration-500 leading-tight">
                        {exp.title}
                      </h3>
                      <span className="text-white/40 text-[14px] uppercase tracking-[0.3em] block mt-2 mb-8 group-hover:text-white/60 transition-colors">
                        {exp.company}
                      </span>
                    </div>
                    <p className="md:w-1/2 text-[16px] text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors duration-500">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/20 mb-20 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/10" />
              Formation
            </h2>
            
            <div className="flex flex-col">
              {formations.map((form, index) => (
                <motion.div
                  key={form.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group mb-16 last:mb-0"
                >
                  <span className="text-[11px] font-mono text-white/30 block mb-4 group-hover:text-porsche-red transition-colors">{form.period}</span>
                  <h3 className="text-[24px] font-light text-white mb-2 leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {form.title}
                  </h3>
                  <span className="text-white/60 text-[13px] uppercase tracking-widest block mb-4 italic font-light">
                    {form.school}
                  </span>
                  <p className="text-[15px] text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors">
                    {form.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
