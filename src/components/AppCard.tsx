'use client';

import Link from 'next/link';
import Image from 'next/image';
import { App } from '@/data/apps';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'accent':
        return 'bg-accent';
      default:
        return 'bg-primary';
    }
  };

  const getCardBackgroundClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:shadow-primary/25';
      case 'secondary':
        return 'bg-secondary/10 border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40 hover:shadow-secondary/25';
      case 'accent':
        return 'bg-accent/10 border-accent/20 hover:bg-accent/20 hover:border-accent/40 hover:shadow-accent/25';
      default:
        return 'bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:shadow-primary/25';
    }
  };

  return (
    <div className={`backdrop-blur-sm rounded-xl p-6 border ${getCardBackgroundClasses(app.color)} transition-all duration-300 hover:shadow-lg hover:scale-105`}>
      {/* App Icon */}
      <div className={`w-12 h-12 ${getColorClasses(app.color)} rounded-lg flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 hover:scale-110`}>
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={24}
          height={24}
        />
      </div>

      {/* App Title */}
      <h3 className="text-xl font-semibold text-white mb-2">
        {app.name}
      </h3>

      {/* App Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {app.description}
      </p>

      {/* Learn More Link */}
      <Link 
        href={`/apps/${app.slug}`}
        className="text-primary hover:text-primary/80 transition-colors font-medium"
      >
        Learn More →
      </Link>
    </div>
  );
} 