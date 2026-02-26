
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../images/logo.png';
import logoGif from "../images/logo.gif";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Menu', path: '/menu' },
    { name: 'Menu 2', path: '/menu2' },
    { name: 'Specials', path: '/specials' },
    { name: 'Order Now', path: '#', isButton: true },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-[60] px-3 md:px-8 py-3 md:py-4 flex justify-between items-start">
      {/* Logo */}
      <Link
        to="/"
        className="bg-black p-2 md:p-4 -rotate-2 border-4 border-primary shadow-xl hover:rotate-0 transition-transform duration-300"
      >
        <img
          src={logoGif}
          alt="Wings N Taps Logo"
          className="w-16 sm:w-20 md:w-48 h-auto block"
        />
      </Link>

      <div className="flex flex-col items-end gap-2 md:gap-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2 md:gap-3 items-center">
          {navLinks.map((link) => (
            link.isButton ? (
              <button key={link.name} className="bg-danger text-white px-2 md:px-3 py-1 font-black text-xs md:text-base border-2 border-black -rotate-3 hover:rotate-0 transition-all shadow-lg active:translate-y-1">
                {link.name.toUpperCase()}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 md:px-3 py-1 font-black text-xs md:text-base border-2 border-black transition-all ${isActive(link.path)
                  ? 'bg-primary text-black rotate-0 shadow-none'
                  : 'bg-white hover:bg-primary rotate-1 hover:rotate-0'
                  }`}
              >
                {link.name.toUpperCase()}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden bg-primary p-2 md:p-3 border-2 border-black rotate-6 font-black text-xl md:text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-off-white z-[100] p-6 md:p-8 flex flex-col items-center justify-center gap-6 md:gap-8 pt-20">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 font-wild text-2xl md:text-4xl"
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.filter(link => !link.isButton).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-stencil text-2xl md:text-4xl text-black hover:text-danger transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-danger text-white px-8 md:px-12 py-3 md:py-4 font-black text-lg md:text-2xl border-4 border-black rotate-2 hover:rotate-0 transition-transform">
            ORDER NOW
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
