"use client";

import { useEffect } from "react";

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

export function WorldTimeTheme() {
  useEffect(() => {
    const apply = () => {
      applyWorldByLocalTime(new Date());
    };

    apply();
    const id = window.setInterval(apply, 1_000);
    return () => window.clearInterval(id);
  }, []);

  return null;
}
