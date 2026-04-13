module.exports = [
"[project]/src/components/common/CopyableValue.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyableValue",
    ()=>CopyableValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CopyableValue({ text, href }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!copied) return;
        const t = window.setTimeout(()=>setCopied(false), 900);
        return ()=>window.clearTimeout(t);
    }, [
        copied
    ]);
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
        } catch  {
            setCopied(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "copy-wrap",
        children: [
            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "break-words text-[color:var(--panel-link)] underline",
                href: href,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/common/CopyableValue.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "break-words",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/common/CopyableValue.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "pixel-button copy-button",
                type: "button",
                onClick: copy,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        "aria-hidden": true,
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        className: "copy-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            d: "M16 1H6a2 2 0 0 0-2 2v10h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/CopyableValue.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/CopyableValue.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Copy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/CopyableValue.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/CopyableValue.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: [
                    "copy-toast",
                    copied ? "is-visible" : ""
                ].join(" "),
                "aria-hidden": true,
                children: "Copied"
            }, void 0, false, {
                fileName: "[project]/src/components/common/CopyableValue.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/CopyableValue.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
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
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const [markerLeft, setMarkerLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-9999);
    const [markerTop, setMarkerTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-9999);
    const [panelKey, setPanelKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flashOn, setFlashOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const idx = tabs.findIndex((t)=>t.id === activeId);
        return idx >= 0 ? idx : 0;
    }, [
        activeId,
        tabs
    ]);
    const active = tabs[activeIndex];
    const activeResolvedId = active?.id ?? tabs[0]?.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!activeResolvedId) return;
        const container = tabListRef.current;
        const activeButton = tabButtonRefs.current[activeResolvedId];
        if (!container || !activeButton) return;
        const update = ()=>{
            const containerRect = container.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();
            const centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
            const aboveY = buttonRect.top - containerRect.top - 34;
            setMarkerLeft(centerX);
            setMarkerTop(aboveY);
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
        activeResolvedId,
        tabs.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeResolvedId) return;
        setPanelKey((k)=>k + 1);
    }, [
        activeResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!flashOn) return;
        const t = window.setTimeout(()=>setFlashOn(false), 280);
        return ()=>window.clearTimeout(t);
    }, [
        flashOn
    ]);
    function handleSelect(nextId) {
        setActiveId(nextId);
        setFlashOn(true);
        const reduceMotion = "undefined" !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        sectionRef.current?.scrollIntoView({
            behavior: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "smooth",
            block: "start"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: [
            "panel p-6",
            flashOn ? "tabs-flash" : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tabListRef,
                className: "relative flex flex-wrap gap-3",
                role: "tablist",
                "aria-label": "CV sections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "tab-marker",
                        style: {
                            left: `${markerLeft}px`,
                            top: `${markerTop}px`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/CvTabs.tsx",
                        lineNumber: 98,
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
                            onClick: ()=>handleSelect(t.id),
                            ref: (el)=>{
                                tabButtonRefs.current[t.id] = el;
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pixel-title text-[10px] tracking-wide",
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/CvTabs.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        }, t.id, false, {
                            fileName: "[project]/src/components/common/CvTabs.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/CvTabs.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `${baseId}-${active.id}-panel`,
                role: "tabpanel",
                "aria-labelledby": `${baseId}-${active.id}-tab`,
                className: "mt-5 tab-panel-anim",
                children: active.content
            }, `${active.id}-${panelKey}`, false, {
                fileName: "[project]/src/components/common/CvTabs.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/CvTabs.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/common/WorldTimeTheme.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldTimeTheme",
    ()=>WorldTimeTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
function makePresetDate(hours) {
    const d = new Date();
    d.setHours(hours, 0, 0, 0);
    return d;
}
function WorldTimeTheme() {
    const konami = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "b",
            "a"
        ], []);
    const [eggEnabled, setEggEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showOneUp, setShowOneUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeMode, setTimeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("auto");
    const [themeOpen, setThemeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = window.localStorage.getItem("timeThemeMode");
            if (raw === "day" || raw === "night" || raw === "auto") setTimeMode(raw);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            window.localStorage.setItem("timeThemeMode", timeMode);
        } catch  {}
    }, [
        timeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setThemeOpen(false);
    }, [
        timeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timeMode === "auto") {
            const apply = ()=>{
                applyWorldByLocalTime(new Date());
            };
            apply();
            const id = window.setInterval(apply, 1_000);
            return ()=>window.clearInterval(id);
        }
        applyWorldByLocalTime(timeMode === "day" ? makePresetDate(12) : makePresetDate(0));
        return;
    }, [
        timeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = window.localStorage.getItem("easterEggEnabled");
            if (raw === "0") setEggEnabled(false);
            if (raw === "1") setEggEnabled(true);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            window.localStorage.setItem("easterEggEnabled", eggEnabled ? "1" : "0");
        } catch  {}
    }, [
        eggEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const buf = [];
        const onKeyDown = (e)=>{
            const key = e.key;
            buf.push(key);
            if (buf.length > konami.length) buf.shift();
            const match = buf.every((v, i)=>{
                const target = konami[i];
                if (!target) return false;
                if (target === "a" || target === "b") return v.toLowerCase() === target;
                return v === target;
            });
            if (!match) return;
            if (!eggEnabled) return;
            setShowOneUp(true);
            window.setTimeout(()=>setShowOneUp(false), 1100);
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
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
                o.onended = ()=>{
                    ctx.close().catch(()=>{});
                };
            } catch  {}
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>window.removeEventListener("keydown", onKeyDown);
    }, [
        eggEnabled,
        konami
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showOneUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "easter-1up",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pixel-title text-[12px] tracking-wide",
                    children: "1UP"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theme-toggle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pixel-button theme-toggle-main",
                        type: "button",
                        onClick: ()=>setThemeOpen((v)=>!v),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pixel-title text-[10px] tracking-wide",
                            children: "Themes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    themeOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "theme-toggle-menu",
                        role: "menu",
                        "aria-label": "Theme mode",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: [
                                    "pixel-button theme-toggle-option",
                                    timeMode === "auto" ? "is-active" : ""
                                ].join(" "),
                                type: "button",
                                role: "menuitem",
                                onClick: ()=>setTimeMode("auto"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pixel-title text-[10px] tracking-wide",
                                    children: "Auto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: [
                                    "pixel-button theme-toggle-option",
                                    timeMode === "day" ? "is-active" : ""
                                ].join(" "),
                                type: "button",
                                role: "menuitem",
                                onClick: ()=>setTimeMode("day"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pixel-title text-[10px] tracking-wide",
                                    children: "Day"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: [
                                    "pixel-button theme-toggle-option",
                                    timeMode === "night" ? "is-active" : ""
                                ].join(" "),
                                type: "button",
                                role: "menuitem",
                                onClick: ()=>setTimeMode("night"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pixel-title text-[10px] tracking-wide",
                                    children: "Night"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "pixel-button egg-toggle",
                type: "button",
                onClick: ()=>setEggEnabled((v)=>!v),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pixel-title text-[10px] tracking-wide",
                    children: eggEnabled ? "Egg: ON" : "Egg: OFF"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/WorldTimeTheme.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7fe2adc0._.js.map