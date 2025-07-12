export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Andres Bonilla",
  description: "This is my website",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/Andres94b",
    linkedin: "https://www.linkedin.com/in/andres-bonilla-07/",
    twitter: "",
    docs: "",
    discord: "",
    sponsor: "https://patreon.com/jrgarciadev",
    address:
      "https://www.google.com/maps/place/Montreal,+QC/@45.5593046,-73.8766793,11z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
};
