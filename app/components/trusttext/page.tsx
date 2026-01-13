"use client";

import { DollarSign, Cannabis, Sprout, House } from "lucide-react";
import { motion } from "framer-motion";

const TrustInfo = [
  {
    id: 1,
    icon: DollarSign,
    title: "Budget-Friendly",
    description: "Prices that make sense",
  },
  {
    id: 2,
    icon: Cannabis,
    title: "Eco-Conscious",
    description: "Sustainably sourced",
  },
  {
    id: 3,
    icon: Sprout,
    title: "Begginer-Friendly",
    description: "Easy to care for",
  },
  {
    id: 4,
    icon: House,
    title: "Healthy Spaces",
    description: "Better air quality",
  },
];

export default function TrustText() {
  return (
    <section className="border-olive/10 border-y bg-white py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-12">
          {TrustInfo.map((info, index) => (
            <div
              key={info.id}
              className="flex flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.1 + index * 0.1,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="bg-sage/10 hover:bg-sage/20 mb-3 flex size-[clamp(2.50rem,calc(1.955rem+2.727vw),4.00rem)] items-center justify-center rounded-full transition-colors"
                >
                  <info.icon className="text-olive size-[clamp(1.25rem,calc(0.977rem+1.364vw),2.00rem)]" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: -40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  type: "keyframes",
                  stiffness: 200,
                  delay: 0.1 + index * 0.1,
                }}
              >
                <h3 className="text-charcoal font-heading mb-3 text-[clamp(0.75rem,calc(0.705rem+0.227vw),1rem)]">
                  {info.title}
                </h3>
                <p className="text-charcoal/60 font-body text-[clamp(0.75rem,calc(0.705rem+0.227vw),0.88rem)]">
                  {info.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
