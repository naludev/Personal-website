"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroButtonsProps } from "./types";

/**
 * @description
 * @component HeroButtons
 * @param {HeroButtonsProps} props - Buttons props
 * @returns {JSX.Element}
 */
export function HeroButtons({ ctaText, ctaSecondaryText }: HeroButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
      >
        {ctaText}
        <ArrowRight size={18} />
      </Link>
      <Link
        href="#experience"
        className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
      >
        {ctaSecondaryText}
      </Link>
    </div>
  );
}