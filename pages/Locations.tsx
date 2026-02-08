import React from 'react';

// Locations Page Component
const Locations: React.FC = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen pt-16 md:pt-24 pb-24 md:pb-40 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Map Side */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12 relative">
            <div className="relative border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] bg-zinc-300 aspect-video overflow-hidden group">
              <img
                alt="Stylized Map"
                className="w-full h-full object-cover grayscale contrast-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY2BFeq8fdm_ST5hHeL16WJ3MyiZOw6a0R4157Ar672qtzG0TT72tROtR3DdgcSL_7KPsc3DZOfgleffHEoPrsR_zgxQS9ZybmzomiYxr_ci8ZJdGwZanYtQkvw-m9AYXN5GDZVINJ9XEjfMB4S8a2QMr_i9ci-ZOq4kHAsgd3XGUuQJAwR-jDg3xl-dSMeRiJsqgum5vPa8kAntD33SRiWlJQirOmC2z055rP9ZO0j_epjKV_zzyVdruEy262-JD0pfa4dfUJZ1P7"
              />
              {/* Pins - Centered for Corpus Christi */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full animate-bounce">
                <div className="bg-[#ff4d00] text-white font-black text-lg md:text-2xl p-1 md:p-2 border-2 md:border-4 border-white -rotate-12 shadow-xl">W&T</div>
                <div className="w-1 md:w-2 h-8 md:h-10 bg-black mx-auto mt-[-3px] md:mt-[-5px]"></div>
              </div>

              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-black text-white font-mono text-[8px] md:text-[10px] p-1 md:p-2 tracking-[0.2em] uppercase">
                Live Location Feed // CORPUS CHRISTI - SOUTH SIDE
              </div>
            </div>

            <div className="relative max-w-lg ml-auto -mt-12 lg:-mr-10 z-10 rotate-2">
              <div className="bg-[#ffbb00] p-6 sm:p-8 md:p-10 shadow-2xl border-2 sm:border-4 border-black">
                <h2 className="font-black text-3xl sm:text-4xl md:text-5xl uppercase mb-4 md:mb-6 border-b-4 md:border-b-8 border-black pb-3 md:pb-4 italic tracking-tighter">WHERE WE AT</h2>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="font-black text-xl sm:text-2xl uppercase italic text-[#ff4d00]">SOUTH SIDE PRIDE</h3>
                    <p className="font-black text-xl sm:text-3xl uppercase leading-tight italic">
                      5802 Yorktown Blvd, Ste A101<br />
                      Corpus Christi, TX 78414
                    </p>
                  </div>
                  <div className="pt-3 md:pt-6 flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4">
                    <a
                      href="https://maps.app.goo.gl/EXpCGRsqxA7u1sLy9?g_st=iw"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-black text-white font-black uppercase text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 hover:bg-zinc-800 transition-colors shadow-[3px_3px_0px_0px_white] md:shadow-[5px_5px_0px_0px_white] text-center flex-1 sm:flex-none"
                    >
                      GET DIRECTIONS
                    </a>
                    <a
                      href="tel:3612990392"
                      className="border-2 sm:border-4 border-black font-black uppercase text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 bg-white hover:bg-[#ffbb00] transition-colors text-center flex-1 sm:flex-none"
                    >
                      CALL US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Side */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-32">
            <div className="bg-white p-6 sm:p-8 md:p-10 -rotate-2 shadow-[12px_12px_30px_rgba(0,0,0,0.1)] md:shadow-[20px_20px_60px_rgba(0,0,0,0.1)] relative border-2 sm:border-4 border-black">
              <div className="absolute top-4 md:top-6 right-6 md:right-10 opacity-20 rotate-12">
                <span className="material-symbols-outlined text-6xl md:text-8xl text-zinc-300">local_bar</span>
              </div>

              <header className="border-b-4 border-dashed border-zinc-200 pb-6 md:pb-8 mb-8 md:mb-10 text-center">
                <h2 className="font-black italic text-3xl md:text-5xl text-zinc-800 uppercase tracking-tighter">Get in Touch</h2>
                <p className="font-mono text-xs md:text-sm text-zinc-500 uppercase mt-2 md:mt-4 tracking-widest">Server: W&T_Bot | Table: Web_99</p>
              </header>

              <form className="space-y-6 md:space-y-10 font-black text-xl md:text-3xl uppercase italic">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-b-2 border-zinc-100 pb-2">
                  <label className="text-zinc-400 font-mono text-xs md:text-sm uppercase shrink-0">NAME:</label>
                  <input className="w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-100 italic text-sm md:text-base" placeholder="Type here..." type="text" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-b-2 border-zinc-100 pb-2">
                  <label className="text-zinc-400 font-mono text-xs md:text-sm uppercase shrink-0">EMAIL:</label>
                  <input className="w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-100 italic text-sm md:text-base" placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-2 md:space-y-4">
                  <label className="text-zinc-400 font-mono text-xs md:text-sm uppercase block">MESSAGE / ORDER SPECIAL:</label>
                  <textarea className="w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-100 resize-none h-32 md:h-40 italic text-sm md:text-base" placeholder="What's on your mind? No judgement." rows={4}></textarea>
                </div>

                <div className="border-t-4 border-dashed border-zinc-200 pt-8 md:pt-10 mt-10 md:mt-12">
                  <div className="flex justify-between items-center mb-6 md:mb-8">
                    <span className="font-mono text-xs md:text-sm text-zinc-400 uppercase italic">Service Charge:</span>
                    <span className="text-zinc-800 font-black text-lg md:text-2xl">$0.00</span>
                  </div>
                  <button className="w-full bg-black text-white font-black uppercase py-4 md:py-6 text-2xl md:text-4xl tracking-tighter hover:bg-[#ff4d00] hover:text-white transition-all transform hover:rotate-2 shadow-xl" type="submit">
                    SEND SLIP
                  </button>
                </div>
              </form>
            </div>

            {/* Social Coasters */}
            <div className="mt-12 md:mt-20 flex flex-wrap gap-6 md:gap-10 justify-center">
              {[
                { icon: 'photo_camera', color: 'bg-[#ffbb00]', rotate: '-rotate-6', url: 'https://www.instagram.com/wingsntaps?igsh=MW80NWRlcTVoc3h2NQ%3D%3D&utm_source=qr' },
                { icon: 'share', color: 'bg-[#ff4d00] text-white', rotate: 'rotate-12', url: 'https://www.facebook.com/share/1CwRYakL27/?mibextid=wwXIfr' },
                { icon: 'public', color: 'bg-white', rotate: '-rotate-12', url: 'https://maps.app.goo.gl/EXpCGRsqxA7u1sLy9?g_st=iw' }
              ].map((c, i) => (
                <a key={i} target="_blank" rel="noreferrer" className={`${c.rotate} size-24 md:size-32 rounded-full border-4 md:border-8 border-black ${c.color} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group`} href={c.url}>
                  <div className={`absolute inset-2 rounded-full border-2 md:border-2 border-dashed ${c.color.includes('white') ? 'border-black' : 'border-white'} opacity-50`}></div>
                  <span className="material-symbols-outlined text-4xl md:text-6xl font-black group-hover:rotate-12 transition-transform">{c.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;