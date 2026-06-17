import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// 180×180 is the size iOS uses for home-screen bookmarks.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// The roundel on a deep-green plate — the mark's white monogram needs a dark
// backing, and iOS renders home-screen icons on an opaque tile (no transparency).
export default async function AppleIcon() {
  const svg = await readFile(join(process.cwd(), "app", "icon.svg"), "utf8");
  const markSrc = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#003726",
        }}
      >
        <img src={markSrc} width={140} height={140} alt="" />
      </div>
    ),
    { ...size },
  );
}
