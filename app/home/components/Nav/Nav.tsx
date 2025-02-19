"use client";  // ✅ Add this at the top

import React, { useState } from "react";
import { Home, User, Settings, Mail, Bell } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white transition-all duration-300 rounded-2xl shadow-lg ${
        isOpen ? "w-32" : "w-16"
      }`}
    >
      <div className="flex flex-col items-center gap-4 p-2">
        <NavItem icon={<Home size={24} />} text="Home" isOpen={isOpen} />
        <NavItem icon={<User size={24} />} text="Profile" isOpen={isOpen} />
        <NavItem icon={<Mail size={24} />} text="Messages" isOpen={isOpen} />
        <NavItem icon={<Bell size={24} />} text="Notifications" isOpen={isOpen} />
        <NavItem icon={<Settings size={24} />} text="Settings" isOpen={isOpen} />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, isOpen }) => (
  <a
    href="#"
    className={`transition-colors rounded-xl hover:bg-gray-700 p-2 ${
      isOpen ? "flex items-center" : "flex flex-col items-center"
    }`}
  >
    <div className="flex items-center justify-center">{icon}</div>
    {isOpen && <span className="ml-2 text-sm">{text}</span>}
  </a>
);

export default Nav;



