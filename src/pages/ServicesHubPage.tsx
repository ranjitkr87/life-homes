import { ArrowRight, Building2, Paintbrush, Hammer, CheckCircle2, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface ServicesHubPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

export function ServicesHubPage({ onNavigate, onOpenEstimator }: ServicesHubPageProps) {
  const disciplines = [
    {
      pageId: 'services-residential' as PageId,
      number: '01',
      title: 'Residential Construction',
      subtitle: 'Ground-Up Bespoke Mansions & Civil Engineering',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      summary: 'Turnkey architectural compounds, seismic hillside cantilevers, and deep bedrock micro-pile foundations executed with Swiss laser tolerances.',
      highlights: [
        'Geotechnical seismic bedrock micro-piling',
        'Post-tensioned cantilevered concrete decks up to 40 ft',
        'Acoustically decoupled floating floor slabs (STC 65+)',
        'Guaranteed Maximum Price (GMP) delivery'
      ]
    },
    {
      pageId: 'services-interior' as PageId,
      number: '02',
      title: 'Interior Design & Haute Architecture',
      subtitle: 'Rare Stone Curation & Bespoke Italian Millwork',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
      summary: 'Tailoring intimate luxury with book-matched Italian marble, custom French smoked oak cabinetry, museum-grade illumination, and sensory materials.',
      highlights: [
        'Direct quarry slab selection at Carrara & Verona',
        'Bespoke architectural joinery crafted in Milanese ateliers',
        'Circadian museum-grade CRI 98+ lighting engineering',
        'Turnkey furnishing, fine art installation & styling'
      ]
    },
    {
      pageId: 'services-renovation' as PageId,
      number: '03',
      title: 'Estate Renovation & Restoration',
      subtitle: 'Historic Preservation & Modern Structural Revivals',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      summary: 'Inserting modern structural steel skeletons, subterranean wellness spas, and geothermal systems into landmark manors without disturbing their history.',
      highlights: [
        '0.5mm LiDAR point-cloud 3D laser forensics',
        'Concealed internal structural steel moment frames',
        'Pit underpinning for subterranean wine cellars & auto salons',
        '100% compliance with historic landmarks boards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            <span>Engineering Mastery</span>
            <span aria-hidden="true">·</span>
            <span>Turnkey Execution</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Permanence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Our Civil &amp; Architectural Disciplines
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From monumental structural foundations to haute interior millwork and historic gut-renovations, Life Homes &amp; Developers delivers complete turnkey mastery.
          </p>
        </div>
      </section>

      {/* Triad Detailed Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {disciplines.map((d, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-[#121417] border border-[#282e38] shadow-2xl ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                Discipline {d.number}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {d.title}
              </h2>
              <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                {d.subtitle}
              </p>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                {d.summary}
              </p>

              <div className="space-y-2 pt-2">
                {d.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate(d.pageId)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center gap-2"
                >
                  <span>View Dedicated Page &amp; Technical Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div
                onClick={() => onNavigate(d.pageId)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4af37]/30 group cursor-pointer shadow-xl"
              >
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                    Explore Dedicated Specifications
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Estimator Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Tailored Project Modeling
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Plan Your Investment &amp; Construction Schedule
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed font-light">
            Use our interactive appraisal calculator to model square footage, architectural finish tiers, and subterranean features.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimator}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Cost Estimator</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-[#121417] border border-[#282e38] text-white text-xs uppercase tracking-widest hover:text-[#d4af37] transition-all"
            >
              Contact Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
