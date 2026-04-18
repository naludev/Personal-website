import { useLanguage } from "@/lib/language-context"
import { UseExperienceDataReturnProps } from "../types"
/**
 * @hook useExperienceData
 * @description Hook to get the experience data.
 * @returns {UseExperienceDataReturnProps} The experience data.
 */
export function useExperienceData(): UseExperienceDataReturnProps {
    const { t } = useLanguage()

    return {
        sectionLabel: t.experience.sectionLabel,
        title: t.experience.title,
        jobs: t.experience.jobs
    }
}