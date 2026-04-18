import { SOCIAL_LINKS } from "../../../constants";
import { TranslationsProps } from "../../../types";
/**
 * @description
 * @interface HeroContentProps
 * @property {HeroTranslations} translations - Translations for the hero section
 * @property {typeof SOCIAL_LINKS} socialLinks - Social links for the hero section
 */
export interface HeroContentProps {
    translations: TranslationsProps;
    socialLinks: typeof SOCIAL_LINKS;
}
