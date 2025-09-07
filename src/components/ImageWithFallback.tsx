'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
}

export function ImageWithFallback({
                                      src,
                                      alt,
                                      className,
                                      width,
                                      height,
                                      fill = false,
                                      priority = false,
                                      sizes,
                                  }: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const fallbackSrc = '/placeholder-image.jpg'; // Bu dosyayı public/ klasörüne eklememiz gerekecek

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
        }
    };

    if (fill) {
        return (
            <Image
                src={imgSrc}
                alt={alt}
                fill
                className={className}
                priority={priority}
                sizes={sizes}
                onError={handleError}
            />
        );
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width || 400}
            height={height || 400}
            className={className}
            priority={priority}
            sizes={sizes}
            onError={handleError}
        />
    );
}