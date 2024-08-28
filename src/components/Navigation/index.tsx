'use client';
import { NAVIGATION_LINKS } from '@/constants/data';
import { DropdownMenuType } from '@/types';
import { useState } from 'react';
import { DropdownMenu } from './components/DropdownMenu';
import { NavButton } from './components/NavButton';

export const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (item: DropdownMenuType) => {
    item.submenu?.length &&
      setIsDropdownOpen(isDropdownOpen === item.title ? null : item.title);
  };

  return (
    <nav className="text-lg">
      <ul className="flex">
        {NAVIGATION_LINKS.map((item, index) => (
          <NavButton
            key={index}
            onClick={() => toggleDropdown(item)}
            title={item.title}
            className={`relative ${
              isDropdownOpen === item.title ? 'text-white bg-black' : ''
            }`}
          >
            {item.title}
            <DropdownMenu
              open={isDropdownOpen === item.title}
              items={item.submenu || []}
              onClose={() => setIsDropdownOpen(null)}
            />
          </NavButton>
        ))}
      </ul>
    </nav>
  );
};
