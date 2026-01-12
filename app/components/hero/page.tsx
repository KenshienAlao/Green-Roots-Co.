"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-transparent px-9 py-20 sm:px-15 sm:py-25 md:px-20 md:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* text */}
          <div className="flex flex-col gap-5">
            <h1 className="font-heading text-oliv text-[clamp(1.50rem,calc(0.409rem+5.455vw),4.50rem)] leading-tight">
              Bring Nature Home
            </h1>
            <p
              className="text-sage font-heading text-[clamp(0.78rem,calc(0.518rem+1.309vw),1.50rem)]"
              style={{ fontStyle: "italic" }}
            >
              Affortable, Sustainable, Simple.
            </p>
            <p className="font-body text-charcoal/80 max-w-xl text-[clamp(0.65rem,calc(0.432rem+1.091vw),1.25rem)] leading-relaxed">
              Enhance your space, purify your air, and create a calming
              sanctuary—without breaking the bank. Shop sustainably and make
              your home greener today!
            </p>
            <div>
              <motion.button
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-olive font-body hover:bg-olive/90 flex items-center gap-2 rounded-full p-[clamp(0.50rem,calc(0.227rem+1.364vw),1.25rem)] px-[clamp(1.00rem,calc(0.636rem+1.818vw),2.00rem)] py-[clamp(0.75rem,calc(0.568rem+0.909vw),1.25rem)] text-[clamp(0.65rem,calc(0.341rem+1.545vw),1.50rem)] text-white hover:text-white/90"
              >
                Shop Plants{" "}
                <ArrowRight className="size-[clamp(0.75rem,calc(0.114rem+3.182vw),2.50rem)]" />
              </motion.button>
            </div>
          </div>
          {/* picture */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeIn",
            }}
            className=""
          >
            <img
              src="/hero/hero.png"
              alt="Cozy Room"
              className="h-[clamp(12.47rem,calc(5.641rem+34.145vw),31.25rem)] w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
