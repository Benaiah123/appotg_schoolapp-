'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

import Image from "next/image"

const ActionsButton = () => {
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
        className="flex items-center focus:outline-none cursor-pointer"
        aria-label="User menu"
      >
        <div className="flex gap-2 border border-black px-3 py-2 rounded-xl">
                  <p>Actions</p>
                  <Image src="/icons/ph_caret-down-bold (2).png" alt="pointer" width={18} height={18}/>
                </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <Link
            href="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Image src="/svg/raphael_people.svg" alt='icon' width={24} height={24}/>
            Add new student
          </Link>
          <Link
            href="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Image src="/svg/raphael_people.svg" alt='icon' width={24} height={24}/>
            Promote Class
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default ActionsButton;
