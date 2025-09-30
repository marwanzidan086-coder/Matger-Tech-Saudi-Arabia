import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gift } from 'lucide-react';

type HeroProps = {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-white mb-12">
      {/* Background Image */}
      <Image
        src="https://picsum.photos/seed/hero-background/1600/900"
        alt="خلفية تقنية حديثة"
        fill
        className="object-cover"
        quality={80}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
          اكتشف مستقبل التكنولوجيا
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          أحدث المنتجات التقنية التي تلهم حياتك اليومية، بأسعار تنافسية وجودة لا تضاهى.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-bold text-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
              <Link href="/all-products" onClick={(e) => onNavigate(e, '/all-products')}>
                تسوق الآن
                <ArrowLeft className="me-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg bg-background/20 backdrop-blur-sm border-white/50 text-white hover:bg-background/30 hover:text-white transition-all duration-300 hover:scale-105">
              <Link href="#gift-advisor">
                 البحث عن هدية
                <Gift className="me-2 h-5 w-5" />
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
