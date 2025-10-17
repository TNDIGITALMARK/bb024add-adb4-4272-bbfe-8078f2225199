'use client';

import { useState } from 'react';
import { getCardsByOwner, PokemonCard } from '@/lib/mock-data';
import { CardGrid } from '@/components/pokemon/card-grid';
import { BottomNav } from '@/components/pokemon/bottom-nav';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Filter } from 'lucide-react';

export default function Index() {
  const [selectedCard, setSelectedCard] = useState<PokemonCard | null>(null);
  const myCards = getCardsByOwner('user_current');
  const availableCards = myCards.filter(card => card.availableForTrade);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">My Collection</h1>
              <p className="text-sm text-primary-foreground/80">
                {myCards.length} cards • {availableCards.length} for trade
              </p>
            </div>
            <Button size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full w-12 h-12">
              <Camera className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{myCards.length}</p>
              <p className="text-xs text-muted-foreground">Total Cards</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">${myCards.reduce((sum, card) => sum + card.marketValue, 0)}</p>
              <p className="text-xs text-muted-foreground">Collection Value</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">{availableCards.length}</p>
              <p className="text-xs text-muted-foreground">For Trade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-card border-b sticky top-[72px] z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Button variant="outline" size="sm" className="shrink-0">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Badge variant="secondary" className="shrink-0">All Cards</Badge>
            <Badge variant="outline" className="shrink-0">For Trade</Badge>
            <Badge variant="outline" className="shrink-0">Ultra Rare</Badge>
            <Badge variant="outline" className="shrink-0">High Value</Badge>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <main className="container mx-auto px-4 py-6">
        <CardGrid
          cards={myCards}
          onCardClick={setSelectedCard}
          emptyMessage="No cards in your collection yet. Start by adding your first card!"
        />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}