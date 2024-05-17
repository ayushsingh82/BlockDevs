"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuHover = (item: string | null) => {
    setActive(item);
  };

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 bg-black bg-opacity-90 backdrop-blur-lg rounded-full py-3 px-8 w-full max-w-7xl mx-auto",
        hidden ? "-translate-y-full" : "translate-y-0",
        className
      )}
    >
      <div className="flex justify-between items-center w-full text-white">
        {/* Left section: BlockDevs */}
        <Link href="/" className="text-xl font-bold ">
          BlockDevs
        </Link>

        {/* Center section: Menu items */}
        <div className="flex justify-center items-center space-x-8">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>

          {/* MenuItem with dropdown */}
          <MenuItem
            setActive={handleMenuHover}
            active={active}
            item="Our Courses"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses">Basic theory</HoveredLink>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
              <HoveredLink href="/courses">Production</HoveredLink>
            </div>
          </MenuItem>

          <Link
            href="/contact"
            className="hover:text-gray-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Right section: Language selector and button */}
        <div className="flex items-center space-x-4 ml-8">
          <Link href="/launch-app">
            <button className="bg-custom-pink text-white px-4 py-2 rounded-full">
              Launch App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
