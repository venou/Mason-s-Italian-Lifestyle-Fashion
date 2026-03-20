"use client";

// Icons used across desktop and mobile navigation actions.
import { ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

// Reusable type for each mega menu text column.
type MegaColumn = {
  heading: string;
  links: string[];
};

// Primary top-level nav items used in desktop and mobile menus.
const menuLinks = [
  "Summer 2026 Men",
  "Summer 2026 Women",
  "Winter 2025 Men",
  "Winter 2025 Women",
  "Accessories",
  "Our Story",
  "Blog",
];

// Structured data for the desktop mega menu columns.
const megaMenuColumns: MegaColumn[] = [
  {
    heading: "Summer 2026 Men",
    links: [
      "View all",
      "New Arrivals",
      "Pants",
      "Bermuda Shorts",
      "Blazer",
      "Suits",
      "Jackets",
      "Shirts",
    ],
  },
  {
    heading: "Pants",
    links: ["Chino", "Cargo", "Jogger", "Denim"],
  },
  {
    heading: "Bermuda Shorts",
    links: ["Chino", "Cargo"],
  },
  {
    heading: "Shop By Model",
    links: [
      "Chile",
      "Milano",
      "New York",
      "Torino",
      "Osaka",
      "Boston",
      "London",
      "Chile Bermuda",
    ],
  },
  {
    heading: "Shop By Fit",
    links: [
      "Extra Slim Fit",
      "Slim Fit",
      "Regular Fit",
      "Carrot Fit",
      "Relaxed Fit",
    ],
  },
];

export const Header = () => {
  // Controls the mobile hamburger panel.
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Tracks which desktop trigger is currently open.
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(
    null,
  );

  return (
    // Sticky shell so navigation remains visible while scrolling.
    <header className="sticky top-0 z-50 bg-[#] bg-[#f1f1f1] backdrop-blur-sm border-b border-stone-200">
      {/* Wrapper captures mouse leave to close desktop mega menu. */}
      <div className="relative" onMouseLeave={() => setActiveDesktopMenu(null)}>
        {/* Main container for both desktop and mobile nav bars. */}
        <div className="max-w-450 mx-auto px-2 lg:px-2">
          {/* Desktop top row: left links, centered logo, right actions. */}
          <div className="h-12 hidden lg:flex items-center justify-between text-[12px] uppercase tracking-[0.12em] font-light border-b border-stone-200 relative">
            {/* Left-side desktop links; first link opens mega menu. */}
            <div className="flex items-center gap-4">
              <button
                onMouseEnter={() => setActiveDesktopMenu("Summer 2026 Men")}
                className="hover:text-stone-500 transition-colors uppercase"
              >
                Summer 2026 Men
              </button>
              {/* Remaining quick links next to mega menu trigger. */}
              {menuLinks.slice(1, 6).map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-stone-500 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="ml-2">
                <img
                  className="w-24"
                  src="https://us.masons.it/cdn/shop/files/masons-clothing-logo-text.png?height=200&v=1768898312"
                  alt="Mason's"
                />
              </div>
            </div>

            {/* Centered desktop brand wordmark. */}

            {/* Right-side desktop utility actions. */}
            <div className="flex items-center gap-4">
              <button className="hover:text-stone-500 transition-colors">
                Search
              </button>
              <a href="#" className="hover:text-stone-500 transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-stone-500 transition-colors">
                Account
              </a>
              <a href="#" className="hover:text-stone-500 transition-colors">
                Cart
              </a>
            </div>
          </div>

          {/* Mobile compact header row. */}
          <div className="lg:hidden h-16 flex items-center justify-between">
            {/* Hamburger toggles mobile drawer. */}
            <button
              onClick={() => setIsMobileOpen((current) => !current)}
              className="p-2 -ml-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile brand wordmark. */}
            <h1 className="text-2xl font-bold tracking-[0.08em]">MASON'S</h1>

            {/* Mobile cart shortcut. */}
            <a href="#" className="p-2 -mr-2" aria-label="Open cart">
              <ShoppingBag size={19} />
            </a>
          </div>

          {/* Mobile slide-down navigation panel. */}
          {isMobileOpen && (
            <nav className="lg:hidden py-4 border-t border-stone-200">
              {/* Mobile primary links list. */}
              <div className="grid grid-cols-1 gap-2 text-[11px] uppercase tracking-[0.15em]">
                {menuLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-2 hover:text-stone-500 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile utility actions row. */}
              <div className="mt-4 pt-4 border-t border-stone-200 flex items-center gap-5 text-[11px] uppercase tracking-[0.12em]">
                <button className="flex items-center gap-2 hover:text-stone-500 transition-colors">
                  <Search size={14} />
                  Search
                </button>
                <a href="#" className="hover:text-stone-500 transition-colors">
                  Account
                </a>
              </div>
            </nav>
          )}
        </div>

        {/* Desktop mega menu panel for Summer 2026 Men. */}
        {activeDesktopMenu === "Summer 2026 Men" && (
          <div className="hidden lg:block  absolute left-0 right-0 top-full border-b border-stone-200">
            <div className="h-12 bg-[#f1f1f1] shadow"></div>
            {/* Mega menu inner canvas with subtle camouflage-like texture. */}
            <div
              className="mx-auto max-w-480 px-2 py-2 bg-white"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.45) 0 8%, transparent 9%), radial-gradient(circle at 38% 65%, rgba(255,255,255,0.45) 0 9%, transparent 10%), radial-gradient(circle at 72% 28%, rgba(255,255,255,0.4) 0 8%, transparent 9%), radial-gradient(circle at 84% 72%, rgba(255,255,255,0.35) 0 10%, transparent 11%)",
              }}
            >
              {/* 6-column layout: 5 text columns + 1 promo image column. */}
              <div className="grid grid-cols-6 gap-0 text-[30px]">
                {/* Text columns sourced from shared mega menu data. */}
                {megaMenuColumns.map((column) => (
                  <div
                    key={column.heading}
                    className="px-4 border-r border-stone-300 min-h-85"
                  >
                    {/* Column heading label. */}
                    <h3 className="text-[11px] uppercase tracking-[0.12em] mb-8 font-medium">
                      {column.heading}
                    </h3>

                    {/* Column item links. */}
                    <ul className="space-y-3 text-[30px]">
                      {column.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-[28px] leading-[1.15] hover:opacity-65 transition-opacity"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Visual promo column with image and CTA. */}
                <div className="px-4">
                  <h3 className="text-[11px] uppercase tracking-[0.12em] mb-6 font-medium">
                    SS26 Mason's Men
                  </h3>
                  <img
                    src="https://us.masons.it/cdn/shop/files/menu-uomo-v1.jpg?v=1741962006&width=700"
                    alt="SS26 Mason's Men"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] hover:opacity-70 transition-opacity"
                  >
                    Explore Collection
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
