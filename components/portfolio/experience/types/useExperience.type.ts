import { ExperienceJobProps } from "./experience-job.type"
/**
 * @interface UseExperienceDataReturnProps
 * @description Interface for the return value of the useExperienceData hook.
 * @property {string} sectionLabel - The label for the experience section.
 * @property {string} title - The title for the experience section.
 * @property {ExperienceJobProps[]} jobs - The list of job experiences.
 */
export interface UseExperienceDataReturnProps {
    sectionLabel: string
    title: string
    jobs: ExperienceJobProps[]
}