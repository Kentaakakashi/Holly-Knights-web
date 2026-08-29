import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sword } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        {/* Abstract Background Element */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-hk-gold/10 opacity-30 animate-slow-spin flex items-center justify-center">
          <div className="w-[70%] h-[70%] rounded-full border border-hk-gold/20 flex items-center justify-center">
            <div className="w-[60%] h-[60%] rounded-full border border-hk-gold/30 flex items-center justify-center">
               <div className="absolute w-full h-[1px] bg-hk-gold/20 transform rotate-45" />
               <div className="absolute w-full h-[1px] bg-hk-gold/20 transform -rotate-45" />
            </div>
          </div>
        </div>
        
        {/* Radial Gradient for depth */}
        <div className="absolute inset-0 bg-radial from-transparent via-hk-dark/80 to-hk-dark" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative pl-6 mb-8"
        >
          <div className="absolute left-0 top-0 w-1 h-24 bg-gradient-to-b from-hk-gold to-transparent" />
          
          <motion.h1 
            className="text-5xl md:text-[80px] lg:text-[100px] leading-[0.9] font-black tracking-tight text-white mb-6 uppercase font-display"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Valor <br />
            <span className="text-hk-gold">Beyond</span> Death.
          </motion.h1>

          <motion.p
            className="text-sm md:text-base max-w-md opacity-80 leading-relaxed tracking-wide font-sans text-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            The premier clan within the Heroes Battleground. We fight with honor, we conquer with power. Join the circle of elite knights.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pl-6"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-hk-gold transition-colors font-display"
          >
            Join The Order
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-display">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-hk-gold"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
