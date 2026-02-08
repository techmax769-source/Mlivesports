'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Users, MapPin, Calendar, User } from 'lucide-react';
import { fetchAPI, API_ENDPOINTS } from '@/lib/api';
import { SearchResult } from '@/types';
import { debounce } from 'lodash';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchAll = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const endpoints = [
          { type: 'player', endpoint: API_ENDPOINTS.playerSearch(searchQuery) },
          { type: 'team', endpoint: API_ENDPOINTS.teamSearch(searchQuery) },
          { type: 'venue', endpoint: API_ENDPOINTS.venueSearch(searchQuery) },
          { type: 'match', endpoint: API_ENDPOINTS.matchEvents(searchQuery) },
        ];

        const promises = endpoints.map(async ({ type, endpoint }) => {
          try {
            const data = await fetchAPI<any[]>(endpoint, { retries: 1 });
            return data.map(item => ({
              type,
              id: item.id || Math.random().toString(),
              name: item.name || item.title || 'Unknown',
              details: item.team || item.location || item.date,
              image: item.image || item.logo,
            }));
          } catch {
            return [];
          }
        });

        const allResults = await Promise.all(promises);
        const flattened = allResults.flat().slice(0, 20);
        setResults(flattened);
      } catch (err) {
        setError('Search temporarily unavailable');
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    searchAll(query);
    return () => searchAll.cancel();
  }, [query, searchAll]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'player': return <User className="w-5 h-5" />;
      case 'team': return <Users className="w-5 h-5" />;
      case 'venue': return <MapPin className="w-5 h-5" />;
      case 'match': return <Calendar className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'player': return 'bg-blue-500/20 text-blue-400';
      case 'team': return 'bg-green-500/20 text-green-400';
      case 'venue': return 'bg-purple-500/20 text-purple-400';
      case 'match': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Global Search
            </span>
          </h1>
          <p className="text-gray-300">
            Search for players, teams, venues, and matches across all leagues
          </p>
        </div>

        <div className="relative mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search players, teams, stadiums, or matches..."
              className="w-full pl-12 pr-4 py-4 bg-dark-800/50 border border-dark-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {loading && (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass-card p-4 animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-dark-800 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-dark-800 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-dark-800 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="glass-card p-8 text-center">
            <div className="text-yellow-500 mb-4">⚠️</div>
            <h3 className="text-lg font-semibold mb-2">Search Unavailable</h3>
            <p className="text-gray-400">{error}</p>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="space-y-3">
            {results.map((result) => (
              <div
                key={result.id}
                className="glass-card p-4 hover:bg-dark-800/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${getColor(result.type)}`}>
                    {getIcon(result.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold group-hover:text-primary-400 transition-colors">
                        {result.name}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${getColor(result.type)}`}>
                        {result.type.toUpperCase()}
                      </span>
                    </div>
                    {result.details && (
                      <p className="text-sm text-gray-400 mt-1">{result.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && query && results.length === 0 && (
          <div className="glass-card p-8 text-center">
            <div className="text-gray-500 mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p className="text-gray-400">Try different keywords or check back later</p>
          </div>
        )}
      </div>
    </div>
  );
}
