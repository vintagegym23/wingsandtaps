import React from 'react';

const Specials: React.FC = () => {
  return (
    /* Changed background to #fcfcfc for seamless alignment with other sections */
    <div className="bg-[#fcfcfc] min-h-screen pt-12 md:pt-20 pb-24 md:pb-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="relative mb-20 md:mb-32 flex flex-col items-center">
          <div className="relative rotate-[-3deg]">
            <h2 className="font-stencil text-3xl sm:text-5xl md:text-9xl text-zinc-900 leading-none tracking-tighter opacity-90 text-center">
              WHAT'S<br/>HAPPENING
            </h2>
            <div className="absolute -top-6 sm:-top-8 -right-2 sm:-right-4 md:-right-16 bg-primary text-black font-wild text-lg sm:text-2xl md:text-5xl px-2 sm:px-4 md:px-8 py-1 sm:py-2 md:py-3 rotate-[15deg] shadow-2xl border-2 sm:border-4 border-black">
              LIVE & LOUD
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 -left-2 sm:-left-4 md:-left-16 bg-accent text-white rounded-full size-20 sm:size-24 md:size-32 flex items-center justify-center font-stencil text-xs sm:text-sm text-center p-2 sm:p-4 rotate-[-10deg] shadow-xl border-2 sm:border-4 border-black">
              HOT WINGS ONLY
            </div>
          </div>
        </section>

        {/* Band Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center mb-24 md:mb-40">
          <div className="lg:col-span-7 relative">
            <div className="polaroid rotate-[-2deg] border-2 sm:border-4 border-zinc-200 bg-white p-2 sm:p-4">
              <div className="bg-zinc-800 aspect-video overflow-hidden">
                <img
                  alt="Band Performance"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy2vx92qh9_IuC-GKlxQhqO_5Wava_BTK9n2Vce2iK5XbzyRF9z2HuVt7PkEPwA7YY57hUCbkmpU64-HVzU2mH2udy4hlF7ct6JrBeqIZASok1aK-CmwQN2GF9jIUR4QkKRI-mjnACTUyN5HiuL9iLS0MqCGdm3N-l3nyQ1fRtizZPpN0sDc2aZi4HG--BfuhTfiCRw-PoXaqS6SKYN-m2rIV2TBguJVnSlGG0W7M3IptjKcPbWlFg_HQdH8rlJ3E5_gln-XRqJYbW"
                />
              </div>
              <p className="font-wild text-2xl sm:text-3xl md:text-5xl text-black mt-4 sm:mt-8 uppercase">DIRTY RIVER BOYS @ 9PM</p>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 -left-2 sm:-left-4 md:-left-10 bg-black text-primary p-2 sm:p-4 md:p-8 rotate-[-5deg] z-30 font-stencil text-lg sm:text-2xl md:text-4xl shadow-2xl border-2 sm:border-4 border-primary">
              FRIDAY NIGHT
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <h3 className="font-stencil text-3xl sm:text-5xl md:text-6xl leading-none italic">THE STAGE IS<br/><span className="text-primary underline decoration-danger underline-offset-4 md:underline-offset-8">CRANKED.</span></h3>
            <p className="font-typewriter text-lg md:text-2xl leading-tight text-zinc-800">No covers, no bullshit. Just local Corpus Christi grit and loud amps. Every Friday and Saturday night.</p>
            <div className="bg-white p-6 md:p-8 border-2 sm:border-4 border-black rotate-[2deg] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-wild text-2xl md:text-3xl mb-3 md:mb-4 underline">UPCOMING LINEUP:</p>
              <ul className="font-typewriter text-lg md:text-xl space-y-2 md:space-y-3">
                <li>- OCT 24: THE RADICALS</li>
                <li>- OCT 25: SOUTH SIDE SOUL</li>
                <li>- OCT 31: HALLOWEEN HAVOC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trivia / Happy Hour Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-24 md:mb-40">
          <div className="bg-white border-2 sm:border-4 border-black p-6 md:p-10 rotate-[-1deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-2xl relative group">
            <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 bg-primary size-20 sm:size-24 md:size-28 rounded-full flex items-center justify-center font-stencil text-xs text-center p-2 sm:p-4 rotate-12 border-2 sm:border-4 border-black shadow-xl group-hover:scale-110 transition-transform">WIN FREE WINGS</div>
            <h3 className="font-stencil text-4xl md:text-6xl mb-6 md:mb-8 italic">TRIVIA NIGHT</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-wild text-2xl md:text-4xl">
                <span className="border-2 sm:border-4 border-primary px-3 md:px-4 py-1 rounded-full">TUESDAYS</span>
                <span>@ 7PM</span>
              </div>
              <p className="font-typewriter text-base md:text-xl leading-snug">Hosted by Big Mike. Bring your smartest friends or just your luckiest ones. $2 Taps all night long.</p>
            </div>
          </div>

          <div className="bg-primary border-2 sm:border-4 border-black p-6 md:p-10 rotate-[2deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-2xl relative group">
            <h3 className="font-stencil text-4xl md:text-6xl mb-6 md:mb-8 italic text-black">REVERSE HAPPY HOUR</h3>
            <div className="space-y-4 md:space-y-6">
              <p className="font-wild text-2xl md:text-3xl text-black/80">SUN-THU: 10PM - CLOSE</p>
              <div className="space-y-1 md:space-y-2">
                <p className="font-stencil text-3xl md:text-5xl text-white underline shadow-black drop-shadow-lg">$3 SHOTS</p>
                <p className="font-stencil text-3xl md:text-5xl text-white underline shadow-black drop-shadow-lg">$4 PINTS</p>
              </div>
            </div>
          </div>
        </section>

        {/* Block Party Poster */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-[#f0f0f0] border-8 md:border-[20px] border-white shadow-2xl p-6 sm:p-8 md:p-12 rotate-[-2deg] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/criss-cross.png')]"></div>
            <div className="relative z-10 border-4 md:border-8 border-dashed border-danger p-6 md:p-10">
              <div className="text-center mb-8 md:mb-12">
                <h4 className="font-wild text-danger text-2xl sm:text-4xl md:text-6xl mb-2 md:mb-4">SAVE THE DATE</h4>
                <h2 className="font-stencil text-4xl sm:text-6xl md:text-8xl text-black leading-none mb-4 md:mb-8">WOLF PACK BLOCK PARTY</h2>
                <p className="font-stencil text-lg sm:text-2xl md:text-4xl bg-black text-white inline-block px-4 sm:px-6 md:px-8 py-2 md:py-4 rotate-[-1deg]">NOVEMBER 15TH | NOON - MIDNIGHT</p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-6 font-wild text-sm sm:text-2xl md:text-3xl text-center">
                <div className="bg-primary p-3 md:p-6 rotate-2 border-2 sm:border-4 border-black">OUTDOOR STAGE</div>
                <div className="bg-white border-2 sm:border-4 border-black p-3 md:p-6 -rotate-3">WING EATING CONTEST</div>
                <div className="bg-black text-white p-3 md:p-6 -rotate-1 border-2 sm:border-4 border-black">LOCAL VENDORS</div>
                <div className="bg-danger text-white p-3 md:p-6 rotate-3 border-2 sm:border-4 border-black">CAR SHOW</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Specials;