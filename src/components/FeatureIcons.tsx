'use client';

import { useEffect, useState } from 'react';
import { generateFeatureIcons, type FeatureIconsOutput } from '@/ai/flows/product-feature-icon-generation';
import {
  BatteryCharging,
  Wifi,
  Bluetooth,
  Circle,
  Cpu,
  Smartphone,
  HardDrive,
  Camera,
  FastForward
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const ICONS_MAP: { [key: string]: React.ComponentType<LucideProps> } = {
  BatteryCharging,
  Wifi,
  Bluetooth,
  Cpu,
  Smartphone,
  HardDrive,
  Camera,
  FastForward
};

const DynamicIcon = ({ name, ...props }: { name: string } & LucideProps) => {
  const IconComponent = ICONS_MAP[name] || Circle;
  return <IconComponent {...props} />;
};


export default function FeatureIcons({ productDescription }: { productDescription: string }) {
  const [features, setFeatures] = useState<FeatureIconsOutput['featureIcons']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The feature generation is disabled to prevent fetch errors.
    // To re-enable, add your GEMINI_API_KEY to .env and uncomment the AI flow import and call.
    setLoading(false);
    async function getFeatures() {
      /*
      try {
        setLoading(true);
        const result = await generateFeatureIcons({ productDescription });
        if (result && result.featureIcons) {
          setFeatures(result.featureIcons);
        }
      } catch (error) {
        console.error("Failed to generate feature icons:", error);
      } finally {
        setLoading(false);
      }
      */
    }
    // getFeatures();
  }, [productDescription]);

  if (loading) {
    return (
        <div className="flex space-x-4 animate-pulse">
            <div className="h-10 w-24 bg-muted rounded-md"></div>
            <div className="h-10 w-24 bg-muted rounded-md"></div>
            <div className="h-10 w-24 bg-muted rounded-md"></div>
        </div>
    );
  }

  if (features.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-3">المميزات الرئيسية:</h3>
      <div className="flex flex-wrap gap-4">
        {features.map(({ feature, icon }, index) => (
          <div key={index} className="flex items-center gap-2 p-2 border rounded-lg bg-card">
            <DynamicIcon name={icon} className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
