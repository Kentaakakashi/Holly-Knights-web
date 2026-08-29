import { Player, Tournament, WarLog } from './types';

export const LEADERBOARD: Player[] = [
  { id: '1', rank: 1, name: "VoidWalker", title: "Grandmaster", winRate: "89%", points: 14500 },
  { id: '2', rank: 2, name: "CrimsonBlade", title: "Paladin", winRate: "82%", points: 12100 },
  { id: '3', rank: 3, name: "SilentDeath", title: "Paladin", winRate: "78%", points: 11800 },
  { id: '4', rank: 4, name: "ShadowStep", title: "Knight", winRate: "75%", points: 10500 },
  { id: '5', rank: 5, name: "IronHeart", title: "Knight", winRate: "71%", points: 9200 },
  { id: '6', rank: 6, name: "GhostReaper", title: "Knight", winRate: "68%", points: 8900 },
  { id: '7', rank: 7, name: "SoulEater", title: "Squire", winRate: "65%", points: 7400 },
  { id: '8', rank: 8, name: "StormBringer", title: "Squire", winRate: "62%", points: 6800 },
];

export const TOURNAMENTS: Tournament[] = [
  { 
    id: 't1', 
    name: "Abyssal Brawl IV", 
    date: "Oct 15, 2026", 
    prize: "50,000 Robux", 
    status: "Upcoming" 
  },
  { 
    id: 't2', 
    name: "Heroes Championship 2026", 
    date: "Nov 01, 2026", 
    prize: "100,000 Robux", 
    status: "Registration Open" 
  },
  { 
    id: 't3', 
    name: "Clan Wars Invitational", 
    date: "Dec 10, 2026", 
    prize: "Unique In-Game Titles", 
    status: "Upcoming" 
  },
];

export const WAR_LOGS: WarLog[] = [
  { id: 'w1', opponent: "Shadow Syndicate", result: "VICTORY", score: "3 - 0", date: "Aug 20, 2026" },
  { id: 'w2', opponent: "Dragon's Den", result: "DEFEAT", score: "1 - 3", date: "Aug 15, 2026" },
  { id: 'w3', opponent: "Celestial Guard", result: "VICTORY", score: "3 - 2", date: "Aug 10, 2026" },
  { id: 'w4', opponent: "Neon Ninjas", result: "VICTORY", score: "3 - 1", date: "Aug 02, 2026" },
  { id: 'w5', opponent: "Titan Vanguard", result: "DEFEAT", score: "2 - 3", date: "Jul 28, 2026" },
];
