import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Instagram } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-sea-salt text-navy font-sans selection:bg-sand selection:text-navy">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-sea-salt/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div 
            className={`font-serif text-2xl tracking-wider cursor-pointer transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-sea-salt'}`}
            onClick={() => scrollTo('home')}
          >
            THE SHELL COLLECTIVE
          </div>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex space-x-10 text-sm tracking-widest uppercase transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-sea-salt'}`}>
            <button onClick={() => scrollTo('about')} className="hover:text-driftwood transition-colors">About</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-driftwood transition-colors">Gallery</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-driftwood transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-navy' : 'text-sea-salt'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-sea-salt z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => scrollTo('about')} className="font-serif text-3xl text-navy hover:text-driftwood transition-colors">About</button>
        <button onClick={() => scrollTo('gallery')} className="font-serif text-3xl text-navy hover:text-driftwood transition-colors">Gallery</button>
        <button onClick={() => scrollTo('contact')} className="font-serif text-3xl text-navy hover:text-driftwood transition-colors">Contact</button>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?q=80&w=2070&auto=format&fit=crop" 
            alt="Coastal Waves" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sea-salt mb-6 tracking-tight drop-shadow-lg">
            Curated Coastal Elegance
          </h1>
          <p className="font-sans text-sea-salt/90 text-lg md:text-xl tracking-widest uppercase max-w-2xl mx-auto font-light">
            A refined collection of nature's most exquisite architecture.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <span className="text-sea-salt text-xs tracking-widest uppercase mb-2">Explore</span>
          <ChevronDown className="text-sea-salt" size={20} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              Heritage & <br/><span className="italic text-driftwood">Craftsmanship</span>
            </h2>
            <div className="w-12 h-[1px] bg-navy"></div>
            <p className="font-sans text-navy/80 leading-relaxed font-light text-lg">
              The Shell Collective was born from a deep reverence for the Atlantic coastline. We believe that the ocean's artifacts are not merely souvenirs, but sculptural masterpieces shaped by time, tide, and salt.
            </p>
            <p className="font-sans text-navy/80 leading-relaxed font-light text-lg">
              Drawing inspiration from the understated elegance of the Hamptons and the rugged beauty of Martha's Vineyard, our curated collections bring the quiet luxury of the coast into the modern home. Each piece is sustainably sourced, meticulously preserved, and presented as a testament to natural architecture.
            </p>
            <div className="pt-4">
              <button className="font-sans text-xs tracking-[0.2em] uppercase border-b border-navy pb-1 hover:text-driftwood hover:border-driftwood transition-colors">
                Discover Our Process
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1515444744559-7be63e1600de?q=80&w=2070&auto=format&fit=crop" 
                alt="Coastal Lifestyle" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sand -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-sand/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">The Collection</h2>
            <p className="font-sans text-navy/70 tracking-widest uppercase text-sm">An Exhibition of Natural Forms</p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* Item 1 */}
            <div className="break-inside-avoid group relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518815068914-0384b0cb4392?q=80&w=1000&auto=format&fit=crop" 
                alt="Nautilus Shell" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-sea-salt font-serif text-xl tracking-wide">Chambered Nautilus</span>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="break-inside-avoid group relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1000&auto=format&fit=crop" 
                alt="Conch Shell" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-sea-salt font-serif text-xl tracking-wide">Queen Conch</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="break-inside-avoid group relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1000&auto=format&fit=crop" 
                alt="Scallop Shell" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-sea-salt font-serif text-xl tracking-wide">Atlantic Sea Scallop</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="break-inside-avoid group relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Murex Shell" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-sea-salt font-serif text-xl tracking-wide">Lace Murex</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="break-inside-avoid group relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534043464124-3be32fe000c9?q=80&w=1000&auto=format&fit=crop" 
                alt="Starfish" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-sea-salt font-serif text-xl tracking-wide">Sugar Starfish</span>
              </div>
            </div>

            {/* Item 6 */}
            <div className="break-inside-avoid group relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516483638261-f40af5ed32c5?q=80&w=1000&auto=format&fit=crop" 
                alt="Sea Urchin" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-sea-salt font-serif text-xl tracking-wide">Alfonso Sea Urchin</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-navy text-sea-salt font-sans text-xs tracking-[0.2em] uppercase hover:bg-driftwood transition-colors duration-300">
              View Full Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-navy text-sea-salt py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wider">THE SHELL COLLECTIVE</h3>
            <p className="font-sans text-sea-salt/70 font-light text-sm max-w-xs leading-relaxed">
              Curators of fine coastal artifacts. Bringing the quiet luxury of the ocean into refined spaces.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-driftwood">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/shell_collective/" target="_blank" rel="noopener noreferrer" className="text-sea-salt/80 hover:text-sea-salt transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-sea-salt/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-sea-salt/50">
          <p>&copy; {new Date().getFullYear()} The Shell Collective. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sea-salt transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sea-salt transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
