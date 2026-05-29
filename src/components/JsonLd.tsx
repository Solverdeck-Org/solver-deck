// biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is static server-generated config — not derived from user input and safe from XSS

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
