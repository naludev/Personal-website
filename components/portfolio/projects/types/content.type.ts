import { ProjectProps } from "./project.type"
/**
 * Type that represents the content of the projects section.
 * @param sectionLabel - The label of the section.
 * @param title - The title of the section.
 * @param subtitle - The subtitle of the section.
 * @param items - The items of the section.
 * @param cta - The call to action of the section.
 * @param cta.question - The question of the call to action.
 * @param cta.link - The link of the call to action.
 */
export interface ProjectsContentProps {
    sectionLabel: string
    title: string
    subtitle: string
    items: ProjectProps[]
    cta: {
        question: string
        link: string
    }
}