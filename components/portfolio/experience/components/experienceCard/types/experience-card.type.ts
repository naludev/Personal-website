import { ExperienceJobProps } from "../../../types"
/**
 * @interface ExperienceCardProps
 * @description Interface for the experience card component.
 * @property {ExperienceJobProps} job - The job experience.
 * @property {number} index - The index of the job experience.
 */
export interface ExperienceCardProps {
    job: ExperienceJobProps
    index: number
}
