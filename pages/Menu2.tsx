import React, { useState, useEffect, useRef } from 'react';

// Category images
import appetizersImg from '../images/appetizers.png';
import saladsSoupsImg from '../images/saladsAndSoups.png';
import wingsTendonsImg from '../images/wingsAndTendons.png';
import flavorsImg from '../images/flavors.png';
import sandwichesImg from '../images/sandwichesAndBurgers.png';
import miniTacosImg from '../images/miniTacos.png';
import sidesImg from '../images/sides.png';
import kidsImg from '../images/kidsMenu.png';
import dessertsImg from '../images/desserts.png';

/* ─── Types & Data ───────────────────────────────────────────────────────── */
type MenuItem = { name: string; desc?: string; price?: string };

const menuData: Record<string, { image: string; items: MenuItem[] }> = {
    'Appetizers': {
        image: appetizersImg,
        items: [
            { name: 'Mozzarella Sticks', desc: 'Hand breaded in our signature batter. Served with your choice of dressing.', price: 'Market' },
            { name: 'Battered Avocado Fries', desc: 'Thick slices of avocado coated in a light, crispy batter. Served with a chipotle ranch or cilantro lime dipping sauce.', price: 'Market' },
            { name: 'Bacon Wrapped Asparagus or Brussels Sprouts', desc: 'The Sweet & Spicy: Brush bacon with brown sugar and cayenne. The Cheesy: Stuff with pepper jack or goat cheese. The Texas Heat: Add a slice of jalapeño inside.', price: 'Market' },
            { name: 'Onion Rings', desc: 'Always a winner, try a full or half order. Served with your choice of dressing.', price: 'Market' },
            { name: 'Beer-Battered Mushrooms', desc: 'Hand battered mushrooms, fried golden and served hot with a creamy dip.', price: 'Market' },
            { name: 'Fried Mozzarella', desc: 'Bold-cut mozzarella fried to perfection; crunchy shell with stretchy cheese inside. Served with house-made ranch, or marinara.', price: 'Market' },
            { name: 'Buffalo Bites', desc: 'Hand-breaded bite-sized version of our boneless wings. Tossed in your favorite wing sauce and served with your choice of dressing.', price: 'Market' },
            { name: 'Pork Belly Bites', desc: 'Crispy bite-sized pieces of tender pork belly caramelized and perfectly seasoned.', price: 'Market' },
            { name: 'WnT Waffle Fry Nachos', desc: 'Topped with chicken, queso, red onions, and cilantro. Choose your sauce.', price: 'Market' },
            { name: "Pick em' 3 Trio", desc: 'Select any three of our signature appetizers to create your own sampler.', price: 'Market' },
            { name: 'Soup of the Day', desc: 'Freshly prepared daily; ask your server about our 2 or 3 different kinds.', price: 'Market' },
        ],
    },
    'Salads': {
        image: saladsSoupsImg,
        items: [
            { name: 'Chicken Caesar Salad', desc: 'Romaine lettuce, tomatoes, cucumbers, shredded carrots, roasted corn, bacon, and blue cheese. Tossed in ranch dressing. Try it Buffalo style!', price: 'Market' },
            { name: 'Classic Caesar', desc: 'Romaine lettuce topped with parmesan and croutons. Add grilled chicken for an extra kick.', price: 'Market' },
            { name: 'House Salad', desc: 'Bed of mix lettuce, tomato, cucumber, red onion, and your choice of dressing. Add protein to make it a meal.', price: 'Market' },
        ],
    },
    'Wings & Tendors': {
        image: wingsTendonsImg,
        items: [
            { name: 'Buffalo Wings', desc: 'Tossed in your choice of sauce, include carrots, celery, and dressing. Available in 5, 10, 15, or 20 count.', price: 'Market' },
            { name: 'Wing Combos', desc: 'Tossed in your choice of sauce, served with one side and dressing. Available in 5, 10, 15, or 20 count.', price: 'Market' },
            { name: 'Tenders', desc: 'Juicy chicken strips with hand-battered seasoned coating. Tossed in your choice of sauce, served with one side.', price: 'Market' },
        ],
    },
    'Flavors': {
        image: flavorsImg,
        items: [
            { name: 'Classic Buffalo (Mild / Medium / Hot)', desc: 'Buffalo Hot, Buffalo Original, Nashville Hot, Jackie Chan, Sweet Chili Jerk, Honey BBQ, Garlic Parmesan, Texas Gold, Atomic Habanero, Bayou Blast, Teriyaki Glaze, Lemon Pepper Wet.' },
            { name: 'Dry Rubs', desc: 'Lemon Pepper, Cajun, and Ranch.' },
        ],
    },
    'Sandwiches & Burgers': {
        image: sandwichesImg,
        items: [
            { name: 'Classic Cheeseburger', desc: 'Hand-breaded and fried chicken breast tossed in choice of sauce, lettuce, tomato, and pickles; served with your choice of side.', price: 'Market' },
            { name: 'South Texas Bird', desc: 'Fried chicken breast, pepper jack cheese, jalapeño slaw, and chipotle mayo on a toasted bun.', price: 'Market' },
            { name: 'Crispy Chicken Sandwich', desc: 'Hand-breaded chicken, mayo, and pickles.', price: 'Market' },
            { name: 'Grilled Chicken Sandwich', desc: 'Grilled breast with jack cheese, lettuce, tomato, and avocado.', price: 'Market' },
            { name: 'Nashville Hot Honey Chicken', desc: 'Crispy chicken with Nashville heat, a drizzle of hot honey, and cooling slaw.', price: 'Market' },
            { name: 'Chicken Burger (BEK)', desc: 'Our signature chicken burger prepared to perfection.', price: 'Market' },
            { name: 'Smash Burger', desc: '2 – 4oz patties with lettuce, onion, tomato, pickles, and our signature house sauce.', price: 'Market' },
            { name: 'Southwest Burger', desc: 'Also known as the South of the Border burger, topped with onion rings, bacon, BBQ sauce, and cheese.', price: 'Market' },
        ],
    },
    'Mini Tacos': {
        image: miniTacosImg,
        items: [
            { name: 'Crispy Beef Mini Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
            { name: 'Shrimp Tacos', desc: 'Fried or grilled, served in tortillas with slaw and avocado.', price: 'Market' },
            { name: 'Battered Avocado Tacos', desc: 'Baja style topped with shredded red cabbage slaw, pico de gallo, and chipotle cream. Garnish with Texas Heat pickled jalapeños, cotija cheese, and hot honey.', price: 'Market' },
        ],
    },
    'Sides': {
        image: sidesImg,
        items: [
            { name: 'French Fries', desc: 'Fries, Sweet Potato Fries, Mac & Cheese, Coleslaw, Side House salad, and Side Caesar salad.', price: 'Market' },
            { name: 'Street Corn Cups', desc: 'Creamy elote-style corn with cotija cheese, lime, and chili dust.', price: 'Market' },
        ],
    },
    'Kids': {
        image: kidsImg,
        items: [
            { name: 'Kids Chicken Nuggets', desc: 'Hand-breaded tenders served with your choice of dipping sauce.', price: 'Market' },
            { name: 'Mac & Cheese', desc: 'Creamy, cheesy, and classic comfort food.', price: 'Market' },
            { name: 'Burger Sliders', desc: 'Mini beef patties served on soft buns.', price: 'Market' },
            { name: 'Grilled Cheese', desc: 'Melted cheese on toasted bread; a kid-approved favorite.', price: 'Market' },
            { name: 'Fresh Fruit Side', desc: 'A healthy selection of seasonal fruits (contains no melon).', price: 'Market' },
        ],
    },
    'Desserts': {
        image: dessertsImg,
        items: [
            { name: 'Chocolate Lava Cake', desc: 'Warm, fluffy centers with a crispy cinnamon-sugar finish.', price: 'Market' },
            { name: 'Cake Balls', desc: "Chef's selection of assorted cake balls with moist centers.", price: 'Market' },
            { name: 'Warm Brownie', desc: 'Brownie served warm with a scoop of Blue Bell vanilla ice cream.', price: 'Market' },
            { name: "Cheesecake (Mike's Pies)", desc: 'Smooth, decadent cheesecake served chilled with a buttery crust.', price: 'Market' },
            { name: 'Fried Sweets', desc: 'Your choice of Fried Brownies, Fried Twinkies, Fried Cookies & Cream, or Fried Oreos.', price: 'Market' },
        ],
    },
};

type Category = keyof typeof menuData;
const categories = Object.keys(menuData) as Category[];

/* ─── Sub-nav item list ────────────────────────────────────────────────── */
const subNavItems = categories.map((cat) => ({
    id: cat,
    name: cat,
    image: menuData[cat].image,
}));

/* ─── Component ─────────────────────────────────────────────────────────── */
const Menu2: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Appetizers');
    const sectionRefs = useRef<Partial<Record<Category, HTMLElement>>>({});
    const navRef = useRef<HTMLDivElement>(null);

    /* Scroll-spy */
    useEffect(() => {
        const onScroll = () => {
            const pivot = window.scrollY + 200;
            let current: Category = categories[0];
            for (const cat of categories) {
                const el = sectionRefs.current[cat];
                if (el && el.offsetTop <= pivot) current = cat;
            }
            setActiveCategory(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Auto-scroll the sub-nav horizontally whenever activeCategory changes
       (covers both scroll-spy updates AND manual clicks)               */
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;
        const btn = nav.querySelector<HTMLElement>(`[data-cat="${activeCategory}"]`);
        if (!btn) return;
        // Centre the active button inside the nav scroll container
        const targetLeft = btn.offsetLeft - nav.clientWidth / 2 + btn.clientWidth / 2;
        nav.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }, [activeCategory]);

    /* Click to jump to section */
    const goTo = (id: Category) => {
        setActiveCategory(id);
        const el = sectionRefs.current[id];
        if (el) {
            const offset = 140;
            window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
    };

    return (
        <div style={{ backgroundColor: '#111', minHeight: '100vh', color: '#fff', fontFamily: 'inherit' }}>

            {/* HERO BANNER */}
            <div
                style={{
                    position: 'relative',
                    height: 'clamp(300px, 45vw, 520px)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}
            >
                {/* bg image */}
                <img
                    src={saladsSoupsImg}
                    alt="Menu hero"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '115%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        filter: 'brightness(0.65)',
                    }}
                />
                {/* Subtle dark overlay so text stays legible */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.28)',
                        pointerEvents: 'none',
                    }}
                />
                {/* Bottom fade-into-dark gradient */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '30%',
                        background: 'linear-gradient(to bottom, transparent, #111)',
                        pointerEvents: 'none',
                    }}
                />
                {/* Hero text */}
                <div style={{ position: 'relative', zIndex: 1, padding: '0 1.5rem' }}>
                    <h1
                        style={{
                            fontSize: 'clamp(28px, 7vw, 76px)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            color: '#fff',
                            textShadow: '0 4px 20px rgba(0,0,0,0.9)',
                            margin: 0,
                        }}
                    >
                        A SCRATCH MENU
                    </h1>
                    <p
                        style={{
                            fontSize: 'clamp(22px, 5.5vw, 62px)',
                            fontWeight: 900,
                            fontStyle: 'italic',
                            letterSpacing: '-0.01em',
                            lineHeight: 1,
                            color: '#e53e3e',
                            textShadow: '0 4px 16px rgba(0,0,0,0.9)',
                            margin: '10px 0 32px',
                            textTransform: 'uppercase',
                        }}
                    >
                        MADE FOR MVPS
                    </p>
                    <button
                        style={{
                            backgroundColor: '#e53e3e',
                            color: '#fff',
                            fontWeight: 900,
                            fontSize: 'clamp(10px, 1.5vw, 13px)',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            padding: 'clamp(8px, 1.5vw, 12px) clamp(20px, 3vw, 32px)',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                            boxShadow: '0 4px 18px rgba(229,62,62,0.55)',
                        }}
                    >
                        ORDER TO GO OR DELIVERY
                    </button>
                </div>
            </div>

            {/* SUB-NAVBAR — sticky: stays on screen below the marquee while scrolling */}
            <div
                ref={navRef}
                style={{
                    position: 'sticky',
                    top: 36,          /* height of the sticky marquee bar in App.tsx */
                    zIndex: 49,       /* below marquee z-70, above page content */
                    backgroundColor: '#0d0d0d',
                    borderTop: '1px solid #1e1e1e',
                    borderBottom: '2px solid #1e1e1e',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                }}
            >
                <div className="m2-subnav-inner">
                    {subNavItems.map((item) => {
                        const isActive = activeCategory === item.id;
                        return (
                            <button
                                key={item.id}
                                data-cat={item.id}
                                onClick={() => goTo(item.id as Category)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 6,
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '8px 12px',
                                    flexShrink: 0,
                                    outline: 'none',
                                }}
                            >
                                <div
                                    style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: isActive ? '2.5px solid #fff' : '2px solid #444',
                                        transform: isActive ? 'scale(1.12)' : 'scale(1)',
                                        transition: 'all 0.2s ease',
                                        boxShadow: isActive ? '0 0 14px rgba(255,255,255,0.2)' : 'none',
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            filter: isActive ? 'brightness(1)' : 'grayscale(80%) brightness(0.6)',
                                            transition: 'filter 0.2s ease',
                                        }}
                                    />
                                </div>
                                <span
                                    style={{
                                        fontSize: 9,
                                        fontWeight: 900,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        color: isActive ? '#fff' : '#666',
                                        lineHeight: 1.2,
                                        maxWidth: 72,
                                        transition: 'color 0.2s',
                                    }}
                                >
                                    {item.name}
                                </span>
                                <span
                                    style={{
                                        display: 'block',
                                        width: isActive ? 22 : 0,
                                        height: 2.5,
                                        backgroundColor: '#e53e3e',
                                        borderRadius: 2,
                                        marginTop: -4,
                                        transition: 'width 0.25s ease',
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ──────────────────────────────────────────────────────────────────
          CATEGORY SECTIONS
      ────────────────────────────────────────────────────────────────── */}
            <div>
                {categories.map((category, secIdx) => {
                    const { image, items } = menuData[category];
                    const [featured, ...rest] = items;
                    const isEven = secIdx % 2 === 0;

                    /* Split featured item name into 2 balanced lines */
                    const words = featured.name.split(' ');
                    // For very short names keep on one line; for longer names split at midpoint
                    const splitAt = words.length <= 2 ? words.length : Math.ceil(words.length / 2);
                    const titleLine1 = words.slice(0, splitAt).join(' ');
                    const titleLine2 = words.slice(splitAt).join(' ');

                    return (
                        <section
                            key={category}
                            ref={(el) => { if (el) sectionRefs.current[category] = el; }}
                            style={{
                                backgroundColor: isEven ? '#111' : '#141414',
                                paddingBottom: '5rem',
                                paddingTop: '0.5rem',
                            }}
                        >
                            {/* ── Section Header ──────────────────────────────────────── */}
                            <div
                                style={{
                                    position: 'relative',
                                    textAlign: 'center',
                                    padding: '3.5rem 1rem 2.5rem',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Watermark */}
                                <span
                                    aria-hidden
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'clamp(64px, 15vw, 160px)',
                                        fontWeight: 900,
                                        fontStyle: 'italic',
                                        textTransform: 'uppercase',
                                        letterSpacing: '-0.04em',
                                        color: 'rgba(255,255,255,0.055)',
                                        whiteSpace: 'nowrap',
                                        userSelect: 'none',
                                        pointerEvents: 'none',
                                        lineHeight: 1,
                                    }}
                                >
                                    {category}
                                </span>

                                {/* Title */}
                                <h2
                                    style={{
                                        position: 'relative',
                                        display: 'inline-block',
                                        fontSize: 'clamp(20px, 4.5vw, 42px)',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        color: '#fff',
                                        lineHeight: 1.05,
                                        margin: 0,
                                    }}
                                >
                                    {category}
                                </h2>

                                {/* Red underline */}
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                    <span style={{ display: 'block', width: 56, height: 3, backgroundColor: '#e53e3e', borderRadius: 2 }} />
                                </div>
                            </div>

                            {/* ── Content block ────────────────────────────────────────── */}
                            <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1rem' }}>

                                {/* ── Featured Item Card */}
                                <div
                                    className="m2-featured-card"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        backgroundColor: '#1a1a1a',
                                        border: '1px solid #2a2a2a',
                                        borderRadius: 6,
                                        overflow: 'hidden',
                                        marginBottom: '2rem',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    {/* Image side */}
                                    <div className="m2-featured-img" style={{ flexShrink: 0, width: 'clamp(180px, 38%, 340px)', minHeight: 220 }}>
                                        <img
                                            src={image}
                                            alt={featured.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 220, display: 'block' }}
                                        />
                                    </div>

                                    {/* Text side */}
                                    <div
                                        style={{
                                            flex: 1,
                                            padding: '2rem 1.75rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            minWidth: 200,
                                        }}
                                    >
                                        {/* Badge */}
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                backgroundColor: '#e53e3e',
                                                color: '#fff',
                                                fontSize: 9,
                                                fontWeight: 900,
                                                letterSpacing: '0.14em',
                                                padding: '3px 10px',
                                                borderRadius: 3,
                                                marginBottom: 14,
                                                textTransform: 'uppercase',
                                                width: 'fit-content',
                                            }}
                                        >
                                            FEATURED
                                        </span>

                                        {/* Big stacked item title */}
                                        <h3
                                            style={{
                                                fontSize: 'clamp(22px, 4vw, 42px)',
                                                fontWeight: 900,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.04em',
                                                color: '#fff',
                                                lineHeight: 1,
                                                margin: '0 0 14px',
                                            }}
                                        >
                                            {titleLine1}
                                            {titleLine2 && (
                                                <>
                                                    <br />
                                                    <span style={{ color: '#ddd' }}>{titleLine2}</span>
                                                </>
                                            )}
                                        </h3>

                                        {/* Description */}
                                        {featured.desc && (
                                            <p
                                                style={{
                                                    fontSize: 13,
                                                    color: '#999',
                                                    lineHeight: 1.6,
                                                    margin: '0 0 18px',
                                                    maxWidth: 420,
                                                }}
                                            >
                                                {featured.desc}
                                            </p>
                                        )}

                                        {/* Price */}
                                        {featured.price && (
                                            <span
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: 900,
                                                    color: '#f6c90e',
                                                    letterSpacing: '0.04em',
                                                }}
                                            >
                                                {featured.price === 'Market' ? '$--' : `$${featured.price}`}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* ── Grid of remaining items */}
                                {rest.length > 0 && (
                                    <div
                                        className="m2-grid"
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                            gap: 0,
                                            border: '1px solid #222',
                                            borderRadius: 6,
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {rest.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    padding: '1.4rem 1.5rem',
                                                    borderBottom: '1px solid #222',
                                                    borderRight: '1px solid #222',
                                                    backgroundColor: idx % 2 === 0 ? '#161616' : '#191919',
                                                    transition: 'background-color 0.18s ease',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 8,
                                                    minHeight: 110,
                                                }}
                                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1f1f1f')}
                                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#161616' : '#191919')}
                                            >
                                                {/* Name + price row */}
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'flex-start',
                                                        gap: 10,
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            fontSize: 13.5,
                                                            fontWeight: 900,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.07em',
                                                            color: '#fff',
                                                            lineHeight: 1.3,
                                                            margin: 0,
                                                            flex: 1,
                                                        }}
                                                    >
                                                        {item.name}
                                                    </p>
                                                    {item.price && (
                                                        <span
                                                            style={{
                                                                fontSize: 11,
                                                                fontWeight: 900,
                                                                color: '#111',
                                                                backgroundColor: '#f6c90e',
                                                                padding: '2px 8px',
                                                                borderRadius: 3,
                                                                whiteSpace: 'nowrap',
                                                                flexShrink: 0,
                                                                letterSpacing: '0.06em',
                                                                marginTop: 2,
                                                            }}
                                                        >
                                                            {item.price === 'Market' ? '$--' : `$${item.price}`}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                {item.desc && (
                                                    <p
                                                        style={{
                                                            fontSize: 12,
                                                            color: '#777',
                                                            lineHeight: 1.55,
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {item.desc}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* ─────────────────────────────────────────────────────────────
                WHITE BRIDGE SECTION  (between menu content & footer)
            ───────────────────────────────────────────────────────────────── */}
            <section style={{ backgroundColor: '#fff', color: '#111', padding: '5rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>

                    {/* ── Tagline ── */}
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e53e3e', marginBottom: 12 }}>
                            EST. IN CORPUS CHRISTI
                        </p>
                        <h2 style={{ fontSize: 'clamp(28px, 6vw, 54px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 16px' }}>
                            Come Hungry.<br />Leave Happy.
                        </h2>
                        <p style={{ fontSize: 15, color: '#555', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
                            Scratch-made food, bold flavors, and the best dang wings in Corpus Christi —
                            crafted fresh every day for MVPs like you.
                        </p>
                        {/* Red underline accent */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                            <span style={{ display: 'block', width: 48, height: 3, backgroundColor: '#e53e3e', borderRadius: 2 }} />
                        </div>
                    </div>

                    {/* ── 4 Feature Highlights ── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4rem',
                    }}>
                        {[
                            { icon: '🍺', title: 'Happy Hour', sub: '$3 Domestics & Half-Price Wings — ask your server for times.' },
                            { icon: '🔥', title: 'Fresh & Scratch-Made', sub: 'Every dish is made to order using fresh, quality ingredients.' },
                            { icon: '📦', title: 'Order To Go', sub: 'Call ahead or order online for fast, hassle-free pickup.' },
                            { icon: '🎯', title: 'Weekly Trivia', sub: 'Join us for live trivia nights — prizes, laughs, and wings.' },
                        ].map((card) => (
                            <div
                                key={card.title}
                                style={{
                                    backgroundColor: '#f7f7f7',
                                    border: '1px solid #e8e8e8',
                                    borderRadius: 8,
                                    padding: '1.6rem 1.4rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                }}
                            >
                                <span style={{ fontSize: 28 }}>{card.icon}</span>
                                <p style={{ fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                                    {card.title}
                                </p>
                                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>
                                    {card.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <style>{`
          /* Sub-nav inner flex */
          .m2-subnav-inner {
            display: flex;
            justify-content: center;
            padding: 10px 20px;
            gap: 4px;
            min-width: max-content;
            width: 100%;
          }

          /* ── Responsive: tablet ── */
          @media (max-width: 900px) {
            .m2-subnav-inner { justify-content: flex-start; }
          }

          /* ── Responsive: mobile ── */
          @media (max-width: 640px) {
            /* Featured card stacks vertically on mobile */
            .m2-featured-card {
              flex-direction: column !important;
            }
            .m2-featured-img {
              width: 100% !important;
              height: 220px !important;
            }
            .m2-featured-text {
              padding: 1.25rem !important;
            }
            /* Grid: single column on mobile */
            .m2-grid {
              grid-template-columns: 1fr !important;
            }
            /* Section header watermark smaller */
            .m2-watermark {
              font-size: clamp(48px, 18vw, 80px) !important;
            }
          }

          /* scrollbar */
          *::-webkit-scrollbar { height: 4px; width: 4px; }
          *::-webkit-scrollbar-track { background: #111; }
          *::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
          *::-webkit-scrollbar-thumb:hover { background: #555; }
        `}</style>
        </div>
    );
};

export default Menu2;
