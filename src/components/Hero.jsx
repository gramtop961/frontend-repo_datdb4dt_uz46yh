import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-700/80 bg-blue-50 rounded-full px-3 py-1">Trusted Australian brokers</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We structure the right finance for your needs
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Home, investment, commercial and personal loans handled end-to-end.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            >
              Speak to an Expert
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 text-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              Explore services
            </a>
          </div>
          <ul className="mt-8 text-sm text-slate-500 grid grid-cols-2 gap-3">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> ASIC & MFAA accredited
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Access to 40+ lenders
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Tailored loan strategies
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ongoing support post-settlement
            </li>
          </ul>
        </div>
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px] rounded-2xl overflow-hidden">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white via-transparent to-white/60" />
        </div>
      </div>
    </section>
  );
}
