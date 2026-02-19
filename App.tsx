
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Specials from './pages/Specials';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Locations from './pages/Locations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
        {/* Marquee Banner */}
        <div className="w-full bg-danger text-white py-1 md:py-2 overflow-hidden border-b-2 border-black sticky top-0 z-[70] transform -rotate-1 origin-left w-[110%] -ml-[5%]">
          <div className="whitespace-nowrap flex animate-marquee font-black italic text-xs sm:text-sm md:text-xl tracking-tighter uppercase">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="px-4 sm:px-6 md:px-8 flex-shrink-0">
                HAPPY HOUR: $3 DOMESTICS • HALF-PRICE WINGS • COMING SOON: NEW SAUCES & WEEKLY ADS • BEST DAMN WINGS IN CORPUS CHRISTI •
              </span>
            ))}
          </div>
        </div>

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/story" element={<Story />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 size-10 md:size-12 bg-black border-2 border-primary text-primary flex items-center justify-center rotate-45 shadow-[3px_3px_0px_0px_#f4af25] md:shadow-[4px_4px_0px_0px_#f4af25] hover:scale-110 transition-transform z-[100]"
        >
          <span className="material-symbols-outlined -rotate-45 font-black text-base md:text-xl">arrow_upward</span>
        </button>
      </div>
    </Router>
  );
};

export default App;

