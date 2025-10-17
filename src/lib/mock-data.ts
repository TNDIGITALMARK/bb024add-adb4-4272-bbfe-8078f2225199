// Mock data for PokeTrade Connect

export type CardCondition = 'mint' | 'near_mint' | 'excellent' | 'good' | 'light_play' | 'played';
export type CardRarity = 'common' | 'uncommon' | 'rare' | 'ultra_rare' | 'secret_rare' | 'rainbow_rare';
export type CardType = 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'fighting' | 'dark' | 'dragon' | 'colorless';
export type TradeStatus = 'pending' | 'accepted' | 'declined' | 'in_progress' | 'shipped' | 'completed';

export interface PokemonCard {
  id: string;
  name: string;
  setName: string;
  cardNumber: string;
  type: CardType;
  rarity: CardRarity;
  hp: number;
  imageUrl: string;
  condition: CardCondition;
  marketValue: number;
  ownerId: string;
  availableForTrade: boolean;
  dateAdded: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  tradeRating: number;
  totalTrades: number;
  joinedDate: string;
  location?: string;
}

export interface TradeOffer {
  id: string;
  fromUserId: string;
  toUserId: string;
  offeredCards: string[]; // card IDs
  requestedCards: string[]; // card IDs
  status: TradeStatus;
  createdAt: string;
  updatedAt: string;
  message?: string;
  trackingNumber?: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user_1',
    username: 'ash_ketchum',
    avatar: '⚡',
    tradeRating: 4.9,
    totalTrades: 247,
    joinedDate: '2023-01-15',
    location: 'Pallet Town'
  },
  {
    id: 'user_2',
    username: 'misty_waterflower',
    avatar: '💧',
    tradeRating: 4.8,
    totalTrades: 183,
    joinedDate: '2023-02-20',
    location: 'Cerulean City'
  },
  {
    id: 'user_3',
    username: 'brock_pokemon',
    avatar: '🪨',
    tradeRating: 4.7,
    totalTrades: 156,
    joinedDate: '2023-03-10',
    location: 'Pewter City'
  },
  {
    id: 'user_current',
    username: 'red_trainer',
    avatar: '🔴',
    tradeRating: 5.0,
    totalTrades: 89,
    joinedDate: '2024-01-01',
    location: 'Your Location'
  }
];

// Mock Pokemon Cards
export const mockCards: PokemonCard[] = [
  {
    id: 'card_1',
    name: 'Pikachu VMAX',
    setName: 'Vivid Voltage',
    cardNumber: '044/185',
    type: 'electric',
    rarity: 'rainbow_rare',
    hp: 300,
    imageUrl: '/generated/pikachu-vmax-card.png',
    condition: 'mint',
    marketValue: 180,
    ownerId: 'user_current',
    availableForTrade: true,
    dateAdded: '2024-09-15'
  },
  {
    id: 'card_2',
    name: 'Charizard GX',
    setName: 'Burning Shadows',
    cardNumber: '150/147',
    type: 'fire',
    rarity: 'secret_rare',
    hp: 250,
    imageUrl: '/generated/charizard-gx-card.png',
    condition: 'near_mint',
    marketValue: 450,
    ownerId: 'user_1',
    availableForTrade: true,
    dateAdded: '2024-08-20'
  },
  {
    id: 'card_3',
    name: 'Mewtwo EX',
    setName: 'Legendary Treasures',
    cardNumber: '054/113',
    type: 'psychic',
    rarity: 'ultra_rare',
    hp: 280,
    imageUrl: '/generated/mewtwo-ex-card.png',
    condition: 'mint',
    marketValue: 95,
    ownerId: 'user_current',
    availableForTrade: false,
    dateAdded: '2024-10-01'
  },
  {
    id: 'card_4',
    name: 'Gyarados',
    setName: 'Shining Fates',
    cardNumber: '019/072',
    type: 'water',
    rarity: 'rare',
    hp: 220,
    imageUrl: '/generated/gyarados-card.png',
    condition: 'mint',
    marketValue: 35,
    ownerId: 'user_2',
    availableForTrade: true,
    dateAdded: '2024-09-05'
  },
  {
    id: 'card_5',
    name: 'Rayquaza VMAX',
    setName: 'Evolving Skies',
    cardNumber: '218/203',
    type: 'dragon',
    rarity: 'ultra_rare',
    hp: 320,
    imageUrl: '/generated/rayquaza-vmax-card.png',
    condition: 'near_mint',
    marketValue: 285,
    ownerId: 'user_1',
    availableForTrade: true,
    dateAdded: '2024-07-12'
  },
  {
    id: 'card_6',
    name: 'Umbreon Moonbreon',
    setName: 'Evolving Skies',
    cardNumber: '200/203',
    type: 'dark',
    rarity: 'ultra_rare',
    hp: 260,
    imageUrl: '/generated/umbreon-moonbreon-card.png',
    condition: 'mint',
    marketValue: 520,
    ownerId: 'user_3',
    availableForTrade: true,
    dateAdded: '2024-06-18'
  },
  {
    id: 'card_7',
    name: 'Pikachu VMAX',
    setName: 'Vivid Voltage',
    cardNumber: '044/185',
    type: 'electric',
    rarity: 'rainbow_rare',
    hp: 300,
    imageUrl: '/generated/pikachu-vmax-card.png',
    condition: 'near_mint',
    marketValue: 175,
    ownerId: 'user_2',
    availableForTrade: true,
    dateAdded: '2024-08-30'
  },
  {
    id: 'card_8',
    name: 'Charizard GX',
    setName: 'Burning Shadows',
    cardNumber: '150/147',
    type: 'fire',
    rarity: 'secret_rare',
    hp: 250,
    imageUrl: '/generated/charizard-gx-card.png',
    condition: 'excellent',
    marketValue: 420,
    ownerId: 'user_3',
    availableForTrade: false,
    dateAdded: '2024-05-25'
  }
];

// Mock Trade Offers
export const mockTrades: TradeOffer[] = [
  {
    id: 'trade_1',
    fromUserId: 'user_1',
    toUserId: 'user_current',
    offeredCards: ['card_2'],
    requestedCards: ['card_1', 'card_3'],
    status: 'pending',
    createdAt: '2024-10-15T10:30:00Z',
    updatedAt: '2024-10-15T10:30:00Z',
    message: 'Hey! Love your Pikachu VMAX. Would you consider trading it plus Mewtwo for my Charizard GX?'
  },
  {
    id: 'trade_2',
    fromUserId: 'user_current',
    toUserId: 'user_3',
    offeredCards: ['card_1'],
    requestedCards: ['card_6'],
    status: 'in_progress',
    createdAt: '2024-10-12T14:20:00Z',
    updatedAt: '2024-10-14T09:15:00Z',
    message: 'Interested in your Umbreon Moonbreon. Fair trade?'
  },
  {
    id: 'trade_3',
    fromUserId: 'user_2',
    toUserId: 'user_current',
    offeredCards: ['card_4', 'card_7'],
    requestedCards: ['card_1'],
    status: 'declined',
    createdAt: '2024-10-10T16:45:00Z',
    updatedAt: '2024-10-11T08:30:00Z',
    message: 'Would you take Gyarados + Pikachu VMAX for your rainbow rare?'
  }
];

// Helper functions
export const getCardsByOwner = (ownerId: string): PokemonCard[] => {
  return mockCards.filter(card => card.ownerId === ownerId);
};

export const getAvailableCards = (): PokemonCard[] => {
  return mockCards.filter(card => card.availableForTrade && card.ownerId !== 'user_current');
};

export const getUserById = (userId: string): User | undefined => {
  return mockUsers.find(user => user.id === userId);
};

export const getCardById = (cardId: string): PokemonCard | undefined => {
  return mockCards.find(card => card.id === cardId);
};

export const getTradesForUser = (userId: string): TradeOffer[] => {
  return mockTrades.filter(trade =>
    trade.fromUserId === userId || trade.toUserId === userId
  );
};

export const formatCondition = (condition: CardCondition): string => {
  return condition.split('_').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export const formatRarity = (rarity: CardRarity): string => {
  return rarity.split('_').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export const getTypeColor = (type: CardType): string => {
  const colors: Record<CardType, string> = {
    fire: '#FF6B4A',
    water: '#4A90E2',
    grass: '#48C774',
    electric: '#FFD93D',
    psychic: '#B967FF',
    fighting: '#D97757',
    dark: '#595761',
    dragon: '#7C5DE8',
    colorless: '#A8A8A8'
  };
  return colors[type] || '#A8A8A8';
};
