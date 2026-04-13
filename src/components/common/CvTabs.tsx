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
  const sectionRef = useRef<HTMLElement | null>(null);
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [markerLeft, setMarkerLeft] = useState<number>(-9999);
  const [markerTop, setMarkerTop] = useState<number>(-9999);
  const [panelKey, setPanelKey] = useState(0);
  const [flashOn, setFlashOn] = useState(false);

  const activeIndex = useMemo(() => {
    const idx = tabs.findIndex((t) => t.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [activeId, tabs]);

  const active = tabs[activeIndex];
  const activeResolvedId = active?.id ?? tabs[0]?.id;

  useLayoutEffect(() => {
    if (!activeResolvedId) return;
    const container = tabListRef.current;
    const activeButton = tabButtonRefs.current[activeResolvedId];
    if (!container || !activeButton) return;

    const update = () => {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
      const aboveY = buttonRect.top - containerRect.top - 34;
      setMarkerLeft(centerX);
      setMarkerTop(aboveY);
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
  }, [activeResolvedId, tabs.length]);

  useEffect(() => {
    if (!activeResolvedId) return;
    setPanelKey((k) => k + 1);
  }, [activeResolvedId]);

  useEffect(() => {
    if (!flashOn) return;
    const t = window.setTimeout(() => setFlashOn(false), 280);
    return () => window.clearTimeout(t);
  }, [flashOn]);

  function handleSelect(nextId: string) {
    setActiveId(nextId);
    setFlashOn(true);

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    sectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <section ref={sectionRef} className={["panel p-6", flashOn ? "tabs-flash" : ""].join(" ")}>
      <div
        ref={tabListRef}
        className="relative flex flex-wrap gap-3"
        role="tablist"
        aria-label="CV sections"
      >
        <span
          aria-hidden
          className="tab-marker"
          style={{ left: `${markerLeft}px`, top: `${markerTop}px` }}
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
              onClick={() => handleSelect(t.id)}
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
          key={`${active.id}-${panelKey}`}
          id={`${baseId}-${active.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-${active.id}-tab`}
          className="mt-5 tab-panel-anim"
        >
          {active.content}
        </div>
      ) : null}
    </section>
  );
}
