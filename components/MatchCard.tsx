import { Match } from '@/types';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const getStatusColor = () => {
    switch (match.status) {
      case 'live': return 'text-red-500';
      case 'finished': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = () => {
    switch (match.status) {
      case 'live': return `${match.minute}'`;
      case 'finished': return 'FT';
      default: return 'UPCOMING';
    }
  };

  return (
    <div className="glass-card p-4 hover:bg-dark-800/50 transition-all group cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Trophy className="w-4 h-4" />
          <span>{match.competition}</span>
        </div>
        <div className={`flex items-center gap-2 ${getStatusColor()}`}>
          {match.status === 'live' && (
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          )}
          <span className="font-semibold">{getStatusText()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 text-center">
          <div className="font-bold text-lg mb-1">{match.homeTeam}</div>
          <div className="text-sm text-gray-400">Home</div>
        </div>
        
        <div className="mx-4">
          {match.status !== 'upcoming' ? (
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-dark-800 px-4 py-2 rounded-lg min-w-[60px] text-center">
                {match.homeScore || 0}
              </div>
              <span className="text-gray-400">-</span>
              <div className="text-2xl font-bold bg-dark-800 px-4 py-2 rounded-lg min-w-[60px] text-center">
                {match.awayScore || 0}
              </div>
            </div>
          ) : (
            <div className="text-xl font-bold text-gray-400">VS</div>
          )}
        </div>
        
        <div className="flex-1 text-center">
          <div className="font-bold text-lg mb-1">{match.awayTeam}</div>
          <div className="text-sm text-gray-400">Away</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{new Date(match.date).toLocaleDateString()}</span>
        </div>
        
        {match.venue && (
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate max-w-[120px]">{match.venue}</span>
          </div>
        )}
      </div>
    </div>
  );
}
