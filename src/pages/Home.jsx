import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyImage from '../components/LazyImage';

import contact from "../assets/images-accueil/contact.webp";
import parcours from "../assets/images-accueil/parcours.webp";
import projets from "../assets/images-accueil/projets.webp";
import skills from "../assets/images-accueil/skills.webp";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    title: 'Projets',
    subtitle: 'Mes Projets',
    to: '/portfolio',
    image: projets,
  },
  {
    title: 'Compétences',
    subtitle: 'Mes Compétences',
    to: '/skills',
    image: skills,
  },
  {
    title: 'Parcours',
    subtitle: 'Mon expérience',
    to: '/experience',
    image: parcours,
  },
  {
    title: 'Contact',
    subtitle: 'Me contacter',
    to: '/contact',
    image: contact,
  }
];

const Home = () => {
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const heroText = heroRef.current?.querySelector('.hero-content');
      if (heroText) {
        gsap.to(heroText, {
          y: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: menuRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.15,
          }
        );
      });

      imagesRef.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(img,
          { scale: 1.1, y: '-5%' },
          {
            scale: 1.1,
            y: '5%',
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  const setCardRef = (el, i) => { cardsRef.current[i] = el; };
  const setImgRef = (el, i) => { imagesRef.current[i] = el; };

  return (
    <div className="bg-[#111111]">

      <section ref={heroRef} className="min-h-screen flex items-center md:items-end pb-24 md:pb-40 pt-32 md:pt-0 relative">
        <div className="hero-content w-full max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-20">
          
          <div className="flex-1 w-full">
            <p className="text-[17px] uppercase tracking-[0.25em] text-white/40 mb-8">
              Développeur Web Full-Stack
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[1.02] mb-10 text-white tracking-tight">
              Chisiu<br />Sebastian
            </h1>
            <p className="text-[17px] text-white/50 font-light max-w-[420px] leading-[1.7]">
              Recherche une alternance pour l'année 2026-2027 en Développement Web.
            </p>
          </div>

          <div className="w-full max-w-[420px] md:w-[500px] lg:w-[650px] flex-shrink-0">
            <div className="aspect-[3/4] w-full relative border border-white/10 overflow-hidden bg-[#050505] shadow-2xl">
              <LazyImage 
                src="/images/moi.png" 
                alt="Portrait Chisiu Sebastian" 
                fallbackTitle="Chisiu Sebastian"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 z-10 hidden md:flex">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      <section ref={menuRef} className="pb-32 pt-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/40 mb-4">Navigation</p>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-light text-white leading-none">Apprenez plus<br className="hidden md:block"/>sur moi</h2>
            </div>
            <div className="hidden md:block flex-1 max-w-md ml-auto">
              <p className="text-white/50 text-sm font-light text-right leading-relaxed">
                Découvrez mon parcours, mes compétences et mes projets que j'ai pu réaliser jusqu'à présent durant mes études.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 lg:gap-6">
            {menuItems.map((item, index) => {
              let tailleDeLaCarte = "";
              if (index === 0) {
                tailleDeLaCarte = "md:col-span-3 md:row-span-2";
              } else if (index === 1) {
                tailleDeLaCarte = "md:col-span-2 md:row-span-2";
              } else if (index === 2) {
                tailleDeLaCarte = "md:col-span-2";
              } else if (index === 3) {
                tailleDeLaCarte = "md:col-span-3";
              }
              
              const cardHeight = (index === 0 || index === 1) ? "md:min-h-[550px]" : "md:min-h-[300px]";
              
              return (
                <Link 
                  to={item.to} 
                  key={item.title}
                  ref={el => setCardRef(el, index)}
                  className={`group relative overflow-hidden bg-black block min-h-[350px] ${cardHeight} border border-white/10 transition-colors duration-300 hover:border-white ${tailleDeLaCarte}`}
                >
                  {item.image && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        ref={el => setImgRef(el, index)}
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover opacity-35 group-hover:opacity-60 transition-opacity duration-700 ease-out will-change-transform"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 pointer-events-none" />
                  
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <span className="text-white/50 text-[11px] md:text-[12px] uppercase tracking-[0.3em] mb-4 block">
                      {item.subtitle}
                    </span>
                    
                    <div className="flex items-end justify-between">
                      <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                        {item.title}
                      </h2>
                      
                      <div className="text-white">
                        <svg className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
