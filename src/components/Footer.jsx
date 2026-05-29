import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-forest text-white mt-16 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 items-start">
          <div className="space-y-4 max-w-md">
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-sage-50 text-forest flex items-center justify-center text-lg">✦</span>
              <span className="text-2xl font-serif">SpotlessClean</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Spotless homes, stress-free life. Trusted cleaning crews serving homes and offices across Sri Lanka since 2014.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-blue-100 font-semibold mb-4">Visit</h4>
            <ul className="space-y-3 text-blue-100 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>No. 25, Galle Road, Colombo 03</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📞</span>
                <span>+94 76 706 2313</span>
              </li>
              <li className="flex items-start gap-3">
                <span>✉️</span>
                <span>hello@spotlessclean.lk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-blue-100 font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-blue-100 list-none p-0 m-0">
              <li><a href="#services" className="hover:text-white transition-colors no-underline">Services</a></li>
              <li><a href="/booking" className="hover:text-white transition-colors no-underline">Book a Clean</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors no-underline">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors no-underline">Contact</a></li>
              <li><a href="/admin" className="hover:text-white transition-colors no-underline">Admin</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-blue-100 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} SpotlessClean Cleaning. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with care in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
