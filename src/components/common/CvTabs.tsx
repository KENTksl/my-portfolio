"use client";

import { useId, useMemo, useState } from "react";

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

  const activeIndex = useMemo(() => {
    const idx = tabs.findIndex((t) => t.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [activeId, tabs]);

  const active = tabs[activeIndex];

  return (
    <section className="panel p-6">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="CV sections">
        {tabs.map((t) => {
          const selected = t.id === active?.id;
          const tabId = `${baseId}-${t.id}-tab`;
          const panelId = `${baseId}-${t.id}-panel`;
          const cls = [
            "pixel-button",
            "inline-flex items-center justify-center px-4 py-3 text-[16px] font-bold tracking-wide",
            selected ? "bg-green-500 text-gray-900" : "bg-[var(--panel)] text-gray-100",
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
            >
              {t.label}
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
