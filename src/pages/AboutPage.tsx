import { Shield, Award, CheckCircle2, ArrowRight, Building, Compass, Users, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { teamMembers, companyMilestones } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

export function AboutPage({ onNavigate, onOpenEstimator }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
            alt="Life Homes & Developers Architectural Studio"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            <span>Our Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Established 2008</span>
            <span aria-hidden="true">·</span>
            <span>New York &amp; Beverly Hills</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Building for Centuries.{' '}
            <span className="block text-gold-gradient italic font-normal mt-1">
              Engineering with Soul.
            </span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Life Homes &amp; Developers was founded on a singular conviction: that bespoke luxury homes deserve the same structural engineering rigor and geotechnical permanence as monumental public architecture.
          </p>
        </div>
      </section>

      {/* 2. Founding Manifesto & Heritage Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070809]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                The Origin Story
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Bridging Commercial Civil Rigor with Haute Residential Art.
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Prior to founding Life Homes &amp; Developers in 2008, principal civil engineer Julian Sterling led structural calculations for high-rise commercial towers and deep marine docks. Upon examining the luxury residential construction industry, he discovered a glaring void: magnificent mansions constructed on fragile, unreinforced foundation slabs with little regard for soil mechanics, long-term seismic behavior, or acoustic comfort.
              </p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Life Homes &amp; Developers was established to eradicate this compromise. By uniting licensed professional structural engineers with visionary master architects and European artisans, we introduced skyscraper-level engineering tolerances (±1.5mm) to private estate development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1e222a]">
                <div>
                  <p className="text-2xl font-serif font-bold text-white">18+ Years</p>
                  <p className="text-xs text-stone-400 mt-0.5">Mastering bespoke civil construction</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[#d4af37]">0 Failures</p>
                  <p className="text-xs text-stone-400 mt-0.5">Zero structural warranty claims</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural precision drafting"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-stone-300">
                  <p className="italic">
                    “Every beam we place, every cubic meter of post-tensioned concrete we pour, is calculated to remain steadfast for over two hundred years.”
                  </p>
                  <p className="mt-2 text-[#d4af37] font-semibold not-italic">
                    — Julian Sterling, PE, SE | Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Leadership: Master Engineers & Architects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              The Master Builders
            </h2>
            <p className="text-stone-400 text-sm">
              Our multidisciplinary team comprises licensed structural engineers, fellows of the American Institute of Architects, and European master artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/50 overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#d4af37]">{member.role}</p>
                    <p className="text-[11px] text-stone-400 font-mono">{member.credentials}</p>
                    <p className="text-xs text-stone-300 pt-2 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#1e222a] mt-4">
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Signature Benchmark
                  </p>
                  <p className="text-xs text-[#e6ca85]">
                    {member.notableAchievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Company Milestones Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Evolution of Mastery
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Key Historical Milestones
            </h2>
          </div>

          <div className="relative border-l border-[#d4af37]/30 ml-4 sm:ml-32 space-y-12">
            {companyMilestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Timeline node */}
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-[#0b0c0e] border-2 border-[#d4af37]" />
                
                {/* Year tag for larger screens */}
                <div className="hidden sm:block absolute -left-32 top-1 text-right w-24 text-base font-serif font-bold text-[#d4af37]">
                  {item.year}
                </div>

                <div className="sm:hidden text-xs font-serif font-bold text-[#d4af37] mb-1">
                  {item.year}
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sustainability, Safety & Quality Assurances */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Quality &amp; Safety Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Certified Civil Assurances
            </h2>
            <p className="text-stone-400 text-sm">
              We adhere to the most stringent international structural building codes and ecological standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#121417] border border-[#282e38] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">LEED Platinum Compliance</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                All Life Homes estates are engineered with geothermal ground-source heat pumps, photovoltaic energy capture, rainwater collection tanks, and ultra-high-efficiency thermal envelopes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#121417] border border-[#282e38] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">ISO 9001 Structural Safety</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Zero-tolerance quality management systems. Every batch of concrete is laboratory-tested for compressive strength (6,000+ PSI) before pouring into foundation slabs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#121417] border border-[#282e38] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Discreet Confidentiality Protocol</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                We safeguard our clients’ privacy with institutional rigor. All construction personnel, subcontractors, and architectural drafts are protected under legally binding non-disclosure agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Meet Our Principals for a Private Evaluation
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed font-light">
            Whether you hold land awaiting groundbreaking or an architectural gem requiring structural revival, we invite you to explore the possibilities.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
            >
              Book Private Consultation
            </button>
            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#121417] border border-[#282e38] text-stone-300 text-xs uppercase tracking-widest hover:text-white transition-all"
            >
              Launch Cost Estimator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
