import NextImage from 'next/image';
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false, 
  className = '',
  priority = false,
  sizes
}) => {
  const basePath = '/elective4';
  const finalSrc = src.startsWith('/elective4')
    ? src
    : (src.startsWith('/') ? `${basePath}${src}` : src);

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''} ${className}`}>
      <NextImage
        src={finalSrc}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`object-cover ${fill ? 'absolute inset-0' : ''} transition-opacity duration-300`}
        priority={priority}
        sizes={fill ? (sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw") : sizes}
      />
    </div>
  );
};
