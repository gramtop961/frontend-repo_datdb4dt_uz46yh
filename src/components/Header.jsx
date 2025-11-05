import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`w-full top-0 z-40 sticky transition-shadow ${scrolled ? 'shadow-md bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70' : 'bg-white'}`}>
      {/* Top bar */}
      <div className="hidden sm:flex items-center justify-center gap-6 text-sm text-slate-600 border-b border-slate-200 px-4 py-2">
        <a href="tel:+611300123456" className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
          <Phone size={16} /> +61 1300 123 456
        </a>
        <a href="mailto:hello@pkinvest.com.au" className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
          <Mail size={16} /> hello@pkinvest.com.au
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/20" />
          <div className="leading-tight">
            <div className="text-xl font-semibold tracking-tight text-slate-900">PK INVEST</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500">Finance & Mortgage</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#testimonials', label: 'Testimonials' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
          >
            Speak to an Expert
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
          <div className="flex flex-col gap-3">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700"
            >
              Speak to an Expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
