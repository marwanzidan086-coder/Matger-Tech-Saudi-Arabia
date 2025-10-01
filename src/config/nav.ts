import { Home, PackageSearch, Heart, ShoppingCart, LayoutGrid, Store } from 'lucide-react';

export const navItems = [
    { href: '/', label: 'الرئيسية', icon: Home, badge: undefined },
    { href: '/all-products', label: 'الكل', icon: Store, badge: undefined },
    { href: '/categories', label: 'الأقسام', icon: LayoutGrid, badge: undefined },
    { href: '/orders', label: 'طلباتي', icon: PackageSearch, badge: 'orders' },
    { href: '/wishlist', label: 'المفضلة', icon: Heart, badge: 'wishlist' },
    { href: '/cart', label: 'السلة', icon: ShoppingCart, badge: 'cart' },
];

export const bottomNavItems = [
    { href: '/', label: 'الرئيسية', icon: Home, badge: undefined },
    { href: '/all-products', label: 'الكل', icon: Store, badge: undefined },
    { href: '/orders', label: 'طلباتي', icon: PackageSearch, badge: 'orders' },
    { href: '/wishlist', label: 'المفضلة', icon: Heart, badge: 'wishlist' },
    { href: '/cart', label: 'السلة', icon: ShoppingCart, badge: 'cart' },
];
