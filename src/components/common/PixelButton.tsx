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
    "pixel-button inline-flex items-center justify-center bg-[var(--panel)] px-4 py-3 text-[16px] font-bold leading-none tracking-wide";
  const primary = "bg-green-500 text-gray-900";
  const cls = `${base} ${variant === "primary" ? primary : "text-gray-100"}`;

  if (isExternalHref(href)) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (isSpecialHref(href)) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
