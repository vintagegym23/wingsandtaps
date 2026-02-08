import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryBackgrounds: Record<string, string> = {
    'All': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80',
    'Food': 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1920&q=80',
    'Vibe': 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1920&q=80',
    'Drinks': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1920&q=80'
  };

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=75', alt: 'Crispy Buffalo Wings' },
    { url: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&q=75', alt: 'Fresh Appetizer Platter' },
    { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=75', alt: 'Cold Craft Beer' },
    { url: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=75', alt: 'Grilled Tandoori Chicken' },
    { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=75', alt: 'Spicy Loaded Fries' },
    { url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=75', alt: 'Sizzling Kabobs' }
  ];

  useEffect(() => {
    Object.values(categoryBackgrounds).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      className="min-h-screen font-sans py-8 md:py-12 lg:py-24 transition-all duration-1000 ease-in-out bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${categoryBackgrounds[activeCategory]})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        <header className="text-center mb-8 md:mb-12 p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
            THE <span className="text-[#ffbb00]">SCENE</span>
          </h2>
          <p className="text-zinc-200 mt-2 md:mt-4 italic text-sm sm:text-base md:text-xl font-bold">
            Captured heat and local noise. Take a look at the South Side life.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16">
          {Object.keys(categoryBackgrounds).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2 md:py-3 rounded-md border-2 text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                ? 'bg-[#ffbb00] text-black border-[#ffbb00] shadow-[4px_4px_0px_0px_white]'
                : 'bg-black/80 text-white border-white/20 hover:border-[#ffbb00]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6 md:p-12 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10 lg:gap-14">
            {galleryImages.map((image, i) => (
              <ImageCard key={i} image={image} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCard: React.FC<{ image: {url: string, alt: string}, index: number }> = ({ image, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative aspect-square border-2 sm:border-4 border-black bg-zinc-900 overflow-hidden group
        ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}
        hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 hover:z-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0px_0px_#ffbb00] sm:hover:shadow-[10px_10px_0px_0px_#ffbb00]`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center">
          <div className="w-8 sm:w-10 h-8 sm:h-10 border-4 border-[#ffbb00] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
      />

      <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent transition-transform duration-500 translate-y-full group-hover:translate-y-0
        ${isLoaded ? 'flex' : 'hidden'} flex-col items-start`}>
        <span className="font-black text-[#ffbb00] text-lg md:text-xl uppercase tracking-tighter">
          #WINGSNTAPS
        </span>
        <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">
          {image.alt}
        </span>
      </div>
    </div>
  );
};

export default Gallery;