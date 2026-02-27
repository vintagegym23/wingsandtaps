import React from 'react';
import video from '../images/Restaurant_Video_Generation.mp4';

const menuItems = [
  {
    category: 'Legendary Wings',
    sub: '/ BONE-IN & BONELESS',
    color: 'text-primary',
    items: [
      {
        name: 'Buffalo Heat Wings',
        desc: 'Classic spicy buffalo sauce served with crisp celery and your choice of homemade ranch or blue cheese.',
        price: '$14.99',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAT6zQqqHAPg0yk8knWMUgmYHg_bTsjEbYBdtFLeSk3LSc34AA6klYgQA-Yd_A6zNMu0sN4OjsoJrQ2XKxJEA8aylCkLrWmQP0Au2AQkptu1nGUg5YGkBsRqbxRgPwhs26peMklv5E3wk9SIHfz764aoRqVqdWt0ChnunInOypWRKQz7_ReSKWQY3BgHQRgFf5N1-Lg-v-x01GU7BFnIFH9YyW7-wwHkRyPcpBEB63N9wolmbzYCMZBz0T3mvyBbOpS1jB9PvUPSHT',
        heat: 2
      },
      {
        name: 'Lemon Pepper Zest',
        desc: 'Zesty lemon pepper dry rub with a rich buttery finish. A San Antonio staple for those who want flavor.',
        price: '$13.99',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArvlUiK2c3xrC2av1VZ6h_vvgeH8E-BqbAsVU1z5FWQwEGm3LI3oQxnPVrychrcoO_-u6C5UW83L1LSrkbY5Ixr3FJMw4_V7OA9sAm0BaNC-84wHFTgyhZmR2ZOHA9s1MWEB6hRcGz-xHUUGTgwPBcOTTlbpThwl9G8TuRPfcsoHnfYjkhRx4VNAGwitXYOXWYNp76NMFrfL-Wf5zH7u9HimWIolMtc0C5YeN5lUioA_Hsfw_rpNn0V30fGyGPA81qyLo5jcZOv0kw',
        heat: 0
      }
    ]
  },
  {
    category: 'Chicken Tenders',
    sub: '/ HAND-BREADED',
    color: 'text-danger',
    items: [
      {
        name: 'South Side Strips',
        desc: '4 extra-large hand-breaded tenders served with texas toast and gravy.',
        price: '$12.99',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4KHTiYnjr5Wo1mozJrHneAhVDA2GfPePtU6xhHPSl03K9kRNgLgr_da7DDdovo2AwiWydp4Q2sSNiBl92Znt13ardq8ZrYyA5MfVlZGc4zxpAbN47Ywa4aEkIPiNAAfJR5TSXK6OqQS_DDWbWudIFb_QxiwfcioJvXEYM7PlmnwI28ce3XH9xOiy2-PQdybompHOxaQ-D4k-YPRlWHZ8Xfo2qtfPLTTivpC-4paekXhT1IccR8WgJj0io6_WSlWXo_PrfB3Q8px34'
      },
      {
        name: 'Nashville Hot Strips',
        desc: 'Our famous tenders dipped in Nashville hot oil. Served with pickles.',
        price: '$13.99',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsgY_wzxsyLXce1sxrcjPbTXqqg8LxZxA6urbvSBycvd_G42Y4fg-6teoLKQJgEoLmzEXYR1jrRGYD40nNGd7RRBrYTY-lhBjpV4U8VlReav-1jNdyaNgkk7YTZjczIQ--yUE2pDNvsYmFmOU_QIdpVtyXMcBoFubEDWg9K5Fl-ZEKnuoJtzWX9geakqFaZk6WTbJJpxQ28qiDA8uKB4SghHyg-80wvJ1OYVLPtP_dfoIyHp6DoaVvD6dqaGOp6gYW59vAA2bKwNAd'
      }
    ]
  }
];

const Home: React.FC = () => {
  return (
    <div className="relative" style={{ backgroundColor: '#f2f0eb' }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] px-2 sm:px-4 md:px-10 mb-12 md:mb-20 group">
        <div className="absolute inset-x-2 sm:inset-x-4 md:inset-x-10 inset-y-0 z-0 overflow-hidden border-2 sm:border-4 border-black bg-zinc-800 rounded-lg">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale contrast-125">
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 vhs-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-12 sm:pt-16 md:pt-32">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
            <div className="max-w-3xl w-full">
              <h1 className="text-white md:text-black text-5xl sm:text-6xl md:text-[12vw] leading-[0.8] font-black uppercase italic mb-0 transform -rotate-3 origin-left">
                WINGS.<br/><span className="text-red-600">BEER.</span><br/>SPORTS.
              </h1>
              <div className="bg-[#f4af25] w-fit px-4 sm:px-6 md:px-8 py-2 md:py-3 border-2 sm:border-4 border-black mt-6 md:mt-10 rotate-2">
                <p className="text-xl sm:text-3xl md:text-5xl text-black font-black italic uppercase">NO RULES. JUST SAUCES.</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 relative w-full md:w-auto flex justify-center md:justify-end">
              <div className="bg-white p-3 sm:p-4 pb-10 sm:pb-12 w-56 sm:w-64 md:w-80 rotate-6 shadow-xl border-2 sm:border-4 border-black">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRjEuow0jGB1Ok9cm5_-OWHw6SWtRrwHpmdN5tmHuEZPxcxbIKQscQgJ6AsSiVLII2Gozh6UxuMcM9ieiP-YNuBv3hip0kc4p2DcvZfN8j5IrB5HOlB1paZ_iKSb6vqOPc2ebNxow044_s6HpYYzvodH61FCiIZPPPzdMHjGC5bM-TmdgeaEmZlkC-DpQP1lFb5xp7Sjp3FaWfTjUIZ0l6_Jen8_sz80ZgOP9O11Y4BGddplPHs-wO3nWxyf3o13NnWy1YiPnxjric" alt="Legendary Wings" className="w-full aspect-square object-cover border-2 sm:border-4 border-black" />
                <p className="text-lg sm:text-2xl pt-2 md:pt-4 text-center font-black italic uppercase">TONIGHT: $2 TACOS</p>
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-red-600 text-white p-2 sm:p-4 rounded-full font-black rotate-12 shadow-xl border-2 sm:border-4 border-black text-sm md:text-base">LIVE MUSIC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections - Sitting on #f2f0eb background */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-12 relative z-0">
        {menuItems.map((cat, i) => (
          <div key={i} className="mb-16 md:mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-8 md:mb-10 border-l-4 md:border-l-8 border-[#f4af25] pl-4 md:pl-6">
              <h2 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter italic">{cat.category}</h2>
              <span className="text-[#f4af25] font-black text-sm md:text-xl">{cat.sub}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {cat.items.map((item, idx) => (
                <div key={idx} className="group bg-white rounded-xl overflow-hidden border-2 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
                  <div className="relative aspect-video overflow-hidden border-b-2 sm:border-b-4 border-black">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.name} />
                    <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-[#f4af25] text-black font-black px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-2xl shadow-xl rotate-3 border-2 sm:border-4 border-black">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-4 md:p-8">
                    <h3 className="text-xl sm:text-3xl font-black uppercase italic mb-2 md:mb-4">{item.name}</h3>
                    <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-4 md:mb-8 font-bold">{item.desc}</p>
                    <button className="w-full py-2 md:py-4 border-2 sm:border-4 border-black bg-white hover:bg-black hover:text-[#f4af25] font-black uppercase tracking-widest transition-all rounded-lg text-sm md:text-xl">
                      ADD TO ORDER
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Taps Section with Graph Divider */}
      <section className="relative">
        {/* Jagged Divider: Top is off-white, bottom is brand yellow */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 -translate-y-[99%]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px]">
            <path d="M0,20 L150,60 L350,10 L550,80 L800,30 L1000,70 L1200,30 V120 H0 Z" fill="#f4af25"></path>
          </svg>
        </div>

        <div className="py-16 md:py-32 px-3 sm:px-4 md:px-6 relative" style={{ backgroundColor: '#f4af25' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-7xl md:text-[12rem] font-black italic uppercase text-black tracking-tighter transform -rotate-2 origin-left mb-12 md:mb-20">COLD TAPS.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {[
                { name: 'Lone Star Draft', price: '$4.50' },
                { name: 'Alamo Amber Lager', price: '$6.50' },
                { name: 'Shiner Bock', price: '$5.50' },
                { name: 'Hoppy South IPA', price: '$7.00' }
              ].map((tap, idx) => (
                <div key={idx} className="bg-white p-4 md:p-8 border-2 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4 group hover:-translate-y-2 transition-transform">
                  <h4 className="text-xl sm:text-3xl font-black uppercase italic group-hover:text-red-600 transition-colors">{tap.name}</h4>
                  <span className="text-2xl sm:text-4xl font-black text-red-600 italic whitespace-nowrap">{tap.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
