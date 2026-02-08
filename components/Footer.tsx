import Link from 'next/link';
import { Trophy, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-dark-800 bg-dark-900/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MLiveSports</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for live football scores, news, and statistics.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/live" className="hover:text-primary-400 transition-colors">
                  Live Scores
                </Link>
              </li>
              <li>
                <Link href="/leagues" className="hover:text-primary-400 transition-colors">
                  Leagues
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-primary-400 transition-colors">
                  Betting Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Leagues</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Premier League</li>
              <li>La Liga</li>
              <li>Serie A</li>
              <li>Bundesliga</li>
              <li>Champions League</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/developer" className="hover:text-primary-400 transition-colors">
                  Contact Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} MLiveSports. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>Made with passion by</span>
            <Link href="/developer" className="text-primary-400 hover:text-primary-300">
              Max
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
