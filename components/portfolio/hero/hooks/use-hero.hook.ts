import { useLanguage } from "@/lib/language-context";
import { SOCIAL_LINKS, CODE_BLOCK, STATS } from "../constants";
/**
 * @description
 * @hook useHero
 * @returns {Object} - Hero translations, social links, code block, and stats
 */
export function useHero() {
    const { t } = useLanguage();

    const socialLinks = SOCIAL_LINKS;
    const codeBlockData = CODE_BLOCK;
    const stats = STATS;

    const heroTranslations = t.hero;

    return {
        translations: heroTranslations,
        socialLinks,
        codeBlockData,
        stats
    };
}