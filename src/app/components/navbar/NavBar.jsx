"use client";
import { navLinks } from "../../constants/index";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="/" className="text-xl font-bold">
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Victor Rony
        </span>
      </a>

      {/* Links — desktop */}
      <div className="hidden md:flex gap-8 text-sm text-white/60">
        {navLinks?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA — desktop */}
      <a
        href="#contact"
        className="hidden md:inline-block text-sm px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
      >
        Contact
      </a>

      {/* Hamburger — mobile */}
      <button
        onClick={handleToggleMenu}
        className="md:hidden flex items-center outline-none text-white"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 flex flex-col items-center gap-6 py-8 md:hidden">
          {navLinks?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white/60 font-semibold hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
