import DeveloperCard from '@/components/DeveloperCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer | MLiveSports',
  description: 'Contact the developer of MLiveSports - Max, for collaborations and projects',
};

export default function DeveloperPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Meet the Developer
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The mind behind MLiveSports - building cutting-edge sports platforms with modern technology
          </p>
        </div>
        
        <DeveloperCard />
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
            <span>Project: MLiveSports • Version: 1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
