"use client"

import { FeatureCardProps } from "./types"

/**
 * @description
 * @component FeatureCard
 * @param {FeatureCardProps} props - Feature card props
 * @returns {JSX.Element}
 */
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {icon}
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    )
}