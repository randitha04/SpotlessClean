import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus, deleteBooking, getBookingStats } from '../utils/api.js';
import BookingCard from '../components/BookingCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Toast from '../components/Toast.jsx';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchBookings();
    fetchStats();
  }, []);

  useEffect(() => {
    filterBookings();
  }, [bookings, statusFilter]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const data = await getBookings();
      setBookings(data || []);
    } catch (err) {
      setToast({ message: 'Failed to load bookings', type: 'error' });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await getBookingStats();
      const statMap = {};
      data?.forEach((stat) => {
        statMap[stat._id] = stat.count;
      });
      setStats(statMap);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const filterBookings = () => {
    if (statusFilter === 'all') {
      setFilteredBookings(bookings);
    } else {
      setFilteredBookings(bookings.filter((b) => b.status === statusFilter));
    }
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await updateBookingStatus(bookingId, newStatus);
      setToast({ message: 'Booking status updated successfully', type: 'success' });
      fetchBookings();
      fetchStats();
    } catch (err) {
      setToast({ message: 'Failed to update booking status', type: 'error' });
      console.error(err);
    }
  };

  const handleDelete = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteBooking(bookingId);
        setToast({ message: 'Booking deleted successfully', type: 'success' });
        fetchBookings();
        fetchStats();
      } catch (err) {
        setToast({ message: 'Failed to delete booking', type: 'error' });
        console.error(err);
      }
    }
  };

  if (loading) return <LoadingSpinner message="Loading admin dashboard..." />;

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-wider text-olive font-semibold mb-3">Admin</p>
          <h1 className="text-5xl font-serif text-forest mb-3">Admin Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage all cleaning service bookings in one place</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-forest rounded-3xl shadow-soft p-8 text-white">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Total Bookings</h3>
            <p className="text-5xl font-serif">{bookings.length}</p>
          </div>
          <div className="bg-sand rounded-3xl shadow-card p-8 text-forest border border-sand">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide text-olive">Pending</h3>
            <p className="text-5xl font-serif">{stats.pending || 0}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-card p-8 text-forest border border-sand">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide text-olive">Confirmed</h3>
            <p className="text-5xl font-serif">{stats.confirmed || 0}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-card p-8 text-forest border border-sand">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide text-olive">Completed</h3>
            <p className="text-5xl font-serif">{stats.completed || 0}</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex gap-3 flex-wrap">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all shadow-soft ${
              statusFilter === 'all'
                ? 'bg-forest text-white'
                : 'bg-white text-forest border border-sand hover:border-forest'
            }`}
          >
            All ({bookings.length})
          </button>
          <button
            onClick={() => setStatusFilter('pending')}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all shadow-soft ${
              statusFilter === 'pending'
                ? 'bg-forest text-white'
                : 'bg-white text-forest border border-sand hover:border-forest'
            }`}
          >
            ⏳ Pending ({stats.pending || 0})
          </button>
          <button
            onClick={() => setStatusFilter('confirmed')}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all shadow-soft ${
              statusFilter === 'confirmed'
                ? 'bg-forest text-white'
                : 'bg-white text-forest border border-sand hover:border-forest'
            }`}
          >
            ✓ Confirmed ({stats.confirmed || 0})
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all shadow-soft ${
              statusFilter === 'completed'
                ? 'bg-forest text-white'
                : 'bg-white text-forest border border-sand hover:border-forest'
            }`}
          >
            ✅ Completed ({stats.completed || 0})
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="bg-white rounded-3xl shadow-card p-8 text-center border border-sand">
              <p className="text-gray-600 text-lg">No bookings found for this filter.</p>
            </div>
          )}
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

export default Admin;
