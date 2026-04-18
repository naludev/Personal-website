"use client";

import {
  HeroCodeBlock,
  HeroStats,
} from "./components";
import { HeroContent } from "./components/content";
import { useHero } from "./hooks";
/**
 * @description
 * @component Hero
 * @returns {JSX.Element}
 */
export function Hero() {
  const { translations, socialLinks, codeBlockData, stats } = useHero();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content: Texts, Buttons, Social */}
          <HeroContent
            translations={translations}
            socialLinks={socialLinks}
          />

          {/* Right Content: Code Block & Stats */}
          <div className="relative">
            <HeroCodeBlock
              data={codeBlockData}
              comment={translations.codeComment}
            />
            <HeroStats
              stats={stats}
              translations={translations}
            />
          </div>
        </div>
      </div>
    </section>
  );
}