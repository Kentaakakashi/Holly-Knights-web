export interface Player {
  id: string;
  rank: number;
  name: string;
  title: string;
  winRate: string;
  points: number;
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  prize: string;
  status: 'Registration Open' | 'Upcoming' | 'In Progress' | 'Completed';
  image?: string;
}

export interface WarLog {
  id: string;
  opponent: string;
  result: 'VICTORY' | 'DEFEAT' | 'DRAW';
  score: string;
  date: string;
}
