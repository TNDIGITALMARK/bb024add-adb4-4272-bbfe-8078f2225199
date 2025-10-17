'use client';

import { PokemonCard } from '@/lib/mock-data';
import { CardThumbnail } from './card-thumbnail';
import { cn } from '@/lib/utils';

interface CardGridProps {
  cards: PokemonCard[];
  onCardClick?: (card: PokemonCard) => void;
  className?: string;
  emptyMessage?: string;
}

export function CardGrid({ cards, onCardClick, className, emptyMessage = 'No cards found' }: CardGridProps) {
  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
        <div className="text-center">
          <p className="text-lg">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid gap-4',
        'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
        className
      )}
    >
      {cards.map((card) => (
        <CardThumbnail
          key={card.id}
          card={card}
          onClick={() => onCardClick?.(card)}
        />
      ))}
    </div>
  );
}
