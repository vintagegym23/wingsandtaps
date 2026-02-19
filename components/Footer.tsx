import React from 'react';
import logoGif from "../images/logo.gif";

const Footer: React.FC = () => {
  const iconClassName = "w-5 md:w-6 h-5 md:h-6";

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
              aria-label="Facebook"
            >
              <svg viewBox="0 0 320 512" fill="currentColor" className={iconClassName} aria-hidden="true">
                <path d="M279.14 288l14.22-92.66h-88.91V135.6c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0C152.24 0 104.33 44.38 104.33 124.72v70.62H22.89V288h81.44v224h100.12V288z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/wingsntaps?igsh=MW80NWRlcTVoc3h2NQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="w-10 md:w-12 h-10 md:h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-[#ffbb00] hover:text-black transition-colors -rotate-6 text-lg md:text-xl"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 448 512" fill="currentColor" className={iconClassName} aria-hidden="true">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.4-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.8 0-26.9-12-26.9-26.9s12.1-26.9 26.9-26.9c14.9 0 26.9 12 26.9 26.9zm76.1 27.3c-1.7-35.3-9.7-66.7-35.6-92.5S354.7 33.2 319.4 31.5c-35.1-2-140.4-2-175.5 0-35.2 1.7-66.6 9.7-92.5 35.6S13.2 126.4 11.5 161.6c-2 35.1-2 140.4 0 175.5 1.7 35.2 9.7 66.6 35.6 92.5s57.3 33.9 92.5 35.6c35.1 2 140.4 2 175.5 0 35.3-1.7 66.7-9.7 92.5-35.6s33.9-57.3 35.6-92.5c2-35.1 2-140.4 0-175.5zM398.8 388c-7.7 19.3-22.6 34.2-41.9 41.9-29 11.5-97.8 8.9-132.8 8.9s-103.9 2.7-132.8-8.9c-19.3-7.7-34.2-22.6-41.9-41.9-11.5-29-8.9-97.8-8.9-132.8s-2.7-103.9 8.9-132.8c7.7-19.3 22.6-34.2 41.9-41.9 29-11.5 97.8-8.9 132.8-8.9s103.9-2.7 132.8 8.9c19.3 7.7 34.2 22.6 41.9 41.9 11.5 29 8.9 97.8 8.9 132.8s2.6 103.9-8.9 132.8z" />
              </svg>
            </a>
            <a
              href="https://maps.app.goo.gl/EXpCGRsqxA7u1sLy9?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="w-10 md:w-12 h-10 md:h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-[#ffbb00] hover:text-black transition-colors rotate-6 text-lg md:text-xl"
              aria-label="Location"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className={iconClassName} aria-hidden="true">
                <path d="M172.3 501.7C27.6 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27.6 99-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0zM192 272a80 80 0 100-160 80 80 0 000 160z" />
              </svg>
            </a>
          </div>
          <button className="mt-2 md:mt-4 bg-[#ffbb00] text-black font-black py-2 md:py-3 px-3 md:px-4 border-4 border-black rotate-2 hover:scale-105 transition-transform uppercase italic tracking-tighter text-sm md:text-xl shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)]">
            ORDER ONLINE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-black tracking-widest opacity-40 uppercase">
        <p>� 2026 WINGS N TAPS CORPUS CHRISTI. SOUTH SIDE PRIDE.</p>
        <a
          href="https://www.claratechitsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:text-[#ffbb00] transition-colors mx-4 text-center block"
        >
          Designed and Developed by <br className="block sm:hidden" />
          Claratech IT Solutions Pvt Ltd
        </a>
        <div className="flex gap-6 md:gap-8">
          <a href="#" >PRIVACY</a>
          <a href="#" >TERMS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
