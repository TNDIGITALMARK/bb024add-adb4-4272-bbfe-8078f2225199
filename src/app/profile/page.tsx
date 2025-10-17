'use client';

import { getUserById, getCardsByOwner, getTradesForUser } from '@/lib/mock-data';
import { BottomNav } from '@/components/pokemon/bottom-nav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Star, TrendingUp, Award, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const currentUser = getUserById('user_current');
  const myCards = getCardsByOwner('user_current');
  const myTrades = getTradesForUser('user_current');
  const completedTrades = myTrades.filter(t => t.status === 'completed').length;
  const collectionValue = myCards.reduce((sum, card) => sum + card.marketValue, 0);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Profile</h1>
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-4xl shadow-lg">
              {currentUser?.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{currentUser?.username}</h2>
              <p className="text-sm text-muted-foreground">{currentUser?.location}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold">{currentUser?.tradeRating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  • {currentUser?.totalTrades} trades
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Edit Profile
            </Button>
            <Button variant="outline">Share Profile</Button>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">${collectionValue}</p>
                <p className="text-xs text-muted-foreground">Collection Value</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{myCards.length}</p>
                <p className="text-xs text-muted-foreground">Total Cards</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="text-xs font-medium">First Trade</p>
            </div>
            <div className="text-center opacity-50">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="text-xs font-medium">50 Trades</p>
            </div>
            <div className="text-center opacity-50">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <p className="text-xs font-medium">Rare Hunter</p>
            </div>
          </div>
        </Card>

        {/* Trading History */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Trading History</h3>
            <Badge variant="secondary">{completedTrades} completed</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Joined PokeTrade</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(currentUser?.joinedDate || '').toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium">Member for</p>
                <p className="text-xs text-muted-foreground">
                  {Math.floor((new Date().getTime() - new Date(currentUser?.joinedDate || '').getTime()) / (1000 * 60 * 60 * 24))} days
                </p>
              </div>
              <Badge className="bg-accent/20 text-accent-foreground border-0">Active Trader</Badge>
            </div>
          </div>
        </Card>

        {/* Settings Links */}
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Trade Preferences
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Privacy & Security
          </Button>
          <Button variant="ghost" className="w-full justify-start text-destructive">
            Sign Out
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
