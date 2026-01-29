"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative scroll-mt-100 bg-transparent px-5 py-5 sm:px-10 sm:py-10 md:px-15 md:py-15"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* text */}
          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{
                x: -40,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "keyframes",
                stiffness: 200,
                duration: 0.5,
              }}
              className="font-heading text-olive/90 text-[clamp(3rem,calc(0.409rem+5.455vw),4.50rem)] leading-tight"
            >
              Bring Nature Home
            </motion.h1>
            <motion.p
              initial={{
                x: -40,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "keyframes",
                stiffness: 200,
                delay: 0.2,
                duration: 0.5,
              }}
              className="text-sage font-heading text-[clamp(1.5rem,calc(0.518rem+1.309vw),1.50rem)] italic"
            >
              Affortable, Sustainable, Simple.
            </motion.p>
            <motion.p
              initial={{
                x: -40,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "keyframes",
                stiffness: 200,
                delay: 0.3,
                duration: 0.5,
              }}
              className="font-body text-charcoal/80 max-w-xl text-[clamp(1rem,calc(0.432rem+1.091vw),1.25rem)] leading-relaxed"
            >
              Enhance your space, purify your air, and create a calming
              sanctuary—without breaking the bank. Shop sustainably and make
              your home greener today!
            </motion.p>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                type: "keyframes",
                stiffness: 100,
                delay: 0.4,
                duration: 0.5,
              }}
              className="mt-5"
            >
              <motion.button
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "tween",
                  stiffness: 200,
                  damping: 40,
                }}
                className="bg-olive font-heading hover:bg-olive/90 flex items-center gap-2 rounded-full p-[clamp(0.50rem,calc(0.227rem+1.364vw),1.25rem)] px-[clamp(1.00rem,calc(0.636rem+1.818vw),2.00rem)] py-[clamp(0.75rem,calc(0.568rem+0.909vw),1.25rem)] text-[clamp(1rem,calc(0.341rem+1.545vw),1.50rem)] text-white hover:text-white/90"
              >
                Shop Plants
                <ArrowRight className="size-[clamp(1rem,calc(0.114rem+3.182vw),2.50rem)]" />
              </motion.button>
            </motion.div>
          </div>
          {/* picture */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              type: "keyframes",
              stiffness: 300,
              duration: 0.5,
              delay: 0.1,
            }}
          >
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
                src="https://images.unsplash.com/photo-1617202074052-fa303398aa00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBjb3p5JTIwcm9vbXxlbnwxfHx8fDE3NjgwOTUxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cozy Room"
                className="h-[clamp(12.47rem,calc(5.641rem+34.145vw),31.25rem)] w-full rounded-2xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
