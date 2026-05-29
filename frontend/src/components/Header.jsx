import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-cream/80 backdrop-blur-xl border-b border-sand sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-2xl bg-forest text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">✦</div>
          <span className="text-2xl font-semibold text-forest group-hover:text-sage transition-colors duration-300 font-serif">
            SpotlessClean
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-8 bg-white/80 border border-sand rounded-full px-6 py-3 shadow-soft text-sm font-semibold">
            <li>
              <Link to="/" className="text-gray-700 hover:text-forest transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-gray-700 hover:text-forest transition-all duration-300">
                Service
              </Link>
            </li>
            <li>
              <Link to="/#gallery" className="text-gray-700 hover:text-forest transition-all duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/booking" className="text-gray-700 hover:text-forest transition-all duration-300 relative group">
                Book
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-gray-700 hover:text-forest transition-all duration-300">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-gray-700 hover:text-forest transition-all duration-300">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="/booking"
            className="bg-forest text-white px-6 py-2 rounded-full shadow-soft hover:bg-forest-600 transition-all"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
