"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

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

  return (
    <div
      className={cn("credly-embed", className)}
      data-iframe-width={width}
      data-iframe-height={height}
      data-share-badge-id={id}
      data-share-badge-host="https://www.credly.com"
    />
  );
}
