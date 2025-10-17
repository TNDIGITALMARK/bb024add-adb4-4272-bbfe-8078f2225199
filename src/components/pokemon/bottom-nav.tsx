'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Store, ArrowLeftRight, User } from 'lucide-react';

const navItems = [
  { href: '/', icon: Home, label: 'Collection' },
  { href: '/marketplace', icon: Store, label: 'Market' },
  { href: '/trades', icon: ArrowLeftRight, label: 'Trades' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-primary-foreground/10 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 max-w-screen-xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors',
                'min-w-[44px]',
                isActive
                  ? 'text-accent'
                  : 'text-primary-foreground/70 hover:text-primary-foreground'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center w-6 h-6 transition-transform',
                  isActive && 'scale-110'
                )}
              >
                <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn('text-xs font-medium', isActive && 'font-bold')}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
