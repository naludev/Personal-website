/**
 * @description
 * @interface StatsProps
 * @property {Array<{ value: string; key: string }>} stats - Stats data
 * @property {Object} translations - Translations for the stats
 * @property {Object} translations.stats - Stats translations
 * @property {string} translations.stats.years - Years translation
 * @property {string} translations.stats.code - Code translation
 */
export interface StatsProps {
    stats: readonly { value: string; key: string }[];
    translations: {
        stats: {
            years: string;
            code: string;
        };
    };
}