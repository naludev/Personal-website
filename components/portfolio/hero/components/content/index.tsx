"use client";

import { MapPin } from "lucide-react";
import { HeroButtons } from "../buttons";
import { HeroSocialLinks } from "../socialLinks";
import { HeroContentProps } from "./types";

/**
 * @description
 * @component HeroContent
 * @param {HeroContentProps} props - Content props
 * @returns {JSX.Element}
 */
export function HeroContent({ translations, socialLinks }: HeroContentProps) {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary text-sm font-mono">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {translations.available}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                    {translations.name}
                </h1>

                <p className="text-xl sm:text-2xl text-primary font-medium">
                    {translations.role}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {translations.description.split('React')[0]}
                    <span className="text-foreground">React</span> y{" "}
                    <span className="text-foreground">React Native</span>.
                </p>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{translations.location}</span>
                </div>
            </div>

            <HeroButtons
                ctaText={translations.cta}
                ctaSecondaryText={translations.ctaSecondary}
            />

            <HeroSocialLinks links={socialLinks} />
        </div>
    );
}