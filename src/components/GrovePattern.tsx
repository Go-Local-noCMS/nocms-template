/**
 * A subtle botanical SVG pattern used as a section background texture.
 * Gives the "Golden Grove" template its unique visual identity.
 */
interface GrovePatternProps {
  className?: string;
  opacity?: number;
}

export function GrovePattern({ className = "", opacity = 0.03 }: GrovePatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="grove-leaves" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Delicate leaf motif — abstract, organic */}
            <path d="M60 10 Q70 30 60 50 Q50 30 60 10Z" fill="currentColor" opacity={opacity} />
            <path d="M20 70 Q30 85 25 100 Q15 85 20 70Z" fill="currentColor" opacity={opacity * 0.7} />
            <path d="M95 60 Q105 75 100 90 Q90 75 95 60Z" fill="currentColor" opacity={opacity * 0.8} />
            <circle cx="40" cy="40" r="1.5" fill="currentColor" opacity={opacity * 0.5} />
            <circle cx="85" cy="25" r="1" fill="currentColor" opacity={opacity * 0.4} />
            <circle cx="15" cy="105" r="1.2" fill="currentColor" opacity={opacity * 0.6} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grove-leaves)" className="text-primary" />
      </svg>
    </div>
  );
}
