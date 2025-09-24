import { siteConfig } from '@/config/site';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-center relative">
        <Link href="/" className="flex items-center gap-2" style={{ color: 'hsl(217, 91%, 60%)' }}>
          <Truck className="h-7 w-7" />
          <span className="text-3xl font-bold font-headline tracking-wide" style={{ textShadow: '0 0 8px hsl(217, 91%, 60%)' }}>
            {siteConfig.name}
          </span>
        </Link>
        <div className="absolute start-4 top-1/2 -translate-y-1/2 md:hidden">
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
