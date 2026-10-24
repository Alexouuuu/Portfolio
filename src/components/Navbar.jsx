import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Projets', to: '/portfolio' },
  { name: 'Posters', to: '/posters' },
  { name: 'Compétences', to: '/skills' },
  { name: 'Parcours', to: '/experience' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleBrandClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled && !menuOpen ? 'bg-[#111111]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-6 md:px-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 text-white z-[110] group cursor-pointer"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="flex flex-col justify-center w-5 h-5 gap-[5px]">
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </div>
            <span className="text-[12px] uppercase tracking-[0.2em] font-medium block">
              {menuOpen ? 'Fermer' : 'Menu'}
            </span>
          </button>

          <Link
            to="/"
            onClick={handleBrandClick}
            className="absolute left-1/2 -translate-x-1/2 z-[110] group"
            title="Accueil"
          >
            <span className="hidden md:block text-[16px] md:text-[18px] font-bold tracking-[0.4em] uppercase text-white whitespace-nowrap group-hover:opacity-80 transition-opacity">
              Sebastian Chisiu
            </span>
          </Link>

          <div className="flex items-center gap-5 z-[110]">
            <Link to="/contact" className="text-white hover:opacity-70 transition-opacity p-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[105] bg-[#111111] flex flex-col justify-center overflow-y-auto"
          >
            <div className="absolute top-0 left-0 w-full h-[72px] px-6 md:px-10 flex items-center z-[120]">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[12px] uppercase tracking-[0.2em] cursor-pointer py-2 group"
                aria-label="Retour"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="transition-transform group-hover:-translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Retour</span>
              </button>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none overflow-hidden select-none opacity-[0.02]">
              <span className="text-[25vw] font-bold uppercase tracking-tighter whitespace-nowrap">
                Chisiu
              </span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 pt-20 pb-16 md:py-0">
              <nav className="md:col-span-8 flex flex-col">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-6 py-3 md:py-5 border-b border-white/[0.05] hover:border-white/20 transition-colors"
                    >
                      <span className="text-white/20 text-xl md:text-2xl group-hover:text-white/40 transition-colors">
                        0{i + 1}
                      </span>
                      <span className={`text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-tight transition-all duration-500 group-hover:pl-4 ${
                        location.pathname === item.to ? 'text-white' : 'text-white/40 group-hover:text-white'
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="md:col-span-4 flex flex-col justify-end gap-8 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-4">Social</p>
                  <div className="flex flex-col gap-3">
                    <a href="https://www.linkedin.com/in/sebastian-chisiu-a115bb338/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors text-base md:text-lg font-light">LinkedIn</a>
                    <a href="https://www.instagram.com/alexou7575/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors text-base md:text-lg font-light">Instagram</a>
                    <a href="https://github.com/Alexouuuu" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors text-base md:text-lg font-light">GitHub</a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-2">Localisation</p>
                  <p className="text-white/60 text-base md:text-lg font-light">Paris, France</p>
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-8 left-0 w-full px-6 md:px-20 hidden md:flex justify-between items-center text-white/20 text-[10px] uppercase tracking-[0.2em]">
              <span>Sebastian Chisiu</span>
              <span>inspiré de Porsche</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
