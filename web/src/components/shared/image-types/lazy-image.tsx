import React from 'react';
import styled from 'styled-components';

type LazyImageProps = {
  src: string;
  alt: string;
  className: string;
  placeholderSrc: string;
  srcSet?: string;
  sizes?: string;
};

type ImgProps = {
  placeHolder: string;
};

const StyledImg = styled.img<ImgProps>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${(props: ImgProps) => `url(${props.placeHolder})`};
`;

const Image = ({ src, alt, className, placeholderSrc, srcSet, sizes }: LazyImageProps) => {
  const [image, setImage] = React.useState(null);
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

          if (isShowing) {
            setImage(src);
          }
        },
        { rootMargin: '45px' }
      );

      observer.observe(container.current);
    } else {
      setImage('');
    }

    return () => observer?.disconnect();
  }, [src]);

  return (
    <StyledImg
      placeHolder={placeholderSrc}
      className={className}
      ref={container}
      srcSet={srcSet || ''}
      sizes={sizes || ''}
      height="100%"
      width="100%"
      alt={alt}
      src={image ? src : placeholderSrc}
    />
  );
};

export default Image;
