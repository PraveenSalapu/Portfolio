"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Credly?: {
      renderBadgeElements?: () => void;
    };
  }
}

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

interface CredlyBadgeProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
}

export function CredlyBadge({
  id,
  width = 220,
  height = 280,
  className,
}: CredlyBadgeProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!document.getElementById(CREDLY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = CREDLY_SCRIPT_ID;
      script.src = CREDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (event: MediaQueryList | MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    updateTheme(matcher);

    if (typeof matcher.addEventListener === "function") {
      matcher.addEventListener("change", updateTheme);
      return () => matcher.removeEventListener("change", updateTheme);
    }

    matcher.addListener(updateTheme);
    return () => matcher.removeListener(updateTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.Credly?.renderBadgeElements?.();
  }, [theme]);

  return (
    <div
      className={cn("credly-embed", className)}
      data-iframe-width={width}
      data-iframe-height={height}
      data-share-badge-id={id}
      data-share-badge-host="https://www.credly.com"
      data-share-badge-theme={theme}
    />
  );
}
