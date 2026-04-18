/**
 * Interface for the Photo component.
 * @param imageSrc - The source of the image.
 * @param alt - The alt text for the image.
 * @param name - The name of the person.
 * @param role - The role of the person.
 * @param location - The location of the person.
 */
export interface PhotoProps {
    imageSrc: string
    alt: string
    name: string
    role: string
    location: string
}