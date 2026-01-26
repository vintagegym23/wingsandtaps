
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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] px-4 md:px-10 mb-20 group">
        <div className="absolute inset-x-4 md:inset-x-10 inset-y-0 z-0 overflow-hidden border-4 border-black bg-zinc-800 rounded-lg">
          {/* <img 
            alt="High Energy Bar Scene" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale contrast-125" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAp9erpNHJ3TYxOdPRRChX5oybrLebsTPz_zfXwoMp6cuoP4Oq0tFGCdAOeXWVTtApFQYOr6_MylL9qCReLRe7aYx3jtEPAdvRWE2AGBRyZGprsM52I8ihR7a2AxNkHcVzT9WCBKPknO-g9TkE7o934FQYQDrhAo5Dm0PKGNfj-05ytueYK1sDS6s2Qrr8qVWJobvka6-5XGxFd_BAe8re5fk9zU78oimvLC1-K0tlDV9z1MVlKujZcnKyjVBUdP5LyKdafc7QWjCb" 
          /> */}
          <video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale contrast-125"
>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
          <div className="absolute inset-0 vhs-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-20 md:pt-32">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="max-w-3xl">
              <h1 className="text-white md:text-black text-[12vw] leading-[0.8] font-black uppercase italic mb-0 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] md:drop-shadow-none transform -rotate-3 origin-left">
                WINGS.<br/><span className="text-danger">BEER.</span><br/>SPORTS.
              </h1>
              <div className="bg-primary w-fit px-8 py-3 border-4 border-black mt-10 rotate-2 hover:rotate-0 transition-transform cursor-default">
                <p className="font-wild text-3xl md:text-5xl text-black">NO RULES. JUST SAUCES.</p>
              </div>
            </div>

            <div className="mt-20 md:mt-0 relative">
               <div className="polaroid w-64 md:w-80 rotate-6 hover:rotate-0 transition-transform">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRjEuow0jGB1Ok9cm5_-OWHw6SWtRrwHpmdN5tmHuEZPxcxbIKQscQgJ6AsSiVLII2Gozh6UxuMcM9ieiP-YNuBv3hip0kc4p2DcvZfN8j5IrB5HOlB1paZ_iKSb6vqOPc2ebNxow044_s6HpYYzvodH61FCiIZPPPzdMHjGC5bM-TmdgeaEmZlkC-DpQP1lFb5xp7Sjp3FaWfTjUIZ0l6_Jen8_sz80ZgOP9O11Y4BGddplPHs-wO3nWxyf3o13NnWy1YiPnxjric" alt="Legendary Wings" className="w-full aspect-square object-cover border-b-4 border-zinc-100" />
                  <p className="font-wild text-2xl pt-4 text-center">TONIGHT: $2 TACOS</p>
                  <div className="absolute -top-6 -right-6 bg-danger text-white p-4 rounded-full font-stencil rotate-12 shadow-xl">LIVE MUSIC</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {menuItems.map((cat, i) => (
          <div key={i} className="mb-24">
            <div className={`flex items-end gap-4 mb-10 border-l-8 border-primary pl-6`}>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">{cat.category}</h2>
              <span className="text-primary font-bold text-xl mb-3">{cat.sub}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cat.items.map((item, idx) => (
                <div key={idx} className="group bg-white rounded-xl overflow-hidden border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.name} />
                    <div className="absolute top-6 right-6 bg-primary text-black font-black px-6 py-3 rounded-lg text-2xl shadow-xl rotate-3">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-black uppercase italic">{item.name}</h3>
                      {item.heat && (
                        <div className="flex gap-1">
                          {[...Array(item.heat)].map((_, h) => (
                            <span key={h} className="material-symbols-outlined text-red-500 text-3xl">local_fire_department</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-zinc-600 text-lg leading-relaxed mb-8">{item.desc}</p>
                    <button className="w-full py-4 border-4 border-black bg-white hover:bg-black hover:text-primary font-black uppercase tracking-widest transition-all rounded-lg text-xl">
                      ADD TO ORDER
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Taps Section */}
      <section className="bg-primary py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-off-white dripping-edge transform -scale-y-100"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-8xl md:text-[12rem] font-black italic uppercase text-black tracking-tighter transform -rotate-2 origin-left">COLD TAPS.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: 'Lone Star Draft', sub: 'The National Beer of Texas', price: '$4.50' },
              { name: 'Alamo Amber Lager', sub: 'Local San Antonio Craft', price: '$6.50' },
              { name: 'Shiner Bock', sub: "Texas' Oldest Brewery", price: '$5.50' },
              { name: 'Hoppy South IPA', sub: 'Aggressive Hops, Local Grit', price: '$7.00' }
            ].map((tap, idx) => (
              <div key={idx} className="bg-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center group hover:-translate-y-2 transition-transform">
                <div>
                  <h4 className="text-3xl font-black uppercase italic group-hover:text-danger transition-colors">{tap.name}</h4>
                  <p className="font-wild text-xl text-zinc-500">{tap.sub}</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-danger italic">{tap.price}</span>
                  <p className="font-stencil text-xs text-zinc-400">PINT</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
