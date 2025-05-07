import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  const handleScroll = () => {
    const section = document.getElementById('explore-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center px-4 sm:px-8"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '2rem',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[2rem]"></div>

      <div className="relative z-10 text-center max-w-3xl p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Dive Into the World of <span className="text-purple-300">Books</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover bestsellers, hidden gems, and your next favorite read. Start your literary adventure today.
        </p>
        <button
          onClick={handleScroll}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300"
        >
          Explore Now ↓
        </button>
      </div>
    </div>
  );
};

export default Banner;
