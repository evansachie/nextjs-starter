import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 600,
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 56px",
          background: "#111827",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            opacity: 0.9,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Landing Page Starter
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 30, opacity: 0.84 }}>{siteConfig.description}</div>
        </div>
      </div>
    ),
    size
  );
}
