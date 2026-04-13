import { ImageResponse } from "next/og";

import { cv } from "@/constants/cv";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const title = cv.fullName;
  const subtitle = cv.headline;

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
            "linear-gradient(180deg, rgb(0 163 255) 0%, rgb(111 214 255) 48%, rgb(191 243 255) 70%, rgb(255 240 179) 92%, rgb(255 224 107) 100%)",
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
            background: "rgba(255, 255, 255, 0.94)",
            border: "10px solid rgb(17 24 39)",
            boxShadow: "14px 14px 0 rgb(17 24 39)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 999,
                background: "rgb(14 165 233)",
                border: "10px solid rgb(17 24 39)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 32, color: "white", fontWeight: 900 }}>&lt;CV&gt;</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 52, color: "rgb(17 24 39)", fontWeight: 900, lineHeight: 1.05 }}>
                {title}
              </div>
              <div style={{ fontSize: 28, color: "rgb(15 23 42)", opacity: 0.9 }}>{subtitle}</div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 22, color: "rgb(15 23 42)", opacity: 0.85 }}>Portfolio / CV</div>
              <div style={{ fontSize: 22, color: "rgb(15 23 42)", opacity: 0.85 }}>{cv.location}</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                justifyContent: "flex-end",
                flexWrap: "wrap",
              }}
            >
              {cv.skills.slice(0, 3).map((s) => (
                <div
                  key={s.title}
                  style={{
                    padding: "10px 14px",
                    border: "6px solid rgb(17 24 39)",
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "8px 8px 0 rgb(17 24 39)",
                    fontSize: 18,
                    color: "rgb(15 23 42)",
                    fontWeight: 700,
                  }}
                >
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

