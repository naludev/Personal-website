import { ProjectProps } from "../../../types"
/**
 * Type that represents the props of a project card.
 * @param project - The project to display.
 * @param index - The index of the project.
 */
export interface ProjectCardProps {
    project: ProjectProps
    index: number
}