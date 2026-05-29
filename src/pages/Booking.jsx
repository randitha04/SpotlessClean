import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getServices, createBooking } from '../utils/api.js';
import { validateBookingForm } from '../utils/helpers.js';
import Toast from '../components/Toast.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    serviceId: location.state?.selectedServiceId || '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    address: '',
    city: '',
    postalCode: '',
    bookingDate: '',
    bookingTime: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setToast({ message: 'Failed to load services', type: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateBookingForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setToast({ message: 'Please fix all errors', type: 'error' });
      return;
    }

    setSubmitting(true);
    try {
      const response = await createBooking(formData);
      setToast({ message: 'Booking created successfully!', type: 'success' });
      
      // Reset form
      setFormData({
        serviceId: '',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        address: '',
        city: '',
        postalCode: '',
        bookingDate: '',
        bookingTime: '',
        notes: '',
      });
      setErrors({});

      // Redirect to admin after 2 seconds
      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } catch (err) {
      setToast({ message: err.response?.data?.message || 'Failed to create booking', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <aside className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-card p-8 border border-sand space-y-6">
              <div className="inline-flex items-center gap-4 bg-sand rounded-full px-4 py-3 shadow-soft">
                <span className="text-2xl">✦</span>
                <span className="text-sm font-semibold text-olive">Premium Booking</span>
              </div>
              <div>
                <h2 className="text-3xl font-serif text-forest mb-3">What you'll get</h2>
                <p className="text-gray-600 text-base leading-relaxed">Fast confirmation, trusted cleaners, and a spotless finish every time.</p>
              </div>
              <ul className="space-y-3 text-gray-600 text-base">
                <li className="flex items-start gap-4">
                  <span className="text-green-500 text-lg">✓</span>
                  <span>Certified professionals with eco-safe products</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-500 text-lg">✓</span>
                  <span>Transparent pricing and flexible scheduling</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-500 text-lg">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
              <div className="bg-forest rounded-2xl p-4 text-white shadow-soft">
                <p className="text-sm">Need help now?</p>
                <p className="text-2xl font-semibold">1-800-CLEAN-123</p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 border border-sand">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="text-5xl">✦</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-forest mb-4">Book Your Service</h1>
                <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">Fill in the details below and we'll confirm your booking shortly. Our team will reach out within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div className="animate-slideIn" style={{animationDelay: '0.1s'}}>
              <label className="block text-forest font-bold text-lg mb-3">Select Service <span className="text-red-500">*</span></label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                  errors.serviceId ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                }`}
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name} - LKR {service.price}
                  </option>
                ))}
              </select>
              {errors.serviceId && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.serviceId}</p>}
            </div>

            {/* Customer Name */}
            <div className="animate-slideIn" style={{animationDelay: '0.15s'}}>
              <label className="block text-forest font-bold text-lg mb-3">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                placeholder="Nimal Perera"
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                  errors.customerName ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                }`}
              />
              {errors.customerName && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.customerName}</p>}
            </div>

            {/* Customer Email */}
            <div className="animate-slideIn" style={{animationDelay: '0.2s'}}>
              <label className="block text-forest font-bold text-lg mb-3">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                placeholder="nimal.perera@gmail.com"
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                  errors.customerEmail ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                }`}
              />
              {errors.customerEmail && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.customerEmail}</p>}
            </div>

            {/* Customer Phone */}
            <div className="animate-slideIn" style={{animationDelay: '0.25s'}}>
              <label className="block text-forest font-bold text-lg mb-3">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
                placeholder="0712345678"
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                  errors.customerPhone ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                }`}
              />
              {errors.customerPhone && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.customerPhone}</p>}
            </div>

            {/* Address */}
            <div className="animate-slideIn" style={{animationDelay: '0.3s'}}>
              <label className="block text-forest font-bold text-lg mb-3">Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="No. 25, Galle Road"
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                  errors.address ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                }`}
              />
              {errors.address && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.address}</p>}
            </div>

            {/* City and Postal Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideIn" style={{animationDelay: '0.35s'}}>
              <div>
                <label className="block text-forest font-bold text-lg mb-3">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Colombo"
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                    errors.city ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                  }`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.city}</p>}
              </div>
              <div>
                <label className="block text-forest font-bold text-lg mb-3">Postal Code <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="10250"
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                    errors.postalCode ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                  }`}
                />
                {errors.postalCode && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.postalCode}</p>}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideIn" style={{animationDelay: '0.4s'}}>
              <div>
                <label className="block text-forest font-bold text-lg mb-3">Booking Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleInputChange}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                    errors.bookingDate ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                  }`}
                />
                {errors.bookingDate && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.bookingDate}</p>}
              </div>
              <div>
                <label className="block text-forest font-bold text-lg mb-3">Booking Time <span className="text-red-500">*</span></label>
                <input
                  type="time"
                  name="bookingTime"
                  value={formData.bookingTime}
                  onChange={handleInputChange}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium ${
                    errors.bookingTime ? 'border-red-500 bg-red-50' : 'border-sand bg-sand hover:bg-white hover:border-forest'
                  }`}
                />
                {errors.bookingTime && <p className="text-red-500 text-sm mt-2 font-semibold">⚠️ {errors.bookingTime}</p>}
              </div>
            </div>

            {/* Notes */}
            <div className="animate-slideIn" style={{animationDelay: '0.45s'}}>
              <label className="block text-forest font-bold text-lg mb-3">Additional Notes <span className="text-gray-400 font-normal text-base">(Optional)</span></label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="e.g., Please bring eco-friendly products"
                rows="4"
                className="w-full px-5 py-3 border-2 border-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-forest transition-all text-base font-medium bg-sand hover:bg-white hover:border-forest"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row gap-4 pt-8 animate-slideIn" style={{animationDelay: '0.5s'}}>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-forest text-white py-4 rounded-full font-semibold text-base hover:bg-forest-600 transition-all shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? '⏳ Processing...' : '✨ Confirm Booking'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-white text-forest py-4 rounded-full font-semibold text-base border border-sand hover:border-forest transition-all shadow-soft"
              >
                Back Home
              </button>
            </div>
              </form>

              <p className="text-center text-gray-600 text-sm mt-6">
                * Required fields. We'll confirm your booking via email shortly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Booking;
