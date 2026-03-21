"use client";

import { ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import { div } from "motion/react-client";
import { useRef, useState } from "react";

// ---------------- TYPES ----------------
type MegaColumn = {
  heading: string;
  links: string[];
};

type NavItem = {
  label: string;
  megaMenu?: MegaColumn[];
  image?: string;
};

// ---------------- DATA ----------------
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

const navItems: NavItem[] = [
  {
    label: "Summer 2026 Men",
    megaMenu: megaMenuColumns,
    image:
      "https://us.masons.it/cdn/shop/files/menu-uomo-v1.jpg?v=1741962006&width=700",
  },
  { label: "Summer 2026 Women" },
  { label: "Winter 2025 Men" },
  { label: "Winter 2025 Women" },
  { label: "Accessories" },
  { label: "Our Story" },
  { label: "Blog" },
];

// ---------------- COMPONENT ----------------
export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeItem = navItems.find((item) => item.label === activeMenu);

  return (
    <header className="sticky top-0 z-50 bg-[#f1f1f1] border-b border-stone-200">
      <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
        {/* ---------------- DESKTOP NAV ---------------- */}
        <div className="hidden xl:grid grid-cols-3 items-center h-14 px-4 text-[11px] uppercase tracking-[0.1em]">
          {/* LEFT */}
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wide font-normal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onMouseEnter={() =>
                  setActiveMenu(item.megaMenu ? item.label : null)
                }
                className="hover:text-stone-500 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center ml-22">
            <img
              className="w-24"
              src="https://us.masons.it/cdn/shop/files/masons-clothing-logo-text.png?height=200&v=1768898312"
              alt="Mason's"
            />
          </div>

          {/* RIGHT */}
          <div className="flex justify-end gap-4 uppercase">
            <button className="hover:text-stone-500">SEARCH</button>
            <button className="hover:text-stone-500">BLOG</button>
            <a href="#" className="hover:text-stone-500">
              Account
            </a>
            <a href="#" className="hover:text-stone-500">
              Cart
            </a>
          </div>
        </div>

        {/* ---------------- MOBILE NAV ---------------- */}
        <div className="xl:hidden flex items-center justify-between h-14 px-4">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X /> : <Menu />}
          </button>

          <h1 className="text-xl font-bold">MASON'S</h1>

          <ShoppingBag />
        </div>

        {isMobileOpen && (
          <div className="xl:hidden px-4 py-4 border-t">
            {navItems.map((item) => (
              <div key={item.label} className="py-2 text-sm">
                {item.label}
              </div>
            ))}
          </div>
        )}

        {/* ---------------- MEGA MENU ---------------- */}
        {activeItem?.megaMenu && (
          <div
            className="hidden xl:block absolute left-0 right-0 top-full bg-white border-t border-stone-200"
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
              }
            }}
            onMouseLeave={() => {
              closeTimeoutRef.current = setTimeout(
                () => setActiveMenu(null),
                150,
              );
            }}
          >
            <div className="max-w-7xl mx-4 grid grid-cols-6 px-6 py-8 justify-center">
              {/* TEXT COLUMNS */}
              {activeItem.megaMenu.map((col, index) => (
                <div
                  key={col.heading}
                  className="px-6 pr-18 border-r border-stone-200"
                >
                  <h3 className="text-[11px] uppercase tracking-[0.12em] mb-6 font-medium text-stone-700">
                    {col.heading}
                  </h3>

                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li
                        key={link}
                        className="text-[14px] hover:opacity-60 transition cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* IMAGE COLUMN (no border here) */}
              {activeItem.image && (
                <div className="px-6 pl-12 mx-auto">
                  <h3 className="text-[11px] uppercase tracking-[0.12em] mb-4 font-medium text-stone-700">
                    SS26 Mason's Men
                  </h3>

                  <img
                    src={
                      "https://us.masons.it/cdn/shop/collections/f8572b60f828d7e0d98960e961224a3d_6a197bad-1a24-4aea-80b5-b1084118e6a3.jpg?v=1765286806&width=832"
                    }
                    sizes="44"
                    className="w-full object-contain"
                    alt="menu"
                  />

                  <div className="mt-4 text-[11px] uppercase tracking-[0.14em] flex items-center gap-1 hover:opacity-70 transition cursor-pointer">
                    Explore <ChevronRight size={14} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
