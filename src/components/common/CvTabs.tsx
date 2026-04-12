"use client";

import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";

export type CvTab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type CvTabsProps = {
  tabs: CvTab[];
  initialTabId?: string;
};

export function CvTabs({ tabs, initialTabId }: CvTabsProps) {
  const baseId = useId();
  const firstTabId = tabs[0]?.id;
  const safeInitialId = initialTabId ?? firstTabId;
  const [activeId, setActiveId] = useState<string | undefined>(safeInitialId);
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [markerLeft, setMarkerLeft] = useState<number>(-9999);
  const [isJumping, setIsJumping] = useState(false);
  const lastJumpedTabIdRef = useRef<string | undefined>(undefined);

  const activeIndex = useMemo(() => {
    const idx = tabs.findIndex((t) => t.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [activeId, tabs]);

  const active = tabs[activeIndex];

  useLayoutEffect(() => {
    if (!active?.id) return;
    const container = tabListRef.current;
    const activeButton = tabButtonRefs.current[active.id];
    if (!container || !activeButton) return;

    const update = () => {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
      setMarkerLeft(centerX);
    };

    update();
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(container);
    ro?.observe(activeButton);

    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [active?.id, tabs.length]);

  useEffect(() => {
    if (!active?.id) return;
    if (markerLeft < 0) return;
    if (lastJumpedTabIdRef.current === active.id) return;
    lastJumpedTabIdRef.current = active.id;

    setIsJumping(true);
    const t = window.setTimeout(() => setIsJumping(false), 520);
    return () => window.clearTimeout(t);
  }, [active?.id, markerLeft]);

  return (
    <section className="panel p-6">
      <div
        ref={tabListRef}
        className="relative flex flex-wrap gap-3"
        role="tablist"
        aria-label="CV sections"
      >
        <span
          aria-hidden
          className={["tab-marker", isJumping ? "is-jumping" : ""].join(" ")}
          style={{ left: `${markerLeft}px` }}
        />
        {tabs.map((t) => {
          const selected = t.id === active?.id;
          const tabId = `${baseId}-${t.id}-tab`;
          const panelId = `${baseId}-${t.id}-panel`;
          const cls = [
            "pixel-button",
            "inline-flex items-center justify-center px-4 py-3 text-[16px] font-bold leading-none tracking-wide",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--glow-yellow)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
            selected ? "pixel-button-primary" : "",
          ].join(" ");

          return (
            <button
              key={t.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              className={cls}
              onClick={() => setActiveId(t.id)}
              ref={(el) => {
                tabButtonRefs.current[t.id] = el;
              }}
            >
              <span className="pixel-title text-[10px] tracking-wide">{t.label}</span>
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          id={`${baseId}-${active.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-${active.id}-tab`}
          className="mt-5"
        >
          {active.content}
        </div>
      ) : null}
    </section>
  );
}
