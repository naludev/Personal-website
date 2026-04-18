/**
 * Interface that represents a quick link.
 * @param href - The link of the quick link.
 * @param label - The label of the quick link.
 * @param icon - The icon of the quick link.
 * @param isPrimary - Whether the quick link is primary.
 */
export interface QuickLinkProps {
    href: string;
    label: string;
    icon: React.ElementType;
    isPrimary?: boolean;
}