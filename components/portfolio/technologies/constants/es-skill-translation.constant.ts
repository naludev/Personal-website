import { SkillsDataProps } from "../types";
/**
 * Spanish translations for the skills section.
 * @param sectionLabel - The label of the section.
 * @param title - The title of the section.
 * @param subtitle - The subtitle of the section.
 * @param items - The items of the section.
 * @param alsoWorkWith - The text that indicates the additional skills.
 * @param additionalSkills - The additional skills.
 */
export const ES_SKILLS_TRANSLATIONS: SkillsDataProps = {
    sectionLabel: "Mis Habilidades",
    title: "Tecnologías y Herramientas que Uso",
    subtitle: "A lo largo de los años, he trabajado con diversas tecnologías y herramientas para construir aplicaciones robustas y escalables.",
    alsoWorkWith: "También tengo experiencia con",
    items: [
        {
            name: "React",
            description: "Construcción de interfaces interactivas con hooks, contexto y patrones modernos de React.",
            icon: "⚛️",
            color: "bg-yellow-500/10 text-yellow-500",
        },
        {
            name: "Next.js",
            description: "Framework React full-stack con SSR, SSG y rutas API.",
            icon: "▲",
            color: "bg-gray-500/10 text-gray-500",
        },
        {
            name: "TypeScript",
            description: "JavaScript con tipado seguro para aplicaciones escalables y mantenibles.",
            icon: "TS",
            color: "bg-blue-500/10 text-blue-500",
        },
        {
            name: "Tailwind CSS",
            description: "Framework CSS utilitario para desarrollo rápido de interfaces.",
            icon: "🎨",
            color: "bg-yellow-500/10 text-yellow-500",
        },
        {
            name: "Node.js",
            description: "Runtime de JavaScript para construir servicios backend rápidos y escalables.",
            icon: "🟢",
            color: "bg-green-500/10 text-green-500",
        },
        {
            name: "GraphQL",
            description: "Lenguaje de consulta para APIs con tipado fuerte y capacidades en tiempo real.",
            icon: "📊",
            color: "bg-pink-500/10 text-pink-500",
        },
    ],
    additionalSkills: [
        "Python", "Docker", "PostgreSQL", "MongoDB",
        "Jest", "Cypress", "Figma", "Git"
    ],
};