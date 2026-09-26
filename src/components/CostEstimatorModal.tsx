import { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToConsultation: (data: {
    serviceType: string;
    sqFt: number;
    finishLevel: string;
    estimatedCost: string;
    estimatedMonths: string;
    amenities: string[];
  }) => void;
}

export function CostEstimatorModal({ isOpen, onClose, onProceedToConsultation }: CostEstimatorModalProps) {
  const [serviceType, setServiceType] = useState<'residential' | 'interior' | 'renovation'>('residential');
  const [sqFt, setSqFt] = useState<number>(8500);
  const [finishLevel, setFinishLevel] = useState<'bespoke' | 'collector' | 'monolithic'>('collector');
  const [amenities, setAmenities] = useState<string[]>(['geothermal', 'acoustic']);

  if (!isOpen) return null;

  // Pricing math tailored for ultra-high-end bespoke construction
  const baseRatePerSqFt = {
    residential: { bespoke: 750, collector: 980, monolithic: 1450 },
    interior: { bespoke: 450, collector: 650, monolithic: 950 },
    renovation: { bespoke: 600, collector: 850, monolithic: 1250 }
  };

  const amenityCosts: Record<string, { label: string; cost: number; months: number }> = {
    carGallery: { label: 'Subterranean Car Gallery (6-Car)', cost: 480000, months: 3 },
    wellnessHammam: { label: 'Private Thermal Hammam & Spa', cost: 350000, months: 2 },
    cantileverPool: { label: 'Cantilevered Glass-Bottom Infinity Pool', cost: 420000, months: 3 },
    geothermal: { label: 'Geothermal Closed-Loop Borehole Array', cost: 220000, months: 1 },
    acoustic: { label: 'Acoustic Decoupled Recording & Cinema Suite', cost: 190000, months: 2 }
  };

  const baseRate = baseRatePerSqFt[serviceType][finishLevel];
  const structureBase = sqFt * baseRate;
  const amenitiesTotal = amenities.reduce((acc, curr) => acc + (amenityCosts[curr]?.cost || 0), 0);
  const totalCost = structureBase + amenitiesTotal;

  // Estimated construction duration
  let baseMonths = serviceType === 'residential' ? 16 : serviceType === 'renovation' ? 14 : 10;
  if (sqFt > 12000) baseMonths += 4;
  else if (sqFt > 7000) baseMonths += 2;
  const amenityMonths = Math.max(0, ...amenities.map(a => amenityCosts[a]?.months || 0));
  const totalMonths = baseMonths + Math.min(4, amenityMonths);

  const toggleAmenity = (id: string) => {
    setAmenities(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const formattedCostLow = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(totalCost * 0.92);

  const formattedCostHigh = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(totalCost * 1.08);

  const handleBook = () => {
    onProceedToConsultation({
      serviceType:
        serviceType === 'residential'
          ? 'Residential Construction'
          : serviceType === 'interior'
          ? 'Interior Design & Haute Architecture'
          : 'Estate Renovation & Restoration',
      sqFt,
      finishLevel:
        finishLevel === 'bespoke'
          ? 'Sovereign Bespoke'
          : finishLevel === 'collector'
          ? 'Collector Grade (Italian Marble & Custom Millwork)'
          : 'Monolithic Architectural Landmark (Swiss Tolerances)',
      estimatedCost: `${formattedCostLow} – ${formattedCostHigh}`,
      estimatedMonths: `${totalMonths} – ${totalMonths + 4} Months`,
      amenities: amenities.map(a => amenityCosts[a]?.label)
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#121417] border border-[#d4af37]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#e5e0d8]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282e38] bg-[#0b0c0e]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#d4af37]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-semibold text-white tracking-wide">
                Architectural Investment & Timeline Appraisal
              </h2>
              <p className="text-xs text-[#a0a5ad]">
                Confidential parametric modeling based on our 2025–2026 civil delivery benchmark
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#a0a5ad] hover:text-white hover:bg-[#282e38] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Step 1: Discipline */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
              01. Civil & Architectural Discipline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'residential', label: 'Ground-Up Residential Estate', sub: 'Foundations to turnkey estate' },
                { id: 'interior', label: 'Haute Interior Architecture', sub: 'Custom millwork & rare stone' },
                { id: 'renovation', label: 'Estate Renovation & Restoration', sub: 'Structural steel & seismic retrofit' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id as typeof serviceType)}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    serviceType === item.id
                      ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-[#0b0c0e] border-[#282e38] text-stone-300 hover:border-stone-600'
                  }`}
                >
                  <p className="font-medium text-sm text-white">{item.label}</p>
                  <p className="text-xs text-[#a0a5ad] mt-1">{item.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scale */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                02. Enclosed Built Area: <span className="text-white font-mono text-sm">{sqFt.toLocaleString()} sq ft</span>
              </label>
              <span className="text-xs text-[#a0a5ad]">
                {sqFt >= 15000 ? 'Palatial Compound' : sqFt >= 8000 ? 'Signature Estate' : 'Grand Residence'}
              </span>
            </div>
            <input
              type="range"
              min={3000}
              max={25000}
              step={500}
              value={sqFt}
              onChange={e => setSqFt(Number(e.target.value))}
              className="w-full accent-[#d4af37] bg-[#282e38] h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#a0a5ad] mt-1">
              <span>3,000 sq ft</span>
              <span>10,000 sq ft</span>
              <span>18,000 sq ft</span>
              <span>25,000+ sq ft</span>
            </div>
          </div>

          {/* Step 3: Finish & Engineering Tier */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
              03. Architectural Specification & Finishes
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'bespoke',
                  name: 'Sovereign Bespoke',
                  desc: 'Hand-selected European wood, Reynaers glazing, high-efficiency geothermal systems.'
                },
                {
                  id: 'collector',
                  name: 'Collector Grade',
                  desc: 'Book-matched Italian Calacatta, custom acoustic decoupling (STC 65), museum illumination.'
                },
                {
                  id: 'monolithic',
                  name: 'Museum Monolithic',
                  desc: 'Swiss architectural fair-faced concrete, titanium-zinc panels, sub-millimeter tolerances.'
                }
              ].map(tier => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setFinishLevel(tier.id as typeof finishLevel)}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    finishLevel === tier.id
                      ? 'bg-[#d4af37]/15 border-[#d4af37] text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-[#0b0c0e] border-[#282e38] text-stone-300 hover:border-stone-600'
                  }`}
                >
                  <p className="font-medium text-sm text-white flex items-center justify-between">
                    {tier.name}
                    {finishLevel === tier.id && <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />}
                  </p>
                  <p className="text-xs text-[#a0a5ad] mt-1.5 leading-relaxed">{tier.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Specialty Subterranean & Civil Features */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
              04. Subterranean & Specialty Civil Infrastructure (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(amenityCosts).map(([key, val]) => {
                const active = amenities.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAmenity(key)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs transition-colors ${
                      active
                        ? 'bg-[#181b20] border-[#d4af37] text-white'
                        : 'bg-[#0b0c0e] border-[#282e38] text-[#a0a5ad] hover:border-stone-600'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded border flex items-center justify-center ${active ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'border-stone-600'}`}>
                        {active && <Check className="w-3 h-3 stroke-[3]" />}
                      </span>
                      {val.label}
                    </span>
                    <span className="font-mono text-stone-400">
                      +${(val.cost / 1000).toFixed(0)}k
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Output Card */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#181b20] to-[#0b0c0e] border border-[#d4af37]/50 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Estimated Civil Investment Range
                </p>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {formattedCostLow} – {formattedCostHigh}
                </div>
                <p className="text-xs text-[#a0a5ad] mt-1 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Includes full geotechnical, structural engineering & turnkey permits
                </p>
              </div>

              <div className="flex flex-col md:items-end justify-center">
                <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Projected Execution Timeline
                </p>
                <div className="text-xl sm:text-2xl font-serif font-semibold text-white mt-1">
                  {totalMonths} – {totalMonths + 4} Months
                </div>
                <p className="text-xs text-[#a0a5ad] mt-1">Critical-path scheduling with dedicated project director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-[#282e38] bg-[#0b0c0e]">
          <p className="text-xs text-[#a0a5ad]">
            *Parametric approximation. Formal proposal presented following private site survey.
          </p>
          <button
            onClick={handleBook}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-semibold text-sm hover:from-[#f7ecd0] hover:to-[#d4af37] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Transfer Appraisal to VIP Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
