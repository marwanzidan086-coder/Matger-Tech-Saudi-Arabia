import { siteConfig } from '@/config/site';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import MainNav from './MainNav';
import Search from './Search';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        
        {/* Left side: Theme Toggle */}
        <div className="flex items-center gap-2">
            <ThemeToggle />
        </div>
        
        {/* Center: Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary absolute left-1/2 -translate-x-1/2">
          <Truck className="h-7 w-7" />
          <span className="text-3xl font-bold font-headline tracking-wide" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>
            {siteConfig.name}
          </span>
        </Link>

        {/* Right side: Search and Main Nav */}
        <div className="flex items-center gap-2">
            <div className="flex">
              <Search />
            </div>
            <div className="hidden md:flex">
                <MainNav />
            </div>
        </div>

      </div>
    </header>
  );
}
