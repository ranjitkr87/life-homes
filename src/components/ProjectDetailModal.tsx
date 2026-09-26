import { useState } from 'react';
import { X, MapPin, Calendar, Maximize2, Clock, Compass, Layers, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (project: Project) => void;
}

export function ProjectDetailModal({ project, onClose, onInquire }: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const allImages = [project.heroImage, ...project.galleryImages];

  const nextImage = () => {
    setActiveImageIndex(prev => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#121417] border border-[#d4af37]/35 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#e5e0d8]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282e38] bg-[#0b0c0e]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#d4af37] tracking-wider uppercase font-medium">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide mt-0.5">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#a0a5ad] hover:text-white hover:bg-[#282e38] rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Main Visual Carousel */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-[#282e38]">
            <img
              src={allImages[activeImageIndex]}
              alt={`${project.title} - View ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                  {allImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeImageIndex ? 'w-6 bg-[#d4af37]' : 'w-2 bg-stone-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-[#0b0c0e] rounded-xl border border-[#282e38]">
              <span className="text-xs text-[#a0a5ad] flex items-center gap-1.5 mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" /> Enclosed Scale
              </span>
              <p className="text-base font-serif font-bold text-white">{project.squareFeet.toLocaleString()} sq ft</p>
            </div>
            <div className="p-3.5 bg-[#0b0c0e] rounded-xl border border-[#282e38]">
              <span className="text-xs text-[#a0a5ad] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" /> Completion
              </span>
              <p className="text-base font-serif font-bold text-white">{project.yearCompleted}</p>
            </div>
            <div className="p-3.5 bg-[#0b0c0e] rounded-xl border border-[#282e38]">
              <span className="text-xs text-[#a0a5ad] flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> Build Duration
              </span>
              <p className="text-base font-serif font-bold text-white">{project.timelineMonths} Months</p>
            </div>
            <div className="p-3.5 bg-[#0b0c0e] rounded-xl border border-[#282e38]">
              <span className="text-xs text-[#a0a5ad] flex items-center gap-1.5 mb-1">
                <Compass className="w-3.5 h-3.5 text-[#d4af37]" /> Style
              </span>
              <p className="text-xs font-serif font-medium text-white truncate">{project.architecturalStyle}</p>
            </div>
          </div>

          {/* Narrative & Engineering Dossier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-base font-serif font-semibold text-white tracking-wide">
                Architectural Overview
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-sans">
                {project.summary}
              </p>
              
              <div className="p-4 bg-[#0b0c0e] rounded-xl border border-[#282e38] space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  The Civil & Structural Challenge
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 bg-[#0b0c0e] rounded-xl border border-[#282e38] space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  The Life Homes Engineering Solution
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Structural Innovations */}
              <div>
                <h3 className="text-base font-serif font-semibold text-white tracking-wide mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#d4af37]" /> Structural & Civil Innovations
                </h3>
                <ul className="space-y-2">
                  {project.structuralInnovations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials Used */}
              <div>
                <h3 className="text-base font-serif font-semibold text-white tracking-wide mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" /> Primary Materials Palette
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.materialsUsed.map((mat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#0b0c0e] border border-[#282e38] text-xs text-stone-300 font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              {project.clientQuote && (
                <div className="p-4 bg-gradient-to-r from-[#181b20] to-[#0b0c0e] rounded-xl border-l-2 border-[#d4af37] italic text-xs text-stone-300">
                  <p>“{project.clientQuote.text}”</p>
                  <p className="mt-2 text-[11px] font-sans font-semibold text-[#d4af37] not-italic">
                    — {project.clientQuote.author}, {project.clientQuote.role}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#282e38] bg-[#0b0c0e]">
          <span className="text-xs text-[#a0a5ad]">
            All engineering plans stamped and certified under strict NDA
          </span>
          <button
            onClick={() => {
              onInquire(project);
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-semibold text-xs uppercase tracking-wider hover:from-[#f7ecd0] hover:to-[#d4af37] transition-all shadow-md"
          >
            Inquire About Similar Build
          </button>
        </div>
      </div>
    </div>
  );
}
