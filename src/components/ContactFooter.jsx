import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <div>
      <Contact />
      <Footer />
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple front-end validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus({ type: 'error', message: 'Please complete all fields.' });
      return;
    }
    const emailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email);
    if (!emailValid) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }
    setStatus({ type: 'success', message: 'Thanks! Your enquiry has been received. We will contact you shortly.' });
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-700/80 bg-blue-50 rounded-full px-3 py-1">Contact</span>
          <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Let’s talk about your goals</h3>
          <p className="mt-3 text-slate-600">Call, email or send an enquiry and we’ll respond promptly.</p>

          <div className="mt-8 space-y-4 text-slate-700">
            <a href="tel:+611300123456" className="flex items-center gap-3 hover:text-slate-900"><Phone size={18}/> +61 1300 123 456</a>
            <a href="mailto:hello@pkinvest.com.au" className="flex items-center gap-3 hover:text-slate-900"><Mail size={18}/> hello@pkinvest.com.au</a>
            <div className="flex items-center gap-3"><MapPin size={18}/> Suite 10, 100 Market St, Sydney NSW 2000</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="Mobile number"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={4}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                placeholder="How can we help?"
              />
            </div>
          </div>

          {status.type !== 'idle' && (
            <div className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>{status.message}</div>
          )}

          <button
            type="submit"
            className="mt-6 w-full sm:w-auto rounded-md bg-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
              <div className="text-lg font-semibold text-slate-900">PK INVEST</div>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">ABN 12 345 678 910 • Credit Representative of XYZ under Australian Credit Licence 123456.</p>
          </div>
          <nav className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-slate-900">Navigate</div>
              <a href="#home" className="block text-slate-600 hover:text-slate-900">Home</a>
              <a href="#about" className="block text-slate-600 hover:text-slate-900">About</a>
              <a href="#services" className="block text-slate-600 hover:text-slate-900">Services</a>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-slate-900">More</div>
              <a href="#testimonials" className="block text-slate-600 hover:text-slate-900">Testimonials</a>
              <a href="#contact" className="block text-slate-600 hover:text-slate-900">Contact</a>
            </div>
          </nav>
          <div className="text-sm text-slate-600">
            <div>ACN 098 765 432</div>
            <div>All information is general in nature and does not constitute financial advice.</div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">© {new Date().getFullYear()} PK INVEST. All rights reserved.</div>
      </div>
    </footer>
  );
}
