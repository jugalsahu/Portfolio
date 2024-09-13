'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const menus = [
  { label: 'Home', id: 'home' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu on item click
    }
  };

  useEffect(() => {
    const sections = menus.map(menu => document.getElementById(menu.id));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-white sticky top-0 left-0 w-full px-[8%] py-4 lg:py-6 flex justify-between items-center z-50">
        {/* Logo and email */}
        <div className="flex items-center gap-4 md:gap-8">
          <Image
            src="/logo-secondary.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-14 md:h-14"
          />
          <h1 className="text-indigo-950 font-semibold hidden lg:block">
            jugal7662techsunset@gmail.com
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-950 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`flex flex-col md:flex-row md:space-x-10 items-center text-indigo-950 font-medium md:static absolute bg-white md:bg-transparent md:w-auto w-full left-0 top-16 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {menus.map((item, index) => (
            <Link
              key={index}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`block py-2 md:py-0 px-4 md:px-0 hover:text-indigo-600 ${activeSection === item.id ? 'text-indigo-600 font-bold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/"
            className="mt-4 md:mt-0 bg-gradient-to-r from-indigo-600 to-indigo-900 px-9 py-3 rounded-full text-white font-bold"
          >
            Hire me!
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
