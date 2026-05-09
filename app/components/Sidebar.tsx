"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UserDropdown from "./Dropdown";

import { AdminMenuItems } from "@/data/admin";
import { studentMenuItems } from "@/data/student";
import { parentMenuItems } from "@/data/parent";
import { tutorMenuItems } from "@/data/tutor";

export default function Sidebar({type}: {type: String}) {
  const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
  <header className="relative bg-[#1E2A66] text-white px-5 py-4 flex md:hidden items-center justify-between ">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-2xl focus:outline-none cursor-pointer">
          &#9776;
        </button>

        {/* Dashboard Text */}
        <span className="text-lg font-medium">Dashboard</span>

        {/* ADMIN Badge */}
        {type==="admin" && <span className="bg-white text-black text-xs font-normal px-2 py-1 rounded">
          ADMIN
        </span>}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* User Icon */}
        <Image src="/icons/f7_person-crop-circle.png" alt="logo" width={24} height={24}/>

        {/* Dropdown Arrow */}
        <UserDropdown />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-[#1E2A66] shadow-md z-50">
          <ul className="flex flex-col divide-y divide-gray-200">
            {type==="admin" && AdminMenuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${type}${item.href}`}
                  className="block px-4 py-3 hover:bg-gray-100 text-sm font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {type==="student" && studentMenuItems.map((item) => (
              <li key={item.name}>
                <Link
                 href={`/${type}${item.href}`}
                  className="block px-4 py-3 hover:bg-gray-100 text-sm font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {type==="parent" && parentMenuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${type}${item.href}`}
                  className="block px-4 py-3 hover:bg-gray-100 text-sm font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {type==="tutor" && tutorMenuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${type}${item.href}`}
                  className="block px-4 py-3 hover:bg-gray-100 text-sm font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>



    <aside className="bg-[#1E2A5E] hidden md:block text-white w-64 py-2 pl-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="text-blue-600 rounded-full p-2">
          <Image 
          src="/images/Screenshot 2025-08-25 190316.png"
          alt="logo"
          width={50}
          height={50}
          />
        </div>
        <span className="font-bold text-lg">App OTG</span>
      </div>

      {/* Menu */}
      <nav className="space-y-2 text-[#BABABA]">
        {type === "admin" && AdminMenuItems.map((item, index) => {
          const active = pathname === `/admin${item.href}`;
          return (
            <Link
              key={index}
              href={`/${type}${item.href}`}
              className={`block rounded-l-full px-3 py-2 ${
                active
                  ? "bg-white text-[#1E2A5E] font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        {type === "student" && studentMenuItems.map((item, index) => {
          const active = pathname === `/student${item.href}`;
          return (
            <Link
              key={index}
             href={`/${type}${item.href}`}
              className={`block rounded-lg px-3 py-2 ${
                active
                  ? "bg-white text-[#1E2A5E] font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        {type === "parent" && parentMenuItems.map((item, index) => {
          const active = pathname === `/parent${item.href}`;
          return (
            <Link
              key={index}
              href={`/${type}${item.href}`}
              className={`block rounded-lg px-3 py-2 ${
                active
                  ? "bg-white text-[#1E2A5E] font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        {type === "tutor" && tutorMenuItems.map((item) => {
          const active = pathname === `/tutor${item.href}`;
          return (
            <Link
              key={item.name}
              href={`/${type}${item.href}`}
              className={`block rounded-lg px-3 py-2 ${
                active
                  ? "bg-white text-[#1E2A5E] font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
    </>
  );
}
