import { IconTypeProps } from "./icon.type"
/**
 * Type that represents a project.
 * @param iconType - The type of icon to display.
 * @param company - The company that the project belongs to.
 * @param year - The year the project was created.
 * @param type - The type of project.
 * @param title - The title of the project.
 * @param description - The description of the project.
 * @param highlights - The highlights of the project.
 * @param technologies - The technologies used in the project.
 */
export interface ProjectProps {
    iconType: IconTypeProps
    company: string
    year: string
    type: string
    title: string
    description: string
    highlights: string[]
    technologies: string[]
}
