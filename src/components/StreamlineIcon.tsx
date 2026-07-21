import { Icon, type IconProps } from "@iconify/react";
import { cn } from "@/lib/utils";

/**
 * StreamlineIcon — thin wrapper around Iconify that pulls from the free
 * Streamline (Ultimate Regular Free) set at https://api.iconify.design.
 *
 * Pass a slug WITHOUT the "streamline:" prefix, e.g. `name="shopping-cart-2"`.
 * Renders with `currentColor` so Tailwind text-* utilities control the color.
 */
export interface StreamlineIconProps extends Omit<IconProps, "icon"> {
  name: string;
  className?: string;
}

export function StreamlineIcon({ name, className, ...rest }: StreamlineIconProps) {
  return (
    <Icon
      icon={`streamline:${name}`}
      className={cn("h-4 w-4", className)}
      aria-hidden
      {...rest}
    />
  );
}

/** Slugs used across the app. Keep this list in sync when adding new icons. */
export const STREAMLINE = {
  arrowLeft: "interface-arrows-round-left-diagram-round-arrow-left",
  arrowRight: "interface-arrows-round-right-diagram-round-arrow-right",
  cart: "shopping-cart-2",
  telegram: "telegram",
  instagram: "instagram",
} as const;
