import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`relative w-full py-24 md:py-32 px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
      <div>
        {subtitle && (
          <h4 className="font-display tracking-[0.2em] text-hk-gold text-[10px] font-bold uppercase mb-4">
            {subtitle}
          </h4>
        )}
        <h2 className="text-4xl md:text-[80px] leading-none font-black uppercase tracking-widest font-display">
          {title}
        </h2>
      </div>
      <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
    </div>
  );
}
