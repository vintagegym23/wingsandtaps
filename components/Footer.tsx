
import React from 'react';
import logoGif from "../images/logo.gif";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Top Drip Edge */}
      <div className="absolute top-0 left-0 w-full h-24 bg-off-white dripping-edge"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="flex flex-col gap-6">
          {/* <div className="bg-primary text-black p-3 rotate-2 w-fit">
            <h2 className="font-logo text-3xl">W&T</h2>
          </div> */}
          <div className="bg-primary p-4 rotate-2 w-fit shadow-xl border-4 border-black">
  <img
    src={logoGif}
    alt="Wings and taps Logo"
    className="w-20 md:w-32 h-auto block"
  />
</div>

          <p className="font-wild text-xl text-primary">LOCALLY OWNED. LOCALLY LOVED.</p>
          <p className="text-zinc-500 text-sm">South Side San Antonio’s original wing spot. No frills, just heat and noise.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-stencil text-danger text-xl mb-2 italic">WHERE</h4>
          <p className="text-lg font-black italic">
            1234 S. ZARZAMORA ST.<br />
            SAN ANTONIO, TX 78224
          </p>
          <p className="text-primary font-wild text-2xl">(210) 555-WING</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-stencil text-danger text-xl mb-2 italic">WHEN</h4>
          <div className="font-black text-sm uppercase flex flex-col gap-2">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>MON-THU</span> <span>11AM - 11PM</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1 text-primary">
              <span>FRI-SAT</span> <span>11AM - 1AM</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>SUNDAY</span> <span>10AM - 11PM</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-stencil text-danger text-xl mb-2 italic">JOIN US</h4>
          <div className="flex gap-4">
            {['share', 'camera', 'public'].map((icon, idx) => (
              <a 
                key={idx}
                href="#" 
                className={`w-12 h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-primary hover:text-black transition-colors ${idx % 2 === 0 ? 'rotate-3' : '-rotate-6'}`}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
          <button className="mt-4 bg-primary text-black font-black py-3 border-2 border-black rotate-2 hover:scale-105 transition-transform uppercase italic tracking-tighter text-xl">
            ORDER ONLINE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black tracking-widest opacity-30 uppercase">
        <p>© 2024 WINGS & TAPS SAN ANTONIO. SOUTH SIDE PRIDE.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">PRIVACY</a>
          <a href="#" className="hover:text-white">TERMS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
