import React from 'react';
import { getStatusColor, formatDate, formatTime } from '../utils/helpers.js';

const BookingCard = ({ booking, onStatusChange, onDelete }) => {
  return (
    <div className="bg-white rounded-3xl shadow-card p-6 border border-sand">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-serif text-forest">{booking.serviceName}</h3>
          <p className="text-gray-600 text-sm">Booking ID: {booking._id.substring(0, 8)}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-500">Customer</p>
          <p className="font-semibold text-gray-800">{booking.customerName}</p>
        </div>
        <div>
          <p className="text-gray-500">Contact</p>
          <p className="font-semibold text-gray-800">{booking.customerPhone}</p>
        </div>
        <div>
          <p className="text-gray-500">Date</p>
          <p className="font-semibold text-gray-800">{formatDate(booking.bookingDate)}</p>
        </div>
        <div>
          <p className="text-gray-500">Time</p>
          <p className="font-semibold text-gray-800">{formatTime(booking.bookingTime)}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-500">Address</p>
          <p className="font-semibold text-gray-800">{booking.address}, {booking.city}</p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-sand">
        <span className="text-2xl font-serif text-forest">LKR {booking.totalPrice}</span>
        <div className="flex gap-2">
          {booking.status !== 'completed' && booking.status !== 'cancelled' && (
            <button
              onClick={() => onStatusChange(booking._id, 'completed')}
              className="px-4 py-2 bg-forest text-white rounded-full hover:bg-forest-600 transition text-sm"
            >
              Complete
            </button>
          )}
          <button
            onClick={() => onDelete(booking._id)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
