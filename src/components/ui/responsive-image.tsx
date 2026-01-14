import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  className?: string;
}

export const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  ({ 
    src, 
    alt, 
    aspectRatio = 'auto',
    objectFit = 'cover', 
    className,
    ...props 
  }, ref) => {
    const aspectRatioClass = {
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
      auto: ''
    }[aspectRatio];

    const objectFitClass = {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      'scale-down': 'object-scale-down',
      none: 'object-none'
    }[objectFit];

    return (
      <div className={cn('overflow-hidden', aspectRatioClass)}>
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full transition-transform duration-300 hover:scale-105',
            objectFitClass,
            className
          )}
          loading="lazy"
          {...props}
        />
      </div>
    );
  }
);

ResponsiveImage.displayName = 'ResponsiveImage';