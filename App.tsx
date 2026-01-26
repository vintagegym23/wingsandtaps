
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Story from './pages/Story';
import Locations from './pages/Locations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
        {/* Marquee Banner */}
        <div className="w-full bg-danger text-white py-2 overflow-hidden border-b-2 border-black sticky top-0 z-[70] transform -rotate-1 origin-left w-[110%] -ml-[5%]">
          <div className="whitespace-nowrap flex animate-marquee font-black italic text-xl tracking-tighter uppercase">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="px-8 flex-shrink-0">
                HAPPY HOUR: $3 DOMESTICS • HALF-PRICE WINGS • SPURS GAME SPECIALS • BEST DAMN WINGS IN SA •
              </span>
            ))}
          </div>
        </div>

        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/story" element={<Story />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Scroll to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 size-12 bg-black border-2 border-primary text-primary flex items-center justify-center rotate-45 shadow-[4px_4px_0px_0px_#f4af25] hover:scale-110 transition-transform z-[100]"
        >
          <span className="material-symbols-outlined -rotate-45 font-black">arrow_upward</span>
        </button>
      </div>
    </Router>
  );
};

export default App;
