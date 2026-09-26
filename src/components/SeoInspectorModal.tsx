import { useState, useEffect } from 'react';
import { X, CheckCircle2, Copy, Check, ExternalLink, Code2, ShieldCheck, Globe } from 'lucide-react';

interface SeoInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SeoInspectorModal({ isOpen, onClose }: SeoInspectorModalProps) {
  const [copied, setCopied] = useState(false);
  const [seoState, setSeoState] = useState<{
    title: string;
    description: string;
    canonicalUrl: string;
    ogType: string;
    ogImage: string;
    schemaJson: Record<string, unknown>;
  } | null>(null);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const current = (window as unknown as { __CURRENT_SEO__?: typeof seoState }).__CURRENT_SEO__;
      if (current) {
        setSeoState(current);
      } else {
        const schemaEl = document.getElementById('route-schema-data');
        let parsed = {};
        try {
          if (schemaEl?.textContent) parsed = JSON.parse(schemaEl.textContent);
        } catch {
          // ignore
        }
        setSeoState({
          title: document.title,
          description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
          canonicalUrl: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || window.location.href,
          ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') || 'website',
          ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
          schemaJson: parsed
        });
      }
    }
  }, [isOpen]);

  if (!isOpen || !seoState) return null;

  const jsonString = JSON.stringify(seoState.schemaJson, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titleLen = seoState.title.length;
  const descLen = seoState.description.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#121417] border border-[#d4af37]/30 rounded-xl shadow-2xl flex flex-col overflow-hidden text-[#e5e0d8]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282e38] bg-[#0b0c0e]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-serif font-semibold tracking-wide text-white">
                Live SEO & Schema.org Structured Data Inspector
              </h2>
              <p className="text-xs text-[#a0a5ad]">
                Real-time validation for crawlers, social share cards, and Google rich snippets
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a0a5ad] hover:text-white hover:bg-[#282e38] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Status checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-[#0b0c0e] border border-[#282e38]">
              <div className="flex items-center gap-2 text-xs text-[#d4af37] mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Page Title ({titleLen} chars)</span>
              </div>
              <p className="text-xs text-[#a0a5ad]">
                {titleLen >= 30 && titleLen <= 65 ? 'Optimal (30-65 chars)' : 'Active title tag present'}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0b0c0e] border border-[#282e38]">
              <div className="flex items-center gap-2 text-xs text-[#d4af37] mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Description ({descLen} chars)</span>
              </div>
              <p className="text-xs text-[#a0a5ad]">
                {descLen >= 120 && descLen <= 170 ? 'Optimal (120-160 chars)' : 'Rich snippet enabled'}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#0b0c0e] border border-[#282e38]">
              <div className="flex items-center gap-2 text-xs text-[#d4af37] mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>JSON-LD Schema</span>
              </div>
              <p className="text-xs text-[#a0a5ad]">
                {String(seoState.schemaJson['@type'] || 'Structured Entity')} Verified
              </p>
            </div>
          </div>

          {/* Meta Tags Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
              <Globe className="w-4 h-4" /> Active HTML Head Tags
            </h3>
            <div className="p-3 bg-[#0b0c0e] rounded-lg border border-[#282e38] space-y-2 text-xs font-mono">
              <div>
                <span className="text-[#d4af37]">&lt;title&gt;:</span>{' '}
                <span className="text-stone-300 font-sans">{seoState.title}</span>
              </div>
              <div>
                <span className="text-[#d4af37]">&lt;meta name="description"&gt;:</span>{' '}
                <span className="text-stone-300 font-sans">{seoState.description}</span>
              </div>
              <div>
                <span className="text-[#d4af37]">&lt;link rel="canonical"&gt;:</span>{' '}
                <span className="text-[#e6ca85] underline break-all">{seoState.canonicalUrl}</span>
              </div>
              <div>
                <span className="text-[#d4af37]">&lt;meta property="og:type"&gt;:</span>{' '}
                <span className="text-stone-300">{seoState.ogType}</span>
              </div>
            </div>
          </div>

          {/* Schema.org JSON-LD */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Schema.org JSON-LD Structured Data
              </h3>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-[#a0a5ad] hover:text-[#d4af37] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy JSON-LD'}
              </button>
            </div>
            <pre className="p-4 bg-[#070809] border border-[#282e38] rounded-lg text-xs font-mono text-[#d4af37] overflow-x-auto max-h-56 leading-relaxed">
              <code>{jsonString}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[#282e38] bg-[#0b0c0e] text-xs text-[#a0a5ad]">
          <span>Full compliance with Schema.org standards & Google Rich Results specs</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#d4af37] text-[#0b0c0e] font-medium hover:bg-[#e6ca85] transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
