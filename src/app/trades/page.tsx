'use client';

import { getTradesForUser, getUserById, getCardById, TradeOffer } from '@/lib/mock-data';
import { BottomNav } from '@/components/pokemon/bottom-nav';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRightLeft, Check, X, Clock, Package } from 'lucide-react';
import Image from 'next/image';

function TradeCard({ trade }: { trade: TradeOffer }) {
  const fromUser = getUserById(trade.fromUserId);
  const toUser = getUserById(trade.toUserId);
  const offeredCards = trade.offeredCards.map(id => getCardById(id)).filter(Boolean);
  const requestedCards = trade.requestedCards.map(id => getCardById(id)).filter(Boolean);
  const isIncoming = trade.toUserId === 'user_current';

  const statusConfig = {
    pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Pending' },
    accepted: { icon: Check, color: 'text-green-600', bg: 'bg-green-50', label: 'Accepted' },
    declined: { icon: X, color: 'text-red-600', bg: 'bg-red-50', label: 'Declined' },
    in_progress: { icon: Package, color: 'text-blue-600', bg: 'bg-blue-50', label: 'In Progress' },
    shipped: { icon: Package, color: 'text-purple-600', bg: 'bg-purple-50', label: 'Shipped' },
    completed: { icon: Check, color: 'text-green-600', bg: 'bg-green-50', label: 'Completed' },
  };

  const status = statusConfig[trade.status];
  const StatusIcon = status.icon;

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{isIncoming ? fromUser?.avatar : toUser?.avatar}</div>
          <div>
            <p className="font-semibold">{isIncoming ? fromUser?.username : toUser?.username}</p>
            <p className="text-xs text-muted-foreground">
              {isIncoming ? 'Wants to trade with you' : 'Your offer'}
            </p>
          </div>
        </div>
        <Badge className={`${status.bg} ${status.color} border-0`}>
          <StatusIcon className="w-3 h-3 mr-12" />
          {status.label}
        </Badge>
      </div>

      {/* Trade Preview */}
      <div className="flex items-center gap-4 mb-4">
        {/* Offered Cards */}
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-2">
            {isIncoming ? 'They offer' : 'You offer'}
          </p>
          <div className="flex gap-2">
            {offeredCards.slice(0, 2).map((card) => (
              <div key={card?.id} className="relative w-16 h-24 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={card?.imageUrl || ''}
                  alt={card?.name || ''}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {offeredCards.length > 2 && (
              <div className="w-16 h-24 rounded-lg bg-muted flex items-center justify-center text-sm font-semibold">
                +{offeredCards.length - 2}
              </div>
            )}
          </div>
        </div>

        {/* Arrow */}
        <ArrowRightLeft className="w-8 h-8 text-muted-foreground shrink-0" />

        {/* Requested Cards */}
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-2">
            {isIncoming ? 'They want' : 'You want'}
          </p>
          <div className="flex gap-2">
            {requestedCards.slice(0, 2).map((card) => (
              <div key={card?.id} className="relative w-16 h-24 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={card?.imageUrl || ''}
                  alt={card?.name || ''}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {requestedCards.length > 2 && (
              <div className="w-16 h-24 rounded-lg bg-muted flex items-center justify-center text-sm font-semibold">
                +{requestedCards.length - 2}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Message */}
      {trade.message && (
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <p className="text-sm">{trade.message}</p>
        </div>
      )}

      {/* Actions */}
      {trade.status === 'pending' && isIncoming && (
        <div className="flex gap-2">
          <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
            <Check className="w-4 h-4 mr-2" />
            Accept Trade
          </Button>
          <Button variant="outline" className="flex-1">
            <X className="w-4 h-4 mr-2" />
            Decline
          </Button>
        </div>
      )}

      {trade.status === 'in_progress' && (
        <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
          View Trade Details
        </Button>
      )}
    </Card>
  );
}

export default function TradesPage() {
  const allTrades = getTradesForUser('user_current');
  const pendingTrades = allTrades.filter(t => t.status === 'pending');
  const activeTrades = allTrades.filter(t => ['accepted', 'in_progress', 'shipped'].includes(t.status));
  const completedTrades = allTrades.filter(t => ['completed', 'declined'].includes(t.status));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-1">Active Trades</h1>
          <p className="text-sm text-primary-foreground/80">
            {pendingTrades.length} pending • {activeTrades.length} in progress
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="relative">
              Pending
              {pendingTrades.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent text-accent-foreground">
                  {pendingTrades.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingTrades.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No pending trade offers</p>
              </div>
            ) : (
              pendingTrades.map(trade => <TradeCard key={trade.id} trade={trade} />)
            )}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {activeTrades.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No active trades</p>
              </div>
            ) : (
              activeTrades.map(trade => <TradeCard key={trade.id} trade={trade} />)
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {completedTrades.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Check className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No trade history</p>
              </div>
            ) : (
              completedTrades.map(trade => <TradeCard key={trade.id} trade={trade} />)
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
