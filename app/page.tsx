import LiveMatchesSection from '@/components/sections/LiveMatchesSection';
import FeaturedLeagues from '@/components/sections/FeaturedLeagues';
import LatestNews from '@/components/sections/LatestNews';
import BettingTipsPreview from '@/components/sections/BettingTipsPreview';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8 space-y-12">
        <LiveMatchesSection />
        
        <FeaturedLeagues />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LatestNews />
          </div>
          <div className="lg:col-span-1">
            <BettingTipsPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
