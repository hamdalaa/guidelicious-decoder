import iconBlue from "@/assets/logos/edio-icon-blue.svg.asset.json";
import wordmarkNavy from "@/assets/logos/edio-wordmark-navy.svg.asset.json";
import wordmarkWhite from "@/assets/logos/edio-wordmark-white.svg.asset.json";
import { cn } from "@/lib/utils";

type Variant = "navy" | "white";
type Size = "sm" | "md";

interface EdioLogoProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Whether to wrap the lockup in the light-blue pill background (Slide 101 style). */
  pill?: boolean;
}

/**
 * Edio brand lockup — icon tile + "Edio" wordmark, seated in a light-blue pill.
 * Locked composition from Slide 101 of the Edio brand pack.
 */
export function EdioLogo({
  variant = "navy",
  size = "md",
  className,
  pill = true,
}: EdioLogoProps) {
  const iconHeight = size === "sm" ? 28 : 36;
  const wordmarkHeight = size === "sm" ? 16 : 22;
  const wordmark = variant === "white" ? wordmarkWhite : wordmarkNavy;

  return (
    <span
      dir="ltr"
      className={cn(
        "inline-flex items-center gap-3",
        pill && "rounded-full bg-edio-sky/40 px-3 py-1.5",
        className,
      )}
    >
      <img
        src={iconBlue.url}
        alt=""
        style={{ height: iconHeight, width: iconHeight }}
        className="shrink-0"
      />
      <img
        src={wordmark.url}
        alt="Edio"
        style={{ height: wordmarkHeight }}
        className="shrink-0"
      />
    </span>
  );
}
