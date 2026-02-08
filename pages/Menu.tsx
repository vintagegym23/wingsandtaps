import React, { useState } from 'react';

// Importing local assets with updated naming
import appetizersImg from '../images/appetizers.png';
import saladsSoupsImg from '../images/saladsAndSoups.png';
import wingsTendonsImg from '../images/wingsAndTendons.png';
import kidsMenuImg from '../images/kidsMenu.png';
import drinksImg from '../images/drinks.png';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Appetizers');

  const categoryBackgrounds: Record<string, string> = {
    'Appetizers': appetizersImg,
    'Salads & Soups': saladsSoupsImg,
    'Wings & Tendons': wingsTendonsImg,
    'Kids Menu': kidsMenuImg,
    'Drinks': drinksImg
  };

  const menuData = {
    'Appetizers': [
      { name: 'Paneer 65', desc: 'Deep-fried spicy paneer cubes tossed with curry leaves and green chilies.', veg: 12.00, nonVeg: null },
      { name: 'Samosa Chaat', desc: 'Crispy samosas crushed and topped with chickpeas, yogurt, and tangy chutneys.', veg: 9.00, nonVeg: null },
      { name: 'Gobi Manchurian', desc: 'Crispy cauliflower florets tossed in a spicy Indo-Chinese manchurian sauce.', veg: 11.00, nonVeg: null },
      { name: 'Chilli Chicken', desc: 'Tender chicken pieces sautéed with bell peppers, onions, and spicy soy sauce.', veg: null, nonVeg: 13.00, isSpicy: true }
    ],
    'Salads & Soups': [
      { name: 'Sweet Corn Soup', desc: 'A classic soup featuring sweet corn kernels in a creamy base.', veg: 7.00, nonVeg: 8.00 },
      { name: 'Manchow Soup', desc: 'Indo-Chinese soup with a tangy flavour, served with crispy noodles.', veg: 7.00, nonVeg: 8.00, isSpicy: true },
      { name: 'Garden Green Salad', desc: 'Fresh cucumber, carrots, tomatoes, and onions served with lemon wedges.', veg: 6.00, nonVeg: null },
      { name: 'Lemon Coriander Soup', desc: 'A refreshing soup with a tangy lemon broth and aromatic coriander.', veg: 7.00, nonVeg: 8.00 }
    ],
    'Wings & Tendons': [
      { name: 'Masala Wings', desc: 'Chicken wings marinated in traditional Indian spices and charcoal grilled.', veg: null, nonVeg: 14.00, isSpicy: true },
      { name: 'Garlic Parmesan Wings', desc: 'Crispy wings tossed in a buttery garlic sauce with fresh parmesan.', veg: null, nonVeg: 14.00 },
      { name: 'Spicy Chicken Tendons', desc: 'Crispy fried tendons served with a side of spicy mint mayo.', veg: null, nonVeg: 12.00, isSpicy: true },
      { name: 'BBQ Glazed Wings', desc: 'Wings coated in a smoky, sweet and spicy barbecue reduction.', veg: null, nonVeg: 14.00 }
    ],
    'Kids Menu': [
      { name: 'Mild Butter Chicken', desc: 'Creamy tomato-based chicken curry served with a mini butter naan.', veg: null, nonVeg: 10.00 },
      { name: 'Cheese Quesadilla', desc: 'Soft flour tortilla filled with melted mozzarella and mild spices.', veg: 8.00, nonVeg: 10.00 },
      { name: 'French Fries', desc: 'Classic golden crispy potato fries served with tomato ketchup.', veg: 5.00, nonVeg: null },
      { name: 'Mango Lassi Junior', desc: 'A smaller portion of our famous creamy mango yogurt drink.', veg: 4.00, nonVeg: null }
    ],
    'Drinks': [
      { name: 'Masala Chai', desc: 'Traditional Indian tea brewed with ginger, cardamom, and milk.', veg: 3.50, nonVeg: null },
      { name: 'Fresh Lime Soda', desc: 'Zesty lime juice with soda water, available sweet or salted.', veg: 5.00, nonVeg: null },
      { name: 'Thums Up / Limca', desc: 'Popular Indian carbonated soft drinks.', veg: 3.00, nonVeg: null },
      { name: 'Rose Milk', desc: 'Chilled milk infused with sweet rose syrup and basil seeds.', veg: 6.00, nonVeg: null }
    ]
  };

  return (
    <div
      className="min-h-screen font-sans pt-8 md:pt-12 lg:pt-24 pb-0 transition-all duration-700 ease-in-out relative overflow-hidden"
      style={{ backgroundColor: '#fcfcfc' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-all duration-1000 scale-100"
        style={{ backgroundImage: `url(${categoryBackgrounds[activeCategory]})` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 px-3 sm:px-4 md:px-6 mb-12 md:mb-20">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16 p-4 sm:p-6 md:p-8 bg-black/08 backdrop-blur-none rounded-xl border border-white/5">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
            <span style={{ WebkitTextStroke: '1px gray/9' }}>THE</span> <span className="text-[#ffbb00]">GOODS</span>
          </h2>
          <p
  className="text-white mt-4 md:mt-6 italic text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-tight font-black bg-[#f4af25]"
  style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.6)' }}

>
  World-class wings, ice-cold taps, and the boldest flavors in Corpus Christi.
</p>

        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md border-2 text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                ? 'bg-[#ffbb00] text-black border-[#ffbb00] shadow-[4px_4px_0px_0px_black]'
                : 'bg-black/90 text-white border-white/20 hover:border-[#ffbb00]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Container */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 p-4 sm:p-6 md:p-12 bg-black/04 backdrop-blur-sm rounded-2xl border-2 sm:border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,187,0,1)] md:shadow-[20px_20px_0px_0px_rgba(255,187,0,1)]">
          {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
            <div key={idx} className="border-b border-black/10 pb-6 md:pb-8 group">
              <div className="flex justify-between items-start mb-2 md:mb-3 gap-2">
                <h3 className="text-lg sm:text-2xl font-black text-[#ffbb00] drop-shadow-[0_2px_2px_rgba(0,0,0,1)] group-hover:text-white transition-colors uppercase tracking-tight">
                  {item.name}
                </h3>
                {item.isSpicy && <span className="text-xl md:text-2xl animate-pulse flex-shrink-0">🔥</span>}
              </div>

              <p className="text-white text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed font-black italic drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-4 md:gap-8 text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
                {item.veg !== null && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)] underline underline-offset-4">VEG</span>
                    <span className="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">${item.veg.toFixed(2)}</span>
                  </div>
                )}
                {item.nonVeg !== null && (
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)] underline underline-offset-4">NON-VEG</span>
                    <span className="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">${item.nonVeg.toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;