'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useOrder } from '@/contexts/OrderContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { navItems } from '@/config/nav';


export default function MainNav() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { orders } = useOrder();
  const isMounted = useIsMounted();

  const getBadgeCount = (badge?: string) => {
    if (!isMounted) return 0;
    if (badge === 'cart') return cartItems.length;
    if (badge === 'wishlist') return wishlistItems.length;
    if (badge === 'orders') return orders.length;
    return 0;
  };
  
  const getBadgeColor = (badge?: string) => {
    if (badge === 'orders') return 'bg-blue-500';
    return 'bg-red-500';
  }

  return (
    <nav className="flex items-center gap-2 sm:gap-4">
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
                <span className="hidden sm:inline text-sm">{item.label}</span>
                {badgeCount > 0 && (
                  <span className={cn(
                    "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white",
                     getBadgeColor(item.badge)
                  )}>
                    {badgeCount}
                  </span>
                )}
              </Link>
            </Button>
          );
        })}
      </nav>
  );
}
