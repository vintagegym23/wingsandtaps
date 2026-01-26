
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../images/logo.png';
import logoGif from "../images/logo.gif"; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Menu', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Events', path: '/events' },
    { name: 'Locations', path: '/locations' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-[60] px-4 md:px-8 py-4 flex justify-between items-start">
      {/* <Link to="/" className="bg-black text-primary p-3 -rotate-2 border-4 border-primary shadow-xl hover:rotate-0 transition-transform">
        <h1 className="font-logo text-3xl md:text-5xl uppercase leading-none">W&T</h1>
        <p className="font-wild text-white text-sm md:text-base mt-[-5px]">WINGS & TAPS</p>
      </Link> */}
      {/* <Link
  to="/"
  className="bg-black p-3 -rotate-2 border-4 border-primary shadow-xl hover:rotate-0 transition-transform"
>
  <img
    src={logo}
    alt="Wings & Taps Logo"
    className="w-24 md:w-36 h-auto block"
  />
</Link> */}

<Link
  to="/"
  className="bg-black p-4 -rotate-2 border-4 border-primary shadow-xl hover:rotate-0 transition-transform duration-300"
>
  <img
    src={logoGif}
    alt="Wings and taps Logo"
    className="w-32 md:w-48 h-auto block"
  />
</Link>



      <div className="flex flex-col items-end gap-4">
        <nav className="hidden lg:flex gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2 font-black text-xl border-2 border-black transition-all ${
                isActive(link.path) 
                ? 'bg-primary text-black rotate-0 shadow-none' 
                : 'bg-white hover:bg-primary rotate-1 hover:rotate-0'
              }`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          <button className="bg-danger text-white px-6 py-2 font-black text-xl border-2 border-black -rotate-3 hover:rotate-0 transition-all shadow-lg active:translate-y-1">
            ORDER NOW
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden bg-primary p-2 border-2 border-black rotate-6 font-black"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-off-white z-[100] p-8 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 font-wild text-4xl">X</button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-stencil text-4xl text-black hover:text-danger"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-danger text-white px-12 py-4 font-black text-2xl border-4 border-black rotate-2">
            ORDER NOW
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
