// ============================================================================
// Hardware Source: /src/data/header.ts
// Version: 3.0.0 — 2025-10-16
// Why: Ashavid navigation copy ONLY (no design changes). Reuses existing
//      mega menu component IDs so NavbarOne UI/animations remain intact.
// Env / Identity: Consumed by NavbarOne/FooterOne
// ============================================================================

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
  megaMenuComponent?: string;
}

export interface MegaMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  id: string;
  items: MegaMenuItem[];
}

/** ───────────────── Top Navigation (keep component ids) ───────────────── */

// Home Mega Menu Data (3 columns) — provided for component import; 
// fine even if Home.hasDropdown = false
export const homeMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: "column-1",
    items: [
      { id: "home-main",   label: "Home (Ashavid)",                href: "/" },
      { id: "home-programs",label: "Programs Overview",            href: "/programs" },
      { id: "home-preinc", label: "Pre-Incubator",                 href: "/programs/pre-incubator" },
      { id: "home-mentor", label: "Mentorship",                    href: "/programs/mentorship" },
    ],
  },
  {
    id: "column-2",
    items: [
      { id: "home-suv",    label: "Startup Visa Readiness (SUV)",  href: "/programs/suv" },
      { id: "home-launch", label: "Launch in Canada",              href: "/programs/launch-in-canada" },
      { id: "home-sme",    label: "SME Digital Consulting",        href: "/programs/consulting" },
      { id: "home-dx",     label: "Digital Transformation",        href: "/digital-transformation/strategy" },
    ],
  },
  {
    id: "column-3",
    items: [
      { id: "home-about",  label: "About Ashavid",                 href: "/about" },
      { id: "home-partner",label: "Partners & Ecosystem",          href: "/about/partners" },
      { id: "home-insight",label: "Insights & Guides",             href: "/insights/articles" },
      { id: "home-apply",  label: "Apply Now",                     href: "/apply/pre-incubator" },
    ],
  },
];

export const navigationItems: NavigationItem[] = [
  { id: "home",     label: "Home",                href: "/", hasDropdown: false },

  // Service / Program → use existing ServicesMenu component
  { id: "services", label: "Program",   href: "#", hasDropdown: true, megaMenuComponent: "ServicesMenu" },

  // Digital Transformation → reuse PageMegaMenu layout (no UI change)
  { id: "pages",    label: "Digital Transformation", href: "#", hasDropdown: true, megaMenuComponent: "PageMegaMenu" },

  // About → use existing AboutMenu
  { id: "about",    label: "About",               href: "#", hasDropdown: true, megaMenuComponent: "AboutMenu" },

  // Insight → reuse BlogMenu (same design)
  { id: "blog",     label: "Insight",             href: "#", hasDropdown: true, megaMenuComponent: "BlogMenu" },

  // Contact (simple link for now; can expand later with another data set)
  { id: "contact",  label: "Contact",             href: "/contact", hasDropdown: false },
];

/** ───────────────── About Menu Data (AboutMenu component) ─────────────── */
export const aboutMenuItems: MegaMenuItem[] = [
  { id: "about-story",   label: "Our Story",           href: "/about" },
  { id: "about-team",    label: "Our Team",            href: "/about/team" },
  { id: "about-mission", label: "Mission & Vision",    href: "/about/mission" },
  { id: "about-partner", label: "Partner & Ecosystem", href: "/about/partners" },
];

/** ─────────────── Insight Menu Data (BlogMenu component reused) ────────── */
export const blogMenuItems: MegaMenuItem[] = [
  { id: "ins-blog",    label: "Blog",              href: "/insights/articles" },
  { id: "ins-success", label: "Success Stories",   href: "/insights/success-stories" },
  { id: "ins-market",  label: "Canadian Market",   href: "/insights/market" },
  { id: "ins-tools",   label: "Tools & Guides",    href: "/insights/tools" },
  { id: "ins-perks",   label: "Perks",             href: "/insights/perks" },
];

/** ───────────── Service / Program (ServicesMenu component reused) ───────── */
export const servicesMenuItems: MegaMenuItem[] = [
  { id: "prog-preinc",   label: "Pre-Incubator",                 href: "/programs/pre-incubator" },
  { id: "prog-suv",      label: "Startup Visa Readiness (SUV)",  href: "/programs/suv" },
  { id: "prog-mentor",   label: "Mentorship",                    href: "/programs/mentorship" },
  { id: "prog-consult",  label: "Business Consulting",           href: "/programs/consulting" },
  { id: "prog-launch",   label: "Launch Business in Canada",     href: "/programs/launch-in-canada" },
];



/** ───── Digital Transformation (PageMegaMenu layout; 1 column is fine) ──── */
export const pageMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: "dx-col-1",
    items: [
      { id: "dx-strategy",   label: "Digital Transformation Strategy", href: "/digital-transformation/strategy" },
      { id: "dx-tech",       label: "Technology Implementation",       href: "/digital-transformation/technology" },
      { id: "dx-workforce",  label: "Workforce Enablement",            href: "/digital-transformation/workforce" },
      { id: "dx-industry",   label: "Industry-Specific Solutions",     href: "/digital-transformation/industry" },
      { id: "dx-advisory",   label: "Advisory & Partnership Programs", href: "/digital-transformation/advisory" },
      { id: "dx-measure",    label: "Measurement & Optimization",      href: "/digital-transformation/measurement" },
      { id: "dx-ai",         label: "AI-Enabled",                      href: "/digital-transformation/ai" },
    ],
  },
];

/** Home mega menu: leave as-is or customize later. Not used when Home has no dropdown. */

/** ───────────────────── Header CTA (top-right button) ──────────────────── */
export const headerConfig = {
  logo: {
    alt: "Ashavid",
    mainLogoPath: "/images/Logo/Ashavid-logo-files-01.png",
    logoPath: "/images/Logo/Ashavid-logo-files-01.png",
    logoDarkPath: "/images/Logo/Ashavid-logo-files-02.png",
  },
  // Apply NOW : Button
  cta: { label: "Apply Now", href: "/apply/pre-incubator" },
};