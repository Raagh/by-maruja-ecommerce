import React from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc: string;
  srcSet?: string;
  sizes?: string;
};

const LazyImage = ({ src, alt, className, placeholderSrc, srcSet, sizes }: LazyImageProps) => {
  const [image, setImage] = React.useState(placeholderSrc);
  const [isLoading, setIsLoading] = React.useState(false);
  const [usableSrcSet, setSrcSet] = React.useState('');
  const container = React.useRef();

  React.useEffect(() => {
    let observer: IntersectionObserver;

    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      observer = new IntersectionObserver(
        (intersections) => {
          const isShowing = intersections[0]?.isIntersecting;

          if (isShowing && !isLoading) {
            const fullImage = new Image();

            if (srcSet) {
              fullImage.srcset = srcSet;
            } else {
              fullImage.src = src;
            }

            setIsLoading(true);

            fullImage.onload = () => {
              if (srcSet) {
                setSrcSet(srcSet);
              } else {
                setImage(src);
              }
            };
          }
        },
        { rootMargin: '45px' }
      );

      observer.observe(container.current);
    }

    return () => observer?.disconnect();
  }, [src, isLoading, image, setImage, usableSrcSet, setSrcSet, srcSet]);

  return (
    <img
      placeholder="lazy-loaded-image"
      className={className}
      ref={container}
      srcSet={usableSrcSet}
      sizes={sizes || ''}
      height="100%"
      width="100%"
      alt={alt}
      src={image}
    />
  );
};

export default LazyImage;
