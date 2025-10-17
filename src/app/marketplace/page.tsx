'use client';

import { useState } from 'react';
import { getAvailableCards, PokemonCard, getUserById } from '@/lib/mock-data';
import { CardGrid } from '@/components/pokemon/card-grid';
import { BottomNav } from '@/components/pokemon/bottom-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function MarketplacePage() {
  const [selectedCard, setSelectedCard] = useState<PokemonCard | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const availableCards = getAvailableCards();

  const filteredCards = availableCards.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.setName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-3">Trade Marketplace</h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search cards by name or set..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-card border-b sticky top-[136px] z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button variant="outline" size="sm" className="shrink-0">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
            <div className="h-6 w-px bg-border mx-1" />
            <Badge variant="outline" className="shrink-0">All Types</Badge>
            <Badge variant="outline" className="shrink-0">Ultra Rare</Badge>
            <Badge variant="outline" className="shrink-0">$50-$200</Badge>
            <Badge variant="outline" className="shrink-0">Near Mint</Badge>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-2">🔥 Featured Daily Deals</h2>
          <p className="text-sm opacity-90">Limited time offers from top-rated traders</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {filteredCards.length} cards available
            </span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Sort by:</span>
              <Button variant="ghost" size="sm" className="h-7 text-xs font-medium">
                Newest First
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <main className="container mx-auto px-4 py-6">
        <CardGrid
          cards={filteredCards}
          onCardClick={setSelectedCard}
          emptyMessage="No cards match your search. Try different filters!"
        />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
