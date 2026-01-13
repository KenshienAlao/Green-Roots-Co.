"use client";

import { MoveRight, ShoppingCart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const PlantsChoose = [
  {
    id: 1,
    icon: "https://images.unsplash.com/photo-1739678018672-65977104eb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZWQlMjBzbmFrZSUyMHBsYW50fGVufDF8fHx8MTc2ODA5NTExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Snake Plant",
    scientificName: "Sansevieria",
    care: "Low water • Low light • Air purifying",
    price: "$24.99",
  },
  {
    id: 2,
    icon: "https://images.unsplash.com/photo-1655188565217-014d76f9b670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwaW5kb29yfGVufDF8fHx8MTc2ODA5NTExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Monstera",
    scientificName: "Monstera Deliciosa",
    care: "Moderate water • Bright indirect light",
    price: "$32.99",
  },
  {
    id: 3,
    icon: "https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3Rob3MlMjBwbGFudHxlbnwxfHx8fDE3Njc5OTE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Pothos",
    scientificName: "Epipremnum Aureum",
    care: "Low water • Low to bright light",
    price: "$18.99",
  },
  {
    id: 4,
    icon: "https://images.unsplash.com/photo-1621512366232-0b7b78983782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudCUyMHBvdHxlbnwxfHx8fDE3NjgwMDgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Succulent Mix",
    scientificName: "Various Species",
    care: "Very low water • Bright light",
    price: "$15.99",
  },
  {
    id: 5,
    icon: "https://images.unsplash.com/photo-1621923164562-21d3118adae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZSUyMGxpbHklMjBwbGFudHxlbnwxfHx8fDE3NjgwNjQ2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    care: "Moderate water • Low light tolerant",
    price: "$28.99",
  },
  {
    id: 6,
    icon: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWRkbGUlMjBsZWFmJTIwZmlnfGVufDF8fHx8MTc2ODA2OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus Lyrata",
    care: "Moderate water • Bright indirect light",
    price: "$39.99",
  },
];

export default function FeaturePlants() {
  const check = useRef(null);
  const isVisibile = useInView(check, { amount: 0 });

  return (
    <section id="shopfeature" className="bg-off px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={check}
          animate={isVisibile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.5,
            type: "tween",
            stiffness: 300,
          }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-olive mb-4 text-5xl">
            Featured Plants
          </h2>
          <p className="font-body text-charcoal/70 mb-6 text-lg">
            Handpicked selections for every home and budget
          </p>
        </motion.div>
        <motion.div
          ref={check}
          animate={isVisibile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 1.5,
            type: "tween",
            stiffness: 300,
          }}
          className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {PlantsChoose.map((info__PlantChoose) => (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                type: "tween",
                stiffness: 300,
              }}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-2xl"
              key={info__PlantChoose.id}
            >
              <div className="aspect-square">
                <img
                  className="size-full object-cover"
                  src={info__PlantChoose.icon}
                />
              </div>
              <div className="mb-6 p-6">
                <h3 className="font-heading text-olive mb-1 text-2xl">
                  {info__PlantChoose.name}
                </h3>
                <p className="font-body text-charcoal/50 text-sm italic">
                  {info__PlantChoose.scientificName}
                </p>
                <p className="text-charcoal/70 font-body mb-4 text-sm">
                  {info__PlantChoose.care}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-olive font-heading text-2xl">
                    {info__PlantChoose.price}
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="bg-olive/60 flex size-15 items-center justify-center rounded-full"
                  >
                    <ShoppingCart className="size-8 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: "tween",
              stiffness: 300,
            }}
            className="bg-olive/90 font-heading flex items-center gap-2 rounded-full px-7 py-4 text-2xl text-white"
          >
            see more
            <span>
              <MoveRight />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
