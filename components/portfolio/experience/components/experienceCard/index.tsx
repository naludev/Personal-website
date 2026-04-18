"use client"

import { ExternalLink } from "lucide-react"
import { ExperienceCardProps } from "./types"
import { EXPERIENCE_CONFIG } from "../../constants"

/**
 * @component ExperienceCard
 * @description Component to display a single job experience.
 * @param {ExperienceCardProps} props - The props for the component.
 * @returns {JSX.Element} The experience card component.
 */
export function ExperienceCard({ job, index }: ExperienceCardProps) {
    return (
        <div
            className="group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all"
            style={{ animationDelay: `${index * EXPERIENCE_CONFIG.animationDelay}s` }}
        >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Period */}
                <div className="md:w-48 shrink-0">
                    <span className="text-sm font-mono text-muted-foreground">
                        {job.period}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            {job.role}
                            <span className="text-primary">·</span>
                            <span className="text-primary">{job.company}</span>
                            {EXPERIENCE_CONFIG.showExternalIcon && (
                                <ExternalLink
                                    size={16}
                                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                            )}
                        </h3>
                    </div>

                    <ul className="space-y-3">
                        {job.description.map((item, i) => (
                            <li
                                key={i}
                                className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {job.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}