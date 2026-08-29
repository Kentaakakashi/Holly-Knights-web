import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BackgroundEffects() {
  const [embers, setEmbers] = useState<{ id: number; left: string; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newEmbers = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
    }));
    setEmbers(newEmbers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      {/* Slow pulsing ambient fog */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hk-gold/5 via-hk-dark to-hk-dark opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Embers */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute bottom-0 rounded-full bg-hk-gold shadow-[0_0_10px_2px_rgba(245,158,11,0.8)]"
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
          }}
          initial={{ y: '10vh', opacity: 0 }}
          animate={{
            y: '-110vh',
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 50 - 25, Math.random() * -50 + 25, 0]
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
