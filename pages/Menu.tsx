import React, { useState, useRef, useEffect } from 'react';

// Importing local assets
import appetizersImg from '../images/appetizers.png';
import saladsSoupsImg from '../images/saladsAndSoups.png';
import wingsTendonsImg from '../images/wingsAndTendons.png';
import sandwichesBurgersImg from '../images/sandwichesAndBurgers.png';
import kidsMenuImg from '../images/kidsMenu.png';
import flavorsImg from '../images/flavors.png';
import miniTacos from '../images/miniTacos.png';
import sides from '../images/sides1.png';
import desserts from '../images/desserts.png';

/* =========================
   Static Background Mapping
========================= */
const categoryBackgrounds: Record<string, string> = {
  Appetizers: appetizersImg,
  Salads: saladsSoupsImg,
  'Wings & Tenders': wingsTendonsImg,
  Flavors: flavorsImg,
  'Sandwiches & Burgers': sandwichesBurgersImg,
  'Mini Tacos': miniTacos,
  Sides: sides,
  Kids: kidsMenuImg,
  Desserts: desserts,
};

/* =========================
   Menu Data
========================= */
const menuData = {
  Appetizers: [
    { name: 'Fried Pickle Pears or Chips', desc: 'Hand breaded in our signature batter. Served with your choice of dressing.', price: 'Market' },
    { name: 'Battered Avocado Fries', desc: 'Thick slices of avocado coated in a light, crispy batter. Served with a chipotle ranch or cilantro lime dipping sauce.', price: 'Market' },
    { name: 'Bacon Wrapped Asparagus or Brussels Sprouts', desc: 'Sweet & Spicy (brown sugar & cayenne), Cheesy (pepper jack or goat cheese), or Texas Heat (jalapeño slice inside).', price: 'Market' },
    { name: 'Onion Rings', desc: 'Full or half order. Served with your choice of dressing.', price: 'Market' },
    { name: 'Beer - Battered Mushrooms', desc: 'Hand battered mushrooms, fried golden and served hot with a creamy dip.', price: 'Market' },
    { name: 'Fried Mozzarella', desc: 'Bold-cut mozzarella fried to perfection. Served with ranch or marinara.', price: 'Market' },
    { name: 'Buffalo Bites', desc: 'Hand-breaded bite-sized boneless wings tossed in your favorite sauce.', price: 'Market' },
    { name: 'Pork Belly Bites', desc: 'Crispy bite-sized pieces of tender pork belly caramelized and seasoned.', price: 'Market' },
    { name: 'WnT Waffle Fry Nachos', desc: 'Chicken, queso, red onions, cilantro. Choose your sauce.', price: 'Market' },
    { name: 'Pick em’ 3 Trio', desc: 'Select any three signature appetizers to create your sampler.', price: 'Market' },
    { name: 'Soup of the Day', desc: 'Freshly prepared daily. Ask about today’s selections.', price: 'Market' },
  ],
  Salads: [
    { name: 'Chopped Salad', desc: 'Romaine, tomatoes, cucumbers, carrots, roasted corn, bacon, blue cheese. Tossed in ranch.', price: 'Market' },
    { name: 'Classic Caesar', desc: 'Romaine topped with parmesan and croutons. Add grilled chicken.', price: 'Market' },
    { name: 'House Salad', desc: 'Mixed greens, tomato, cucumber, red onion, and choice of dressing.', price: 'Market' },
  ],
  'Wings & Tenders': [
    { name: 'Wings', desc: 'Tossed in your choice of sauce. Served with carrots, celery, and dressing.', price: 'Market' },
    { name: 'Wings Combos', desc: 'Wings with one side and dressing.', price: 'Market' },
    { name: 'Tenders', desc: 'Hand-battered chicken tenders tossed in your choice of sauce.', price: 'Market' },
  ],
  Flavors: [
    { name: 'Signature Sauces', desc: 'Buffalo Hot, Buffalo Original, Nashville Hot, Jackie Chan, Sweet Chili Jerk, Honey BBQ, Garlic Parmesan, Texas Gold, Atomic Habanero, Bayou Blast, Teriyaki Glaze, Lemon Pepper Wet.' },
    { name: 'Dry Rubs', desc: 'Lemon Pepper, Cajun, Ranch.' },
  ],
  'Sandwiches & Burgers': [
    { name: 'Spicy Chicken Sandwich', desc: 'Hand-breaded fried chicken tossed in sauce with lettuce, tomato, pickles.', price: 'Market' },
    { name: 'South Texas Bird', desc: 'Fried chicken breast, pepper jack, jalapeño slaw, chipotle mayo.', price: 'Market' },
    { name: 'Crispy Chicken Sandwich', desc: 'Hand-breaded chicken, mayo, pickles.', price: 'Market' },
    { name: 'Grilled Chicken Sandwich', desc: 'Grilled breast with jack cheese, lettuce, tomato, avocado.', price: 'Market' },
    { name: 'Nashville Hot Honey Chicken', desc: 'Crispy chicken with Nashville heat and hot honey drizzle.', price: 'Market' },
    { name: 'Chicken Burger (BEK)', desc: 'Our signature chicken burger prepared to perfection.', price: 'Market' },
    { name: 'Smash Burger', desc: 'Two 4oz patties with lettuce, onion, tomato, pickles, house sauce.', price: 'Market' },
    { name: 'Southwest Burger', desc: 'Onion rings, bacon, BBQ sauce, and cheese.', price: 'Market' },
  ],
  'Mini Tacos': [
    { name: 'Fish Tacos', desc: 'Fried or grilled, served with slaw and avocado.', price: 'Market' },
    { name: 'Shrimp Tacos', desc: 'Fried or grilled, served with slaw and avocado.', price: 'Market' },
    { name: 'Battered Avocado Tacos', desc: 'Baja style with red cabbage slaw, pico, chipotle cream.', price: 'Market' },
  ],
  Sides: [
    { name: 'Classic Sides', desc: 'Fries, Sweet Potato Fries, Mac & Cheese, Coleslaw, Side House Salad, Side Caesar.', price: 'Market' },
    { name: 'Street Corn Cups', desc: 'Elote-style corn with cotija, lime, chili dust.', price: 'Market' },
  ],
  Kids: [
    { name: 'Chicken Tenders', desc: 'Hand-breaded tenders with dipping sauce.', price: 'Market' },
    { name: 'Mac & Cheese', desc: 'Creamy classic comfort food.', price: 'Market' },
    { name: 'Burger Sliders', desc: 'Mini beef patties on soft buns.', price: 'Market' },
    { name: 'Grilled Cheese', desc: 'Melted cheese on toasted bread.', price: 'Market' },
    { name: 'Fresh Fruit Side', desc: 'Seasonal fruit selection.', price: 'Market' },
  ],
  Desserts: [
    { name: 'Churro Bites', desc: 'Warm and fluffy with cinnamon sugar.', price: 'Market' },
    { name: 'Cake Balls', desc: 'Assorted cake balls with moist centers.', price: 'Market' },
    { name: 'Warm Brownie', desc: 'Served with Blue Bell vanilla ice cream.', price: 'Market' },
    { name: 'Cheesecake (Mike’s Pies)', desc: 'Smooth cheesecake with buttery crust.', price: 'Market' },
    { name: 'Fried Sweets', desc: 'Fried Brownies, Twinkies, Cookies & Cream, or Oreos.', price: 'Market' },
  ],
};

type Category = keyof typeof menuData;
const categories = Object.keys(menuData) as Category[];

/* =========================
   Component
========================= */
const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Appetizers');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Partial<Record<Category, HTMLDivElement>>>({});

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const pivot = container.scrollTop + container.clientHeight * 0.3;
        let current: Category = categories[0];

        for (const cat of categories) {
          const el = sectionRefs.current[cat];
          if (el && el.offsetTop <= pivot) current = cat;
        }

        setActiveCategory(current);
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleTabClick = (cat: Category) => {
    setActiveCategory(cat);
    const container = scrollContainerRef.current;
    const section = sectionRefs.current[cat];
    if (container && section) {
      container.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans pt-8 md:pt-12 lg:pt-24 pb-12 relative overflow-hidden" style={{ backgroundColor: '#fcfcfc' }}>
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-all duration-700"
        style={{ backgroundImage: `url(${categoryBackgrounds[activeCategory]})` }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4 mb-16">
        <header className="text-center mb-12">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase text-white drop-shadow-lg">
            <span style={{ WebkitTextStroke: '1px rgba(128,128,128,0.9)' }}>THE</span>{' '}
            <span className="text-[#ffbb00]">GOODS</span>
          </h2>
          <p className="text-white mt-6 italic font-black bg-[#f4af25]" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.6)' }}>
            World-class wings, ice-cold taps, and the boldest flavors in Corpus Christi.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`px-6 py-3 rounded-md border-2 font-black uppercase tracking-widest transition-all ${
                activeCategory === category
                  ? 'bg-[#ffbb00] text-black border-[#ffbb00] shadow-[4px_4px_0px_black]'
                  : 'bg-black/90 text-white border-white/20 hover:border-[#ffbb00]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="p-8 bg-black/80 rounded-2xl border-4 border-black shadow-[20px_20px_0px_rgba(255,187,0,1)]">
          <div ref={scrollContainerRef} className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {categories.map((category) => (
              <div key={category} ref={(el) => { if (el) sectionRefs.current[category] = el; }} className="mb-12">
                {menuData[category].map((item, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-6 mb-6">
                    <h3 className="text-2xl font-black text-[#ffbb00] uppercase">
                      {item.name}
                    </h3>
                    <p className="text-white italic mt-2">{item.desc}</p>
                    {item.price && (
                      <div className="mt-3 text-sm font-black uppercase tracking-widest">
                        <span className="text-[#ffbb00] underline">Price</span>{' '}
                        <span className="text-white">{item.price}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ffbb00; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #e6a800; }
      `}</style>
    </div>
  );
};

export default Menu;