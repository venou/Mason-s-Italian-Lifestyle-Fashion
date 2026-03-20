"use client";

import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const primaryLinks = [
  "Summer 2026 Men",
  "Summer 2026 Women",
  "Winter 2025 Men",
  "Winter 2025 Women",
  "Accessories",
  "Our Story",
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between lg:justify-center relative">
          <button
            onClick={() => setIsMenuOpen((current) => !current)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-center">
            MASON'S
          </h1>

          <a href="#" className="lg:hidden p-2 -mr-2" aria-label="Cart">
            <ShoppingBag size={18} />
          </a>
        </div>

        <nav className="hidden lg:flex w-full justify-between items-center text-[11px] font-medium tracking-[0.2em] uppercase mt-6">
          <div className="flex gap-8">
            {primaryLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="hover:text-stone-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex gap-8 items-center">
            <button className="hover:text-stone-500 flex items-center gap-2">
              <Search size={14} />
              <span>Search</span>
            </button>
            <a href="#" className="hover:text-stone-500">
              Account
            </a>
            <a href="#" className="hover:text-stone-500 flex items-center gap-2">
              <ShoppingBag size={14} />
              <span>Cart (0)</span>
            </a>
          </div>
        </nav>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-stone-200 pt-4 text-[11px] font-medium tracking-[0.18em] uppercase">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {primaryLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="hover:text-stone-500 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mt-6 pt-4 border-t border-stone-200">
              <button className="hover:text-stone-500 flex items-center gap-2">
                <Search size={14} />
                <span>Search</span>
              </button>
              <a href="#" className="hover:text-stone-500">
                Account
              </a>
              <a href="#" className="hover:text-stone-500 flex items-center gap-2">
                <ShoppingBag size={14} />
                <span>Cart (0)</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
