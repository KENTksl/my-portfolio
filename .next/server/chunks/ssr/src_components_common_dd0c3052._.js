module.exports = [
"[project]/src/components/common/CvTabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvTabs",
    ()=>CvTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CvTabs({ tabs, initialTabId }) {
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const firstTabId = tabs[0]?.id;
    const safeInitialId = initialTabId ?? firstTabId;
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(safeInitialId);
    const tabListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const [markerLeft, setMarkerLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-9999);
    const [isJumping, setIsJumping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastJumpedTabIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const idx = tabs.findIndex((t)=>t.id === activeId);
        return idx >= 0 ? idx : 0;
    }, [
        activeId,
        tabs
    ]);
    const active = tabs[activeIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!active?.id) return;
        const container = tabListRef.current;
        const activeButton = tabButtonRefs.current[active.id];
        if (!container || !activeButton) return;
        const update = ()=>{
            const containerRect = container.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();
            const centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
            setMarkerLeft(centerX);
        };
        update();
        const onResize = ()=>update();
        window.addEventListener("resize", onResize);
        const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
        ro?.observe(container);
        ro?.observe(activeButton);
        return ()=>{
            window.removeEventListener("resize", onResize);
            ro?.disconnect();
        };
    }, [
        active?.id,
        tabs.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active?.id) return;
        if (markerLeft < 0) return;
        if (lastJumpedTabIdRef.current === active.id) return;
        lastJumpedTabIdRef.current = active.id;
        setIsJumping(true);
        const t = window.setTimeout(()=>setIsJumping(false), 520);
        return ()=>window.clearTimeout(t);
    }, [
        active?.id,
        markerLeft
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tabListRef,
                className: "relative flex flex-wrap gap-3",
                role: "tablist",
                "aria-label": "CV sections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: [
                            "tab-marker",
                            isJumping ? "is-jumping" : ""
                        ].join(" "),
                        style: {
                            left: `${markerLeft}px`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/CvTabs.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    tabs.map((t)=>{
                        const selected = t.id === active?.id;
                        const tabId = `${baseId}-${t.id}-tab`;
                        const panelId = `${baseId}-${t.id}-panel`;
                        const cls = [
                            "pixel-button",
                            "inline-flex items-center justify-center px-4 py-3 text-[16px] font-bold leading-none tracking-wide",
                            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--glow-yellow)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                            selected ? "pixel-button-primary" : ""
                        ].join(" ");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: tabId,
                            type: "button",
                            role: "tab",
                            "aria-selected": selected,
                            "aria-controls": panelId,
                            tabIndex: selected ? 0 : -1,
                            className: cls,
                            onClick: ()=>setActiveId(t.id),
                            ref: (el)=>{
                                tabButtonRefs.current[t.id] = el;
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pixel-title text-[10px] tracking-wide",
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/CvTabs.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        }, t.id, false, {
                            fileName: "[project]/src/components/common/CvTabs.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/CvTabs.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `${baseId}-${active.id}-panel`,
                role: "tabpanel",
                "aria-labelledby": `${baseId}-${active.id}-tab`,
                className: "mt-5",
                children: active.content
            }, void 0, false, {
                fileName: "[project]/src/components/common/CvTabs.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/CvTabs.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/common/WorldTimeTheme.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldTimeTheme",
    ()=>WorldTimeTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function clamp01(value) {
    return Math.min(1, Math.max(0, value));
}
function smoothstep(edge0, edge1, x) {
    const t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function parseHexColor(hex) {
    const clean = hex.replace("#", "").trim();
    const full = clean.length === 3 ? clean.split("").map((c)=>c + c).join("") : clean;
    const n = Number.parseInt(full, 16);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n & 255
    };
}
function mixColor(a, b, t) {
    const ca = parseHexColor(a);
    const cb = parseHexColor(b);
    const r = Math.round(lerp(ca.r, cb.r, t));
    const g = Math.round(lerp(ca.g, cb.g, t));
    const b2 = Math.round(lerp(ca.b, cb.b, t));
    return `rgb(${r} ${g} ${b2})`;
}
function setVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}
function applyWorldByLocalTime(date) {
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
        sunset1: "#ffe06b"
    };
    const nightPalette = {
        sky0: "#020617",
        sky1: "#0b1026",
        sky2: "#0f1b3a",
        sky3: "#132a52",
        sunset0: "#1b2e5e",
        sunset1: "#2b4aa3"
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
function WorldTimeTheme() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const apply = ()=>{
            applyWorldByLocalTime(new Date());
        };
        apply();
        const id = window.setInterval(apply, 1_000);
        return ()=>window.clearInterval(id);
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=src_components_common_dd0c3052._.js.map