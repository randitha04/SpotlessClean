import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white mt-16 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-sage-50 text-forest flex items-center justify-center text-lg">✦</span>
              <span className="text-2xl font-serif">SpotlessClean</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Spotless homes, stress-free life. Trusted cleaning crews serving homes and offices since 2014.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-blue-100 font-semibold mb-4">Visit</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>24 Maple Street, Brooklyn, NY 11201</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📞</span>
                <span>(555) 014-2030</span>
              </li>
              <li className="flex items-start gap-3">
                <span>✉️</span>
                <span>hello@spotlessclean.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-blue-100 font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/booking" className="hover:text-white transition-colors">Book a Clean</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/admin" className="hover:text-white transition-colors">Admin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-blue-100 font-semibold mb-4">Follow</h4>
            <div className="flex flex-col gap-3 text-blue-100">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-sand/40 pt-8 text-blue-100 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} SpotlessClean. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with care for spotless homes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
