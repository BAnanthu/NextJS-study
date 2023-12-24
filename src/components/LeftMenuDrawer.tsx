// components/LeftMenuDrawer.tsx
import React from 'react';

const LeftMenuDrawer: React.FC = () => {
  // Implement your left menu drawer logic here

  return (
    <div className="flex items-center space-x-4">
      {/* Left menu drawer content */}
      <button className="text-white"><a  className={`mb-3 text-white-2xl font-semibold;`} href="/about">About</a></button>
      <button className="text-white"><a  className={`mb-3 text-white-2xl font-semibold;`} href="/help">Help</a></button>
      {/* Add more menu items as needed */}
    </div>
  );
};

export default LeftMenuDrawer;
