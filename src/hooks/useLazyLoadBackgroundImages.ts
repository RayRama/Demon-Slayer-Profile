import { useEffect, useState } from "react";

const useLazyLoadBackgroundImages = (imageArray: string[]): string[] => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target as HTMLDivElement;
            const imageSrc = lazyImage.dataset.src;
            if (imageSrc) {
              lazyImage.style.backgroundImage = `url(${imageSrc})`;
              setLoadedImages((prevLoadedImages) => [
                ...prevLoadedImages,
                imageSrc,
              ]);
              observer.unobserve(lazyImage);
            }
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const lazyImages = document.querySelectorAll("#uppermoon");
    lazyImages.forEach((lazyImage) =>
      observer.observe(lazyImage as HTMLDivElement)
    );

    return () => {
      lazyImages.forEach((lazyImage) =>
        observer.unobserve(lazyImage as HTMLDivElement)
      );
    };
  }, [imageArray]);

  return loadedImages;
};

export default useLazyLoadBackgroundImages;
