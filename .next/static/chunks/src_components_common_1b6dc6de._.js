(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/common/CopyableValue.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyableValue",
    ()=>CopyableValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CopyableValue(param) {
    var text = param.text, href = param.href;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), copied = _useState[0], setCopied = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CopyableValue.useEffect": function() {
            if (!copied) return;
            var t = window.setTimeout({
                "CopyableValue.useEffect.t": function() {
                    return setCopied(false);
                }
            }["CopyableValue.useEffect.t"], 900);
            return ({
                "CopyableValue.useEffect": function() {
                    return window.clearTimeout(t);
                }
            })["CopyableValue.useEffect"];
        }
    }["CopyableValue.useEffect"], [
        copied
    ]);
    function copy() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var _navigator_clipboard, el, e;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            4,
                            ,
                            5
                        ]);
                        if (!((_navigator_clipboard = navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            navigator.clipboard.writeText(text)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        el = document.createElement("textarea");
                        el.value = text;
                        el.style.position = "fixed";
                        el.style.opacity = "0";
                        document.body.appendChild(el);
                        el.focus();
                        el.select();
                        document.execCommand("copy");
                        document.body.removeChild(el);
                        _state.label = 3;
                    case 3:
                        setCopied(true);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        e = _state.sent();
                        setCopied(false);
                        return [
                            3,
                            5
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "copy-wrap",
        children: [
            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "break-words text-[color:var(--panel-link)] underline",
                href: href,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/common/CopyableValue.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "break-words",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/common/CopyableValue.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "pixel-button copy-button",
                type: "button",
                onClick: copy,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        "aria-hidden": true,
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        className: "copy-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(CopyableValue, "tYwv5uTSY0YuYQo/cPrkmqvP85Y=");
_c = CopyableValue;
var _c;
__turbopack_context__.k.register(_c, "CopyableValue");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    var _tabs_, _tabs_1;
    _s();
    var baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    var firstTabId = (_tabs_ = tabs[0]) === null || _tabs_ === void 0 ? void 0 : _tabs_.id;
    var safeInitialId = initialTabId !== null && initialTabId !== void 0 ? initialTabId : firstTabId;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(safeInitialId), 2), activeId = _useState[0], setActiveId = _useState[1];
    var sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tabListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var tabButtonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-9999), 2), markerLeft = _useState1[0], setMarkerLeft = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-9999), 2), markerTop = _useState2[0], setMarkerTop = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), panelKey = _useState3[0], setPanelKey = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), flashOn = _useState4[0], setFlashOn = _useState4[1];
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
    var _active_id;
    var activeResolvedId = (_active_id = active === null || active === void 0 ? void 0 : active.id) !== null && _active_id !== void 0 ? _active_id : (_tabs_1 = tabs[0]) === null || _tabs_1 === void 0 ? void 0 : _tabs_1.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CvTabs.useLayoutEffect": function() {
            if (!activeResolvedId) return;
            var container = tabListRef.current;
            var activeButton = tabButtonRefs.current[activeResolvedId];
            if (!container || !activeButton) return;
            var update = {
                "CvTabs.useLayoutEffect.update": function() {
                    var containerRect = container.getBoundingClientRect();
                    var buttonRect = activeButton.getBoundingClientRect();
                    var centerX = buttonRect.left - containerRect.left + buttonRect.width / 2;
                    var aboveY = buttonRect.top - containerRect.top - 34;
                    setMarkerLeft(centerX);
                    setMarkerTop(aboveY);
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
        activeResolvedId,
        tabs.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CvTabs.useEffect": function() {
            if (!activeResolvedId) return;
            setPanelKey({
                "CvTabs.useEffect": function(k) {
                    return k + 1;
                }
            }["CvTabs.useEffect"]);
        }
    }["CvTabs.useEffect"], [
        activeResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CvTabs.useEffect": function() {
            if (!flashOn) return;
            var t = window.setTimeout({
                "CvTabs.useEffect.t": function() {
                    return setFlashOn(false);
                }
            }["CvTabs.useEffect.t"], 280);
            return ({
                "CvTabs.useEffect": function() {
                    return window.clearTimeout(t);
                }
            })["CvTabs.useEffect"];
        }
    }["CvTabs.useEffect"], [
        flashOn
    ]);
    function handleSelect(nextId) {
        var _window_matchMedia, _window_matchMedia1, _window, _sectionRef_current;
        setActiveId(nextId);
        setFlashOn(true);
        var reduceMotion = "object" !== "undefined" && ((_window_matchMedia1 = (_window = window).matchMedia) === null || _window_matchMedia1 === void 0 ? void 0 : (_window_matchMedia = _window_matchMedia1.call(_window, "(prefers-reduced-motion: reduce)")) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches);
        (_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: [
            "panel p-6",
            flashOn ? "tabs-flash" : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tabListRef,
                className: "relative flex flex-wrap gap-3",
                role: "tablist",
                "aria-label": "CV sections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "tab-marker",
                        style: {
                            left: "".concat(markerLeft, "px"),
                            top: "".concat(markerTop, "px")
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/CvTabs.tsx",
                        lineNumber: 98,
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
                                return handleSelect(t.id);
                            },
                            ref: function(el) {
                                tabButtonRefs.current[t.id] = el;
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pixel-title text-[10px] tracking-wide",
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/CvTabs.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, _this)
                        }, t.id, false, {
                            fileName: "[project]/src/components/common/CvTabs.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, _this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/CvTabs.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "".concat(baseId, "-").concat(active.id, "-panel"),
                role: "tabpanel",
                "aria-labelledby": "".concat(baseId, "-").concat(active.id, "-tab"),
                className: "mt-5 tab-panel-anim",
                children: active.content
            }, "".concat(active.id, "-").concat(panelKey), false, {
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
_s(CvTabs, "8HCL3G1LvZHfstMZhwHKmxjw0+o=", false, function() {
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
function makePresetDate(hours) {
    var d = new Date();
    d.setHours(hours, 0, 0, 0);
    return d;
}
function WorldTimeTheme() {
    _s();
    var konami = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorldTimeTheme.useMemo[konami]": function() {
            return [
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
            ];
        }
    }["WorldTimeTheme.useMemo[konami]"], []);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), eggEnabled = _useState[0], setEggEnabled = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), showOneUp = _useState1[0], setShowOneUp = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("auto"), 2), timeMode = _useState2[0], setTimeMode = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), themeOpen = _useState3[0], setThemeOpen = _useState3[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            try {
                var raw = window.localStorage.getItem("timeThemeMode");
                if (raw === "day" || raw === "night" || raw === "auto") setTimeMode(raw);
            } catch (e) {}
        }
    }["WorldTimeTheme.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            try {
                window.localStorage.setItem("timeThemeMode", timeMode);
            } catch (e) {}
        }
    }["WorldTimeTheme.useEffect"], [
        timeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            setThemeOpen(false);
        }
    }["WorldTimeTheme.useEffect"], [
        timeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            if (timeMode === "auto") {
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
            applyWorldByLocalTime(timeMode === "day" ? makePresetDate(12) : makePresetDate(0));
            return;
        }
    }["WorldTimeTheme.useEffect"], [
        timeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            try {
                var raw = window.localStorage.getItem("easterEggEnabled");
                if (raw === "0") setEggEnabled(false);
                if (raw === "1") setEggEnabled(true);
            } catch (e) {}
        }
    }["WorldTimeTheme.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            try {
                window.localStorage.setItem("easterEggEnabled", eggEnabled ? "1" : "0");
            } catch (e) {}
        }
    }["WorldTimeTheme.useEffect"], [
        eggEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldTimeTheme.useEffect": function() {
            var buf = [];
            var onKeyDown = {
                "WorldTimeTheme.useEffect.onKeyDown": function(e) {
                    var key = e.key;
                    buf.push(key);
                    if (buf.length > konami.length) buf.shift();
                    var match = buf.every({
                        "WorldTimeTheme.useEffect.onKeyDown.match": function(v, i) {
                            var target = konami[i];
                            if (!target) return false;
                            if (target === "a" || target === "b") return v.toLowerCase() === target;
                            return v === target;
                        }
                    }["WorldTimeTheme.useEffect.onKeyDown.match"]);
                    if (!match) return;
                    if (!eggEnabled) return;
                    setShowOneUp(true);
                    window.setTimeout({
                        "WorldTimeTheme.useEffect.onKeyDown": function() {
                            return setShowOneUp(false);
                        }
                    }["WorldTimeTheme.useEffect.onKeyDown"], 1100);
                    try {
                        var AudioCtx = window.AudioContext || window.webkitAudioContext;
                        var ctx = AudioCtx ? new AudioCtx() : null;
                        if (!ctx) return;
                        var o = ctx.createOscillator();
                        var g = ctx.createGain();
                        o.type = "square";
                        o.frequency.value = 988;
                        var now = ctx.currentTime;
                        g.gain.setValueAtTime(0.0001, now);
                        g.gain.exponentialRampToValueAtTime(0.16, now + 0.01);
                        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
                        o.connect(g);
                        g.connect(ctx.destination);
                        o.start(now);
                        o.stop(now + 0.18);
                        o.onended = ({
                            "WorldTimeTheme.useEffect.onKeyDown": function() {
                                ctx.close()["catch"]({
                                    "WorldTimeTheme.useEffect.onKeyDown": function() {}
                                }["WorldTimeTheme.useEffect.onKeyDown"]);
                            }
                        })["WorldTimeTheme.useEffect.onKeyDown"];
                    } catch (e) {}
                }
            }["WorldTimeTheme.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "WorldTimeTheme.useEffect": function() {
                    return window.removeEventListener("keydown", onKeyDown);
                }
            })["WorldTimeTheme.useEffect"];
        }
    }["WorldTimeTheme.useEffect"], [
        eggEnabled,
        konami
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showOneUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "easter-1up",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theme-toggle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pixel-button theme-toggle-main",
                        type: "button",
                        onClick: function() {
                            return setThemeOpen(function(v) {
                                return !v;
                            });
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    themeOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "theme-toggle-menu",
                        role: "menu",
                        "aria-label": "Theme mode",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: [
                                    "pixel-button theme-toggle-option",
                                    timeMode === "auto" ? "is-active" : ""
                                ].join(" "),
                                type: "button",
                                role: "menuitem",
                                onClick: function() {
                                    return setTimeMode("auto");
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: [
                                    "pixel-button theme-toggle-option",
                                    timeMode === "day" ? "is-active" : ""
                                ].join(" "),
                                type: "button",
                                role: "menuitem",
                                onClick: function() {
                                    return setTimeMode("day");
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: [
                                    "pixel-button theme-toggle-option",
                                    timeMode === "night" ? "is-active" : ""
                                ].join(" "),
                                type: "button",
                                role: "menuitem",
                                onClick: function() {
                                    return setTimeMode("night");
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "pixel-button egg-toggle",
                type: "button",
                onClick: function() {
                    return setEggEnabled(function(v) {
                        return !v;
                    });
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(WorldTimeTheme, "rkH1968qOwlbcy5FiuZ2nkCHH/M=");
_c = WorldTimeTheme;
var _c;
__turbopack_context__.k.register(_c, "WorldTimeTheme");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_common_1b6dc6de._.js.map