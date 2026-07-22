const TOOLS = [
  "/vercel_wordmark.svg", "/cloudflare.svg", "/github_wordmark_light.svg", "/git.svg",
  "/stripe_wordmark.svg", "/shopify-partners.png", "/google-cloud.png", "/circleBadge-silver.png", "/google-analytics.svg",
  "/Codex_wordmark_light.svg", "/claude-ai-wordmark-icon_light.svg", "/antigravity-wordmark.svg",
  "/Rust_light.svg", "/tauri.svg", "/react_wordmark_light.svg", "/nextjs_logo_light.svg",
  "/TailwindCSS_wordmark_light.svg", "/ui_light.svg", "/Motion_light.svg",
  "/clerk-wordmark-light.svg", "/sanity-wordmark-light.svg", "/Convex_wordmark_light.svg",
  "/Supabase_wordmark_light.svg", "/neon.svg", "/Resend_wordmark_light.svg", "/Go_light.svg",
];

export const tickerTools = [...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS].map((src, i) => ({
  id: `${src}-${i}`,
  src,
}));
