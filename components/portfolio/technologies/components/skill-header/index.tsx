"use client";

import { SkillsHeaderProps } from "./types";
/**
 * Component that represents a skill header.
 * @param sectionLabel - The label of the section.
 * @param title - The title of the section.
 * @param subtitle - The subtitle of the section.
 * @returns The skill header.
 */
export function SkillsHeader({ sectionLabel, title, subtitle }: SkillsHeaderProps) {
    return (
        <div className="space-y-2 mb-16">
            <p className="text-primary font-mono text-sm">{sectionLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4 leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
}