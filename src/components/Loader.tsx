import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRemoving(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-hk-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: isRemoving ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing aura behind logo */}
        <motion.div
          className="absolute inset-0 rounded-full blur-[60px] bg-hk-gold/20"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* HK Logo Text */}
        <div className="overflow-hidden">
          <motion.h1 
            className="font-display text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tighter"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
          >
            HK
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="mt-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="font-display tracking-[0.3em] text-hk-gold text-sm md:text-base uppercase">
          Prepare for Battle
        </p>
      </motion.div>

      {/* Loading progress bar */}
      <div className="absolute bottom-12 w-64 h-[1px] bg-white/10 overflow-hidden">
        <motion.div 
          className="h-full bg-hk-gold"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
