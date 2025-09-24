'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PackageSearch, Heart, ShoppingCart, LayoutGrid, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { cn } from '@/lib/utils';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { ThemeToggle } from './ThemeToggle';
import SearchComponent from './Search';


const navItems = [
  { href: '/', label: 'المتجر', icon: Home },
  { href: '/categories', label: 'الأقسام', icon: LayoutGrid },
  { href: '/orders', label: 'طلباتي', icon: PackageSearch },
  { href: '/wishlist', label: 'المفضلة', icon: Heart, badge: 'wishlist' },
  { href: '/cart', label: 'السلة', icon: ShoppingCart, badge: 'cart' },
];

export default function BottomNav() {
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
                <span className="absolute top-0 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {badgeCount}
                </span>
              )}
            </Link>
          );
        })}
         <div className="absolute start-4 top-1/2 -translate-y-1/2 md:hidden">
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
