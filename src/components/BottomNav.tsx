'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PackageSearch, Heart, ShoppingCart, LayoutGrid, Store } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useOrder } from '@/contexts/OrderContext';
import { cn } from '@/lib/utils';
import { useIsMounted } from '@/hooks/use-is-mounted';

const navItems = [
  { href: '/', label: 'المتجر', icon: Home },
  { href: '/all-products', label: 'الكل', icon: Store },
  { href: '/orders', label: 'طلباتي', icon: PackageSearch, badge: 'orders' },
  { href: '/wishlist', label: 'المفضلة', icon: Heart, badge: 'wishlist' },
  { href: '/cart', label: 'السلة', icon: ShoppingCart, badge: 'cart' },
];

export default function BottomNav() {
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 border-t backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const badgeCount = getBadgeCount(item.badge);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1 text-muted-foreground w-[60px] h-[48px]',
                isActive ? 'text-primary' : 'hover:text-foreground'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs">{item.label}</span>
              {badgeCount > 0 && (
                <span className={cn(
                  "absolute top-0 right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white",
                  getBadgeColor(item.badge)
                )}>
                  {badgeCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
