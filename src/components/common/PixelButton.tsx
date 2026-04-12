import Link from "next/link";

type PixelButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "default";
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isSpecialHref(href: string) {
  return href.startsWith("mailto:") || href.startsWith("tel:");
}

export function PixelButton({ href, children, variant = "default" }: PixelButtonProps) {
  const base =
    "pixel-button inline-flex items-center justify-center px-4 py-3 text-[16px] font-bold leading-none tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--glow-yellow)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent";
  const cls = `${base} ${variant === "primary" ? "pixel-button-primary" : ""}`;

  if (isExternalHref(href)) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        <span className="pixel-title text-[10px] tracking-wide">{children}</span>
      </a>
    );
  }

  if (isSpecialHref(href)) {
    return (
      <a className={cls} href={href}>
        <span className="pixel-title text-[10px] tracking-wide">{children}</span>
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      <span className="pixel-title text-[10px] tracking-wide">{children}</span>
    </Link>
  );
}
