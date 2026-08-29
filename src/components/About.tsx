import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Section, { SectionHeader } from './Section';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".gs-about-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Section id="about">
        <SectionHeader title="The Brotherhood" subtitle="Our Legacy" />
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 gs-about-item relative z-10">
            <div className="text-sm md:text-base text-neutral-300 leading-relaxed tracking-wide font-sans">
              <p className="mb-4">
                Born in the chaotic fires of Heroes Battleground, <strong className="text-hk-gold font-bold">Holly Knights (HK)</strong> is more than a clan—it is a brotherhood of warriors. We demand absolute excellence, unwavering discipline, and total domination on the field.
              </p>
              <p>
                From the squires in training to the Grandmasters leading the vanguard, every member is forged to be a weapon. Our history is not written in ink, but in the victories we seize and the legends we leave behind.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8 font-display">
              <div className="bg-[#0A0A0A] p-6 border border-white/10 relative overflow-hidden">
                <div className="text-[10px] uppercase tracking-widest text-hk-gold mb-2 font-bold">Active Knights</div>
                <div className="text-3xl font-black text-white uppercase">500+</div>
                <div className="text-[9px] uppercase tracking-widest opacity-50 mt-4 text-neutral-400">Fortress Capacity: Reaching Maximum</div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-hk-gold/10 rounded-full blur-xl" />
              </div>
              <div className="bg-[#0A0A0A] p-6 border border-white/10 relative overflow-hidden">
                <div className="text-[10px] uppercase tracking-widest text-hk-gold mb-2 font-bold">Global Rank</div>
                <div className="text-3xl font-black text-white uppercase">Top 10</div>
                <div className="text-[9px] uppercase tracking-widest opacity-50 mt-4 text-neutral-400">Win Ratio: 94.2%</div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-hk-gold/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
          
          <div className="gs-about-item relative h-[300px] md:h-[600px] w-full bg-[#0A0A0A] border border-white/5 p-6 overflow-hidden flex flex-col justify-between group">
             <div className="absolute top-0 right-0 p-4 opacity-5 text-[80px] md:text-[120px] leading-none font-black pointer-events-none font-display">HK</div>
             
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hk-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <div className="relative z-10 flex justify-between items-start font-display">
               <div className="w-4 h-4 bg-hk-gold rotate-45" />
               <span className="text-[10px] tracking-widest uppercase text-white/40 font-bold">The Round Table</span>
             </div>
             
             <div className="relative z-10 text-center flex-1 flex flex-col items-center justify-center">
               <span className="text-[80px] md:text-[120px] leading-none text-white font-black tracking-widest font-display block">HK</span>
               <span className="text-[10px] text-hk-gold tracking-[0.5em] uppercase mt-4 font-bold block font-display">Rise Above</span>
             </div>
             
             <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-4 font-display">
               <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Sanctuary: Secured</span>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
