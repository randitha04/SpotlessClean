import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { getServices } from '../utils/api.js';

const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data);
      } catch (err) {
        setError('Failed to load services');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleBookService = (serviceId) => {
    navigate('/booking', { state: { selectedServiceId: serviceId } });
  };

  const galleryImages = [
    'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4107114/pexels-photo-4107114.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4239046/pexels-photo-4239046.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4107287/pexels-photo-4107287.jpeg?auto=compress&cs=tinysrgb&w=900',
    'https://images.pexels.com/photos/4107285/pexels-photo-4107285.jpeg?auto=compress&cs=tinysrgb&w=900',
  ];

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 bg-white border border-sand rounded-full px-4 py-2 text-sm text-olive shadow-soft">
                <span className="text-green-500">●</span>
                Trusted by 2,400+ households
              </div>
              <h1 className="text-6xl md:text-7xl font-serif text-forest leading-tight">
                Spotless homes,
                <span className="text-olive"> stress-free life.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Vetted cleaning crews, eco-friendly products, and a booking flow that takes 90 seconds. Spend your weekend on what matters.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => navigate('/booking')}
                  className="bg-forest text-white px-8 py-4 rounded-full font-semibold text-base shadow-soft hover:bg-forest-600 transition-all"
                >
                  Book Now →
                </button>
                <button
                  onClick={() => navigate('/#services')}
                  className="bg-white text-forest px-8 py-4 rounded-full font-semibold text-base border border-sand hover:border-forest transition-all"
                >
                  Explore services
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-600">
                <span>🛡️ Insured crews</span>
                <span>🌿 Eco products</span>
                <span>⏱️ On-time, guaranteed</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Cleaner at work"
                className="rounded-4xl shadow-card w-full h-96 object-cover"
              />
              <div className="mt-4 bg-white rounded-2xl px-6 py-4 shadow-soft inline-flex items-center gap-4">
                <div className="flex">
                  <span className="text-gold">★★★★★</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">4.9 · 800+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4099465/pexels-photo-4099465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="About SpotlessClean"
                className="rounded-4xl shadow-card w-full h-96 object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-olive font-semibold mb-4">About us</p>
              <h2 className="text-5xl font-serif text-forest mb-6">Tiny details. Big difference.</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                For over a decade, our crews have brought a hospitality-grade standard to family kitchens, busy offices, and post-renovation chaos. Every cleaner is background-checked and trained on a 42-point checklist.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We pay fair wages because care shows. Your space feels calm, balanced, and beautifully maintained.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-serif text-forest">10y</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">In service</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-forest">2.4k</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Households</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-forest">4.9★</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Avg rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-olive font-semibold mb-3">Services</p>
            <h2 className="text-5xl font-serif text-forest mb-4">Cleaning made effortless</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">Choose from our curated services designed for modern homes and busy teams.</p>
          </div>
          {error && <p className="text-center text-red-600 mb-4 text-lg font-semibold bg-red-50 p-4 rounded-lg">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={service._id} style={{animationDelay: `${idx * 0.1}s`}} className="animate-slideIn">
                <ServiceCard service={service} onBook={handleBookService} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-olive font-semibold mb-3">Gallery</p>
            <h2 className="text-5xl font-serif text-forest mb-4">Spaces we transformed</h2>
            <p className="text-gray-600 text-xl">See the calm, airy finish we deliver every time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-2xl transition-all duration-500 h-56 cursor-pointer border border-sand"
              >
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">Premium Cleaning #{idx + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-olive font-semibold mb-3">Contact</p>
            <h2 className="text-5xl font-serif text-forest mb-4">Get in touch</h2>
            <p className="text-gray-600 text-xl">We're here to help. Reach out anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-card border border-sand">
                <h3 className="text-2xl font-semibold mb-3 text-forest">📍 Address</h3>
                <p className="text-gray-600 text-lg">cleanavenue,colombo</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-card border border-sand">
                <h3 className="text-2xl font-semibold mb-3 text-forest">📞 Phone</h3>
                <p className="text-gray-600 text-lg">076 7062313</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-card border border-sand">
                <h3 className="text-2xl font-semibold mb-3 text-forest">📧 Email</h3>
                <p className="text-gray-600 text-lg">info@spotlessclean.com</p>
              </div>
              <div className="bg-forest text-white p-6 rounded-3xl shadow-soft">
                <h3 className="text-2xl font-semibold mb-3">💬 WhatsApp</h3>
                <a
                  href="https://wa.me/18001111111"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white text-forest font-semibold py-3 px-6 rounded-full hover:bg-sand transition-all"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-card border border-sand">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290255!2d-74.00601!3d40.71455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU2LjAiTiA3NMKwMDAnMDIuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SpotlessClean Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
