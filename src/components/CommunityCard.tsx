import { MapPin, ArrowRight, Star, Users } from "lucide-react";

interface CommunityCardProps {
  name: string;
  location: string;
  image?: string;
  careTypes: string[];
  rating?: number;
  reviewCount?: number;
  startingPrice?: string;
  href?: string;
}

export function CommunityCard({
  name,
  location,
  image,
  careTypes = [],
  rating,
  reviewCount,
  startingPrice,
  href = "/communities",
}: CommunityCardProps) {
  return (
    <a
      href={href}
      className="group block bg-background rounded-2xl border border-text/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-[transform,box-shadow,color,opacity,gap] duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* Image — photo-forward: 60% of card height */}
      <div className="relative h-64 bg-surface overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${name} community`}
            className="w-full h-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-700"
            width={600}
            height={400}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/12 via-surface to-accent/8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--color-accent) 1px, transparent 1px)", backgroundSize: "24px 24px" } as React.CSSProperties} />
            <Users className="h-12 w-12 text-primary/25" aria-hidden="true" />
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-text/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Price tag */}
        {startingPrice && (
          <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-semibold text-text shadow-sm">
            From {startingPrice}/mo
          </div>
        )}

        {/* Rating overlay — appears on hover */}
        {rating != null && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-background/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star className="h-4 w-4 text-accent fill-accent" aria-hidden="true" />
            <span className="text-sm font-bold text-text" style={{ fontVariantNumeric: "tabular-nums" }}>{rating}</span>
            {reviewCount != null && (
              <span className="text-xs text-text/65">({reviewCount})</span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
          {name}
        </h3>

        <div className="flex items-center gap-1.5 text-sm text-text/65 mb-4">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {location}
        </div>

        {/* Care type badges — compact pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(careTypes ?? []).map((type) => (
            <span
              key={type}
              className="text-xs font-medium text-primary bg-primary/8 rounded-full px-2.5 py-0.5"
            >
              {type}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-[transform,box-shadow,color,opacity,gap]">
          View Community
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
