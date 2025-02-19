"use client";  // ✅ Add this at the top

import React, { useState } from "react";
import { Menu, Home, User, Settings, Mail, Bell } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={`fixed top-4 left-4 h-[90vh] bg-gray-800 text-white transition-all duration-300 rounded-2xl shadow-lg ${isOpen ? "w-64" : "w-16"}`}>
      <div className="ex-col flex-grow justify-center gap-4">
        <NavItem icon={<Home size={24} />} text="Home" isOpen={isOpen} />
        <NavItem icon={<User size={24} />} text="Profile" isOpen={isOpen} />
        <NavItem icon={<Mail size={24} />} text="Messages" isOpen={isOpen} />
        <NavItem icon={<Bell size={24} />} text="Notifications" isOpen={isOpen} />
        <NavItem icon={<Settings size={24} />} text="Settings" isOpen={isOpen} />
      </div>
    </nav>
  );
};

// NavItem Component
interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
}
const NavItem: React.FC<NavItemProps> = ({ icon, text, isOpen }) => (
  <a href="#" className="flex items-center p-4 transition-colors rounded-xl hover:bg-gray-700">
    <div className="flex items-center justify-center">{icon}</div>
    {isOpen && <span className="ml-4 whitespace-nowrap">{text}</span>}
  </a>
);

export default Nav;


