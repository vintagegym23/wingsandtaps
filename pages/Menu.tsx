// import React, { useState } from 'react';

// // Importing local assets
// import appetizersImg from '../images/appetizers.png';
// import saladsSoupsImg from '../images/saladsAndSoups.png';
// import wingsTendonsImg from '../images/wingsAndTendons.png';
// import sandwichesBurgersImg from '../images/sandwichesAndBurgers.png';
// import kidsMenuImg from '../images/kidsMenu.png';
// import drinksImg from '../images/drinks.png';

// const Menu: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState('Appetizers');

//   const categoryBackgrounds: Record<string, string> = {
//     'Appetizers': appetizersImg,
//     'Salads': saladsSoupsImg,
//     'Wings & Tenders': wingsTendonsImg,
//     'Flavors': wingsTendonsImg,
//     'Sandwiches & Burgers': sandwichesBurgersImg,
//     'Mini Tacos': sandwichesBurgersImg,
//     'Sides': appetizersImg,
//     'Kids': kidsMenuImg,
//     'Desserts': drinksImg
//   };

//   const menuData = {
//     'Appetizers': [
//       { name: 'Fried Pickle Pears or Chips', desc: 'Hand breaded in our signature batter. Served with your choice of dressing.', price: 'Market' },
//       { name: 'Battered Avocado Fries', desc: 'Thick slices of avocado coated in a light, crispy batter. Served with a chipotle ranch or cilantro lime dipping sauce.', price: 'Market' },
//       { name: 'Bacon Wrapped Asparagus or Brussels Sprouts', desc: 'The Sweet & Spicy: Brown sugar and cayenne. The Cheesy: Pepper jack or goat cheese. The Texas Heat: Fresh jalapeño slice.', price: 'Market' },
//       { name: 'Onion Rings', desc: 'Always a winner, try a full or half order. Served with your choice of dressing.', price: 'Market' },
//       { name: 'Beer - Battered Mushrooms', desc: 'Hand battered mushrooms, fried golden and served hot with a creamy dip.', price: 'Market' },
//       { name: 'Fried Mozzarella', desc: 'Bold-cut mozzarella fried to perfection; crunchy shell with stretchy cheese inside. Served with house-made ranch, or marinara. Try it Nashville style!', price: 'Market' },
//       { name: 'Buffalo Bites', desc: 'Hand - breaded bite-sized version of our boneless wings. Tossed in your favorite wing sauce and served with your choice of dressing.', price: 'Market' },
//       { name: 'Pork Belly Bites', desc: 'Crispy bite-sized pieces of tender pork belly caramelized and perfectly seasoned.', price: 'Market' },
//       { name: 'WnT Waffle Fry Nachos', desc: 'Topped with chicken, queso, red onions, and cilantro. Choose your sauce.', price: 'Market' },
//       { name: 'Pick em’ 3 Trio', desc: 'Mix and match your three favorite starters.', price: 'Market' },
//       { name: 'Soup of the Day', desc: 'Ask your server about our 2 or 3 different daily rotations.', price: 'Market' }
//     ],
//     'Salads': [
//       { name: 'Chopped Salad', desc: 'Romaine lettuce, tomatoes, cucumbers, shredded carrots, roasted corn, bacon, and blue cheese. Tossed in ranch dressing. Try it Buffalo style!', price: 'Market' },
//       { name: 'Classic Caesar', desc: 'Romaine lettuce topped with parmesan and croutons. Add grilled chicken.', price: 'Market' },
//       { name: 'House Salad', desc: 'Bed of mix lettuce, tomato, cucumber, red onion, and your choice of dressing. Add protein.', price: 'Market' }
//     ],
//     'Wings & Tenders': [
//       { name: 'Wings', desc: 'Tossed in your choice of sauce, include carrots, celery, and dressing. Available in 5, 10, 15, or 20.', price: 'Market' },
//       { name: 'Wings Combos', desc: 'Tossed in your choice of sauce, served with one side and dressing. Available in 5, 10, 15, or 20.', price: 'Market' },
//       { name: 'Tenders', desc: 'Juicy chicken strips with hand-battered seasoned coating; classic and satisfying. Tossed in your choice of sauce, served with one side.', price: 'Market' }
//     ],
//     'Flavors': [
//       { name: 'Sauces', desc: 'Buffalo Hot, Buffalo Original, Nashville Hot, Jackie Chan, Sweet Chili Jerk, Honey BBQ, and Garlic Parmesan.' },
//       { name: 'Dry Rubs', desc: 'Lemon Pepper, Cajun, and Ranch.' }
//     ],
//     'Sandwiches & Burgers': [
//       { name: 'Spicy Chicken Sandwich', desc: 'Hand-breaded and fried, tossed in sauce with lettuce, tomato, and pickles; served with a side.', price: 'Market' },
//       { name: 'South Texas Bird', desc: 'Fried chicken breast, pepper jack, jalapeño slaw, and chipotle mayo on a toasted bun.', price: 'Market' },
//       { name: 'Crispy Chicken Sandwich', desc: 'Hand-breaded chicken with mayo and pickles.', price: 'Market' },
//       { name: 'Grilled Chicken Sandwich', desc: 'Grilled breast with jack cheese, lettuce, tomato, and avocado.', price: 'Market' },
//       { name: 'Nashville Hot Honey Chicken', desc: 'Served with slaw.', price: 'Market' },
//       { name: 'Chicken Burger (BEK)', desc: '', price: 'Market' },
//       { name: 'Smash Burger', desc: 'Two 4oz patties with lettuce, onion, tomato, and pickles.', price: 'Market' },
//       { name: 'Southwest Burger', desc: 'Also referred to as South of the Border burger, featuring onion rings, bacon, BBQ sauce, and cheese.', price: 'Market' }
//     ],
//     'Mini Tacos': [
//       { name: 'Fish Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
//       { name: 'Shrimp Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
//       { name: 'Battered Avocado Tacos', desc: 'Baja style with red cabbage slaw, pico de gallo, chipotle cream, pickled jalapeño garnish, cotija cheese, and a drizzle of hot honey or sriracha lime sauce.', price: 'Market' }
//     ],
//     'Sides': [
//       { name: 'Options', desc: 'Fries, Sweet Potato Fries, Mac & Cheese, Coleslaw, Side House salad, and Side Caesar salad.', price: 'Market' },
//       { name: 'Street Corn Cups', desc: 'Creamy elote-style corn with cotija, lime, and chili dust.', price: 'Market' }
//     ],
//     'Kids': [
//     { name: 'Chicken Tenders', desc: 'Try it with honey mustard or BBQ sauce.', price: 'Market' },
//     { name: 'Mac & Cheese', desc: 'Classic comfort food.', price: 'Market' },
//     { name: 'Burger Sliders', desc: 'A trio of mini beef burgers.', price: 'Market' },
//     { name: 'Grilled Cheese', desc: 'Served with tomato soup.', price: 'Market' },
//     { name: 'Gotta have fruit (no Melon)', desc: 'Fresh fruit selection.', price: 'Market' }
//    ],
//     'Desserts': [
//       { name: 'Churro Bites', desc: 'Warm, fluffy centers with a crispy cinnamon-sugar finish.', price: 'Market' },
//       { name: 'Cake Balls', desc: 'Chef’s selection of assorted cake balls with moist centers.', price: 'Market' },
//       { name: 'Brownie', desc: 'Brownie served warm with a scoop of blue bell vanilla ice cream.', price: 'Market' },
//       { name: 'Cheesecake (Mike’s Pies)', desc: 'Smooth, decadent cheesecake served chilled with a buttery crust.', price: 'Market' },
//       { name: 'Fried Brownies', desc: '', price: 'Market' },
//       { name: 'Fried Twinkies', desc: '', price: 'Market' },
//       { name: 'Fried Cookies & Cream', desc: '', price: 'Market' },
//       { name: 'Fried Oreos', desc: '', price: 'Market' }
//     ]
//   };

//   return (
//     <div
//       className="min-h-screen font-sans pt-8 md:pt-12 lg:pt-24 pb-12 transition-all duration-700 ease-in-out relative overflow-hidden"
//       style={{ backgroundColor: '#fcfcfc' }}
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-all duration-1000 scale-100"
//         style={{ backgroundImage: `url(${categoryBackgrounds[activeCategory]})` }}
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10 px-3 sm:px-4 md:px-6 mb-12 md:mb-20">
//         {/* Header Section */}
//         <header className="text-center mb-12 md:mb-16 p-4 sm:p-6 md:p-8">
//           <h2 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
//             <span style={{ WebkitTextStroke: '1px rgba(128,128,128,0.9)' }}>THE</span> <span className="text-[#ffbb00]">GOODS</span>
//           </h2>
//           <p
//             className="text-white mt-4 md:mt-6 italic text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-tight font-black drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
//           >
//             World-class wings, ice-cold taps, and the boldest flavors in Corpus Christi.
//           </p>
//         </header>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
//           {Object.keys(menuData).map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category as keyof typeof menuData)}
//               className={`px-3 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md border-2 text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === category
//                   ? 'bg-[#ffbb00] text-black border-[#ffbb00] shadow-[4px_4px_0px_0px_black]'
//                   : 'bg-black/90 text-white border-white/20 hover:border-[#ffbb00]'
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Scrollable Menu Items Container */}
//         <div className="relative p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm rounded-2xl border-2 sm:border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,187,0,1)] md:shadow-[20px_20px_0px_0px_rgba(255,187,0,1)]">
//           <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//             <div className="grid grid-cols-1 gap-4 md:gap-6">
//               {menuData[activeCategory as keyof typeof menuData].map((item: any, idx) => (
//                 <div key={idx} className="border-b border-white/10 pb-6 md:pb-8 group last:border-0">
//                   <div className="flex justify-between items-start mb-2 md:mb-3 gap-2">
//                     <h3 className="text-lg sm:text-2xl font-black text-[#ffbb00] drop-shadow-[0_2px_2px_rgba(0,0,0,1)] group-hover:text-white transition-colors uppercase tracking-tight">
//                       {item.name}
//                     </h3>
//                     {(item.isSpicy || item.name.includes('Heat')) && <span className="text-xl md:text-2xl animate-pulse flex-shrink-0">🔥</span>}
//                   </div>

//                   <p className="text-white text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed font-black italic drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">
//                     {item.desc}
//                   </p>

//                   <div className="flex flex-wrap gap-4 md:gap-8 text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
//                     {/* Specific Pricing for New Appetizers */}
//                     {item.price && (
//                        <div className="flex items-center gap-2">
//                         <span className="text-[#ffbb00] font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)] underline underline-offset-4">PRICE</span>
//                         <span className="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">{item.price}</span>
//                       </div>
//                     )}
                    
//                     {/* Pricing for existing Legacy Categories */}
//                     {item.veg !== undefined && item.veg !== null && (
//                       <div className="flex items-center gap-2">
//                         <span className="text-green-500 font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)] underline underline-offset-4">VEG</span>
//                         <span className="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">${item.veg.toFixed(2)}</span>
//                       </div>
//                     )}
//                     {item.nonVeg !== undefined && item.nonVeg !== null && (
//                       <div className="flex items-center gap-2">
//                         <span className="text-red-500 font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)] underline underline-offset-4">NON-VEG</span>
//                         <span className="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">${item.nonVeg.toFixed(2)}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Inline styles for the custom scrollbar */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(0, 0, 0, 0.2);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #ffbb00;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #e6a800;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useRef, useEffect } from 'react';

// Importing local assets
import appetizersImg from '../images/appetizers.png';
import saladsSoupsImg from '../images/saladsAndSoups.png';
import wingsTendonsImg from '../images/wingsAndTendons.png';
import sandwichesBurgersImg from '../images/sandwichesAndBurgers.png';
import kidsMenuImg from '../images/kidsMenu.png';
// import drinksImg from '../images/drinks.png';
import flavorsImg from '../images/flavors.png';
import miniTacos from '../images/miniTacos.png';
import sides from '../images/sides1.png';
import desserts from '../images/desserts.png';

// Static lookup – lives outside the component so it never re-creates on render
const categoryBackgrounds: Record<string, string> = {
  'Appetizers': appetizersImg,
  'Salads': saladsSoupsImg,
  'Wings & Tenders': wingsTendonsImg,
  'Flavors': flavorsImg,
  'Sandwiches & Burgers': sandwichesBurgersImg,
  'Mini Tacos': miniTacos,
  'Sides': sides,
  'Kids': kidsMenuImg,
  'Desserts': desserts,
};

const menuData = {
    'Appetizers': [
      { name: 'Fried Pickle Pears or Chips', desc: 'Hand breaded in our signature batter. Served with your choice of dressing.', price: 'Market' },
      { name: 'Battered Avocado Fries', desc: 'Thick slices of avocado coated in a light, crispy batter. Served with a chipotle ranch or cilantro lime dipping sauce.', price: 'Market' },
      { name: 'Bacon Wrapped Asparagus or Brussels Sprouts', desc: 'The Sweet & Spicy: Brush bacon with brown sugar and cayenne. The Cheesy: Stuff with pepper jack or goat cheese. The Texas Heat: Add a slice of jalapeño inside.', price: 'Market' },
      { name: 'Onion Rings', desc: 'Always a winner, try a full or half order. Served with your choice of dressing.', price: 'Market' },
      { name: 'Beer - Battered Mushrooms', desc: 'Hand battered mushrooms, fried golden and served hot with a creamy dip.', price: 'Market' },
      { name: 'Fried Mozzarella', desc: 'Bold-cut mozzarella fried to perfection; crunchy shell with stretchy cheese inside. Served with house-made ranch, or marinara. Try it Nashville style!', price: 'Market' },
      { name: 'Buffalo Bites', desc: 'Hand - breaded bite-sized version of our boneless wings. Tossed in your favorite wing sauce and served with your choice of dressing.', price: 'Market' },
      { name: 'Pork Belly Bites', desc: 'Crispy bite-sized pieces of tender pork belly caramelized and perfectly seasoned.', price: 'Market' },
      { name: 'WnT Waffle Fry Nachos', desc: 'Topped with chicken, queso, red onions, and cilantro. Choose your sauce.', price: 'Market' },
      { name: 'Pick em’ 3 Trio', desc: 'Select any three of our signature appetizers to create your own sampler.', price: 'Market' },
      { name: 'Soup of the Day', desc: 'Freshly prepared daily; ask your server about our 2 or 3 different kinds.', price: 'Market' }
    ],
    'Salads': [
      { name: 'Chopped Salad', desc: 'Romaine lettuce, tomatoes, cucumbers, shredded carrots, roasted corn, bacon, and blue cheese. Tossed in ranch dressing. Try it Buffalo style!', price: 'Market' },
      { name: 'Classic Caesar', desc: 'Romaine lettuce topped with parmesan and croutons. Add grilled chicken for an extra kick.', price: 'Market' },
      { name: 'House Salad', desc: 'Bed of mix lettuce, tomato, cucumber, red onion, and your choice of dressing. Add protein to make it a meal.', price: 'Market' }
    ],
    'Wings & Tenders': [
      { name: 'Wings', desc: 'Tossed in your choice of sauce, include carrots, celery, and dressing. Available in 5, 10, 15, or 20 count.', price: 'Market' },
      { name: 'Wings Combos', desc: 'Tossed in your choice of sauce, served with one side and dressing. Available in 5, 10, 15, or 20 count.', price: 'Market' },
      { name: 'Tenders', desc: 'Juicy chicken strips with hand-battered seasoned coating; classic and satisfying. Tossed in your choice of sauce, served with one side.', price: 'Market' }
    ],
    'Flavors': [
      { name: 'Signature Sauces', desc: 'Buffalo Hot, Buffalo Original, Nashville Hot, Jackie Chan, Sweet Chili Jerk, Honey BBQ, Garlic Parmesan, Texas Gold, Atomic Habanero, Bayou Blast, Teriyaki Glaze, Lemon Pepper Wet.' },
      { name: 'Dry Rubs', desc: 'Lemon Pepper, Cajun, and Ranch.' }
    ],
    'Sandwiches & Burgers': [
      { name: 'Spicy Chicken Sandwich', desc: 'Hand-breaded and fried chicken breast tossed in choice of sauce, lettuce, tomato, and pickles; served with your choice of side.', price: 'Market' },
      { name: 'South Texas Bird', desc: 'Fried chicken breast, pepper jack cheese, jalapeño slaw, and chipotle mayo on a toasted bun.', price: 'Market' },
      { name: 'Crispy Chicken Sandwich', desc: 'Hand-breaded chicken, mayo, and pickles.', price: 'Market' },
      { name: 'Grilled Chicken Sandwich', desc: 'Grilled breast with jack cheese, lettuce, tomato, and avocado.', price: 'Market' },
      { name: 'Nashville Hot Honey Chicken', desc: 'Crispy chicken with Nashville heat, a drizzle of hot honey, and cooling slaw.', price: 'Market' },
      { name: 'Chicken Burger (BEK)', desc: 'Our signature chicken burger prepared to perfection.', price: 'Market' },
      { name: 'Smash Burger', desc: '2 – 4oz patties with lettuce, onion, tomato, pickles, and our signature house sauce.', price: 'Market' },
      { name: 'Southwest Burger', desc: 'Also known as the South of the Border burger, topped with onion rings, bacon, BBQ sauce, and cheese.', price: 'Market' }
    ],
    'Mini Tacos': [
      { name: 'Fish Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
      { name: 'Shrimp Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
      { name: 'Battered Avocado Tacos', desc: 'Baja style topped with shredded red cabbage slaw, pico de gallo, and chipotle cream. Garnish with Texas Heat pickled jalapeños, cotija cheese, and hot honey.', price: 'Market' }
    ],
    'Sides': [
      { name: 'Classic Sides', desc: 'Fries, Sweet Potato Fries, Mac & Cheese, Coleslaw, Side House salad, and Side Caesar salad.', price: 'Market' },
      { name: 'Street Corn Cups', desc: 'Creamy elote-style corn with cotija cheese, lime, and chili dust.', price: 'Market' }
    ],
    'Kids': [
      { name: 'Chicken Tenders', desc: 'Hand-breaded tenders served with your choice of dipping sauce.', price: 'Market' },
      { name: 'Mac & Cheese', desc: 'Creamy, cheesy, and classic comfort food.', price: 'Market' },
      { name: 'Burger Sliders', desc: 'Mini beef patties served on soft buns.', price: 'Market' },
      { name: 'Grilled Cheese', desc: 'Melted cheese on toasted bread; a kid-approved favorite.', price: 'Market' },
      { name: 'Fresh Fruit Side', desc: 'A healthy selection of seasonal fruits (contains no melon).', price: 'Market' }
    ],
    'Desserts': [
      { name: 'Churro Bites', desc: 'Warm, fluffy centers with a crispy cinnamon-sugar finish.', price: 'Market' },
      { name: 'Cake Balls', desc: "Chef's selection of assorted cake balls with moist centers.", price: 'Market' },
      { name: 'Warm Brownie', desc: 'Brownie served warm with a scoop of Blue Bell vanilla ice cream.', price: 'Market' },
      { name: 'Cheesecake (Mike’s Pies)', desc: 'Smooth, decadent cheesecake served chilled with a buttery crust.', price: 'Market' },
      { name: 'Fried Sweets', desc: 'Your choice of Fried Brownies, Fried Twinkies, Fried Cookies & Cream, or Fried Oreos.', price: 'Market' }
  ],
};

// Ordered tab names derived once at module level
const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Appetizers');

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // One ref per category section – used for scroll-spy and click-to-scroll
  const sectionRefs = useRef<Partial<Record<keyof typeof menuData, HTMLDivElement>>>({});

  // Scroll-spy: rAF-throttled listener updates the active tab to whichever section's
  // top edge is nearest to 30% down from the container top.
  // Runs once – sectionRefs and categories are stable module-level values.
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // pivot = 30% into the visible area; the section whose header is at or above
        // this point is considered "in view"
        const pivot = container.scrollTop + container.clientHeight * 0.3;
        let active: keyof typeof menuData = categories[0];
        for (const cat of categories) {
          const el = sectionRefs.current[cat];
          if (el && el.offsetTop <= pivot) active = cat;
        }
        setActiveCategory(active);
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Immediately highlight the clicked tab and smooth-scroll to its section
  const handleTabClick = (cat: keyof typeof menuData) => {
    setActiveCategory(cat);
    const container = scrollContainerRef.current;
    const section = sectionRefs.current[cat];
    if (container && section) {
      container.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen font-sans pt-8 md:pt-12 lg:pt-24 pb-12 transition-all duration-700 ease-in-out relative overflow-hidden"
      style={{ backgroundColor: '#fcfcfc' }}
    >
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-all duration-1000 scale-100"
        style={{ backgroundImage: `url(${categoryBackgrounds[activeCategory]})` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 px-3 sm:px-4 md:px-6 mb-12 md:mb-20">
        <header className="text-center mb-12 md:mb-16 p-4 sm:p-6 md:p-8">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
            <span style={{ WebkitTextStroke: '1px rgba(128,128,128,0.9)' }}>THE</span> <span className="text-[#ffbb00]">GOODS</span>
          </h2>
          <p className="text-white mt-4 md:mt-6 italic text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-tight font-black drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            World-class wings, ice-cold taps, and the boldest flavors in Corpus Christi.
          </p>
        </header>

        {/* Tab bar – now acts as scroll-spy anchors */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
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

        <div className="relative p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm rounded-2xl border-2 sm:border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,187,0,1)] md:shadow-[20px_20px_0px_0px_rgba(255,187,0,1)]">
          {/* Single continuous scrollable list – all categories in sequence */}
          <div ref={scrollContainerRef} className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {categories.map((category) => (
              <div
                key={category}
                ref={(el: HTMLDivElement | null) => { if (el) sectionRefs.current[category] = el; }}
              >
                <div className="grid grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-12">
                  {menuData[category].map((item: any, idx: number) => (
                    <div key={idx} className="border-b border-white/10 pb-6 md:pb-8 group last:border-0">
                      <div className="flex justify-between items-start mb-2 md:mb-3 gap-2">
                        <h3 className="text-lg sm:text-2xl font-black text-[#ffbb00] drop-shadow-[0_2px_2px_rgba(0,0,0,1)] group-hover:text-white transition-colors uppercase tracking-tight">
                          {item.name}
                        </h3>
                        {(item.isSpicy || item.name.includes('Heat') || item.name.includes('Spicy') || item.name.includes('Atomic') || item.name.includes('Nashville')) && (
                          <span className="text-xl md:text-2xl animate-pulse flex-shrink-0">🔥</span>
                        )}
                      </div>

                      <p className="text-white text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed font-black italic drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 md:gap-8 text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
                        {item.price && (
                          <div className="flex items-center gap-2">
                            <span className="text-[#ffbb00] font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)] underline underline-offset-4">PRICE</span>
                            <span className="text-white font-black drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">{item.price}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ffbb00; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #e6a800; }
      `}</style>
    </div>
  );
};

export default Menu;