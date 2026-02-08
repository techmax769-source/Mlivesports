import { ArrowRight, Trophy, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-dark-900 to-dark-950 border-b border-dark-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-dark-800/50 border border-dark-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">LIVE MATCHES UPDATING</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Live Football Scores
            </span>
            <br />
            <span className="text-gray-100">& Real-Time Updates</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Follow your favorite teams, get live scores, match highlights, league standings, and expert betting tips all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/live"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold hover:from-primary-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"
            >
              Watch Live Scores
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/leagues"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass-card border border-dark-700 text-gray-300 font-semibold hover:bg-dark-800/50 transition-all"
            >
              Explore Leagues
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 glass-card rounded-xl hover:bg-dark-800/30 transition-all">
              <Trophy className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400">Leagues</div>
            </div>
            
            <div className="text-center p-6 glass-card rounded-xl hover:bg-dark-800/30 transition-all">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">Live</div>
              <div className="text-sm text-gray-400">Updates</div>
            </div>
            
            <div className="text-center p-6 glass-card rounded-xl hover:bg-dark-800/30 transition-all">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            
            <div className="text-center p-6 glass-card rounded-xl hover:bg-dark-800/30 transition-all">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-lg font-bold">⚽</span>
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Matches</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
