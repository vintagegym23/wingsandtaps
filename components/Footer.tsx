import React from 'react';
import logoGif from "../images/logo.gif";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20 lg:pt-32 pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 relative overflow-hidden">
      {/* Top Jagged/Drip Edge */}
      <div
        className="absolute top-0 left-0 w-full h-8 md:h-12 bg-[#fcfcfc]"
        style={{ clipPath: 'polygon(0 0, 10% 80%, 20% 40%, 30% 90%, 40% 50%, 50% 100%, 60% 60%, 70% 95%, 80% 55%, 90% 85%, 100% 30%, 100% 0, 0 0)' }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Logo with Matka/Amber background */}
          <div className="bg-[#ffbb00] p-3 md:p-4 rotate-2 w-fit shadow-xl border-4 border-black">
            <img
              src={logoGif}
              alt="Wings N Taps Logo"
              className="w-16 md:w-20 lg:w-32 h-auto block"
            />
          </div>

          <p className="font-black italic text-lg md:text-xl text-[#ffbb00]">LOCALLY OWNED. LOCALLY LOVED.</p>
          <p className="text-zinc-500 text-xs md:text-sm">South Side's favorite wing spot. No frills, just heat and noise.</p>
        </div>

        {/* WHERE - Corpus Christi Details */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="font-black text-[#ff4d00] text-lg md:text-xl mb-1 md:mb-2 italic tracking-tighter uppercase">WHERE</h4>
          <p className="text-base md:text-lg font-black italic leading-tight">
            5802 YORKTOWN BLVD, STE A101<br />
            CORPUS CHRISTI, TX 78414
          </p>
          <p className="text-[#ffbb00] font-black text-xl md:text-2xl">(361) 299-0392</p>
        </div>

        {/* WHEN - Precise Hours */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="font-black text-[#ff4d00] text-lg md:text-xl mb-1 md:mb-2 italic tracking-tighter uppercase">WHEN</h4>
          <div className="font-black text-xs md:text-sm uppercase flex flex-col gap-2">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>MON-TUE-WED</span> <span className="text-[#ffbb00]">11AM - 10PM</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>THURSDAY</span> <span className="text-[#ffbb00]">11AM - 11PM</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>FRI-SAT</span> <span className="text-[#ffbb00]">10AM - 12AM</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>SUNDAY</span> <span className="text-[#ffbb00]">10AM - 10PM</span>
            </div>
          </div>
        </div>

        {/* JOIN US - Socials & Action */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h4 className="font-black text-[#ff4d00] text-lg md:text-xl mb-1 md:mb-2 italic tracking-tighter uppercase">JOIN US</h4>
          <div className="flex gap-3 md:gap-4">
            <a
              href="https://www.facebook.com/share/1CwRYakL27/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="w-10 md:w-12 h-10 md:h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-[#ffbb00] hover:text-black transition-colors rotate-3 text-lg md:text-xl"
            >
              <span className="material-symbols-outlined text-sm md:text-base">share</span>
            </a>
            <a
              href="https://www.instagram.com/wingsntaps?igsh=MW80NWRlcTVoc3h2NQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="w-10 md:w-12 h-10 md:h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-[#ffbb00] hover:text-black transition-colors -rotate-6 text-lg md:text-xl"
            >
              <span className="material-symbols-outlined text-sm md:text-base">camera</span>
            </a>
            <a
              href="https://maps.app.goo.gl/EXpCGRsqxA7u1sLy9?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="w-10 md:w-12 h-10 md:h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-[#ffbb00] hover:text-black transition-colors rotate-6 text-lg md:text-xl"
            >
              <span className="material-symbols-outlined text-sm md:text-base">public</span>
            </a>
          </div>
          <button className="mt-2 md:mt-4 bg-[#ffbb00] text-black font-black py-2 md:py-3 px-3 md:px-4 border-4 border-black rotate-2 hover:scale-105 transition-transform uppercase italic tracking-tighter text-sm md:text-xl shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)]">
            ORDER ONLINE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-black tracking-widest opacity-40 uppercase">
        <p>© 2026 WINGS N TAPS CORPUS CHRISTI. SOUTH SIDE PRIDE.</p>
        <div className="flex gap-6 md:gap-8">
          <a href="#" className="hover:text-[#ffbb00] transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-[#ffbb00] transition-colors">TERMS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

