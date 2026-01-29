export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: "/images/me.png",
    alt: "Logo",
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Work",
      href: "/work-experience",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ] as NavItem[],
};
