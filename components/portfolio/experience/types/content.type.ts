import { ExperienceJobProps } from "./experience-job.type"
/**
 * @interface ExperienceContentProps
 * @description Interface for the experience section content.
 * @property {string} sectionLabel - The label for the experience section.
 * @property {string} title - The title for the experience section.
 * @property {ExperienceJobProps[]} jobs - The list of job experiences.
 */
export interface ExperienceContentProps {
    sectionLabel: string
    title: string
    jobs: ExperienceJobProps[]
}