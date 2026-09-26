import { useState } from 'react';
import { Eye, Maximize2, MapPin, Calendar, Compass, Layers, ArrowRight } from 'lucide-react';
import { PageId, Project } from '../types';
import { projectsData } from '../data/projectsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export function GalleryPage({ onNavigate, onSelectProject }: GalleryPageProps) {
  const [filter, setFilter] = useState<'all' | 'residential' | 'interior' | 'renovation'>('all');
  const [showBlueprints, setShowBlueprints] = useState(false);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24">
      {/* 1. Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            <span>Architectural Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Turnkey Monuments</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Curated Works &amp; Estates
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of private compounds, haute penthouses, and landmark estate restorations across Bel Air, Manhattan, Greenwich, and Aspen.
          </p>

          {/* Interactive Filter Tabs (Buttons with click handlers per frontend constitution) */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#d4af37] text-[#0b0c0e] font-bold shadow-lg'
                  : 'bg-[#121417] text-stone-400 hover:text-white border border-[#282e38]'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'residential'
                  ? 'bg-[#d4af37] text-[#0b0c0e] font-bold shadow-lg'
                  : 'bg-[#121417] text-stone-400 hover:text-white border border-[#282e38]'
              }`}
            >
              Residential Construction
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'interior'
                  ? 'bg-[#d4af37] text-[#0b0c0e] font-bold shadow-lg'
                  : 'bg-[#121417] text-stone-400 hover:text-white border border-[#282e38]'
              }`}
            >
              Interior Design
            </button>
            <button
              onClick={() => setFilter('renovation')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'renovation'
                  ? 'bg-[#d4af37] text-[#0b0c0e] font-bold shadow-lg'
                  : 'bg-[#121417] text-stone-400 hover:text-white border border-[#282e38]'
              }`}
            >
              Renovations &amp; Revivals
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Interactive Before/After Transformation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] bg-[#070809]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Interactive Before &amp; After Showcase
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                The Stonefield Manor Heritage Transformation
              </h2>
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              Drag the central divider to experience the structural modernization of an 18-acre 1928 historic estate.
            </p>
          </div>

          <div className="aspect-[16/9] md:aspect-[21/9] w-full">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop"
              beforeLabel="Historic Manor (1928)"
              afterLabel="Turnkey Modern Revival (2024)"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* 3. Main Project Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group cursor-pointer rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Clean unboxed category label */}
                  <div className="absolute top-4 left-4 text-[11px] font-medium text-stone-200 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    <span>{proj.categoryLabel}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/70 backdrop-blur-md text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4af37]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-stone-400">{proj.subtitle}</p>
                  <p className="text-xs text-stone-300 pt-2 line-clamp-2 leading-relaxed font-light">
                    {proj.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1e222a] mt-4 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>{proj.squareFeet.toLocaleString()} sq ft</span>
                <span>·</span>
                <span>{proj.yearCompleted}</span>
                <span>·</span>
                <span className="text-[#d4af37] font-sans font-semibold group-hover:underline">
                  View Dossier &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Have a Specific Architectural Vision?
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed font-light">
            Our engineering team conducts confidential site surveys and feasibility reviews for clients worldwide.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
          >
            Request Private Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
