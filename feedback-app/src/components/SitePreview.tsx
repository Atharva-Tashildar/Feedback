interface SitePreviewProps {
  images: string[];
  url: string;
  alt: string;
}

export default function SitePreview({ images, url, alt }: SitePreviewProps) {
  if (!images.length) return null;

  // Duplicate images for seamless infinite scroll
  const allImages = [...images, ...images];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-6 overflow-hidden rounded-lg group"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} ${(i % images.length) + 1}`}
            loading="lazy"
            className="h-48 sm:h-56 w-auto object-cover rounded-lg mx-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </a>
  );
}
