// components/hero/HeroSocialLinks.tsx
"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { HeroSocialLinksProps } from "./types";

/**
 * @description
 * @component HeroSocialLinks
 * @param {HeroSocialLinksProps} props - Social links props
 * @returns {JSX.Element}
 */
export function HeroSocialLinks({ links }: HeroSocialLinksProps) {
    return (
        <div className="flex items-center gap-6 pt-4">
            <Link
                href={links.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={links.linkedin.ariaLabel}
            >
                <Linkedin size={22} />
            </Link>
            <Link
                href={links.email.url}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={links.email.ariaLabel}
            >
                <Mail size={22} />
            </Link>
        </div>
    );
}