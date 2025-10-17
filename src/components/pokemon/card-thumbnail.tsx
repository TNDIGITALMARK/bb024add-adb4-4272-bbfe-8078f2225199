'use client';

import Image from 'next/image';
import { PokemonCard, formatCondition, getTypeColor } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CardThumbnailProps {
  card: PokemonCard;
  onClick?: () => void;
  showOwner?: boolean;
  className?: string;
}

export function CardThumbnail({ card, onClick, showOwner = false, className }: CardThumbnailProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative flex flex-col rounded-xl bg-card overflow-hidden cursor-pointer transition-all duration-300',
        'hover:scale-105 hover:shadow-xl',
        'shadow-md',
        className
      )}
      style={{
        aspectRatio: '2/3'
      }}
    >
      {/* Card Image */}
      <div className="relative w-full h-full">
        <Image
          src={card.imageUrl}
          alt={card.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Gradient Overlay for Bottom Info */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Card Info Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 text-white">
          <h3 className="font-bold text-sm mb-1 line-clamp-1">{card.name}</h3>
          <div className="flex items-center gap-2 text-xs">
            <span className="opacity-90">{card.setName}</span>
            <span className="opacity-75">HP {card.hp}</span>
          </div>
        </div>

        {/* Top Right Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {card.availableForTrade && (
            <Badge className="bg-accent text-accent-foreground text-xs font-semibold shadow-lg">
              For Trade
            </Badge>
          )}
        </div>

        {/* Top Left - Market Value */}
        <div className="absolute top-2 left-2">
          <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded-md text-xs font-bold shadow-lg">
            ${card.marketValue}
          </div>
        </div>
      </div>

      {/* Bottom Info Bar - Only shown on hover */}
      <div className="absolute inset-x-0 -bottom-full group-hover:bottom-0 transition-all duration-300 bg-card/95 backdrop-blur-sm border-t p-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{formatCondition(card.condition)}</span>
          <div
            className="w-3 h-3 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: getTypeColor(card.type) }}
            title={card.type}
          />
        </div>
      </div>
    </div>
  );
}
