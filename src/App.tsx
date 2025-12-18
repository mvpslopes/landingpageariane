import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Diagnostic from './components/Diagnostic';
import Planning from './components/Planning';
import Execution from './components/Execution';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import logoWide from '../logo-ariane-wide.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`fixed inset-0 z-40 flex items-center justify-center bg-brand-off-white/95 backdrop-blur-sm transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center gap-5">
            <div className="logo-shimmer">
              <img
                src={logoWide}
                alt="Logo Ariane Andrade Assessoria"
                className="h-14 md:h-16 object-contain"
              />
            </div>
            <div className="relative w-40 h-1.5 rounded-full bg-brand-beige/70 overflow-hidden">
              <div className="loader-bar-inner" />
            </div>
          </div>
        </div>
      )}

      <div className={`min-h-screen site-background transition-opacity duration-700 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <Services />
        <Diagnostic />
        <Planning />
        <Execution />
        <Clients />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
