import { Smartphone, ShoppingCart, Building2, Globe, Rocket, Zap, Monitor, Layout, Truck, Activity, Video, LucideIcon } from "lucide-react"
import { IconTypeProps } from "../types"
/**
 * Map that represents the icon type of a project.
 * @param iconType - The type of icon to display.
 * @param LucideIcon - The LucideIcon component to display.
 */
export const ICON_MAP: Record<IconTypeProps, LucideIcon> = {
    smartphone: Smartphone,
    cart: ShoppingCart,
    building: Building2,
    globe: Globe,
    rocket: Rocket,
    zap: Zap,
    monitor: Monitor,
    layout: Layout,
    truck: Truck,
    activity: Activity,
    video: Video,
}