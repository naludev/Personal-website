import { ExternalLink } from "lucide-react"
import { ICON_MAP } from "@/components/portfolio/projects/constants"
import { ProjectCardProps } from "./types"
/**
 * Component that represents a project card.
 * @param project - The project to display.
 * @param index - The index of the project.
 * @returns The project card.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
    const IconComponent = ICON_MAP[project.iconType]

    return (
        <div className="group bg-card border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                        <span>{project.company}</span>
                        <span className="text-primary">·</span>
                        <span>{project.year}</span>
                    </div>
                </div>

                <div className="space-y-1">
                    <p className="text-xs text-primary font-mono">{project.type}</p>
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Highlights */}
            <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                        <span
                            key={highlight}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                        >
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border bg-secondary/20">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-mono text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}