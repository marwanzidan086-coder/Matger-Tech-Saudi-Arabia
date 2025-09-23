import { siteConfig } from '@/config/site';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import MainNav from './MainNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Truck className="h-7 w-7" />
          <span className="text-2xl font-bold font-headline tracking-wide">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex h-12 items-center justify-center">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
