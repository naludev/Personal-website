"use client"

import Image from "next/image"
import { PhotoProps } from "./types"

/**
 * @description
 * @component Photo
 * @param {PhotoProps} props - Photo props
 * @returns {JSX.Element}
 */
export function AboutPhoto({ imageSrc, alt, name, role, location }: PhotoProps) {
    return (
        <div className="flex items-center gap-6">
            <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                    <Image
                        src={imageSrc}
                        alt={alt}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full scale-100"
                        priority
                    />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
            </div>
            <div className="hidden sm:block">
                <p className="text-lg font-semibold text-foreground">{name}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
                <p className="text-xs text-primary font-mono mt-1">{location}</p>
            </div>
        </div>
    )
}