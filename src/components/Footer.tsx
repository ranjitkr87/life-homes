import { useState } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight, Check, Award } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenSeoInspector: () => void;
}

export function Footer({ onNavigate, onOpenSeoInspector }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070809] border-t border-[#1e222a] text-[#a0a5ad] text-xs">
      {/* Top Banner / VIP Newsletter */}
      <div className="border-b border-[#171a1f] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Sovereign Gazette
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Private Architectural &amp; Civil Insights
            </h3>
            <p className="text-stone-400 mt-1 max-w-lg">
              Curated quarterly analysis on bespoke estate engineering, rare stone sourcing, and private market appreciation.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2.5">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter private email address"
                className="w-full sm:w-80 px-4 py-3 rounded-lg bg-[#121417] border border-[#282e38] text-white placeholder-stone-500 focus:outline-none focus:border-[#d4af37] text-xs transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#d4af37] text-[#0b0c0e] font-bold text-xs uppercase tracking-wider hover:bg-[#e6ca85] transition-all flex items-center justify-center gap-1.5 shadow-md flex-shrink-0"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 text-[#0b0c0e]" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Request Gazette</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Dossier */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#121417] border border-[#d4af37]/40 flex items-center justify-center shadow-lg">
                <span className="font-serif text-[#d4af37] font-bold text-base">LH</span>
              </div>
              <div>
                <span className="block font-serif text-base font-bold tracking-wider text-white uppercase">
                  Life Homes &amp; Developers
                </span>
                <span className="block text-[10px] tracking-widest text-[#d4af37] uppercase">
                  Civil Construction &amp; Architecture
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Conceiving, engineering, and delivering monumental residential estates, bespoke interior architecture, and landmark restorations for discerning families and global patrons.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-stone-300">
              <span className="px-2.5 py-1 rounded bg-[#121417] border border-[#282e38] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" /> LEED Platinum Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-[#121417] border border-[#282e38] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" /> ISO 9001 Structural Safety
              </span>
            </div>
          </div>

          {/* Core Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Civil Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('services-residential')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Residential Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services-interior')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Interior Design &amp; Haute Joinery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services-renovation')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Estate Renovation &amp; Restoration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  All Engineering Disciplines
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Architectural Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#d4af37] transition-colors">
                  About Our Heritage
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#d4af37] transition-colors">
                  Curated Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#d4af37] transition-colors">
                  Architectural Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#d4af37] transition-colors">
                  Private Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSeoInspector}
                  className="text-[#d4af37] hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SEO &amp; Schema Inspector</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Global Studios */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Private Studios
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div>
                <p className="font-semibold text-stone-200">New York Flagship</p>
                <p>740 Fifth Avenue, 18th Floor</p>
                <p>Manhattan, NY 10019</p>
              </div>
              <div>
                <p className="font-semibold text-stone-200">Beverly Hills Atelier</p>
                <p>9600 Wilshire Blvd, Suite 400</p>
                <p>Beverly Hills, CA 90212</p>
              </div>
              <div className="pt-1 text-[#d4af37]">
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> +1 (800) 543-3466
                </p>
                <p className="flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5" /> concierge@lifehomesdevelopers.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Certifications Bar */}
        <div className="mt-14 pt-8 border-t border-[#171a1f] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Life Homes &amp; Developers. All rights reserved. Registered General Contractor &amp; Civil Engineers.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenSeoInspector} className="hover:text-[#d4af37] transition-colors">
              Structured Data Compliance
            </button>
            <span>·</span>
            <span className="text-stone-500">Confidentiality Protected by NDA</span>
            <span>·</span>
            <span className="text-[#d4af37]">Swiss Tolerance Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
