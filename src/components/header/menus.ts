export interface MenuItem {
  name: string;
  href: string;
}

export interface MenuColumn {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  columns: MenuColumn[];
}

export const menus: Record<string, MenuData> = {
  products: {
    columns: [
      {
        title: "SOLVERDECK PRODUCTS",
        items: [
          { name: "Kontinue AI", href: "https://kontinueai.com/" },
          { name: "Present", href: "https://present.c-technology-inc.com/" },
        ],
      },
    ],
  },
  caseStudies: {
    columns: [
      {
        title: "CLIENT PROJECTS",
        items: [
          { name: "Client Project 1", href: "#" },
          { name: "Client Project 2", href: "#" },
        ],
      },
    ],
  },
  resources: {
    columns: [
      {
        title: "LEARN",
        items: [{ name: "Blog", href: "/blog" }],
      },
      {
        title: "SOCIAL PROOF",
        items: [
          { name: "Testimonials", href: "/testimonials" },
          { name: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
};
