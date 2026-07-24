import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  glow?: boolean;
  className?: string;
}

export const NovexaLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  glow = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-lg', badge: 'text-[9px]' },
    md: { icon: 36, text: 'text-xl', badge: 'text-[10px]' },
    lg: { icon: 48, text: 'text-2xl', badge: 'text-[11px]' },
    xl: { icon: 64, text: 'text-4xl', badge: 'text-xs' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Icon Mark */}
      <div className="relative flex items-center justify-center">
        {glow && (
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#2F80FF] to-[#8A3FFC] opacity-60 blur-md transition-all duration-500 group-hover:opacity-90 group-hover:blur-lg"
            aria-hidden="true"
          />
        )}
        <div className="relative z-10 flex items-center justify-center rounded-xl bg-[#080912] p-1.5 border border-white/10 shadow-2xl">
          <svg
            width={currentSize.icon}
            height={currentSize.icon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-500 group-hover:scale-105"
          >
            <defs>
              <linearGradient id="novexaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#2F80FF" />
                <stop offset="100%" stopColor="#8A3FFC" />
              </linearGradient>
              <linearGradient id="novexaGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8A3FFC" />
                <stop offset="100%" stopColor="#2F80FF" />
              </linearGradient>
              <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Polygon Geometry for Futuristic N Mark */}
            {/* Left Stem */}
            <path
              d="M12 52V12L24 20V52L12 52Z"
              fill="url(#novexaGrad1)"
            />
            {/* Diagonal Ribbon */}
            <path
              d="M12 12L52 52H40L12 24V12Z"
              fill="url(#novexaGrad1)"
              opacity="0.95"
            />
            {/* Right Stem */}
            <path
              d="M40 12V44L52 52V12H40Z"
              fill="url(#novexaGrad2)"
            />
            {/* Center Glowing Tech Core Ring */}
            <circle
              cx="32"
              cy="32"
              r="4"
              fill="#00D4FF"
              filter="url(#logoGlow)"
            />
          </svg>
        </div>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-wider text-white ${currentSize.text} font-sans`}>
              NOVEXA
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
          </div>
          <span className={`font-semibold tracking-[0.22em] text-[#A0A0A0] uppercase ${currentSize.badge}`}>
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
};
