export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'live' | 'finished' | 'upcoming';
  minute?: string;
  competition: string;
  date: string;
  venue?: string;
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  goals: number;
  assists?: number;
  nationality?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  source: string;
  publishedAt: string;
  url: string;
}

export interface BettingTip {
  id: string;
  match: string;
  prediction: string;
  confidence: number;
  reasoning: string;
  timestamp: string;
}

export interface SearchResult {
  type: 'player' | 'team' | 'venue' | 'match';
  id: string;
  name: string;
  details?: string;
  image?: string;
}

export interface League {
  id: string;
  name: string;
  country: string;
  logo?: string;
  season: string;
}
