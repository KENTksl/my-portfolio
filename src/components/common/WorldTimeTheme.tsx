"use client";

import { useEffect, useMemo, useState } from "react";

type Rgb = { r: number; g: number; b: number };

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function parseHexColor(hex: string): Rgb {
  const clean = hex.replace("#", "").trim();
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const n = Number.parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function mixColor(a: string, b: string, t: number) {
  const ca = parseHexColor(a);
  const cb = parseHexColor(b);
  const r = Math.round(lerp(ca.r, cb.r, t));
  const g = Math.round(lerp(ca.g, cb.g, t));
  const b2 = Math.round(lerp(ca.b, cb.b, t));
  return `rgb(${r} ${g} ${b2})`;
}

function setVar(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

function applyWorldByLocalTime(date: Date) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const dayT = minutes / 1440;
  const angle = 2 * Math.PI * dayT - Math.PI / 2;
  const sunAlt = Math.sin(angle);

  const nightness = smoothstep(0.06, 0.32, -sunAlt);
  const twilight = smoothstep(0.0, 0.22, 1 - Math.abs(sunAlt));
  const isNight = nightness > 0.55;

  document.documentElement.dataset.timeTheme = isNight ? "night" : "day";

  const dayPalette = {
    sky0: "#00a3ff",
    sky1: "#35b5ff",
    sky2: "#6fd6ff",
    sky3: "#bff3ff",
    sunset0: "#fff0b3",
    sunset1: "#ffe06b",
  };

  const nightPalette = {
    sky0: "#020617",
    sky1: "#0b1026",
    sky2: "#0f1b3a",
    sky3: "#132a52",
    sunset0: "#1b2e5e",
    sunset1: "#2b4aa3",
  };

  const twiBoost = Math.max(0, twilight - 0.2) / 0.8;
  const sunsetWarm0 = "#ffedd5";
  const sunsetWarm1 = "#fb7185";

  setVar("--sky-0", mixColor(dayPalette.sky0, nightPalette.sky0, nightness));
  setVar("--sky-1", mixColor(dayPalette.sky1, nightPalette.sky1, nightness));
  setVar("--sky-2", mixColor(dayPalette.sky2, nightPalette.sky2, nightness));
  setVar("--sky-3", mixColor(dayPalette.sky3, nightPalette.sky3, nightness));

  const sunset0 = mixColor(dayPalette.sunset0, nightPalette.sunset0, nightness);
  const sunset1 = mixColor(dayPalette.sunset1, nightPalette.sunset1, nightness);
  setVar("--sunset-0", twiBoost > 0 ? mixColor(sunset0, sunsetWarm0, twiBoost) : sunset0);
  setVar("--sunset-1", twiBoost > 0 ? mixColor(sunset1, sunsetWarm1, twiBoost) : sunset1);

  const sunOpacity = smoothstep(-0.05, 0.12, sunAlt);
  const moonOpacity = 1 - sunOpacity;

  const x = 50 - 40 * Math.cos(angle);
  const celestialAlt = sunOpacity * sunAlt + moonOpacity * -sunAlt;
  const y = 70 - 58 * celestialAlt;

  setVar("--celestial-x", `${x.toFixed(2)}%`);
  setVar("--celestial-y", `${y.toFixed(2)}%`);
  setVar("--celestial-size", `${Math.round(lerp(170, 140, moonOpacity))}px`);

  const sunA = 0.98 * sunOpacity;
  const moonA = 0.95 * moonOpacity;
  const color = sunA >= moonA ? `rgba(253, 224, 71, ${sunA.toFixed(3)})` : `rgba(226, 232, 240, ${moonA.toFixed(3)})`;
  setVar("--celestial-color", color);

  const stars = clamp01(smoothstep(0.0, 0.75, nightness) * (0.25 + 0.75 * moonOpacity));
  setVar("--stars-opacity", stars.toFixed(3));

  setVar("--decor-opacity", lerp(0.62, 0.25, nightness).toFixed(3));
}

function makePresetDate(hours: number) {
  const d = new Date();
  d.setHours(hours, 0, 0, 0);
  return d;
}

type TimeThemeMode = "auto" | "day" | "night";

export function WorldTimeTheme() {
  const konami = useMemo(
    () => ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
    [],
  );
  const [eggEnabled, setEggEnabled] = useState(true);
  const [showOneUp, setShowOneUp] = useState(false);
  const [timeMode, setTimeMode] = useState<TimeThemeMode>("auto");
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("timeThemeMode");
      if (raw === "day" || raw === "night" || raw === "auto") setTimeMode(raw);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("timeThemeMode", timeMode);
    } catch {}
  }, [timeMode]);

  useEffect(() => {
    setThemeOpen(false);
  }, [timeMode]);

  useEffect(() => {
    if (timeMode === "auto") {
      const apply = () => {
        applyWorldByLocalTime(new Date());
      };
      apply();
      const id = window.setInterval(apply, 1_000);
      return () => window.clearInterval(id);
    }

    applyWorldByLocalTime(timeMode === "day" ? makePresetDate(12) : makePresetDate(0));
    return;
  }, [timeMode]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("easterEggEnabled");
      if (raw === "0") setEggEnabled(false);
      if (raw === "1") setEggEnabled(true);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("easterEggEnabled", eggEnabled ? "1" : "0");
    } catch {}
  }, [eggEnabled]);

  useEffect(() => {
    const buf: string[] = [];
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      buf.push(key);
      if (buf.length > konami.length) buf.shift();

      const match = buf.every((v, i) => {
        const target = konami[i];
        if (!target) return false;
        if (target === "a" || target === "b") return v.toLowerCase() === target;
        return v === target;
      });

      if (!match) return;
      if (!eggEnabled) return;

      setShowOneUp(true);
      window.setTimeout(() => setShowOneUp(false), 1100);

      try {
        const AudioCtx = (window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext) as typeof AudioContext | undefined;
        const ctx = AudioCtx ? new AudioCtx() : null;
        if (!ctx) return;
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "square";
        o.frequency.value = 988;
        const now = ctx.currentTime;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(0.16, now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(now);
        o.stop(now + 0.18);
        o.onended = () => {
          ctx.close().catch(() => {});
        };
      } catch {}
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [eggEnabled, konami]);

  return (
    <>
      {showOneUp ? (
        <div className="easter-1up" aria-hidden>
          <span className="pixel-title text-[12px] tracking-wide">1UP</span>
        </div>
      ) : null}
      <div className="theme-toggle">
        <button
          className="pixel-button theme-toggle-main"
          type="button"
          onClick={() => setThemeOpen((v) => !v)}
        >
          <span className="pixel-title text-[10px] tracking-wide">Themes</span>
        </button>
        {themeOpen ? (
          <div className="theme-toggle-menu" role="menu" aria-label="Theme mode">
            <button
              className={["pixel-button theme-toggle-option", timeMode === "auto" ? "is-active" : ""].join(" ")}
              type="button"
              role="menuitem"
              onClick={() => setTimeMode("auto")}
            >
              <span className="pixel-title text-[10px] tracking-wide">Auto</span>
            </button>
            <button
              className={["pixel-button theme-toggle-option", timeMode === "day" ? "is-active" : ""].join(" ")}
              type="button"
              role="menuitem"
              onClick={() => setTimeMode("day")}
            >
              <span className="pixel-title text-[10px] tracking-wide">Day</span>
            </button>
            <button
              className={["pixel-button theme-toggle-option", timeMode === "night" ? "is-active" : ""].join(" ")}
              type="button"
              role="menuitem"
              onClick={() => setTimeMode("night")}
            >
              <span className="pixel-title text-[10px] tracking-wide">Night</span>
            </button>
          </div>
        ) : null}
      </div>
      <button className="pixel-button egg-toggle" type="button" onClick={() => setEggEnabled((v) => !v)}>
        <span className="pixel-title text-[10px] tracking-wide">{eggEnabled ? "Egg: ON" : "Egg: OFF"}</span>
      </button>
    </>
  );
}
