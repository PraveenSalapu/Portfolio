"use client";

import { motion } from "framer-motion";

const iconClasses = [
  "devicon-java-plain colored",
  "devicon-spring-plain colored",
  "devicon-python-plain colored",
  "devicon-amazonwebservices-plain-wordmark colored",
  "devicon-docker-plain colored",
  "devicon-kubernetes-plain colored",
  "devicon-git-plain colored",
  "devicon-javascript-plain colored",
  "devicon-typescript-plain colored",
  "devicon-react-original colored",
  "devicon-nextjs-original-wordmark",
];

const marqueeIcons = [...iconClasses, ...iconClasses];

export function AnimatedDeviconStrip() {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-4 backdrop-blur-xl dark:bg-white/5">
      <motion.div
        className="flex w-max items-center gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {marqueeIcons.map((icon, index) => (
          <i key={`${icon}-${index}`} className={`devicon-icon ${icon}`} />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
}