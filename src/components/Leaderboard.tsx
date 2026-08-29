import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Section from './Section';
import { LEADERBOARD } from '../data';
import { Crown, Shield, Sword } from 'lucide-react';

export default function Leaderboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".gs-leaderboard-row",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Section id="leaderboard">
        <div className="flex-1 bg-[#0A0A0A] border border-white/5 p-4 md:p-6 relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-[40px] md:text-[80px] leading-none font-black pointer-events-none font-display">RANKS</div>
          
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 mb-8 flex items-center gap-2 font-display">
            <span className="w-2 h-2 bg-hk-gold rotate-45"></span> Top Vanguard
          </h3>
          
          <div className="space-y-4 relative z-10">
            {LEADERBOARD.map((player, index) => {
              const isTop1 = index === 0;
              return (
                <div 
                  key={player.id}
                  className="gs-leaderboard-row flex items-center justify-between border-b border-white/5 pb-3 hover:bg-white/5 transition-colors px-2 -mx-2"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono ${isTop1 ? 'text-hk-gold' : 'text-white/30'}`}>
                      {player.rank.toString().padStart(2, '0')}
                    </span>
                    <span className={`text-sm md:text-base font-bold tracking-widest ${isTop1 ? 'text-white' : 'text-neutral-300'}`}>
                      {player.name.toUpperCase()}
                    </span>
                    <span className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-40 hidden sm:block font-display">
                      {player.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-mono opacity-50 hidden sm:block">
                      WR: {player.winRate}
                    </span>
                    <span className="text-[10px] font-mono opacity-80 text-hk-gold">
                      {player.points.toLocaleString()} ELO
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
