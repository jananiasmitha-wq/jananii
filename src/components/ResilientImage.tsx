import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
  aspectClass?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  caption,
  aspectClass = 'aspect-video',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="w-full h-full flex flex-col">
      <div
        className={`relative overflow-hidden bg-[#EBE6DF] border border-[#E5E0D6] ${aspectClass} ${className}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-500 ease-out ${imgClassName}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F3EFE6] to-[#E5E0D6] text-[#57534E]">
            <Building2 className="w-8 h-8 mb-3 text-[#1E3A8A]/60" strokeWidth={1.5} />
            <p className="text-sm font-medium text-[#1C1917] max-w-xs">{alt}</p>
            <p className="text-xs text-[#78716C] mt-1">
              Sri Krishna Arts and Science College, Coimbatore
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs font-serif italic text-[#57534E] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
