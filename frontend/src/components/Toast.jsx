import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = {
    success: 'bg-forest',
    error: 'bg-red-500',
    warning: 'bg-gold-100',
    info: 'bg-sage-50',
  }[type];

  return (
    <div className={`fixed top-4 right-4 ${bgColor} ${type === 'success' ? 'text-white' : 'text-forest'} px-6 py-3 rounded-2xl shadow-soft`}>
      {message}
    </div>
  );
};

export default Toast;
