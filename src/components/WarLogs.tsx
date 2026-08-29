import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Section, { SectionHeader } from './Section';
import { WAR_LOGS } from '../data';

export default function WarLogs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".gs-warlog-card",
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
      <Section id="warlogs">
        <SectionHeader title="Chronicles" subtitle="Battle History" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {WAR_LOGS.map((log) => {
            const isVictory = log.result === 'VICTORY';
            const [ourScore, theirScore] = log.score.split(' - ');
            
            return (
              <div
                key={log.id}
                className="gs-warlog-card bg-[#0A0A0A] border border-white/5 p-4 md:p-6 flex flex-col justify-between h-28 md:h-32 font-display hover:border-hk-gold/30 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold ${isVictory ? 'text-hk-gold' : 'text-hk-red/80'}`}>
                    {log.result}
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500">
                    {log.date.replace(/, /g, '-').replace(/ /g, '-').toUpperCase()}
                  </span>
                </div>
                
                <div className="mt-2 flex items-center gap-4">
                  <div className="text-lg md:text-xl font-black uppercase truncate max-w-[40%] tracking-widest">HK [{ourScore}]</div>
                  <div className={`h-[1px] flex-1 ${isVictory ? 'bg-hk-gold/40' : 'bg-white/10'}`}></div>
                  <div className="text-lg md:text-xl font-black opacity-50 uppercase truncate max-w-[40%] text-neutral-400 tracking-widest">{log.opponent} [{theirScore}]</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
