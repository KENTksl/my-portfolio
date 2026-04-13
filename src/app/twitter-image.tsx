import { ImageResponse } from "next/og";

import { cv } from "@/constants/cv";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, rgb(2 6 23) 0%, rgb(15 27 58) 40%, rgb(19 42 82) 62%, rgb(43 74 163) 100%)",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <div
          style={{
            width: 1040,
            height: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 42,
            background: "rgba(2, 6, 23, 0.6)",
            border: "10px solid rgb(226 232 240)",
            boxShadow: "14px 14px 0 rgba(226, 232, 240, 0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 999,
                background: "rgb(14 165 233)",
                border: "10px solid rgb(226 232 240)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 32, color: "white", fontWeight: 900 }}>&lt;CV&gt;</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 52, color: "rgb(241 245 249)", fontWeight: 900, lineHeight: 1.05 }}>
                {cv.fullName}
              </div>
              <div style={{ fontSize: 28, color: "rgb(226 232 240)", opacity: 0.95 }}>{cv.headline}</div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 22, color: "rgb(226 232 240)", opacity: 0.9 }}>Pixel CV</div>
              <div style={{ fontSize: 22, color: "rgb(226 232 240)", opacity: 0.9 }}>{cv.location}</div>
            </div>
            <div style={{ fontSize: 22, color: "rgb(226 232 240)", opacity: 0.85 }}>
              github.com/KENTksl
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

