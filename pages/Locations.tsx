
import React from 'react';

const Locations: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen pt-12 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Map Side */}
          <div className="lg:col-span-7 space-y-12 relative">
            <div className="relative border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] bg-zinc-300 aspect-video overflow-hidden group">
              <img 
                alt="Stylized Map" 
                className="w-full h-full object-cover grayscale contrast-150" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY2BFeq8fdm_ST5hHeL16WJ3MyiZOw6a0R4157Ar672qtzG0TT72tROtR3DdgcSL_7KPsc3DZOfgleffHEoPrsR_zgxQS9ZybmzomiYxr_ci8ZJdGwZanYtQkvw-m9AYXN5GDZVINJ9XEjfMB4S8a2QMr_i9ci-ZOq4kHAsgd3XGUuQJAwR-jDg3xl-dSMeRiJsqgum5vPa8kAntD33SRiWlJQirOmC2z055rP9ZO0j_epjKV_zzyVdruEy262-JD0pfa4dfUJZ1P7" 
              />
              {/* Pins */}
              <div className="absolute top-1/4 left-1/3 animate-bounce">
                <div className="bg-danger text-white font-wild text-2xl p-2 border-4 border-white -rotate-12 shadow-xl">W&T</div>
                <div className="w-2 h-10 bg-black mx-auto mt-[-5px]"></div>
              </div>
              <div className="absolute bottom-1/3 right-1/4 animate-bounce [animation-delay:0.5s]">
                <div className="bg-primary text-black font-wild text-2xl p-2 border-4 border-black rotate-6 shadow-xl">W&T</div>
                <div className="w-2 h-10 bg-black mx-auto mt-[-5px]"></div>
              </div>
              <div className="absolute bottom-6 left-6 bg-black text-white font-stencil text-[10px] p-2 tracking-[0.2em] uppercase">
                Live Location Feed // SOUTH SA
              </div>
            </div>

            <div className="relative max-w-lg ml-auto -mt-20 lg:-mr-10 z-10 rotate-2">
              <div className="bg-primary p-10 ripped-edge shadow-2xl border-4 border-black">
                <h2 className="font-stencil text-5xl uppercase mb-6 border-b-8 border-black pb-4 italic">WHERE WE AT</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-black text-2xl uppercase italic text-danger">THE ORIGINAL</h3>
                    <p className="font-stencil text-3xl uppercase leading-tight">
                      1234 South Zarzamora St.<br />
                      San Antonio, TX 78224
                    </p>
                  </div>
                  <div className="pt-6 flex flex-wrap gap-4">
                    <button className="bg-black text-white font-stencil uppercase text-lg px-8 py-4 hover:bg-zinc-800 transition-colors shadow-[5px_5px_0px_0px_white]">
                      GET DIRECTIONS
                    </button>
                    <button className="border-4 border-black font-stencil uppercase text-lg px-8 py-4 bg-white hover:bg-primary transition-colors">
                      CALL US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Side */}
          <div className="lg:col-span-5 relative mt-20 lg:mt-32">
            <div className="bg-white p-10 ripped-edge -rotate-2 shadow-[20px_20px_60px_rgba(0,0,0,0.1)] relative">
              <div className="absolute top-6 right-10 opacity-20 rotate-12">
                <span className="material-symbols-outlined text-8xl text-zinc-300">local_bar</span>
              </div>
              
              <header className="border-b-4 border-dashed border-zinc-200 pb-8 mb-10 text-center">
                <h2 className="font-wild text-5xl text-zinc-800">Get in Touch</h2>
                <p className="font-typewriter text-sm text-zinc-500 uppercase mt-4">Server: W&T_Bot | Table: Web_99</p>
              </header>

              <form className="space-y-10 font-wild text-3xl text-blue-800">
                <div className="flex items-center gap-6 border-b-2 border-zinc-100 pb-2">
                  <label className="text-zinc-400 font-stencil text-sm uppercase shrink-0">NAME:</label>
                  <input className="w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-200" placeholder="Type here..." type="text" />
                </div>
                <div className="flex items-center gap-6 border-b-2 border-zinc-100 pb-2">
                  <label className="text-zinc-400 font-stencil text-sm uppercase shrink-0">EMAIL:</label>
                  <input className="w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-200" placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-4">
                  <label className="text-zinc-400 font-stencil text-sm uppercase block">MESSAGE / ORDER SPECIAL:</label>
                  <textarea className="w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-200 resize-none h-40" placeholder="What's on your mind? No judgement." rows={4}></textarea>
                </div>

                <div className="border-t-4 border-dashed border-zinc-200 pt-10 mt-12">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-stencil text-sm text-zinc-400 uppercase italic">Service Charge:</span>
                    <span className="text-zinc-800 font-stencil text-2xl">$0.00</span>
                  </div>
                  <button className="w-full bg-black text-white font-stencil uppercase py-6 text-4xl tracking-tighter hover:bg-danger hover:text-white transition-all transform hover:rotate-2 shadow-xl" type="submit">
                    SEND SLIP
                  </button>
                </div>
              </form>
            </div>

            {/* Social Coasters */}
            <div className="mt-20 flex flex-wrap gap-10 justify-center">
              {[
                { icon: 'photo_camera', color: 'bg-primary', rotate: '-rotate-6' },
                { icon: 'play_circle', color: 'bg-danger text-white', rotate: 'rotate-12' },
                { icon: 'share', color: 'bg-white', rotate: '-rotate-12' }
              ].map((c, i) => (
                <a key={i} className={`${c.rotate} size-32 rounded-full border-8 border-black ${c.color} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group`} href="#">
                  <div className={`absolute inset-2 rounded-full border-2 border-dashed ${c.color.includes('white') ? 'border-black' : 'border-white'} opacity-50`}></div>
                  <span className="material-symbols-outlined text-6xl font-black group-hover:rotate-12 transition-transform">{c.icon}</span>
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
