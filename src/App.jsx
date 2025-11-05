import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Content />
        <ContactFooter />
      </main>
    </div>
  );
}
