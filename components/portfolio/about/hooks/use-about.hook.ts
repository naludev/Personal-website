import { useLanguage } from "@/lib/language-context"
import { TECH_STACK } from "../constants"
/**
 * Hook for the About component.
 * @returns {object} - The About component data.
 * @property {object} t - The translation object.
 * @property {object} paragraphs - The paragraphs of the About component.
 * @property {object} companies - The companies of the About component.
 * @property {Array<string>} techStack - The tech stack of the About component.
 */
export function useAbout() {
    const { t } = useLanguage()

    const paragraphs = {
        first: t.about.paragraphs[0],
        second: t.about.paragraphs[1],
        third: t.about.paragraphs[2]
    }

    const companies = t.about.paragraph2.companies

    return {
        t,
        paragraphs,
        companies,
        techStack: TECH_STACK
    }
}