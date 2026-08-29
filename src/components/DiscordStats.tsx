import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function DiscordStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".gs-stat-card",
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  const stats = [
    { label: 'Sworn Knights', value: '14,024', status: 'Online' },
    { label: 'Active Vanguard', value: '1,204', status: 'In Battle' },
    { label: 'Fortress Walls', value: 'Secured', status: 'Impenetrable' },
    { label: 'War Win Rate', value: '94.2%', status: 'Dominant' }
  ];

  return (
    <section ref={containerRef} className="w-full px-6 py-12 mt-12 gs-discord-stats-section relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-2 h-2 bg-hk-gold rotate-45 animate-pulse"></span>
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 font-display">
            Realm Network Status
          </h3>
          <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gs-discord-stats font-display">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-4 md:p-6 flex flex-col justify-between h-28 md:h-32 gs-stat-card group hover:border-hk-gold/30 transition-colors">
              <div className="text-[8px] md:text-[9px] uppercase tracking-widest text-hk-gold mb-2 font-bold">{stat.label}</div>
              <div className="text-xl md:text-3xl font-black text-white uppercase tracking-wider">{stat.value}</div>
              <div className="text-[8px] md:text-[9px] uppercase tracking-widest opacity-40 mt-2 text-neutral-400">Status: {stat.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
