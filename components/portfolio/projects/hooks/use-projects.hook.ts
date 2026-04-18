import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { ProjectProps } from "../types"

const ITEMS_PER_PAGE = 4

/**
 * Hook that represents the projects section.
 * @returns The projects section.
 */
export function useProjects() {
    const { t } = useLanguage()
    const [currentPage, setCurrentPage] = useState(0)

    const allProjects = t.projects.items as ProjectProps[]
    const sectionLabel = t.projects.sectionLabel
    const title = t.projects.title
    const subtitle = t.projects.subtitle
    const ctaQuestion = t.projects.cta.question
    const ctaLink = t.projects.cta.link

    const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE)
    
    const projects = allProjects.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    )

    const goToPage = (page: number) => {
        setCurrentPage(page)
        const section = document.getElementById("projects")
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages - 1) goToPage(currentPage + 1)
    }

    const prevPage = () => {
        if (currentPage > 0) goToPage(currentPage - 1)
    }

    return {
        projects,
        sectionLabel,
        title,
        subtitle,
        ctaQuestion,
        ctaLink,
        currentPage,
        totalPages,
        goToPage,
        nextPage,
        prevPage
    }
}