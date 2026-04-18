/**
 * @interface ExperienceJobProps
 * @description Interface for a single job experience.
 * @property {string} period - The period of the job.
 * @property {string} role - The role of the job.
 * @property {string} company - The company of the job.
 * @property {string[]} description - The description of the job.
 * @property {string[]} technologies - The technologies used in the job.
 */
export interface ExperienceJobProps {
    period: string
    role: string
    company: string
    description: string[]
    technologies: string[]
}
