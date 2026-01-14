"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { toast } from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);

  const showToast = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop actual submit

    const email = emailRef.current?.value;
    if (!email) {
      return;
    }
    // success
    toast.custom((t) => (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
        className={`transition-opacity${
          t.visible ? "opacity-100" : "opacity-0"
        } ring-opacity-5 bg-sage pointer-events-auto flex w-full max-w-md rounded-lg shadow-lg`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="shrink-0 pt-0.5">
              <img
                className="size-15 rounded-full"
                src="/logopic.png"
                alt="logo"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-charcoal-900 font-heading mb-2 text-xl font-medium">
                GreenRoot Co.
              </p>
              <p className="text-charcoal-100 text-sm">
                Subscription successful! You’re now on our mailing list.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    ));
  };
  return (
    <section id="contact" className="relative overflow-hidden px-8 py-20 sm:scroll-mt-10 md:scroll-mt-11 lg:scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="size-full object-cover"
          src="https://images.unsplash.com/photo-1631004964983-ad8ccef7ee0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudHMlMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MDk1MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
      </div>
      <div className="bg-olive/85 absolute inset-0" />
      <div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-10 flex justify-center">
              <div className="rounded-full bg-white/20 p-5">
                <Mail className="size-10 text-white" />
              </div>
            </div>
            <h2 className="font-heading mb-5 text-5xl text-white/90">
              Grow Your Knowledge
            </h2>
            <p className="font-body mx-auto mb-8 max-w-2xl text-white/80">
              Join our community for exclusive plant care tips, seasona deals,
              and sustainable living inspiration delivered to your inbox
              monthly.
            </p>
            <form onSubmit={showToast} className="mx-auto mb-5 max-w-lg">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <motion.input
                  ref={emailRef}
                  whileFocus={{
                    scale: 1.02,
                  }}
                  placeholder="Enter your email"
                  type="email"
                  required
                  className="focus:ring-sage placeholder:text-sage mx-auto flex-1 rounded-full bg-white px-5 py-5 focus:ring-1 focus:outline-none"
                />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "tween",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="bg-sage mx-auto flex items-center gap-3 rounded-full px-10 py-5"
                  type="submit"
                >
                  <p className="text-lg text-white">Subscribe</p>
                  <ArrowRight className="size-6 text-white" />
                </motion.button>
              </div>
            </form>
            <p className="text-off/70 font-body text-sm">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
