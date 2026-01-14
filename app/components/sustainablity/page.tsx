"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
export default function Sustanaibility() {
  const benefit = [
    "Reduces indoor air pollutants naturally",
    "Lowers stress and improves mental wellbeing",
    "Increases humidity for healthier skin",
    "Boosts productivity and focus",
    "Saves money compared to air purifiers",
    "Long-lasting investment in your health",
  ];

  return (
    <section id="sustainablity" className="bg-white px-8 py-20 scroll-mt-35">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                type: "tween",
                stiffness: 300,
                delay: 0.2,
                duration: 0.5,
              }}
            >
              <p className="text-sage font-body mb-2 text-xl tracking-wide">
                ECO-SMART LIVING
              </p>
              <h2 className="text-olive font-heading mb-7 text-5xl font-bold">
                Invest in Your Health & Planet
              </h2>
              <p className="text-charcoal/85 font-body text-lg leading-relaxed">
                Plants aren't just beautiful—they're economical allies for
                better living. A single plant can purify air for years, costing
                less than monthly air fresheners while creating a calmer,
                healthier home environment.
              </p>
            </motion.div>
            <div className="space-y-3">
              {benefit.map((info, index) => (
                <motion.div
                  key={info}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    type: "keyframes",
                    delay: 0.1 + index * 0.1,
                  }}
                  className="flex items-center gap-5"
                >
                  <div className="bg-sage/20 flex size-8 items-center justify-center rounded-full">
                    <Check className="text-olive/50 size-5" />
                  </div>
                  <p className="text-charcoal/80 font-body">{info}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 items-start gap-5 lg:mt-[clamp(5.00rem,calc(6.356rem+-6.780vw),0.00rem)] lg:mb-[clamp(5.00rem,calc(6.356rem+-6.780vw),0.00rem)]">
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
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
                stiffness: 300,
                duration: 0.5,
                delay: 0.5,
              }}
              className="aspect-square self-end overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                className="size-full object-cover"
                src="https://images.unsplash.com/photo-1631004964983-ad8ccef7ee0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudHMlMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MDk1MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: -100,
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
                stiffness: 300,
                duration: 0.5,
                delay: 0.7,
              }}
              className="aspect-square self-start overflow-hidden rounded-4xl shadow-2xl"
            >
              <img
                className="size-full object-cover"
                src="https://images.unsplash.com/photo-1617202074052-fa303398aa00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBjb3p5JTIwcm9vbXxlbnwxfHx8fDE3NjgwOTUxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
