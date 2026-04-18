/**
 * Constants for the About component.
 */
export const TECH_STACK = ["React", "React Native", "TypeScript", "Next.js", "Node.js"] as const

/**
 * Type definition for the TechStack constant.
 */
export type TechStack = typeof TECH_STACK[number]