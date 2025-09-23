import { siteConfig } from '@/config/site';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Truck className="h-6 w-6" />
          <span className="text-xl font-bold font-headline tracking-wide">
            {siteConfig.name}
          </span>
        </Link>
        <div className="md:hidden">
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
