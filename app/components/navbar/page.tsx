"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const linkInfo = [
  {
    id: 1,
    label: "Home",
    path: "#",
  },
  {
    id: 2,
    label: "Shop",
    path: "#",
  },
  {
    id: 3,
    label: "About Us",
    path: "#",
  },
  {
    id: 4,
    label: "Blog",
    path: "#",
  },
  {
    id: 5,
    label: "Contact",
    path: "#",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-olive/10 sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between lg:justify-around">
        {/* logo */}
        <div className="flex items-center gap-2 p-5">
          <div className="bg-sage flex h-8 w-8 items-center justify-center rounded-full sm:h-9 sm:w-9 lg:h-10 lg:w-10">
            <Leaf className="size-5 sm:size-6 lg:size-7" color="white" />
          </div>
          <span className="text-olive font-heading text-[12px] sm:text-[18px] lg:text-2xl">
            GreenRoot Co.
          </span>
        </div>

        {/* links (deskstop) */}
        <div className="hidden gap-2 md:flex">
          {linkInfo.map((items) => (
            <div
              className="p-2 text-[18px] md:text-[15px] lg:p-4 lg:text-[20px] xl:p-6 xl:text-2xl"
              key={items.id}
            >
              <a
                className="text-charcoal hover:text-olive font-body"
                href={items.path}
              >
                {items.label}
              </a>
            </div>
          ))}
        </div>

        {/* links (mobile) */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sidebar gap-2"
              initial={{
                x: "100%",
              }}
              animate={{
                x: "0%",
              }}
              exit={{
                x: "100%",
              }}
            >
              <button className="p-4" onClick={() => setIsOpen(false)}>
                <X className="text-charcoal size-10" />
              </button>
              {linkInfo.map((items) => (
                <div
                  className="hover:bg-olive flex w-full justify-center p-5 text-[18px] md:text-[15px] lg:p-4 lg:text-[20px] xl:p-6 xl:text-2xl"
                  key={items.id}
                >
                  <a className="text-charcoal font-body" href={items.path}>
                    {items.label}
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Shop */}
        <div className="flex items-center justify-center gap-2 p-5">
          <button className="hover:bg-warm-beige/50 flex rounded-full p-2 transition-all">
            <ShoppingCart className="text-olive size-5 sm:size-8" />
          </button>
          <button
            className="hover:bg-warm-beige/50 flex rounded-full p-2 transition-all md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="text-olive size-5 sm:size-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}
