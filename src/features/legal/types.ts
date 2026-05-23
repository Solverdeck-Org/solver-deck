import type { PortableTextBlock } from "sanity";

export interface LegalSection {
  _key: string;
  title?: string | null;
  body?: PortableTextBlock[] | null;
}

export interface LegalPage {
  title?: string | null;
  intro?: string | null;
  sections?: LegalSection[] | null;
  _updatedAt?: string | null;
}
