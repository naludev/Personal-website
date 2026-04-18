import { SkillsDataProps } from "../types";

/**
 * Default translations for the skills section.
 * @param sectionLabel - The label of the section.
 * @param title - The title of the section.
 * @param subtitle - The subtitle of the section.
 * @param items - The items of the section.
 * @param alsoWorkWith - The text that indicates the additional skills.
 * @param additionalSkills - The additional skills.
 */
export const DEFAULT_SKILLS_TRANSLATIONS: SkillsDataProps = {
    sectionLabel: "My Skills",
    title: "Technologies & Tools I Work With",
    subtitle: "Over the years, I've worked with a variety of technologies and tools to build robust and scalable applications.",
    alsoWorkWith: "Also experienced with",
    items: [
        {
            name: "React",
            description: "Building interactive UIs with hooks, context, and modern React patterns.",
            icon: "⚛️",
            color: "bg-yellow-500/10 text-yellow-500",
        },
        {
            name: "Next.js",
            description: "Full-stack React framework with SSR, SSG, and API routes.",
            icon: "▲",
            color: "bg-gray-500/10 text-gray-500",
        },
        {
            name: "TypeScript",
            description: "Type-safe JavaScript for scalable and maintainable applications.",
            icon: "TS",
            color: "bg-blue-500/10 text-blue-500",
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for rapid UI development.",
            icon: "🎨",
            color: "bg-yellow-500/10 text-yellow-500",
        },
        {
            name: "Node.js",
            description: "JavaScript runtime for building fast and scalable backend services.",
            icon: "🟢",
            color: "bg-green-500/10 text-green-500",
        },
        {
            name: "GraphQL",
            description: "Query language for APIs with strong typing and real-time capabilities.",
            icon: "📊",
            color: "bg-pink-500/10 text-pink-500",
        },
    ],
    additionalSkills: [
        "Python", "Docker", "PostgreSQL", "MongoDB",
        "Jest", "Cypress", "Figma", "Git"
    ],
};