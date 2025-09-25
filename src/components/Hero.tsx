import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gift } from 'lucide-react';

export default function Hero() {
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
        data-ai-hint="modern technology"
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
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="#products">
                تسوق الآن
                <ArrowLeft className="me-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="font-bold text-lg">
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
