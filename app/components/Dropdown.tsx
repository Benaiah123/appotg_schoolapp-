'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

import Image from "next/image"

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
        aria-label="User menu"
      >
        <Image className="md:hidden" src="/icons/Vector (9).png" alt='logo' width={14.38} height={8.13}/>
        <Image className="hidden md:block cursor-pointer" src="/icons/ph_caret-down-bold.png" alt='logo' width={14.38} height={8.13}/>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <Link
            href="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaUserCircle className="mr-2" />
            Profile
          </Link>
          <Link
            href="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaCog className="mr-2" />
            Settings
          </Link>
          <Link
            href="/logout"
            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-2" />
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
