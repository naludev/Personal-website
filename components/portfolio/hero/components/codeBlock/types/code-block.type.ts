/**
 * @description
 * @interface CodeBlockProps
 * @property {Object} data - Data for the code block
 * @property {Object} data.developer - Developer data
 * @property {string} data.developer.name - Developer name
 * @property {string} data.developer.role - Developer role
 * @property {number} data.developer.experience - Developer experience
 * @property {string[]} data.developer.stack - Developer stack
 * @property {boolean} data.developer.available - Developer availability
 * @property {string} comment - Comment for the code block
 */
export interface CodeBlockProps {
    data: {
        developer: {
            name: string;
            role: string;
            experience: number;
            stack: readonly string[];
            available: boolean;
        };
    };
    comment: string;
}
