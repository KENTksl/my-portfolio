"use client";

import { useEffect, useState } from "react";

type CopyableValueProps = {
  text: string;
  href?: string;
};

export function CopyableValue({ text, href }: CopyableValueProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 900);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const el = document.createElement("textarea");
        el.value = text;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.focus();
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="copy-wrap">
      {href ? (
        <a className="break-words text-[color:var(--panel-link)] underline" href={href}>
          {text}
        </a>
      ) : (
        <span className="break-words">{text}</span>
      )}
      <button className="pixel-button copy-button" type="button" onClick={copy}>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="copy-icon"
        >
          <path
            fill="currentColor"
            d="M16 1H6a2 2 0 0 0-2 2v10h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z"
          />
        </svg>
        <span className="sr-only">Copy</span>
      </button>
      <span className={["copy-toast", copied ? "is-visible" : ""].join(" ")} aria-hidden>
        Copied
      </span>
    </span>
  );
}
