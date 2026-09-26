import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";
import { PageId } from "../types";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
  onOpenSeoInspector: () => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  onOpenEstimator,
  onOpenSeoInspector,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isServicesActive =
    currentPage === "services" ||
    currentPage === "services-residential" ||
    currentPage === "services-interior" ||
    currentPage === "services-renovation";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#282e38] shadow-2xl py-3.5"
          : "bg-gradient-to-b from-[#0b0c0e]/90 via-[#0b0c0e]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1c1f26] to-[#0b0c0e] border border-[#d4af37]/40 flex items-center justify-center shadow-lg group-hover:border-[#d4af37] transition-all">
            <span className="font-serif text-[#d4af37] font-bold text-lg tracking-widest">
              LH
            </span>
          </div>
          <div>
            <span className="block font-serif text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors uppercase">
              Life Homes &amp; Developers
            </span>
            <span className="block text-[10px] tracking-[0.22em] text-[#c5a059] uppercase font-medium">
              Civil Construction &amp; Architecture
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium">
          <button
            onClick={() => handleNav("home")}
            className={`transition-colors py-1 relative ${
              currentPage === "home"
                ? "text-[#d4af37] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNav("about")}
            className={`transition-colors py-1 relative ${
              currentPage === "about"
                ? "text-[#d4af37] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav("services")}
              className={`flex items-center gap-1.5 transition-colors py-1 relative ${
                isServicesActive
                  ? "text-[#d4af37] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 pt-2 z-50">
                <div className="bg-[#121417] border border-[#d4af37]/30 rounded-xl shadow-2xl p-2 space-y-1">
                  <button
                    onClick={() => handleNav("services")}
                    className="w-full text-left px-3.5 py-2.5 rounded-lg hover:bg-[#1f242d] transition-colors"
                  >
                    <p className="text-xs font-semibold text-white">
                      All Disciplines Overview
                    </p>
                    <p className="text-[11px] text-[#a0a5ad] normal-case mt-0.5">
                      Comprehensive civil solutions
                    </p>
                  </button>
                  <div className="h-px bg-[#282e38] my-1" />
                  <button
                    onClick={() => handleNav("services-residential")}
                    className="w-full text-left px-3.5 py-2.5 rounded-lg hover:bg-[#1f242d] transition-colors group"
                  >
                    <p className="text-xs font-semibold text-white group-hover:text-[#d4af37]">
                      01. Residential Construction
                    </p>
                    <p className="text-[11px] text-[#a0a5ad] normal-case mt-0.5">
                      Bespoke estates &amp; structural framing
                    </p>
                  </button>
                  <button
                    onClick={() => handleNav("services-interior")}
                    className="w-full text-left px-3.5 py-2.5 rounded-lg hover:bg-[#1f242d] transition-colors group"
                  >
                    <p className="text-xs font-semibold text-white group-hover:text-[#d4af37]">
                      02. Interior Design &amp; Haute Architecture
                    </p>
                    <p className="text-[11px] text-[#a0a5ad] normal-case mt-0.5">
                      Italian marble &amp; bespoke millwork
                    </p>
                  </button>
                  <button
                    onClick={() => handleNav("services-renovation")}
                    className="w-full text-left px-3.5 py-2.5 rounded-lg hover:bg-[#1f242d] transition-colors group"
                  >
                    <p className="text-xs font-semibold text-white group-hover:text-[#d4af37]">
                      03. Estate Renovation &amp; Restoration
                    </p>
                    <p className="text-[11px] text-[#a0a5ad] normal-case mt-0.5">
                      Historic preservation &amp; seismic retrofit
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav("gallery")}
            className={`transition-colors py-1 relative ${
              currentPage === "gallery"
                ? "text-[#d4af37] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => handleNav("blog")}
            className={`transition-colors py-1 relative ${
              currentPage === "blog" || currentPage === "blog-detail"
                ? "text-[#d4af37] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            Journal
          </button>

          <button
            onClick={() => handleNav("contact")}
            className={`transition-colors py-1 relative ${
              currentPage === "contact"
                ? "text-[#d4af37] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Private Consultation CTA */}
          <button
            onClick={() => handleNav("contact")}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#f7ecd0] hover:to-[#d4af37] text-[#0b0c0e] font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
          >
            Private Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSeoInspector}
            className="p-2 rounded-lg bg-[#181b20] border border-[#282e38] text-stone-400 hover:text-[#d4af37]"
            title="SEO Inspector"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0c0e] border-b border-[#282e38] px-5 py-6 space-y-4 shadow-2xl">
          <div className="space-y-1">
            <button
              onClick={() => handleNav("home")}
              className={`block w-full text-left py-2.5 text-sm font-medium tracking-wider uppercase ${
                currentPage === "home" ? "text-[#d4af37]" : "text-stone-300"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav("about")}
              className={`block w-full text-left py-2.5 text-sm font-medium tracking-wider uppercase ${
                currentPage === "about" ? "text-[#d4af37]" : "text-stone-300"
              }`}
            >
              About Us
            </button>

            <div className="py-2 border-y border-[#282e38]/50 my-1 space-y-1">
              <button
                onClick={() => handleNav("services")}
                className={`block w-full text-left py-1.5 text-xs uppercase tracking-widest font-semibold ${
                  currentPage === "services" ? "text-[#d4af37]" : "text-white"
                }`}
              >
                Services Overview
              </button>
              <button
                onClick={() => handleNav("services-residential")}
                className="block w-full text-left pl-3 py-1.5 text-xs text-stone-400 hover:text-[#d4af37]"
              >
                — Residential Construction
              </button>
              <button
                onClick={() => handleNav("services-interior")}
                className="block w-full text-left pl-3 py-1.5 text-xs text-stone-400 hover:text-[#d4af37]"
              >
                — Interior Design
              </button>
              <button
                onClick={() => handleNav("services-renovation")}
                className="block w-full text-left pl-3 py-1.5 text-xs text-stone-400 hover:text-[#d4af37]"
              >
                — Renovation &amp; Restoration
              </button>
            </div>

            <button
              onClick={() => handleNav("gallery")}
              className={`block w-full text-left py-2.5 text-sm font-medium tracking-wider uppercase ${
                currentPage === "gallery" ? "text-[#d4af37]" : "text-stone-300"
              }`}
            >
              Gallery &amp; Portfolio
            </button>
            <button
              onClick={() => handleNav("blog")}
              className={`block w-full text-left py-2.5 text-sm font-medium tracking-wider uppercase ${
                currentPage === "blog" || currentPage === "blog-detail"
                  ? "text-[#d4af37]"
                  : "text-stone-300"
              }`}
            >
              Journal
            </button>
            <button
              onClick={() => handleNav("contact")}
              className={`block w-full text-left py-2.5 text-sm font-medium tracking-wider uppercase ${
                currentPage === "contact" ? "text-[#d4af37]" : "text-stone-300"
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 rounded-lg bg-[#181b20] border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-wider font-semibold"
            >
              Launch Cost Estimator
            </button>
            <button
              onClick={() => handleNav("contact")}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0b0c0e] text-xs uppercase tracking-wider font-bold shadow-lg"
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
