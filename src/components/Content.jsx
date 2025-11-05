import { Home, RefreshCw, Briefcase, Car, Building2, Wallet } from 'lucide-react';

export default function Content() {
  return (
    <div>
      <About />
      <Services />
      <TestimonialsPreview />
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-700/80 bg-blue-50 rounded-full px-3 py-1">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTitle
            eyebrow="About us"
            title="Friendly experts with rigorous standards"
            subtitle="We’re an Australian brokerage focused on clarity, structure and measurable outcomes. From first-home buyers to seasoned investors and business owners, we craft lending strategies that align with your goals."
          />
          <ul className="mt-8 space-y-3 text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"/> MFAA member. Credit representative under Australian Credit Licence.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"/> Bank and non-bank panel for flexible policy outcomes.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"/> Transparent communication from pre-approval to settlement.</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3 opacity-70">
              <div className="rounded-xl bg-white/60" />
              <div className="rounded-xl bg-white/80" />
              <div className="rounded-xl bg-white/60" />
              <div className="rounded-xl bg-white/80" />
              <div className="rounded-xl bg-white/60" />
              <div className="rounded-xl bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Home,
      title: 'Home Loans',
      desc: 'Right structure for first-home and upgrader journeys.'
    },
    {
      icon: Building2,
      title: 'Investment Loans',
      desc: 'Portfolio-friendly strategies to build wealth.'
    },
    {
      icon: RefreshCw,
      title: 'Refinancing',
      desc: 'Review, repricing and refinancing for better outcomes.'
    },
    {
      icon: Briefcase,
      title: 'Commercial & Business',
      desc: 'Funding for trading, equipment and property debt.'
    },
    {
      icon: Car,
      title: 'Personal & Car Loans',
      desc: 'Fast approvals with transparent repayments.'
    },
    {
      icon: Wallet,
      title: 'Debt Consolidation',
      desc: 'Simplify repayments and reduce interest drag.'
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Services"
          title="Finance, without the noise"
          subtitle="Clear advice, strong lender access and hands-on support so you can move forward with confidence."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-blue-600/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  const testimonials = [
    {
      quote:
        'Clear guidance from day one. Negotiated a sharper rate and handled everything seamlessly.',
      name: 'Sarah M.',
      location: 'Sydney, NSW',
    },
    {
      quote:
        'They structured our investment loans across lenders which improved our borrowing capacity.',
      name: 'Daniel & Priya',
      location: 'Melbourne, VIC',
    },
    {
      quote:
        'Professional and responsive. Settlement was smooth and we felt supported throughout.',
      name: 'James K.',
      location: 'Brisbane, QLD',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="No fluff. Just real outcomes and clear communication."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">
                {t.name} <span className="text-slate-500 font-normal">— {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
