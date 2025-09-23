'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PackageSearch, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useIsMounted } from '@/hooks/use-is-mounted';

const navItems = [
  { href: '/', label: 'المتجر', icon: Home },
  { href: '/orders', label: 'طلباتي', icon: PackageSearch },
  { href: '/wishlist', label: 'المفضلة', icon: Heart, badge: 'wishlist' },
  { href: '/cart', label: 'السلة', icon: ShoppingCart, badge: 'cart' },
];

export default function MainNav() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const isMounted = useIsMounted();

  const getBadgeCount = (badge?: string) => {
    if (!isMounted) return 0;
    if (badge === 'cart') return cartItems.length;
    if (badge === 'wishlist') return wishlistItems.length;
    return 0;
  };

  return (
    <nav className="flex items-center justify-between w-full max-w-md">
      <div className="flex items-center gap-4 sm:gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const badgeCount = getBadgeCount(item.badge);
          return (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                'relative flex-col h-auto p-1 sm:flex-row sm:gap-2 sm:p-2 text-muted-foreground',
                isActive && 'text-foreground'
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                <span className="text-xs sm:text-sm">{item.label}</span>
                {badgeCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {badgeCount}
                  </span>
                )}
              </Link>
            </Button>
          );
        })}
      </div>
      <ThemeToggle />
    </nav>
  );
}
