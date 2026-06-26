import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "TTS Nigeria Initiative — pathways to dignified digital work, at global scale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded OG card: brand roundel + headline + tagline on deep green (HANDOFF §9).
export default async function Image() {
  const svg = await readFile(join(process.cwd(), "app", "icon.svg"), "utf8");
  const markSrc = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#003726",
          padding: 72,
          color: "#ffffff",
        }}
      >
        <img src={markSrc} width={120} height={120} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Pathways to dignified digital work, at global scale.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#FDC00D", marginTop: 28 }}>
            Inclusive opportunities · Local impact · Global relevance
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
