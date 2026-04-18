"use client";

import { SkillCardProps } from "./types";
/**
 * Component that represents a skill card.
 * @param skill - The skill to display.
 * @returns The skill card.
 */
export function SkillCard({ skill }: SkillCardProps) {
    return (
        <div className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all">
            <div
                className={`w-12 h-12 rounded-lg ${skill.color} flex items-center justify-center text-lg font-bold mb-4`}
            >
                {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
                {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
            </p>
        </div>
    );
}