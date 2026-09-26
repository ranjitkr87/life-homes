import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Compass,
  Layers,
  CheckCircle2,
  ChevronRight,
  Eye,
  Building2,
  Paintbrush,
  Hammer,
} from "lucide-react";
import { PageId, Project } from "../types";
import { projectsData } from "../data/projectsData";
import { clientTestimonials } from "../data/companyData";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
  onSelectProject: (project: Project) => void;
}

export function HomePage({
  onNavigate,
  onOpenEstimator,
  onSelectProject,
}: HomePageProps) {
  const [activeTab, setActiveTab] = useState<
    "all" | "residential" | "interior" | "renovation"
  >("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData.slice(0, 4)
      : projectsData.filter((p) => p.category === activeTab).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8]">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Visual with Architectural Tone Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop"
            alt="Life Homes & Developers Luxury Architectural Masterpiece"
            className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.1] transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/40 to-black/70" />
          <div className="absolute inset-0 bg-grid-architectural opacity-30" />
        </div>

        {/* Hero Narrative Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          {/* Unboxed editorial kicker */}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.12]">
            Engineering Permanence.{" "}
            <span className="block text-gold-gradient italic font-normal mt-2">
              Mastering the Architecture of Form.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto font-sans leading-relaxed font-light">
            Life Homes &amp; Developers builds sovereign private residences,
            haute couture interior architecture, and landmark restorations for
            patrons who demand absolute civil precision.
          </p>

          {/* Primary Action Suite */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6ca85] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate("gallery")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121417]/80 hover:bg-[#181b20] border border-[#d4af37]/30 text-white font-semibold text-xs uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Explore Portfolio</span>
            </button>
          </div>

          {/* Stats Ribbon */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                $420M+
              </p>
              <p className="text-xs text-[#a0a5ad] uppercase tracking-wider mt-0.5">
                Delivered Value
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#d4af37]">
                ±1.5mm
              </p>
              <p className="text-xs text-[#a0a5ad] uppercase tracking-wider mt-0.5">
                Swiss Laser Tolerance
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                94 Estates
              </p>
              <p className="text-xs text-[#a0a5ad] uppercase tracking-wider mt-0.5">
                Built &amp; Restored
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#d4af37]">
                100%
              </p>
              <p className="text-xs text-[#a0a5ad] uppercase tracking-wider mt-0.5">
                Structural Warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Manifesto: The Art of Civil Longevity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Our Architectural Philosophy
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Where Civil Rigor Meets Uncompromising Aesthetics.
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                Most luxury builders focus solely on what is visible: the marble
                surface, the brass tapware, the paint sheen. At Life Homes &amp;
                Developers, our legacy begins in the unseen geology: 70 feet
                beneath the surface where post-tensioned bedrock micro-piles
                absorb seismic resonance.
              </p>
              <p className="text-stone-400 text-sm leading-relaxed">
                By synthesizing commercial high-rise civil engineering with the
                artisanal intimacy of private luxury residential architecture,
                we ensure your family compound stands unyielding for the next
                two centuries.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] hover:text-[#f7ecd0] transition-colors"
                >
                  <span>Learn About Our Heritage &amp; Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-[#0b0c0e] border border-[#282e38] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  Geotechnical Foundations
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Deep sonic soil boring, laser-anchored micro-piles, and
                  crystalline self-healing waterproof tanking resisting all
                  hydrostatic pressure.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0b0c0e] border border-[#282e38] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  Bespoke Structural Spans
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Post-tensioned cantilevered terraces reaching up to 40 feet
                  without column supports, framing unbroken ocean and skyline
                  vistas.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0b0c0e] border border-[#282e38] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  Acoustic Isolation (STC 65+)
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Decoupled spring-loaded floating floor slabs and asymmetric
                  triple glazing silencing the exterior world into absolute
                  sanctuary.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0b0c0e] border border-[#282e38] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  Direct Italian Quarry Curation
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Sourcing raw blocks directly at Carrara and Verona quarries,
                  water-jet slicing to 0.2mm tolerance for seamless
                  book-matching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Triad of Master Disciplines */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Master Disciplines
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Conceived with Vision. Executed with Precision.
            </h2>
            <p className="text-stone-400 text-sm">
              Explore our three core avenues of civil construction, interior
              architecture, and legacy estate rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Discipline 1: Residential Construction */}
            <div className="group rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Residential Construction by Life Homes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37]">
                    Discipline 01
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                    Residential Construction
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Ground-up bespoke mansions, cantilevered cliffside estates,
                    and private multi-acre residential compounds engineered with
                    zero structural tolerance.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-stone-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Seismic foundation micro-piling
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Floor-to-ceiling motorized curtain walls
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Guaranteed maximum price framework
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => onNavigate("services-residential")}
                  className="pt-4 border-t border-[#282e38] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-white transition-colors"
                >
                  <span>Explore Residential Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Discipline 2: Interior Design */}
            <div className="group rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior Design by Life Homes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                  <Paintbrush className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37]">
                    Discipline 02
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                    Interior Design &amp; Haute Architecture
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Custom Italian joinery, book-matched Calacatta slabs,
                    concealed architectural lighting, and bespoke furnishings
                    tailored for private patrons.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-stone-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Direct quarry slab selection in Carrara
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Bespoke French smoked oak millwork
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Circadian museum-grade CRI 98+ lighting
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => onNavigate("services-interior")}
                  className="pt-4 border-t border-[#282e38] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-white transition-colors"
                >
                  <span>Explore Interior Haute</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Discipline 3: Renovation & Restoration */}
            <div className="group rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                  alt="Renovation and Restoration by Life Homes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                  <Hammer className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37]">
                    Discipline 03
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                    Renovation &amp; Restoration
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Surgically modernizing historic landmark manors and
                    high-rise penthouses with concealed steel moment frames and
                    geothermal energy.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-stone-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      0.5mm LiDAR 3D laser scan forensics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Concealed internal structural exoskeletons
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      Subterranean wine &amp; wellness expansions
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => onNavigate("services-renovation")}
                  className="pt-4 border-t border-[#282e38] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-white transition-colors"
                >
                  <span>Explore Renovation Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Architectural Portfolio Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Signature Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
                Monuments of Living Art
              </h2>
            </div>

            {/* Interactive Filter Tabs (Buttons with click handlers per frontend constitution) */}
            <div className="flex items-center gap-1.5 p-1 bg-[#121417] rounded-xl border border-[#282e38]">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "all"
                    ? "bg-[#d4af37] text-[#0b0c0e] font-semibold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "residential"
                    ? "bg-[#d4af37] text-[#0b0c0e] font-semibold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveTab("interior")}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "interior"
                    ? "bg-[#d4af37] text-[#0b0c0e] font-semibold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Interiors
              </button>
              <button
                onClick={() => setActiveTab("renovation")}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "renovation"
                    ? "bg-[#d4af37] text-[#0b0c0e] font-semibold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Renovations
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer rounded-2xl bg-[#0b0c0e] border border-[#282e38] hover:border-[#d4af37]/60 overflow-hidden transition-all duration-300 shadow-xl flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Category text kicker (unboxed per constitution) */}
                  <div className="absolute top-4 left-4 text-xs font-medium text-stone-200 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    <span>{proj.categoryLabel}</span>
                    <span className="mx-1.5 text-[#d4af37]">·</span>
                    <span>{proj.location}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/70 backdrop-blur-md text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      {proj.subtitle}
                    </p>
                    <p className="text-xs text-stone-300 mt-3 line-clamp-2 leading-relaxed font-light">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Clean unboxed metadata per constitution */}
                  <div className="mt-6 pt-4 border-t border-[#1e222a] flex items-center justify-between text-xs text-stone-400 font-mono">
                    <span>{proj.squareFeet.toLocaleString()} sq ft</span>
                    <span>·</span>
                    <span>Completed {proj.yearCompleted}</span>
                    <span>·</span>
                    <span className="text-[#d4af37] font-sans font-semibold group-hover:underline">
                      View Dossier &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate("gallery")}
              className="px-8 py-3.5 rounded-xl bg-[#121417] hover:bg-[#1a1e24] border border-[#d4af37]/30 text-white text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>View Full Architectural Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Before & After Transformation Spotlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Transformation Case Study
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                The Stonefield Manor Rejuvenation
              </h2>
              <p className="text-xs text-[#a0a5ad] font-mono">
                Greenwich, CT · 21,500 sq ft · 1928 Landmark Revived
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                Notice the dramatic contrast: from a failing, crumbling 1928
                exterior into a structurally fortified estate with geothermal
                heating, subterranean Roman thermal baths, and zero change to
                the protected historical footprint.
              </p>
              <div className="space-y-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Concealed internal steel exoskeleton carrying 100% of roof
                    load
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Subterranean underpinning adding 3,500 sq ft spa &amp; wine
                    cellar
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    72% reduction in estate thermal energy loss via vacuum
                    glazing
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("services-renovation")}
                  className="px-6 py-3 rounded-lg bg-[#181b20] hover:bg-[#222730] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2"
                >
                  <span>Read Renovation Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop"
                  beforeLabel="Historical 1928 State"
                  afterLabel="Life Homes Modern Revival"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Cost & Timeline Estimator Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-gradient-to-b from-[#121417] to-[#070809]">
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#d4af37]/35 p-8 sm:p-12 bg-[#0b0c0e] relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Transparent Civil Modeling
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Calculate Estimated Build Investment &amp; Schedule
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                Explore real-time parametric estimation for your private
                residence, penthouse renovation, or bespoke interior
                architecture based on square footage, finish tier, and
                subterranean amenities.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={onOpenEstimator}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Cost Estimator</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials & Endorsements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Discreet Patron Endorsements
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Trusted by Private Estate Owners
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              All client names and estate identities published under explicit
              authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-[#0b0c0e] border border-[#282e38] flex flex-col justify-between space-y-6 shadow-xl"
              >
                <p className="text-stone-300 text-sm leading-relaxed italic font-serif">
                  “{t.quote}”
                </p>
                <div className="pt-4 border-t border-[#1e222a] flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/40"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.clientName}
                    </h4>
                    <p className="text-[11px] text-[#d4af37]">
                      {t.estateName} · {t.location}
                    </p>
                    <p className="text-[10px] text-stone-500">
                      {t.projectType}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final VIP Consultation Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#0b0c0e] relative text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Begin Your Legacy
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Ready to Build Your Architectural Monument?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            Our principal civil engineers and master design architects are
            available for private site evaluations in New York, Los Angeles,
            Greenwich, and London.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
            >
              Book Confidential Consultation
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#181b20] hover:bg-[#222730] border border-[#282e38] text-white font-semibold text-xs uppercase tracking-widest transition-all"
            >
              Review All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
