// components/Header.tsx
import React from 'react';
import LeftMenuDrawer from './LeftMenuDrawer';
import SettingsMenu from './SettingsMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <LeftMenuDrawer />
      <h1 className="text-2xl font-bold">School ERP</h1>
      <SettingsMenu />
    </header>
  );
};

export default Header;
