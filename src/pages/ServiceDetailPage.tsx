import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronDown, ChevronUp, Layers, Compass, Hammer, Building2, Paintbrush } from 'lucide-react';
import { PageId, ServiceDetail } from '../types';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
  onInquireService: (serviceName: string) => void;
}

export function ServiceDetailPage({ service, onNavigate, onOpenEstimator, onInquireService }: ServiceDetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24">
      {/* 1. Dedicated Service Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover brightness-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            <span>Specialized Discipline</span>
            <span aria-hidden="true">·</span>
            <span>Turnkey Civil Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-[#e6ca85] font-serif text-lg sm:text-xl font-normal max-w-2xl mx-auto italic">
            “{service.tagline}”
          </p>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto pt-2 font-light">
            {service.description}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onInquireService(service.title)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
            >
              Inquire Regarding This Discipline
            </button>
            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#121417] border border-[#282e38] text-white font-semibold text-xs uppercase tracking-widest hover:border-[#d4af37] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Estimate Budget &amp; Timeline</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Key Engineering Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] bg-[#070809]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {service.metrics.map((m, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#0b0c0e] border border-[#282e38]">
              <span className="text-xs uppercase tracking-wider text-[#a0a5ad] block mb-1">
                {m.label}
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#d4af37]">
                {m.value}
              </p>
              <p className="text-xs text-stone-400 mt-1 leading-snug">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Step-by-Step Architectural Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0c0e]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Systematic Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              The Execution Lifecycle
            </h2>
            <p className="text-stone-400 text-sm">
              Every phase is controlled through 3D BIM clash-detection, licensed engineering stamps, and daily on-site oversight.
            </p>
          </div>

          <div className="space-y-8">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#121417] border border-[#282e38] flex flex-col md:flex-row gap-8 items-start hover:border-[#d4af37]/40 transition-colors"
              >
                <div className="md:w-48 flex-shrink-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    {step.name}
                  </h3>
                </div>

                <div className="flex-1 space-y-4">
                  <p className="text-sm text-stone-300 leading-relaxed font-light">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Key Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-stone-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications & Material Palette */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Materiality &amp; Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Signature Materials &amp; Standards
            </h2>
            <p className="text-stone-400 text-sm">
              We specify only structural components and surfaces with verifiable geological provenance and certified longevity.
            </p>
          </div>

          {/* Materials Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.signatureMaterials.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0c0e] border border-[#282e38] space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] block">
                    Origin: {mat.origin}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                    {mat.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1e222a] text-[11px] text-[#a0a5ad]">
                  Certified Direct Provenance
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Specifications Breakdown */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-white text-center">
              Comprehensive Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.specifications.map((spec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#121417] border border-[#282e38] space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
                    {spec.category}
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-300">
                    {spec.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#0b0c0e]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Discreet Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Client Questions &amp; Protocols
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#121417] border border-[#282e38] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm font-serif font-bold text-white hover:text-[#d4af37] transition-colors"
                >
                  <span>{item.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-xs text-stone-300 leading-relaxed font-sans border-t border-[#282e38]/50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Consultation Trigger */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1e222a] bg-[#070809] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Engage Our Team for {service.title}
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed font-light">
            Contact our principals directly for a discreet site evaluation, structural review, or bespoke presentation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onInquireService(service.title)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
            >
              Book Private Consultation
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#121417] border border-[#282e38] text-stone-300 text-xs uppercase tracking-widest hover:text-white transition-all"
            >
              View All Disciplines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
