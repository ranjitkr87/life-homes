import { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Historical State (1928)',
  afterLabel = 'Modern Structural Revival',
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-xl border border-[#d4af37]/20 shadow-2xl cursor-ew-resize group ${className}`}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After Renovation Transformation"
        className="w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* After Label */}
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md border border-[#d4af37]/30 rounded text-xs tracking-wider uppercase text-[#d4af37]">
        {afterLabel}
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Renovation State"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          loading="lazy"
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 rounded text-xs tracking-wider uppercase text-stone-300">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-gradient-to-b from-[#f7ecd0] via-[#d4af37] to-[#785a24] shadow-[0_0_12px_rgba(212,175,55,0.8)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b0c0e] border-2 border-[#d4af37] shadow-xl flex items-center justify-center text-[#d4af37]">
          <ArrowLeftRight className="w-4 h-4" />
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[11px] text-stone-300 pointer-events-none group-hover:opacity-0 transition-opacity">
        Drag or swipe to reveal architectural transformation
      </div>
    </div>
  );
}
