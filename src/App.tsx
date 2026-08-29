/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leaderboard from './components/Leaderboard';
import Tournaments from './components/Tournaments';
import WarLogs from './components/WarLogs';
import CursorGlow from './components/CursorGlow';
import DiscordStats from './components/DiscordStats';
import BackgroundEffects from './components/BackgroundEffects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="relative border-[4px] md:border-[12px] border-[#111] min-h-screen flex flex-col overflow-hidden">
      <BackgroundEffects />
      <CursorGlow />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Leaderboard />
        <Tournaments />
        <WarLogs />
        <DiscordStats />
      </main>
      
      <footer className="w-full mt-12 px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div className="text-[10px] tracking-[0.4em] uppercase opacity-30 font-display">
          Realm Secured // Guild ID: 8829-HK
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-[1px] w-12 bg-white/10 hidden md:block" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-hk-gold font-bold">
            Honor Above All
          </span>
        </div>
      </footer>
    </div>
  );
}
