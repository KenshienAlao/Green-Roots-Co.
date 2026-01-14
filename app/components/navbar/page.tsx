"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

const linkInfo = [
  {
    id: 1,
    label: "Home",
    path: "home",
  },
  {
    id: 2,
    label: "Shop",
    path: "shopFeature",
  },
  {
    id: 3,
    label: "Sustainability",
    path: "sustainablity",
  },
  {
    id: 4,
    label: "Contact",
    path: "contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const title = "GreenRoot Co.";

  // for sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 786) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "tween",
        duration: 0.3,
        stiffness: 300,
      }}
      className="border-olive/10 sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur-sm"
    >
      <div className="container mx-auto flex items-center justify-between lg:justify-around">
        {/* logo */}
        <div className="flex items-center gap-2 p-5">
          <motion.div
            initial={{
              scale: 1.5,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
              stiffness: 100,
            }}
            className="bg-sage flex size-[clamp(1.97rem,calc(1.786rem+0.918vw),2.48rem)] items-center justify-center rounded-full"
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.5,
                stiffness: 300,
              }}
            >
              <Leaf
                className="size-[clamp(1.22rem,calc(1.036rem+0.918vw),1.72rem)]"
                color="white"
              />
            </motion.div>
          </motion.div>

          <motion.div>
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5 + i * 0.05,
                }}
                className="text-olive font-heading text-[clamp(0.78rem,calc(0.382rem+1.991vw),1.88rem)]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* links (deskstop) */}
        <div className="hidden gap-2 md:flex">
          {linkInfo.map((items) => (
            <div
              className="p-2 text-[18px] md:text-[15px] lg:p-4 lg:text-[20px] xl:p-6 xl:text-2xl"
              key={items.id}
            >
              <button
                className="text-charcoal hover:text-olive font-body"
                onClick={() => scrollTo(items.path)}
              >
                {items.label}
              </button>
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
                  className="hover:bg-olive flex w-full justify-center p-5 text-[18px] md:text-[15px]"
                  key={items.id}
                >
                  <button
                    className="text-charcoal font-body"
                    onClick={() => scrollTo(items.path)}
                  >
                    {items.label}
                  </button>
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
    </motion.nav>
  );
}
