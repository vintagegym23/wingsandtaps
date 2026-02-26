import React, { useState } from 'react';

// Importing local assets
import appetizersImg from '../images/appetizers.png';
import saladsSoupsImg from '../images/saladsAndSoups.png';
import wingsTendonsImg from '../images/wingsAndTendons.png';
import flavorsImg from '../images/flavors.png';
import sandwichesBurgersImg from '../images/sandwichesAndBurgers.png';
import miniTacosImg from '../images/miniTacos.png';
import sidesImg from '../images/sides.png';
import kidsImg from '../images/kidsMenu.png';
import dessertsImg from '../images/desserts.png';

const menuData = {
    'Appetizers': [
        { name: 'Fried Pickle Pears or Chips', desc: 'Hand breaded in our signature batter. Served with your choice of dressing.', price: 'Market' },
        { name: 'Battered Avocado Fries', desc: 'Thick slices of avocado coated in a light, crispy batter. Served with a chipotle ranch or cilantro lime dipping sauce.', price: 'Market' },
        { name: 'Bacon Wrapped Asparagus or Brussels Sprouts', desc: 'The Sweet & Spicy: Brush bacon with brown sugar and cayenne. The Cheesy: Stuff with pepper jack or goat cheese. The Texas Heat: Add a slice of jalapeño inside.', price: 'Market' },
        { name: 'Onion Rings', desc: 'Always a winner, try a full or half order. Served with your choice of dressing.', price: 'Market' },
        { name: 'Beer-Battered Mushrooms', desc: 'Hand battered mushrooms, fried golden and served hot with a creamy dip.', price: 'Market' },
        { name: 'Fried Mozzarella', desc: 'Bold-cut mozzarella fried to perfection; crunchy shell with stretchy cheese inside. Served with house-made ranch, or marinara. Try it Nashville style!', price: 'Market' },
        { name: 'Buffalo Bites', desc: 'Hand-breaded bite-sized version of our boneless wings. Tossed in your favorite wing sauce and served with your choice of dressing.', price: 'Market' },
        { name: 'Pork Belly Bites', desc: 'Crispy bite-sized pieces of tender pork belly caramelized and perfectly seasoned.', price: 'Market' },
        { name: 'WnT Waffle Fry Nachos', desc: 'Topped with chicken, queso, red onions, and cilantro. Choose your sauce.', price: 'Market' },
        { name: "Pick em' 3 Trio", desc: 'Select any three of our signature appetizers to create your own sampler.', price: 'Market' },
        { name: 'Soup of the Day', desc: 'Freshly prepared daily; ask your server about our 2 or 3 different kinds.', price: 'Market' },
    ],
    'Salads': [
        { name: 'Chopped Salad', desc: 'Romaine lettuce, tomatoes, cucumbers, shredded carrots, roasted corn, bacon, and blue cheese. Tossed in ranch dressing. Try it Buffalo style!', price: 'Market' },
        { name: 'Classic Caesar', desc: 'Romaine lettuce topped with parmesan and croutons. Add grilled chicken for an extra kick.', price: 'Market' },
        { name: 'House Salad', desc: 'Bed of mix lettuce, tomato, cucumber, red onion, and your choice of dressing. Add protein to make it a meal.', price: 'Market' },
    ],
    'Wings & Tendors': [
        { name: 'Wings', desc: 'Tossed in your choice of sauce, include carrots, celery, and dressing. Available in 5, 10, 15, or 20 count.', price: 'Market' },
        { name: 'Wings Combos', desc: 'Tossed in your choice of sauce, served with one side and dressing. Available in 5, 10, 15, or 20 count.', price: 'Market' },
        { name: 'Tenders', desc: 'Juicy chicken strips with hand-battered seasoned coating; classic and satisfying. Tossed in your choice of sauce, served with one side.', price: 'Market' },
    ],
    'Flavors': [
        { name: 'Signature Sauces', desc: 'Buffalo Hot, Buffalo Original, Nashville Hot, Jackie Chan, Sweet Chili Jerk, Honey BBQ, Garlic Parmesan, Texas Gold, Atomic Habanero, Bayou Blast, Teriyaki Glaze, Lemon Pepper Wet.' },
        { name: 'Dry Rubs', desc: 'Lemon Pepper, Cajun, and Ranch.' },
    ],
    'Sandwiches & Burgers': [
        { name: 'Spicy Chicken Sandwich', desc: 'Hand-breaded and fried chicken breast tossed in choice of sauce, lettuce, tomato, and pickles; served with your choice of side.', price: 'Market' },
        { name: 'South Texas Bird', desc: 'Fried chicken breast, pepper jack cheese, jalapeño slaw, and chipotle mayo on a toasted bun.', price: 'Market' },
        { name: 'Crispy Chicken Sandwich', desc: 'Hand-breaded chicken, mayo, and pickles.', price: 'Market' },
        { name: 'Grilled Chicken Sandwich', desc: 'Grilled breast with jack cheese, lettuce, tomato, and avocado.', price: 'Market' },
        { name: 'Nashville Hot Honey Chicken', desc: 'Crispy chicken with Nashville heat, a drizzle of hot honey, and cooling slaw.', price: 'Market' },
        { name: 'Chicken Burger (BEK)', desc: 'Our signature chicken burger prepared to perfection.', price: 'Market' },
        { name: 'Smash Burger', desc: '2 – 4oz patties with lettuce, onion, tomato, pickles, and our signature house sauce.', price: 'Market' },
        { name: 'Southwest Burger', desc: 'Also known as the South of the Border burger, topped with onion rings, bacon, BBQ sauce, and cheese.', price: 'Market' },
    ],
    'Mini Tacos': [
        { name: 'Fish Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
        { name: 'Shrimp Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
        { name: 'Battered Avocado Tacos', desc: 'Baja style topped with shredded red cabbage slaw, pico de gallo, and chipotle cream. Garnish with Texas Heat pickled jalapeños, cotija cheese, and hot honey.', price: 'Market' },
    ],
    'Sides': [
        { name: 'Classic Sides', desc: 'Fries, Sweet Potato Fries, Mac & Cheese, Coleslaw, Side House salad, and Side Caesar salad.', price: 'Market' },
        { name: 'Street Corn Cups', desc: 'Creamy elote-style corn with cotija cheese, lime, and chili dust.', price: 'Market' },
    ],
    'Kids': [
        { name: 'Chicken Tenders', desc: 'Hand-breaded tenders served with your choice of dipping sauce.', price: 'Market' },
        { name: 'Mac & Cheese', desc: 'Creamy, cheesy, and classic comfort food.', price: 'Market' },
        { name: 'Burger Sliders', desc: 'Mini beef patties served on soft buns.', price: 'Market' },
        { name: 'Grilled Cheese', desc: "Melted cheese on toasted bread; a kid-approved favorite.", price: 'Market' },
        { name: 'Fresh Fruit Side', desc: 'A healthy selection of seasonal fruits (contains no melon).', price: 'Market' },
    ],
    'Desserts': [
        { name: 'Churro Bites', desc: 'Warm, fluffy centers with a crispy cinnamon-sugar finish.', price: 'Market' },
        { name: 'Cake Balls', desc: "Chef's selection of assorted cake balls with moist centers.", price: 'Market' },
        { name: 'Warm Brownie', desc: 'Brownie served warm with a scoop of Blue Bell vanilla ice cream.', price: 'Market' },
        { name: "Cheesecake (Mike's Pies)", desc: 'Smooth, decadent cheesecake served chilled with a buttery crust.', price: 'Market' },
        { name: 'Fried Sweets', desc: 'Your choice of Fried Brownies, Fried Twinkies, Fried Cookies & Cream, or Fried Oreos.', price: 'Market' },
    ],
};

const subNavItems = [
    { name: 'Appetizers', image: appetizersImg, id: 'Appetizers' },
    { name: 'Salads', image: saladsSoupsImg, id: 'Salads' },
    { name: 'Wings & Tendors', image: wingsTendonsImg, id: 'Wings & Tendors' },
    { name: 'Flavors', image: flavorsImg, id: 'Flavors' },
    { name: 'Sandwiches & Burgers', image: sandwichesBurgersImg, id: 'Sandwiches & Burgers' },
    { name: 'Mini Tacos', image: miniTacosImg, id: 'Mini Tacos' },
    { name: 'Sides', image: sidesImg, id: 'Sides' },
    { name: 'Kids', image: kidsImg, id: 'Kids' },
    { name: 'Desserts', image: dessertsImg, id: 'Desserts' },
];

type Category = keyof typeof menuData;
const categories = Object.keys(menuData) as Category[];

const Menu2: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Appetizers');

    const scrollToSection = (id: Category) => {
        setActiveCategory(id);
        const el = document.getElementById(`section-${id}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex flex-col w-full bg-white min-h-screen">

            {/* Static Sub Navbar */}
            <div className="w-full bg-[#1a1a1a] py-4 shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-b-2 border-black sticky top-0 z-50 overflow-x-auto">
                <div className="flex justify-start md:justify-center min-w-max px-6 gap-6 md:gap-10">
                    {subNavItems.map((item) => {
                        const isActive = activeCategory === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id as Category)}
                                className="flex flex-col items-center gap-2 group focus:outline-none w-16 md:w-20"
                            >
                                <div
                                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-md ${isActive ? 'border-white scale-110' : 'border-gray-600 group-hover:border-white group-hover:scale-105'
                                        }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={`w-full h-full object-cover transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                                            }`}
                                    />
                                </div>
                                <span
                                    className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center leading-tight transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </span>
                                {isActive && (
                                    <span className="block w-6 h-0.5 bg-white rounded-full mt-[-4px]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Menu Content — all sections stacked, no inner scroll */}
            <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-16">
                {categories.map((category) => (
                    <section key={category} id={`section-${category}`} className="scroll-mt-32">
                        {/* Section heading */}
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight border-b-4 border-black pb-2 mb-6">
                            {category}
                        </h2>

                        {/* Item list */}
                        <div className="flex flex-col gap-5">
                            {menuData[category].map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-start gap-4 border-b border-gray-200 pb-5 last:border-0 last:pb-0"
                                >
                                    <div className="flex-1">
                                        <p className="font-black text-sm md:text-base uppercase tracking-tight text-black leading-snug">
                                            {item.name}
                                        </p>
                                        {item.desc && (
                                            <p className="text-gray-600 text-xs md:text-sm mt-1 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                    {item.price && (
                                        <span className="text-xs md:text-sm font-black uppercase text-gray-500 whitespace-nowrap pt-0.5">
                                            {item.price}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Menu2;
