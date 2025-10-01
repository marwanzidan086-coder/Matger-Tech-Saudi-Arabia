
'use client';

import { type Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BoxSelect } from 'lucide-react';

// You need to declare the `model-viewer` tag to JSX
// to make it available for use with proper typings.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyModelViewer &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
    interface MyModelViewer {
      src: string;
      poster?: string;
      alt?: string;
      'ar'?: boolean;
      'ar-modes'?: string;
      'ar-scale'?: string;
      'camera-controls'?: boolean;
      'environment-image'?: string;
      'shadow-intensity'?: string;
      style?: React.CSSProperties;
    }
  }
}


export default function TryInAR({ product }: { product: Product }) {
  if (!product.model3d) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-lg border-dashed border-2 border-primary/40 bg-primary/5 text-primary hover:bg-primary/10">
          <BoxSelect className="me-2 h-5 w-5" />
          شاهد المنتج في غرفتك (AR)
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] h-auto">
        <DialogHeader>
          <DialogTitle>نموذج ثلاثي الأبعاد للمنتج</DialogTitle>
          <DialogDescription>
            حرّك النموذج لرؤيته من جميع الزوايا. اضغط على أيقونة (AR) في الأسفل لعرضه في مساحتك الخاصة.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center w-full h-[400px] rounded-lg border bg-muted">
          <model-viewer
            src={product.model3d}
            poster={product.images[0]}
            alt={`نموذج ثلاثي الأبعاد لـ ${product.name}`}
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            camera-controls
            environment-image="neutral"
            shadow-intensity="1"
            style={{ width: '100%', height: '100%' }}
          ></model-viewer>
        </div>
        <DialogFooter>
           <p className="text-xs text-muted-foreground">ملاحظة: تعمل ميزة الواقع المعزز (AR) على الأجهزة والجوالات المدعومة فقط.</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
