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
  services: {
    columns: [
      {
        title: "SOLVERDECK SERVICES",
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

};
