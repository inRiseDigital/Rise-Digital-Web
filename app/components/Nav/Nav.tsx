"use client";  

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Cpu, Brain, BadgeDollarSign, MessageCircle, EqualApproximately } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIcon, setActiveIcon] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.toLowerCase().includes("ai")) setActiveIcon("AI");
    else if (pathname.includes("home")) setActiveIcon("Home");
    else if (pathname.includes("about")) setActiveIcon("About");
    else if (pathname.includes("marketing")) setActiveIcon("Marketing");
    else if (pathname.includes("technology")) setActiveIcon("Technology");
    else if (pathname.includes("contact")) setActiveIcon("Contact");
  }, [pathname]);

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
    setIsOpen(false); // Close the nav after clicking an icon
  };

  return (
    <nav
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white transition-all duration-300 rounded-2xl shadow-lg ${
        isOpen ? "w-32" : "w-16"
      }`}
    >
      <div className="flex flex-col items-center gap-4 p-2">
        <NavItem
          icon={<Home size={30} />}
          text="Home"
          isOpen={isOpen}
          href="/home"
          isActive={activeIcon === "Home"}
          onClick={() => handleIconClick("Home")}
        />
        <NavItem
          icon={<EqualApproximately size={30} />}
          text="About Us"
          isOpen={isOpen}
          href="/about"
          isActive={activeIcon === "About"}
          onClick={() => handleIconClick("About")}
        />
        <NavItem
          icon={<Brain size={30} />}
          text="AI"
          isOpen={isOpen}
          href="/ai"
          isActive={activeIcon === "AI"}
          onClick={() => handleIconClick("AI")}
        />
        <NavItem
          icon={<Cpu size={30} />}
          text="Technology"
          isOpen={isOpen}
          href="/technology"
          isActive={activeIcon === "Technology"}
          onClick={() => handleIconClick("Technology")}
        />
        <NavItem
          icon={<BadgeDollarSign size={30} />}
          text="Marketing"
          isOpen={isOpen}
          href="/marketing"
          isActive={activeIcon === "Marketing"}
          onClick={() => handleIconClick("Marketing")}
        />
        <NavItem
          icon={<MessageCircle size={30} />}
          text="Contact"
          isOpen={isOpen}
          href="/contact"
          isActive={activeIcon === "Contact"}
          onClick={() => handleIconClick("Contact")}
        />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, isOpen, href, isActive, onClick }) => (
  <Link href={href} legacyBehavior>
    <a
      onClick={onClick}
      title={text} // Add the title attribute here
      className={`relative z-50 transition-colors rounded-xl p-2 transform duration-300${
        isOpen ? "flex items-center" : "flex flex-col items-center"
      } ${isActive ? "bg-purple-700" : "hover:bg-gray-700"} ${!isActive && "hover:translate-y-[-5px]"}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {isOpen && <span className="ml-2 text-sm">{text}</span>}
    </a>
  </Link>
);

export default Nav;


