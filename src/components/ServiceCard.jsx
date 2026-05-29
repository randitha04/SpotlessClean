import React from 'react';

const ServiceCard = ({ service, onBook }) => {
  return (
    <div className="bg-white rounded-3xl shadow-card overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-sand">
      <div className="relative overflow-hidden h-56">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wider text-olive mb-2">{service.category}</p>
        <h3 className="text-2xl font-serif text-forest mb-2">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">{service.description}</p>
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Price</p>
            <span className="text-3xl font-serif text-forest">LKR {service.price}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
            <span className="text-sm font-semibold text-gray-700">{service.duration}</span>
          </div>
        </div>
        <button
          onClick={() => onBook(service._id)}
          className="w-full bg-forest text-white py-3 rounded-full hover:bg-forest-600 transition-all font-semibold text-base shadow-soft"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
