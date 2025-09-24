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
        <div className="hidden md:flex">
          <MainNav />
        </div>
        
        <Link href="/" className="flex items-center gap-2 text-primary absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
          <Truck className="h-7 w-7" />
          <span className="text-3xl font-bold font-headline tracking-wide" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <Search />
              <ThemeToggle />
            </div>
             <div className="absolute start-4 top-1/2 -translate-y-1/2 md:hidden">
                 <Search />
            </div>
        </div>

      </div>
    </header>
  );
}
