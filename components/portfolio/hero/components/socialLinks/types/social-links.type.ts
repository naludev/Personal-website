/**
 * @description
 * @interface SocialLink
 * @property {string} url - URL of the link
 * @property {string} label - Label of the link
 * @property {string} ariaLabel - Aria label of the link
 */
interface SocialLink {
    url: string;
    label: string;
    ariaLabel: string;
}

/**
 * @description
 * @interface HeroSocialLinksProps
 * @property {Object} links - Links data
 * @property {Object} links.linkedin - LinkedIn link
 * @property {string} links.linkedin.url - LinkedIn URL
 * @property {string} links.linkedin.label - LinkedIn label
 * @property {string} links.linkedin.ariaLabel - LinkedIn aria label
 * @property {Object} links.email - Email link
 * @property {string} links.email.url - Email URL
 * @property {string} links.email.label - Email label
 * @property {string} links.email.ariaLabel - Email aria label
 */
export interface HeroSocialLinksProps {
    links: {
        linkedin: SocialLink;
        email: SocialLink;
    };
}