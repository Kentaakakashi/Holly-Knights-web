import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 mx-[12px] mt-[12px] ${scrolled ? 'bg-hk-dark/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-8'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }} // Enters after loader finishes
    >
      <div className="max-w-7xl mx-auto px-6 flex items-end justify-between border-b border-white/5 pb-6">
        <a href="#" className="flex items-baseline gap-4 group">
          <span className="font-display text-4xl font-black tracking-widest text-white">HK</span>
          <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-50 hidden md:block font-display">Holly Knights • Heroes Battleground</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-display font-semibold">
          {['About', 'Leaderboard', 'Tournaments', 'Warlogs'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ))}
          <a 
            href="#" 
            className="bg-white text-black px-6 py-2 font-bold tracking-[0.2em] uppercase hover:bg-hk-gold transition-colors ml-4 font-display"
          >
            Join The Realm
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-hk-gold transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-white/5 shadow-2xl py-6 px-6 flex flex-col gap-6 items-center"
          >
            {['About', 'Leaderboard', 'Tournaments', 'Warlogs'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-display font-semibold tracking-[0.3em] uppercase text-white hover:text-hk-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#" 
              className="mt-4 bg-white text-black px-8 py-3 font-bold tracking-[0.2em] uppercase hover:bg-hk-gold transition-colors font-display text-xs w-full text-center"
            >
              Join The Realm
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
