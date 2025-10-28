"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface FloatingIconRingProps {
  items: { icon: LucideIcon; label: string }[];
  centerImage?: {
    src: string;
    alt: string;
    size?: number;
    offsetY?: number;
    objectPosition?: string;
    objectFit?: "cover" | "contain";
  };
}
export function FloatingIconRing({
  items,
  centerImage,
}: FloatingIconRingProps) {
  const centerSize = centerImage?.size ?? 156;
  const centerOffset = centerImage?.offsetY ?? 0;
  const objectPosition = centerImage?.objectPosition ?? "50% 45%";
  const objectFit = centerImage?.objectFit ?? "cover";
  return (
    <div className="relative h-60 w-60 md:h-72 md:w-72">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/40 via-cyan-400/20 to-transparent blur-3xl" />
      <div className="absolute inset-6 rounded-full border border-slate-200/70 bg-gradient-to-br from-white/60 via-white/20 to-transparent backdrop-blur-sm dark:border-white/20 dark:from-white/10 dark:via-white/5" />
      {centerImage ? (
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-slate-200/80 bg-white/85 shadow-[0_25px_70px_-45px_rgba(14,116,144,0.55)] backdrop-blur-md dark:border-white/20 dark:bg-white/10"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 18,
            delay: 0.2,
          }}
          style={{
            width: centerSize,
            height: centerSize,
            marginTop: centerOffset,
          }}
        >
          <Image
            src={centerImage.src}
            alt={centerImage.alt}
            width={centerSize}
            height={centerSize}
            className={cn(
              "h-full w-full",
              objectFit === "cover" ? "object-cover" : "object-contain",
            )}
            style={{ objectPosition, objectFit }}
            priority
          />
        </motion.div>
      ) : null}
      <ul className="relative h-full w-full list-none p-0">
        {items.map((item, index) => {
          const angle = (index / items.length) * Math.PI * 2;
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const Icon = item.icon;
          return (
            <motion.li
              key={item.label}
              className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/85 text-violet-600 shadow-lg backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-violet-200"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 160,
                damping: 15,
              }}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <Icon size={22} />
              <span className="sr-only">{item.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
