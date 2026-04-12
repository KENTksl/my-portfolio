(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/common/CvTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvTabs",
    ()=>CvTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CvTabs(param) {
    var _this = this;
    var tabs = param.tabs, initialTabId = param.initialTabId;
    var _tabs_;
    _s();
    var baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    var firstTabId = (_tabs_ = tabs[0]) === null || _tabs_ === void 0 ? void 0 : _tabs_.id;
    var safeInitialId = initialTabId !== null && initialTabId !== void 0 ? initialTabId : firstTabId;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(safeInitialId), 2), activeId = _useState[0], setActiveId = _useState[1];
    var tabListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tabButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-9999), 2), markerLeft = _useState1[0], setMarkerLeft = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isJumping = _useState2[0], setIsJumping = _useState2[1];
    var lastJumpedTabIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    var activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CvTabs.useMemo[activeIndex]": function() {
            var idx = tabs.findIndex({
                "CvTabs.useMemo[activeIndex].idx": function(t) {
                    return t.id === activeId;
                }
            }["CvTabs.useMemo[activeIndex].idx"]);
            return idx >= 0 ? idx : 0;
        }
    }["CvTabs.useMemo[activeIndex]"], [
        activeId,
        tabs
    ]);
    var active = tabs[activeIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CvTabs.useLayoutEffect": function() {
            if (!(active === null || active === void 0 ? void 0 : active.id)) return;
            var container = tabListRef.current;
            var activeButton = tabButtonRefs.current[active.id];
            if (!container || !activeButton) return;
            var update = {
                "CvTabs.useLayoutEffect.update": function() {
                    var containerRect = container.getBoundingClientRect();
                    var buttonRect = activeButton.getBoundingClientRect();
                    var centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
                    setMarkerLeft(centerX);
                }
            }["CvTabs.useLayoutEffect.update"];
            update();
            var onResize = {
                "CvTabs.useLayoutEffect.onResize": function() {
                    return update();
                }
            }["CvTabs.useLayoutEffect.onResize"];
            window.addEventListener("resize", onResize);
            var ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
            ro === null || ro === void 0 ? void 0 : ro.observe(container);
            ro === null || ro === void 0 ? void 0 : ro.observe(activeButton);
            return ({
                "CvTabs.useLayoutEffect": function() {
                    window.removeEventListener("resize", onResize);
                    ro === null || ro === void 0 ? void 0 : ro.disconnect();
                }
            })["CvTabs.useLayoutEffect"];
        }
    }["CvTabs.useLayoutEffect"], [
        active === null || active === void 0 ? void 0 : active.id,
        tabs.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CvTabs.useEffect": function() {
            if (!(active === null || active === void 0 ? void 0 : active.id)) return;
            if (markerLeft < 0) return;
            if (lastJumpedTabIdRef.current === active.id) return;
            lastJumpedTabIdRef.current = active.id;
            setIsJumping(true);
            var t = window.setTimeout({
                "CvTabs.useEffect.t": function() {
                    return setIsJumping(false);
                }
            }["CvTabs.useEffect.t"], 520);
            return ({
                "CvTabs.useEffect": function() {
                    return window.clearTimeout(t);
                }
            })["CvTabs.useEffect"];
        }
    }["CvTabs.useEffect"], [
        active === null || active === void 0 ? void 0 : active.id,
        markerLeft
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tabListRef,
                className: "relative flex flex-wrap gap-3",
                role: "tablist",
                "aria-label": "CV sections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: [
                            "tab-marker",
                            isJumping ? "is-jumping" : ""
                        ].join(" "),
                        style: {
                            left: "".concat(markerLeft, "px")
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/CvTabs.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    tabs.map(function(t) {
                        var selected = t.id === (active === null || active === void 0 ? void 0 : active.id);
                        var tabId = "".concat(baseId, "-").concat(t.id, "-tab");
                        var panelId = "".concat(baseId, "-").concat(t.id, "-panel");
                        var cls = [
                            "pixel-button",
                            "inline-flex items-center justify-center px-4 py-3 text-[16px] font-bold leading-none tracking-wide",
                            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--glow-yellow)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                            selected ? "pixel-button-primary" : ""
                        ].join(" ");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: tabId,
                            type: "button",
                            role: "tab",
                            "aria-selected": selected,
                            "aria-controls": panelId,
                            tabIndex: selected ? 0 : -1,
                            className: cls,
                            onClick: function() {
                                return setActiveId(t.id);
                            },
                            ref: function(el) {
                                tabButtonRefs.current[t.id] = el;
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pixel-title text-[10px] tracking-wide",
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/CvTabs.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, _this)
                        }, t.id, false, {
                            fileName: "[project]/src/components/common/CvTabs.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, _this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/CvTabs.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "".concat(baseId, "-").concat(active.id, "-panel"),
                role: "tabpanel",
                "aria-labelledby": "".concat(baseId, "-").concat(active.id, "-tab"),
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
_s(CvTabs, "xzpUsE2Ukd19qhVfEKxFfNfCDac=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = CvTabs;
var _c;
__turbopack_context__.k.register(_c, "CvTabs");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/WorldTimeTheme.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldTimeTheme",
    ()=>WorldTimeTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function clamp01(value) {
    return Math.min(1, Math.max(0, value));
}
function smoothstep(edge0, edge1, x) {
    var t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function parseHexColor(hex) {
    var clean = hex.replace("#", "").trim();
    var full = clean.length === 3 ? clean.split("").map(function(c) {
        return c + c;
    }).join("") : clean;
    var n = Number.parseInt(full, 16);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n & 255
    };
}
function mixColor(a, b, t) {
    var ca = parseHexColor(a);
    var cb = parseHexColor(b);
    var r = Math.round(lerp(ca.r, cb.r, t));
    var g = Math.round(lerp(ca.g, cb.g, t));
    var b2 = Math.round(lerp(ca.b, cb.b, t));
    return "rgb(".concat(r, " ").concat(g, " ").concat(b2, ")");
}
function setVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}
function applyWorldByLocalTime(date) {
    var minutes = date.getHours() * 60 + date.getMinutes();
    var dayT = minutes / 1440;
    var angle = 2 * Math.PI * dayT - Math.PI / 2;
    var sunAlt = Math.sin(angle);
    var nightness = smoothstep(0.06, 0.32, -sunAlt);
    var twilight = smoothstep(0.0, 0.22, 1 - Math.abs(sunAlt));
    var isNight = nightness > 0.55;
    document.documentElement.dataset.timeTheme = isNight ? "night" : "day";
    var dayPalette = {
        sky0: "#00a3ff",
        sky1: "#35b5ff",
        sky2: "#6fd6ff",
        sky3: "#bff3ff",
        sunset0: "#fff0b3",
        sunset1: "#ffe06b"
    };
    var nightPalette = {
        sky0: "#020617",
        sky1: "#0b1026",
        sky2: "#0f1b3a",
        sky3: "#132a52",
        sunset0: "#1b2e5e",
        sunset1: "#2b4aa3"
    };
    var twiBoost = Math.max(0, twilight - 0.2) / 0.8;
    var sunsetWarm0 = "#ffedd5";
    var sunsetWarm1 = "#fb7185";
    setVar("--sky-0", mixColor(dayPalette.sky0, nightPalette.sky0, nightness));
    setVar("--sky-1", mixColor(dayPalette.sky1, nightPalette.sky1, nightness));
    setVar("--sky-2", mixColor(dayPalette.sky2, nightPalette.sky2, nightness));
    setVar("--sky-3", mixColor(dayPalette.sky3, nightPalette.sky3, nightness));
    var sunset0 = mixColor(dayPalette.sunset0, nightPalette.sunset0, nightness);
    var sunset1 = mixColor(dayPalette.sunset1, nightPalette.sunset1, nightness);
    setVar("--sunset-0", twiBoost > 0 ? mixColor(sunset0, sunsetWarm0, twiBoost) : sunset0);
    setVar("--sunset-1", twiBoost > 0 ? mixColor(sunset1, sunsetWarm1, twiBoost) : sunset1);
    var sunOpacity = smoothstep(-0.05, 0.12, sunAlt);
    var moonOpacity = 1 - sunOpacity;
    var x = 50 - 40 * Math.cos(angle);
    var celestialAlt = sunOpacity * sunAlt + moonOpacity * -sunAlt;
    var y = 70 - 58 * celestialAlt;
    setVar("--celestial-x", "".concat(x.toFixed(2), "%"));
    setVar("--celestial-y", "".concat(y.toFixed(2), "%"));
    setVar("--celestial-size", "".concat(Math.round(lerp(170, 140, moonOpacity)), "px"));
    var sunA = 0.98 * sunOpacity;
    var moonA = 0.95 * moonOpacity;
    var color = sunA >= moonA ? "rgba(253, 224, 71, ".concat(sunA.toFixed(3), ")") : "rgba(226, 232, 240, ".concat(moonA.toFixed(3), ")");
    setVar("--celestial-color", color);
    var stars = clamp01(smoothstep(0.0, 0.75, nightness) * (0.25 + 0.75 * moonOpacity));
    setVar("--stars-opacity", stars.toFixed(3));
    setVar("--decor-opacity", lerp(0.62, 0.25, nightness).toFixed(3));
}
function WorldTimeTheme() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            var apply = {
                "WorldTimeTheme.useEffect.apply": function() {
                    applyWorldByLocalTime(new Date());
                }
            }["WorldTimeTheme.useEffect.apply"];
            apply();
            var id = window.setInterval(apply, 1_000);
            return ({
                "WorldTimeTheme.useEffect": function() {
                    return window.clearInterval(id);
                }
            })["WorldTimeTheme.useEffect"];
        }
    }["WorldTimeTheme.useEffect"], []);
    return null;
}
_s(WorldTimeTheme, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WorldTimeTheme;
var _c;
__turbopack_context__.k.register(_c, "WorldTimeTheme");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_common_2bb05b47._.js.map