"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Locate, Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const customersay = [
  {
    icon: Quote,
    customer: User,
    loc: Locate,
    text: "GreenLeaf made it easy to bring plants into my home. Healthy plants, simple care tips, and a brighter, happier space!",
    author: "Sarah M.",
    location: "Portland, OR",
  },
  {
    icon: Quote,
    customer: User,
    loc: Locate,
    text: "The plants arrived perfect and the website was easy to use. My apartment feels alive and welcoming.",
    author: "James K.",
    location: "Austin, TX",
  },
  {
    icon: Quote,
    customer: User,
    loc: Locate,
    text: "Great experience! Vibrant plants, clear instructions, and my home has never felt so lively.",
    author: "Maria L.",
    location: "Seattle, WA",
  },
];

export default function Feedback() {
  const [index, setIndex] = useState(0);

  //   timing
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % customersay.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  //   buttons
  const prev = () => {
    setIndex((i) => (i - 1 + customersay.length) % customersay.length);
  };
  const next = () => setIndex((i) => (i + 1) % customersay.length);

  const c = customersay[index];

  return (
    <section className="bg-warm/60 px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-heading text-olive mb-12 text-2xl md:text-4xl xl:text-5xl">
            What Customers Say
          </h2>

          {/* card */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.4,
                type: "tween",
                stiffness: 200,
                damping: 40,
              }}
              key={index}
              className="mb-12 rounded-4xl bg-white px-15 py-10 shadow-2xl"
            >
              <div>
                <c.icon className="text-olive/40 mb-5 size-15" />
              </div>

              <p className="text-charcoal/90 font-body mb-10 px-2 text-left text-xl sm:text-2xl lg:text-4xl leading-relaxed">
                "{c.text}"
              </p>
              <div className="mb-3 flex items-center gap-2">
                <c.customer className="text-charcoal/90" />
                <p className="text-charcoal font-heading text-xl">{c.author}</p>
              </div>
              <div className="mb-10 flex items-center gap-2">
                <c.loc className="text-charcoal/90" />
                <p className="text-charcoal font-heading text-xl">
                  {c.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* button */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="bg-off rounded-full p-5 shadow-md"
            >
              <ChevronLeft />
            </button>

            {customersay.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full ${i === index ? "bg-sage w-6" : "bg-sage/20 w-2"}`}
              ></button>
            ))}
            <button
              onClick={next}
              className="bg-off rounded-full p-5 shadow-md"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
