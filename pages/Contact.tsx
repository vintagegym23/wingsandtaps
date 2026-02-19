import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-10 md:pt-12 lg:pt-20 pb-0 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto mb-12 md:mb-20">
        <h2 className="font-black text-3xl sm:text-5xl md:text-9xl text-center mb-8 md:mb-12 lg:mb-20 uppercase italic tracking-tighter text-black">
          HIT US <span className="text-[#ff4d00]">UP</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 border-2 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
              <h3 className="font-black text-2xl md:text-3xl uppercase italic mb-3 md:mb-4 flex items-center gap-2 text-black">
                <span className="text-[#ff4d00]">📍</span> LOCATION
              </h3>
              <div className="font-mono text-base md:text-xl space-y-1 md:space-y-2 text-black">
                <p className="font-black">Wings N Taps - South Side</p>
                <p>5802 Yorktown Blvd, Ste A101</p>
                <p>Corpus Christi, TX 78414</p>
              </div>
            </div>

            <div className="bg-zinc-300 aspect-video border-2 sm:border-4 border-black flex items-center justify-center rotate-1 shadow-lg md:shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.482081682!2d-97.394857!3d27.653457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8660639999999999%3A0x0!2zMjfCsDM5JzEyLjQiTiA5N8KwMjMnNDEuNSJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-black text-white p-6 md:p-8 border-2 sm:border-4 border-[#ffbb00] shadow-[6px_6px_0px_0px_#ffbb00] md:shadow-[10px_10px_0px_0px_#ffbb00] rotate-1">
              <h3 className="font-black text-2xl md:text-3xl uppercase italic mb-4 md:mb-6 text-[#ffbb00]">CONTACT INFO</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-sans uppercase tracking-widest mb-1">Telephone</span>
                  <span className="text-xl md:text-2xl font-black">(361) 299-0392</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-sans uppercase tracking-widest mb-1">Hours</span>
                  <div className="text-xs md:text-sm font-bold space-y-1">
                    <p>MON-TUE-WED: <span className="float-right text-[#ffbb00]">11AM - 10PM</span></p>
                    <p>THURSDAY: <span className="float-right text-[#ffbb00]">11AM - 11PM</span></p>
                    <p>FRI-SAT: <span className="float-right text-[#ffbb00]">10AM - 12AM</span></p>
                    <p>SUNDAY: <span className="float-right text-[#ffbb00]">10AM - 10PM</span></p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-sans uppercase tracking-widest mb-1">Email</span>
                  <span className="text-[#ffbb00] font-bold text-sm md:text-base">INFO@WINGSNTAPS.COM</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 sm:border-4 border-black rotate-[-2deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-2xl md:text-3xl uppercase italic mb-4 md:mb-6 text-black">STALK US</h3>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <a href="https://www.facebook.com/share/1CwRYakL27/" target="_blank" rel="noreferrer" className="px-4 md:px-6 py-2 md:py-3 border-2 md:border-2 border-black font-black text-black uppercase hover:bg-black hover:text-white transition-all text-xs md:text-sm flex-1 md:flex-none text-center">
                  FACEBOOK
                </a>
                <a href="https://www.instagram.com/wingsntaps/" target="_blank" rel="noreferrer" className="px-4 md:px-6 py-2 md:py-3 border-2 md:border-2 border-black font-black text-black uppercase hover:bg-black hover:text-white transition-all text-xs md:text-sm flex-1 md:flex-none text-center">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
