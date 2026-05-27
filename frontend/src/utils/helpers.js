export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$|^[+][0-9]{1,3}[0-9]{9,}$/;
  return re.test(phone.replace(/\s+/g, ''));
};

export const validateBookingForm = (formData) => {
  const errors = {};

  if (!formData.serviceId || formData.serviceId === '') {
    errors.serviceId = 'Please select a service';
  }

  if (!formData.customerName || formData.customerName.trim() === '') {
    errors.customerName = 'Name is required';
  }

  if (!formData.customerEmail || formData.customerEmail.trim() === '') {
    errors.customerEmail = 'Email is required';
  } else if (!validateEmail(formData.customerEmail)) {
    errors.customerEmail = 'Please enter a valid email';
  }

  if (!formData.customerPhone || formData.customerPhone.trim() === '') {
    errors.customerPhone = 'Phone number is required';
  } else if (!validatePhone(formData.customerPhone)) {
    errors.customerPhone = 'Please enter a valid 10-digit phone number';
  }

  if (!formData.address || formData.address.trim() === '') {
    errors.address = 'Address is required';
  }

  if (!formData.city || formData.city.trim() === '') {
    errors.city = 'City is required';
  }

  if (!formData.postalCode || formData.postalCode.trim() === '') {
    errors.postalCode = 'Postal code is required';
  }

  if (!formData.bookingDate || formData.bookingDate === '') {
    errors.bookingDate = 'Please select a date';
  } else {
    const selectedDate = new Date(formData.bookingDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.bookingDate = 'Booking date must be in the future';
    }
  }

  if (!formData.bookingTime || formData.bookingTime === '') {
    errors.bookingTime = 'Please select a time';
  }

  return errors;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (time) => {
  return new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const getStatusColor = (status) => {
  const colors = {
    pending: 'badge badge-pending',
    confirmed: 'badge badge-confirmed',
    completed: 'badge badge-completed',
    cancelled: 'badge badge-cancelled',
  };
  return colors[status] || 'badge badge-default';
};

export const getStatusBadgeClass = (status) => {
  const classes = {
    pending: 'badge-warning',
    confirmed: 'badge-info',
    completed: 'badge-success',
    cancelled: 'badge-danger',
  };
  return classes[status] || 'badge-default';
};
