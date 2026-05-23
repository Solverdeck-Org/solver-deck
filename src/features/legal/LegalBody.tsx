import { PortableText } from "next-sanity";
import type { PortableTextComponents } from "next-sanity";
import type { GetLegalPageQueryResult } from "@/sanity/types";

type LegalSection = NonNullable<NonNullable<GetLegalPageQueryResult>["sections"]>[number];

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-white text-base leading-relaxed mb-4">{children}</p>,
    h3: ({ children }) => <h3 className="text-white text-lg font-semibold mt-6 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-white text-base font-semibold mt-4 mb-1">{children}</h4>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside pl-6 mb-4 space-y-1.5 text-white">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside pl-6 mb-4 space-y-1.5 text-white">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-white text-base leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="text-white text-base leading-relaxed">{children}</li>,
  },
  types: {
    table: ({ value }: { value: { rows?: Array<{ _key: string; cells?: string[] }> } }) => {
      if (!value.rows?.length) return null;
      const [header, ...body] = value.rows;
      return (
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            {header?.cells && (
              <thead>
                <tr>
                  {header.cells.map((cell, i) => (
                    <th key={i} className="text-white font-semibold text-left px-4 py-3 border border-white/20 bg-white/5">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row) => (
                <tr key={row._key} className="hover:bg-white/[0.02] transition">
                  {row.cells?.map((cell, i) => (
                    <td key={i} className="text-white px-4 py-3 border border-white/10">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-2">{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-white underline underline-offset-4 hover:text-white/70 transition"
      >
        {children}
      </a>
    ),
  },
};

interface LegalBodyProps {
  sections: LegalSection[];
  intro?: string | null;
}

export function LegalBody({ sections, intro }: LegalBodyProps) {
  return (
    <div className="flex flex-col gap-0">
      {intro && (
        <p className="text-white text-base leading-relaxed mb-10 pb-10 border-b border-white/10">{intro}</p>
      )}
      {sections.map((section) => (
        <div key={section._key} className="border-b border-white/10 py-8">
          <h2 className="text-white text-xl font-semibold mb-4">{section.title}</h2>
          {section.body && (
            <PortableText value={section.body} components={components} />
          )}
        </div>
      ))}
    </div>
  );
}
