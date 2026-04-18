/**
 * @interface ExperienceConfigProps
 * @description Interface for the experience section configuration.
 * @property {number} animationDelay - The delay for the animation.
 * @property {boolean} hoverEffect - Whether the hover effect is enabled.
 * @property {boolean} showExternalIcon - Whether the external icon is enabled.
 */
export const EXPERIENCE_CONFIG = {
    animationDelay: 0.1,
    hoverEffect: true,
    showExternalIcon: true
} as const