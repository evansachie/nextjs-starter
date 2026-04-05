import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: "linear-gradient(135deg, #111827 0%, #374151 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          padding: "10px 16px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.25)",
          fontSize: 28,
          letterSpacing: "0.02em",
        }}
      >
        Reusable Template
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, opacity: 0.88, maxWidth: 920 }}>
          {siteConfig.description}
        </div>
      </div>
    </div>,
    size
  );
}
