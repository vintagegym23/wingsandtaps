
import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="concrete-texture min-h-screen text-white pt-24 pb-48 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.8] uppercase tracking-tighter mb-24 italic">
          THE SOUTH <br/>
          <span className="text-danger block transform -rotate-2 origin-left">SIDE STORY</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-48">
          <div className="lg:col-span-5 relative z-20">
            <div className="bg-primary text-black p-10 md:p-16 rotate-[-3deg] shadow-[20px_20px_0px_0px_#FF4500] border-4 border-black">
              <h3 className="text-4xl md:text-5xl font-black uppercase leading-none mb-8 italic">
                "NOT A GOURMET BISTRO."
              </h3>
              <p className="text-2xl font-bold italic leading-tight uppercase mb-8">
                We didn't start this to be professionals. We started this because the South Side needed a place that screamed as loud as the fans during a rivalry game.
              </p>
              <p className="font-stencil text-3xl border-t-4 border-black pt-6">— EST. '98</p>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[600px] flex items-center justify-center">
             {/* Messy Polaroid Collage */}
             <div className="polaroid absolute top-0 left-0 w-64 md:w-80 -rotate-12 hover:rotate-0 transition-all z-10">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvsZOPg_hqwCcl6j14L8blFd6HaVAc6sV2cX751UGM1n9j-vgrx2p1lMWOT3ypnT3zOCtFrlJl-Lj9uJFyANNXd2FX1XcF7MvhwCykgJP5_nJfQaWDoUN3PxyhqhRFPHxtcDFeHTPiujFcTP2Edf173wkNFmM5kYEvj7_wfU9XKSOMB-crxtIAIb6Zs_Fhx1FmE9tkS_6J60TgQ_9w7JdbItxqibGoImsBkGCN7WVPVFTZITA5lzlv_iXccluHaPlHOwGDp2YXT3jn" alt="Founders" className="w-full aspect-square object-cover" />
                <p className="font-wild text-black text-xl pt-4 text-center">THE BEGINNING</p>
             </div>

             <div className="polaroid absolute bottom-0 right-0 w-64 md:w-80 rotate-6 hover:rotate-0 transition-all z-20">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY2BFeq8fdm_ST5hHeL16WJ3MyiZOw6a0R4157Ar672qtzG0TT72tROtR3DdgcSL_7KPsc3DZOfgleffHEoPrsR_zgxQS9ZybmzomiYxr_ci8ZJdGwZanYtQkvw-m9AYXN5GDZVINJ9XEjfMB4S8a2QMr_i9ci-ZOq4kHAsgd3XGUuQJAwR-jDg3xl-dSMeRiJsqgum5vPa8kAntD33SRiWlJQirOmC2z055rP9ZO0j_epjKV_zzyVdruEy262-JD0pfa4dfUJZ1P7" alt="Neighborhood" className="w-full aspect-square object-cover" />
                <p className="font-wild text-black text-xl pt-4 text-center">SOUTH SA '99</p>
             </div>

             <div className="polaroid absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 rotate-2 hover:rotate-0 transition-all z-30 border-4 border-primary">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAT6zQqqHAPg0yk8knWMUgmYHg_bTsjEbYBdtFLeSk3LSc34AA6klYgQA-Yd_A6zNMu0sN4OjsoJrQ2XKxJEA8aylCkLrWmQP0Au2AQkptu1nGUg5YGkBsRqbxRgPwhs26peMklv5E3wk9SIHfz764aoRqVqdWt0ChnunInOypWRKQz7_ReSKWQY3BgHQRgFf5N1-Lg-v-x01GU7BFnIFH9YyW7-wwHkRyPcpBEB63N9wolmbzYCMZBz0T3mvyBbOpS1jB9PvUPSHT" alt="The First Wings" className="w-full aspect-square object-cover" />
                <p className="font-wild text-black text-2xl pt-4 text-center">FIRST BUCKET EVER SOLD</p>
             </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="relative py-48 bg-danger text-white ripped-edge -mx-6 px-12 transform -rotate-1">
          <div className="max-w-7xl mx-auto rotate-1 flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <h3 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.8] mb-12">
                NO RULES.<br/>
                <span className="bg-black text-primary px-4 py-2 inline-block rotate-2">JUST WINGS.</span>
              </h3>
              <p className="font-wild text-3xl mb-8 italic">"If it's too loud, you're too old."</p>
              <div className="bg-white text-black p-8 border-4 border-black rotate-[-1deg] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-black text-2xl uppercase italic">
                  In '98, we opened with three fryers and a dream. No white tablecloths, no "refined palates," just high-octane flavor.
                </p>
              </div>
            </div>
            <div className="flex-1 text-center font-stencil text-6xl md:text-9xl opacity-20 transform -rotate-12 pointer-events-none">
              BORN & RAISED<br/>SOUTH SIDE
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Story;
