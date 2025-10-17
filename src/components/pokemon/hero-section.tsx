'use client';

import { Button } from '@/components/ui/button';
import { Camera, Search, ArrowLeftRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-secondary via-primary to-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,184,77,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(255,140,66,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            CONNECT. TRADE.<br />
            <span className="text-accent">EVOLVE YOUR</span><br />
            COLLECTION
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Trade card Pokemon kamchay with your cards
          </p>

          {/* How it Works */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Camera className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">1. Scan & Catalogue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Search className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">2. Browse Trades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ArrowLeftRight className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">3. Secure Exchange</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
