import { useLanguage } from "@/lib/language-context";
import { DEFAULT_SKILLS_TRANSLATIONS, ES_SKILLS_TRANSLATIONS } from "../constants";
import { SkillsDataProps } from "../types";

/**
 * Hook that represents the skills section.
 * @returns The skills section.
 * @returns {SkillsDataProps} translations - The translations.
 * @returns {void} - The skills section.
 */
export function useSkillsTranslations(): SkillsDataProps {
    const { language } = useLanguage();

    // Assuming language is 'en' or 'es'
    const translations: Record<string, SkillsDataProps> = {
        en: DEFAULT_SKILLS_TRANSLATIONS,
        es: ES_SKILLS_TRANSLATIONS,
    };

    return translations[language] || DEFAULT_SKILLS_TRANSLATIONS;
}