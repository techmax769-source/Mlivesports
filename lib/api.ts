import axios from 'axios';

const API_BASE_URL = 'https://apiskeith.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Retry logic
const retry = async <T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const fetchAPI = async <T>(
  endpoint: string,
  options?: {
    params?: Record<string, any>;
    retries?: number;
  }
): Promise<T> => {
  return retry(async () => {
    try {
      const response = await api.get<T>(endpoint, { params: options?.params });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`API Error (${endpoint}):`, error.message);
        throw new Error(`Failed to fetch ${endpoint}: ${error.message}`);
      }
      throw error;
    }
  }, options?.retries ?? 3);
};

// API endpoints
export const API_ENDPOINTS = {
  // Search
  playerSearch: (query: string) => `/sport/playersearch?q=${encodeURIComponent(query)}`,
  teamSearch: (query: string) => `/sport/teamsearch?q=${encodeURIComponent(query)}`,
  venueSearch: (query: string) => `/sport/venuesearch?q=${encodeURIComponent(query)}`,
  matchEvents: (query: string) => `/sport/gameevents?q=${encodeURIComponent(query)}`,
  
  // Live scores
  liveScores: '/livescore',
  liveScoresWithHighlights: '/livescore2',
  
  // Leagues
  epl: {
    upcoming: '/epl/upcomingmatches',
    matches: '/epl/matches',
    standings: '/epl/standings',
    scorers: '/epl/scorers',
  },
  
  bundesliga: {
    upcoming: '/bundesliga/upcomingmatches',
    matches: '/bundesliga/matches',
    standings: '/bundesliga/standings',
    scorers: '/bundesliga/scorers',
  },
  
  laliga: {
    upcoming: '/laliga/upcomingmatches',
    matches: '/laliga/matches',
    standings: '/laliga/standings',
    scorers: '/laliga/scorers',
  },
  
  seriea: {
    upcoming: '/seriea/upcomingmatches',
    matches: '/seriea/matches',
    standings: '/seriea/standings',
    scorers: '/seriea/scorers',
  },
  
  ligue1: {
    upcoming: '/ligue1/upcomingmatches',
    matches: '/ligue1/matches',
    standings: '/ligue1/standings',
    scorers: '/ligue1/scorers',
  },
  
  ucl: {
    upcoming: '/ucl/upcomingmatches',
    matches: '/ucl/matches',
    standings: '/ucl/standings',
    scorers: '/ucl/scorers',
  },
  
  euros: {
    upcoming: '/euros/upcomingmatches',
    matches: '/euros/matches',
    standings: '/euros/standings',
    scorers: '/euros/scorers',
  },
  
  fifa: {
    upcoming: '/fifa/upcomingmatches',
    matches: '/fifa/matches',
    standings: '/fifa/standings',
    scorers: '/fifa/scorers',
  },
  
  // Betting tips
  bettingTips: '/bet',
  
  // News
  news: '/football/news',
} as const;
