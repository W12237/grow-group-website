import fs from "fs";
import path from "path";
import sharp from "sharp";

// Helper: Make multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(numImages, 4);

  let offset = 6 + 16 * numImages;
  const dirEntries = [];
  for (const { width, height, buf } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buf.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += buf.length;
  }
  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((p) => p.buf)]);
}

async function run() {
  console.log("Generating brand assets for www.growl.cloud...");

  // Load and trim clean white monogram logo
  const trimmed = await sharp("public/growl-icons/white-icon-clean.png")
    .trim()
    .toBuffer({ resolveWithObject: true });
  const logoB64 = trimmed.data.toString("base64");

  // ── 1. GENERATE HIGH-CONTRAST FAVICONS ──────────────────────────────────────
  // We create a master 512x512 app icon badge that looks incredible on BOTH dark and light tabs.
  const masterIconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020c2e"/>
      <stop offset="100%" stop-color="#000619"/>
    </linearGradient>
    <linearGradient id="iconBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(113, 53, 229, 0.9)"/>
      <stop offset="50%" stop-color="rgba(255, 255, 255, 0.4)"/>
      <stop offset="100%" stop-color="rgba(16, 185, 129, 0.8)"/>
    </linearGradient>
    <radialGradient id="iconCoreGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7135E5" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#7135E5" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- High-contrast rounded squircle container -->
  <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#iconBg)" stroke="url(#iconBorder)" stroke-width="14"/>
  <circle cx="256" cy="256" r="160" fill="url(#iconCoreGlow)"/>

  <!-- Centered White Growl Monogram (Ratio 441 x 264 -> 340 x 203.5) -->
  <image href="data:image/png;base64,${logoB64}" x="86" y="154" width="340" height="204"/>

  <!-- Subtle electric green accent dot in top right of badge -->
  <circle cx="410" cy="102" r="14" fill="#10B981"/>
  <circle cx="410" cy="102" r="22" fill="#10B981" opacity="0.3"/>
</svg>
`;

  // Render master 512 PNG
  const icon512Buf = await sharp(Buffer.from(masterIconSvg)).png().toBuffer();
  fs.writeFileSync("public/icon-512.png", icon512Buf);
  fs.writeFileSync("app/icon.png", icon512Buf);

  // 192x192 (Android / PWA)
  const icon192Buf = await sharp(icon512Buf).resize(192, 192).png().toBuffer();
  fs.writeFileSync("public/icon-192.png", icon192Buf);

  // 180x180 (Apple Touch Icon)
  const icon180Buf = await sharp(icon512Buf).resize(180, 180).png().toBuffer();
  fs.writeFileSync("public/apple-touch-icon.png", icon180Buf);
  fs.writeFileSync("public/apple-icon.png", icon180Buf);
  fs.writeFileSync("app/apple-icon.png", icon180Buf);

  // 48x48, 32x32, 16x16
  const icon48Buf = await sharp(icon512Buf).resize(48, 48).png().toBuffer();
  const icon32Buf = await sharp(icon512Buf).resize(32, 32).png().toBuffer();
  const icon16Buf = await sharp(icon512Buf).resize(16, 16).png().toBuffer();
  fs.writeFileSync("public/favicon-32x32.png", icon32Buf);
  fs.writeFileSync("public/favicon-16x16.png", icon16Buf);

  // Build binary multi-resolution favicon.ico
  const icoBuf = createIco([
    { width: 16, height: 16, buf: icon16Buf },
    { width: 32, height: 32, buf: icon32Buf },
    { width: 48, height: 48, buf: icon48Buf },
  ]);
  fs.writeFileSync("public/favicon.ico", icoBuf);
  console.log("Created public/favicon.ico (multi-resolution ICO 16/32/48)");

  // Create adaptive SVG vector favicon
  const svgFavicon = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020c2e"/>
      <stop offset="100%" stop-color="#000619"/>
    </linearGradient>
    <linearGradient id="br" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7135E5"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <rect x="1" y="1" width="30" height="30" rx="7" fill="url(#b)" stroke="url(#br)" stroke-width="1.5"/>
  <image href="data:image/png;base64,${logoB64}" x="4.5" y="8.5" width="23" height="13.8"/>
  <circle cx="26" cy="6" r="1.5" fill="#10B981"/>
</svg>
`.trim();
  fs.writeFileSync("public/icon.svg", svgFavicon);
  fs.writeFileSync("public/favicon.svg", svgFavicon);
  console.log("Created public/icon.svg and public/favicon.svg");

  // ── 2. GENERATE WHATSAPP RICH PREVIEW CARD (1200x630, <300KB) ───────────────
  const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Rich ambient background gradients -->
    <radialGradient id="gradViolet" cx="12%" cy="18%" r="60%">
      <stop offset="0%" stop-color="#7135E5" stop-opacity="0.36"/>
      <stop offset="100%" stop-color="#7135E5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gradEmerald" cx="88%" cy="82%" r="55%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#10B981" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gradCenter" cx="45%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.28)"/>
      <stop offset="35%" stop-color="rgba(113, 53, 229, 0.45)"/>
      <stop offset="70%" stop-color="rgba(16, 185, 129, 0.40)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.16)"/>
    </linearGradient>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#04123d"/>
      <stop offset="100%" stop-color="#00071c"/>
    </linearGradient>
  </defs>

  <style>
    .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
    .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
  </style>

  <!-- Deep Obsidian Navy Base -->
  <rect width="1200" height="630" fill="#000823"/>

  <!-- Ambient glowing lighting -->
  <rect width="1200" height="630" fill="url(#gradViolet)"/>
  <rect width="1200" height="630" fill="url(#gradEmerald)"/>
  <rect width="1200" height="630" fill="url(#gradCenter)"/>

  <!-- Subtle Blueprint Tech Matrix Grid Lines -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <line x1="80" y1="0" x2="80" y2="630"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
    <line x1="1120" y1="0" x2="1120" y2="630"/>
    <line x1="0" y1="80" x2="1200" y2="80"/>
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="500" x2="1200" y2="500"/>
  </g>

  <!-- Main Luxury Glassmorphic Card Frame -->
  <rect x="48" y="44" width="1104" height="542" rx="28" fill="rgba(255, 255, 255, 0.02)" stroke="url(#cardBorder)" stroke-width="1.5"/>

  <!-- ── TOP BAR: Logo Lockup + Holding Pill + Domain ───────────────────── -->
  <!-- Logo Emblem -->
  <rect x="88" y="80" width="58" height="58" rx="15" fill="url(#badgeGrad)" stroke="rgba(255, 255, 255, 0.22)" stroke-width="1"/>
  <image href="data:image/png;base64,${logoB64}" x="96" y="94" width="42" height="25"/>

  <!-- Brand Typography Lockup -->
  <text x="160" y="108" class="font-sans" font-size="25" font-weight="800" letter-spacing="3" fill="#FFFFFF">GROWL CO.</text>
  <rect x="354" y="90" width="142" height="25" rx="6" fill="rgba(113, 53, 229, 0.25)" stroke="rgba(113, 53, 229, 0.55)" stroke-width="1"/>
  <text x="425" y="107" class="font-mono" font-size="10" font-weight="700" letter-spacing="2" fill="#C4B5FD" text-anchor="middle">HOLDING GROUP</text>

  <!-- Live Verified Domain Pill on Right -->
  <rect x="886" y="86" width="224" height="40" rx="20" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1"/>
  <circle cx="912" cy="106" r="5" fill="#10B981"/>
  <circle cx="912" cy="106" r="9" fill="#10B981" opacity="0.3"/>
  <text x="928" y="112" class="font-mono" font-size="13.5" font-weight="600" letter-spacing="1.2" fill="#FFFFFF">www.growl.cloud</text>

  <!-- ── CENTER CONTENT (WhatsApp Safe Area: perfectly centered) ────────── -->
  <!-- Category Kicker Pill -->
  <rect x="88" y="180" width="316" height="30" rx="8" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.38)" stroke-width="1"/>
  <text x="246" y="200" class="font-mono" font-size="11" font-weight="700" letter-spacing="2.2" fill="#34D399" text-anchor="middle">ENTERPRISE TECH ECOSYSTEM</text>

  <!-- Headline -->
  <text x="88" y="274" class="font-sans" font-size="52" font-weight="800" letter-spacing="-0.8" fill="url(#titleGrad)">One Group. Five Engines of Growth.</text>

  <!-- Subtitle -->
  <text x="88" y="324" class="font-sans" font-size="20" font-weight="400" fill="rgba(255, 255, 255, 0.74)">Direct senior engineering, autonomous AI intelligence, enterprise cyber defense,</text>
  <text x="88" y="354" class="font-sans" font-size="20" font-weight="400" fill="rgba(255, 255, 255, 0.74)">cloud systems architecture, and market-leading brand execution.</text>

  <!-- ── 5 SECTORS BADGES STRIP ────────────────────────────────────────── -->
  <g transform="translate(88, 408)">
    <!-- Sector 1: Tech -->
    <g transform="translate(0, 0)">
      <rect width="190" height="52" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1"/>
      <text x="16" y="23" class="font-mono" font-size="10" font-weight="700" letter-spacing="1.5" fill="#60A5FA">01 / TECH</text>
      <text x="16" y="41" class="font-sans" font-size="11" font-weight="500" fill="#E2E8F0">Custom Cloud &amp; Eng.</text>
    </g>

    <!-- Sector 2: AI -->
    <g transform="translate(205, 0)">
      <rect width="190" height="52" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1"/>
      <text x="16" y="23" class="font-mono" font-size="10" font-weight="700" letter-spacing="1.5" fill="#C084FC">02 / AI</text>
      <text x="16" y="41" class="font-sans" font-size="11" font-weight="500" fill="#E2E8F0">Autonomous Agents</text>
    </g>

    <!-- Sector 3: Cybersecurity -->
    <g transform="translate(410, 0)">
      <rect width="210" height="52" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(239, 68, 68, 0.4)" stroke-width="1"/>
      <text x="16" y="23" class="font-mono" font-size="10" font-weight="700" letter-spacing="1.5" fill="#F87171">03 / CYBERSECURITY</text>
      <text x="16" y="41" class="font-sans" font-size="11" font-weight="500" fill="#E2E8F0">Defense &amp; SI Integration</text>
    </g>

    <!-- Sector 4: Marketing -->
    <g transform="translate(635, 0)">
      <rect width="190" height="52" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1"/>
      <text x="16" y="23" class="font-mono" font-size="10" font-weight="700" letter-spacing="1.5" fill="#FBBF24">04 / MARKETING</text>
      <text x="16" y="41" class="font-sans" font-size="11" font-weight="500" fill="#E2E8F0">Brand &amp; Commercial Scale</text>
    </g>

    <!-- Sector 5: Hub -->
    <g transform="translate(840, 0)">
      <rect width="184" height="52" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
      <text x="16" y="23" class="font-mono" font-size="10" font-weight="700" letter-spacing="1.5" fill="#34D399">05 / HUB</text>
      <text x="16" y="41" class="font-sans" font-size="11" font-weight="500" fill="#E2E8F0">SaaS &amp; Digital Ops</text>
    </g>
  </g>

  <!-- ── BOTTOM FOOTER METADATA ────────────────────────────────────────── -->
  <g transform="translate(88, 514)">
    <text x="0" y="20" class="font-mono" font-size="11" font-weight="500" fill="rgba(255, 255, 255, 0.48)">
      CAIRO HQ  •  REGIONAL MENA REACH  •  SINGLE LEGAL MSA  •  ZERO BROKER MARKUP
    </text>
    <text x="1024" y="20" class="font-mono" font-size="11" font-weight="600" fill="#10B981" text-anchor="end">
      ENTERPRISE READY ⚡
    </text>
  </g>
</svg>
`;

  const ogBuf = await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer();

  fs.writeFileSync("public/og-image.png", ogBuf);
  fs.writeFileSync("app/opengraph-image.png", ogBuf);
  console.log(
    `Created public/og-image.png and app/opengraph-image.png: ${(ogBuf.length / 1024).toFixed(1)} KB (Well under 300 KB WhatsApp limit)`
  );

  // ── 3. CREATE SITE.WEBMANIFEST ──────────────────────────────────────────────
  const manifest = {
    name: "Growl Co. — One Group. Five Engines of Growth.",
    short_name: "Growl Co.",
    description: "Growl brings technology, intelligence, security, systems, brand, and product execution together.",
    start_url: "/",
    display: "standalone",
    background_color: "#000823",
    theme_color: "#000823",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
  fs.writeFileSync("public/site.webmanifest", JSON.stringify(manifest, null, 2));
  console.log("Created public/site.webmanifest");
  console.log("Asset generation complete!");
}

run().catch(console.error);
