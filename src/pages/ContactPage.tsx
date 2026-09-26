import { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, ArrowRight, Clock, Calendar, Sparkles, Upload, FileText, Check } from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefillData?: {
    serviceType?: string;
    sqFt?: number;
    finishLevel?: string;
    estimatedCost?: string;
    estimatedMonths?: string;
    amenities?: string[];
  } | null;
}

export function ContactPage({ onNavigate, prefillData }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: prefillData?.serviceType || 'Residential Construction',
    siteStatus: 'Purchased Land Ready for Groundbreaking',
    budgetTier: prefillData?.estimatedCost ? prefillData.estimatedCost : '$3M – $7M',
    sqFt: prefillData?.sqFt ? String(prefillData.sqFt) : '8500',
    preferredContact: 'Confidential Phone Call',
    timeline: prefillData?.estimatedMonths || 'Within 6–12 Months',
    message: prefillData?.finishLevel ? `Inquiring with estimate: ${prefillData.finishLevel}. Amenities: ${prefillData.amenities?.join(', ') || 'Standard'}` : '',
    blueprintUploaded: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `LH-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(ref);
    setSubmitted(true);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const studios = [
    {
      city: 'New York Flagship Atelier',
      address: '740 Fifth Avenue, 18th Floor',
      district: 'Manhattan, NY 10019',
      phone: '+1 (212) 555-0198',
      hours: 'Mon – Sat: 08:30 – 19:00 EST',
      notes: 'Private rooftop boardroom for architectural model presentations.'
    },
    {
      city: 'Beverly Hills Engineering Studio',
      address: '9600 Wilshire Boulevard, Suite 400',
      district: 'Beverly Hills, CA 90212',
      phone: '+1 (310) 555-0144',
      hours: 'Mon – Fri: 08:00 – 18:00 PST',
      notes: 'Dedicated geotechnical and seismic visualization suite.'
    },
    {
      city: 'London Mayfair Office',
      address: '30 Berkeley Square',
      district: 'Mayfair, London W1J 6EX',
      phone: '+44 20 7946 0912',
      hours: 'Mon – Fri: 09:00 – 18:00 GMT',
      notes: 'European stone curation and heritage conservation liaison.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24 pb-20">
      {/* 1. Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            <span>Private Client Concierge</span>
            <span aria-hidden="true">·</span>
            <span>Strict NDA Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Schedule a Private Consultation
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Engage our principal civil engineers and design directors for a confidential appraisal of your estate site, architectural drawings, or historic property.
          </p>
        </div>
      </section>

      {/* 2. Main Consultation Form & Direct Concierge Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: The Consultation Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-[#121417] border border-[#d4af37]/60 shadow-2xl space-y-6 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    VIP Inquiry Confirmed
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Thank You, {formData.name}
                  </h2>
                  <p className="text-sm text-stone-300 max-w-md mx-auto">
                    Your confidential architectural inquiry has been transmitted directly to Julian Sterling, PE and Arthur Sterling, FAIA.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b0c0e] border border-[#282e38] text-left space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-[#1e222a] pb-2">
                    <span className="text-stone-400">Reference Protocol:</span>
                    <span className="text-[#d4af37] font-bold">{referenceCode}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1e222a] pb-2">
                    <span className="text-stone-400">Discipline Requested:</span>
                    <span className="text-white">{formData.serviceType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1e222a] pb-2">
                    <span className="text-stone-400">Project Scale:</span>
                    <span className="text-white">{Number(formData.sqFt).toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1e222a] pb-2">
                    <span className="text-stone-400">Estimated Investment:</span>
                    <span className="text-white">{formData.budgetTier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Preferred Protocol:</span>
                    <span className="text-emerald-400">{formData.preferredContact}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#181b20] border border-white/10 text-xs text-stone-400 text-left flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>
                    Our client concierge will initiate contact within 4 business hours to deliver our formal bilateral Mutual Non-Disclosure Agreement (NDA) prior to receiving your plot coordinates or blueprints.
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      serviceType: 'Residential Construction',
                      siteStatus: 'Purchased Land Ready for Groundbreaking',
                      budgetTier: '$3M – $7M',
                      sqFt: '8500',
                      preferredContact: 'Confidential Phone Call',
                      timeline: 'Within 6–12 Months',
                      message: '',
                      blueprintUploaded: false
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#181b20] border border-[#282e38] text-xs text-stone-300 hover:text-white uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl bg-[#121417] border border-[#282e38] shadow-2xl space-y-6"
              >
                <div className="border-b border-[#1e222a] pb-4">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Confidential Project Brief
                  </h2>
                  <p className="text-xs text-stone-400 mt-1">
                    Please provide initial project parameters. All submissions are encrypted and strictly confidential.
                  </p>
                </div>

                {/* 1. Client Identity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lord Harrison Thorne"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Confidential Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. familyoffice@vance.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Private Telephone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (310) 555-0199"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Preferred Contact Protocol
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={e => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    >
                      <option>Confidential Phone Call</option>
                      <option>Discrete Encrypted Email</option>
                      <option>In-Person Studio Visit (New York / 740 Fifth Ave)</option>
                      <option>In-Person Studio Visit (Beverly Hills / Wilshire)</option>
                      <option>Direct WhatsApp Concierge</option>
                    </select>
                  </div>
                </div>

                {/* 2. Discipline & Site Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Civil Discipline
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    >
                      <option>Residential Construction (Ground-Up Estate)</option>
                      <option>Interior Design &amp; Haute Architecture</option>
                      <option>Estate Renovation &amp; Restoration</option>
                      <option>Multi-Unit Luxury Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Site &amp; Plot Status
                    </label>
                    <select
                      value={formData.siteStatus}
                      onChange={e => setFormData({ ...formData, siteStatus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    >
                      <option>Purchased Land Ready for Groundbreaking</option>
                      <option>Land Under Contract / Escrow</option>
                      <option>Existing Landmark / Estate to Gut-Renovate</option>
                      <option>Seeking Site Acquisition Consultation</option>
                    </select>
                  </div>
                </div>

                {/* 3. Scale & Investment Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Approximate Built Area (sq ft)
                    </label>
                    <input
                      type="number"
                      min={1000}
                      max={50000}
                      step={500}
                      value={formData.sqFt}
                      onChange={e => setFormData({ ...formData, sqFt: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                      Anticipated Investment Budget
                    </label>
                    <select
                      value={formData.budgetTier}
                      onChange={e => setFormData({ ...formData, budgetTier: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                    >
                      <option>$1.5M – $3.0M</option>
                      <option>$3.0M – $7.0M</option>
                      <option>$7.0M – $15.0M</option>
                      <option>$15.0M – $35.0M+</option>
                    </select>
                  </div>
                </div>

                {/* 4. Blueprint / CAD simulator */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                    Architectural Plans / CAD Files (Optional)
                  </label>
                  <div
                    onClick={() => setFormData({ ...formData, blueprintUploaded: !formData.blueprintUploaded })}
                    className={`p-4 rounded-xl border border-dashed text-center cursor-pointer transition-colors ${
                      formData.blueprintUploaded
                        ? 'border-emerald-500 bg-emerald-950/20 text-emerald-300'
                        : 'border-[#282e38] bg-[#0b0c0e] hover:border-[#d4af37] text-stone-400'
                    }`}
                  >
                    {formData.blueprintUploaded ? (
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Architectural Site Plan Attached (BIM / PDF model ready)</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <Upload className="w-4 h-4 text-[#d4af37]" />
                        <span>Click to attach site surveys, topography maps, or CAD drafts</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 5. Vision / Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                    Architectural Aspirations &amp; Site Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site topography, desired architectural style, subterranean preferences, or specific timeline constraints..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white focus:outline-none focus:border-[#d4af37] text-xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Transmit Confidential Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-3">
                    Protected by 256-bit encryption. We never share client contact data with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Concierge & Studio Locations */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Concierge Box */}
            <div className="p-8 rounded-3xl bg-[#121417] border border-[#d4af37]/35 space-y-5 shadow-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Direct Principal Line
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Client Concierge &amp; Urgent Inquiries
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                For prospective clients requiring immediate direct communication with our executive civil engineering desk.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="tel:+18005433466"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white hover:border-[#d4af37] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Toll-Free Direct Hotline</span>
                    <span className="font-mono font-semibold">+1 (800) 543-3466</span>
                  </div>
                </a>

                <a
                  href="mailto:concierge@lifehomesdevelopers.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0b0c0e] border border-[#282e38] text-white hover:border-[#d4af37] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Confidential Email</span>
                    <span className="font-mono font-semibold">concierge@lifehomesdevelopers.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Studios Listing */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-white">
                Global Engineering Studios
              </h3>
              <div className="space-y-4">
                {studios.map((st, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#0b0c0e] border border-[#282e38] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-serif font-bold text-white">{st.city}</h4>
                      <span className="text-[10px] text-[#d4af37] font-mono">{st.hours}</span>
                    </div>
                    <p className="text-xs text-stone-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                      <span>{st.address}, {st.district}</span>
                    </p>
                    <p className="text-[11px] text-stone-500 italic pt-1">
                      {st.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
