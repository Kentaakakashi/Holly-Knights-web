import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Section, { SectionHeader } from './Section';
import { TOURNAMENTS } from '../data';

export default function Tournaments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".gs-tournament-card",
      { opacity: 0, scale: 0.95, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Section id="tournaments">
        <SectionHeader title="The Arena" subtitle="Proving Grounds" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOURNAMENTS.map((t) => {
            const isUpcoming = t.status === 'Upcoming';
            return (
              <div
                key={t.id}
                className={`gs-tournament-card p-4 md:p-6 border flex flex-col justify-between font-display ${isUpcoming ? 'bg-hk-gold text-black border-hk-gold' : 'bg-[#0A0A0A] border-white/5 text-white/90'}`}
              >
                <div>
                  <h3 className={`text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-4 ${isUpcoming ? 'text-black/80' : 'text-white/40'}`}>
                    {t.status}
                  </h3>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-lg md:text-xl font-black leading-tight max-w-[70%] tracking-wide">
                      {t.name.toUpperCase()}
                      <br/>
                      <span className={`text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-2 block ${isUpcoming ? 'opacity-70' : 'text-hk-gold'}`}>
                        {t.date}
                      </span>
                    </div>
                    <div className={`h-10 w-10 border-2 flex items-center justify-center font-bold text-xs ${isUpcoming ? 'border-black' : 'border-white/20'}`}>
                      GO
                    </div>
                  </div>
                </div>
                
                <div className={`text-[9px] font-bold uppercase tracking-widest ${isUpcoming ? 'opacity-60' : 'text-white/40'}`}>
                  Prize: {t.prize}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
