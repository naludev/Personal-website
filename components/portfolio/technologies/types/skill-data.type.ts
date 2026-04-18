import { SkillItemProps } from "./skill.type"
/**
 * Type that represents the data of the skills section.
 * @param sectionLabel - The label of the section.
 * @param title - The title of the section.
 * @param subtitle - The subtitle of the section.
 * @param items - The items of the section.
 * @param alsoWorkWith - The text that indicates the additional skills.
 * @param additionalSkills - The additional skills.
 */
export interface SkillsDataProps {
    sectionLabel: string
    title: string
    subtitle: string
    items: SkillItemProps[]
    alsoWorkWith: string
    additionalSkills: string[]
}