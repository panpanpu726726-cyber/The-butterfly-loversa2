
import React from 'react';

export const COLORS = {
  paper: '#F9F7F2',
  ink: '#1A1A1A',
  cinnabar: '#A6342E',
  jade: '#2D4F3E',
  gold: '#C5A059',
  silk: '#D4C4A8',
  slate: '#4A4A4A'
};

export const ButterflyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5C12 4.5 10 2 7.5 2C5 2 3 4 3 6.5C3 9 5 11 7.5 11C8.5 11 9.5 10.5 10.2 10C10.8 11.5 11.3 14 10.5 17C10 19 8.5 21 8.5 21C8.5 21 10.5 22 12 20.5C13.5 22 15.5 21 15.5 21C15.5 21 14 19 13.5 17C12.7 14 13.2 11.5 13.8 10C14.5 10.5 15.5 11 16.5 11C19 11 21 9 21 6.5C21 4 19 2 16.5 2C14 2 12 4.5 12 4.5Z" />
  </svg>
);

export const InkBorder: React.FC = () => (
  <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#A6342E] to-transparent my-6 opacity-40" />
);
