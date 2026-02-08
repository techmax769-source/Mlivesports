'use client';

import { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Github, 
  Linkedin, 
  Code2,
  Sparkles,
  Phone,
  CheckCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function DeveloperCard() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText('+254746093533');
    setCopied(true);
    toast.success('Phone number copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/254746093533`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card overflow-hidden border border-dark-700/50">
        {/* Header */}
        <div className="relative h-48 bg-gradient-to-r from-primary-900/30 via-purple-900/30 to-pink-900/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent"></div>
          
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl border-4 border-dark-900 bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">M</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-dark-900">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white">Max</h2>
                <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium">
                  Lead Developer
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">
                Full-stack developer specializing in modern web applications, real-time systems, 
                and scalable architecture. Passionate about creating exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1.5 rounded-lg bg-dark-800 text-gray-300 text-sm">
                  Next.js 14
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-800 text-gray-300 text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-800 text-gray-300 text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-800 text-gray-300 text-sm">
                  React Query
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-800 text-gray-300 text-sm">
                  Vercel
                </span>
              </div>
            </div>
            
            <div className="md:w-80">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary-400" />
                  Contact Developer
                </h3>
                
                <div className="space-y-4">
                  {/* WhatsApp Button */}
                  <button
                    onClick={openWhatsApp}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </button>
                  
                  {/* Phone */}
                  <button
                    onClick={copyPhone}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div className="text-left">
                        <div className="text-sm text-gray-400">Phone</div>
                        <div className="text-white">+254 746 093 533</div>
                      </div>
                    </div>
                    {copied ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="text-sm text-primary-400">Copy</div>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-500 text-center pt-2">
                    Available for freelance projects and consultations
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors">
                  <Github className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors">
                  <Code2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="mt-8 pt-8 border-t border-dark-800">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary-400" />
              About MLiveSports
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Tech Stack</span>
                  <span className="text-white">Next.js 14, TypeScript, Tailwind</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Deployment</span>
                  <span className="text-white">Vercel</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">API</span>
                  <span className="text-white">Custom REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
