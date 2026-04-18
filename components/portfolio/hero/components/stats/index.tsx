"use client";

import { StatsProps } from "./types";

/**
 * @description
 * @component HeroStats
 * @param {StatsProps} props - Stats props
 * @returns {JSX.Element}
 */
export function HeroStats({ stats, translations }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {stats.map((stat) => (
        <div key={stat.key} className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stat.value}</div>
          <div className="text-sm text-muted-foreground">
            {translations.stats[stat.key as keyof typeof translations.stats]}
          </div>
        </div>
      ))}
    </div>
  );
}