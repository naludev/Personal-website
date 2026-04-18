"use client";

import { AdditionalSkillsProps } from "./types";
/**
 * Component that represents an additional skill.
 * @param title - The title of the additional skill.
 * @param skills - The skills to display.
 * @returns The additional skill.
 */
export function AdditionalSkills({ title, skills }: AdditionalSkillsProps) {
    return (
        <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 text-sm font-mono bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}