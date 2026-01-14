"use client";

import { motion } from "framer-motion";
import { Clock, Droplet, Heart, Sun } from "lucide-react";
import { title } from "process";

const eduCard = [
  {
    icon: Droplet,
    title: "Low Water Needs",
    description:
      "Most plants thrive with weekly watering. Save water and time with drought-tolerant varieties.",
  },
  {
    icon: Sun,
    title: "Minimal Sunlight",
    description:
      "Many indoor plants flourish in low to medium light. Perfect for apartments and offices",
  },
  {
    icon: Clock,
    title: "Long-Lasting",
    description:
      "With basic care, your plants can live for years—some even decades. True value for money",
  },
  {
    icon: Heart,
    title: "Easy Care",
    description:
      "No green thumb needed. Our beginner-friendly plants are forgiving and resilient",
  },
];

export default function Educational() {
  return (
    <section className="from-warm/20 to-off bg-linear-to-b px-8 py-20">
      <div className="mx-auto max-w-7xl">
        {/* text */}
        <div className="mb-15 text-center">
          <h2 className="text-olive font-heading mb-5 text-5xl">
            Plant Care Made Simple
          </h2>
          <p className="text-charcoal/70 text-2xl">
            Affortable doesn't mean diffucult. Our plants are selected for ease
            and economy.
          </p>
        </div>
        {/* card */}

        <div className="group grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {eduCard.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                type: "spring",
                delay: 0.1 + index * 0.1,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="rounded-2xl bg-white p-12 shadow-2xl group-hover:blur-sm hover:blur-none"
                key={tip.title}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-5">
                    <tip.icon className="text-olive size-10" />
                  </div>
                  <h3 className="text-charcoal font-heading mb-5 text-xl">
                    {tip.title}
                  </h3>
                  <p className="text-charcoal/70 font-body mb-2">
                    {tip.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
