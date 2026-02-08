'use client';

import { useSWRWithFallback } from '@/hooks/useSWRWithFallback';
import { API_ENDPOINTS } from '@/lib/api';
import { Match } from '@/types';
import MatchCard from '@/components/MatchCard';
import SkeletonMatchCard from '@/components/skeletons/SkeletonMatchCard';
import { Flame, AlertCircle } from 'lucide-react';

export default function LiveMatchesSection() {
  const { data: liveMatches, isLoading, error } = useSWRWithFallback<Match[]>(
    'live-scores',
    API_ENDPOINTS.liveScores,
    {
      refreshInterval: 30000,
      revalidateOnFocus: false,
    }
  );

  if (error) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Flame className="w-6 h-6 text-red-500" />
              Live Matches
            </h2>
          </div>
          
          <div className="glass-card p-8 text-center">
            <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live scores temporarily unavailable</h3>
            <p className="text-gray-400">
              We're experiencing issues with live data. Please check back shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="relative">
              <Flame className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            Live Matches
            {liveMatches && (
              <span className="live-badge ml-2">
                {liveMatches.filter(m => m.status === 'live').length} LIVE
              </span>
            )}
          </h2>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Auto-refreshing every 30s
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <SkeletonMatchCard key={i} />
            ))
          ) : liveMatches && liveMatches.length > 0 ? (
            liveMatches.slice(0, 6).map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <div className="col-span-full glass-card p-8 text-center">
              <p className="text-gray-400">No live matches at the moment</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
