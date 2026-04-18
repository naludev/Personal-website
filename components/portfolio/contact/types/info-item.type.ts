import { LucideIcon } from "lucide-react";

/**
 * Interface that represents a rendered info item (with already-resolved strings).
 * @param icon - The Lucide icon component.
 * @param label - The display label (already translated).
 * @param value - The display value (already translated or static).
 * @param link - Optional href for clickable items.
 * @param isLink - Whether the value should render as a link.
 */
export interface InfoItemProps {
    icon: LucideIcon;
    label: string;
    value: string;
    link?: string;
    isLink?: boolean;
}