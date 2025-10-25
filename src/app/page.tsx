// ============================================================================
// Hardware Source: /src/app/page.tsx
// Version: 1.0.1 — 2025-10-16
// Why: Set homepage to “Homepage 33” layout using Ashavid’s real content (no design changes)
// Env / Identity: Ashavid main site — Entrepreneurship • Immigration • Digital Transformation
// ============================================================================
// ============================================================================
// /src/app/page.tsx
// Version: 1.0.2 — 2025-10-21
// Note: Uses built-in copy of components (no external props) to avoid TS errors
// ============================================================================

import Audit from '@/components/homepage-33/Audit';
import Blog from '@/components/homepage-33/Blog';
import CTA from '@/components/homepage-33/CTA';
import Hero from '@/components/homepage-33/Hero';
import Results from '@/components/homepage-33/Results';
import Services from '@/components/homepage-33/Services';
import Steps from '@/components/homepage-33/Steps';
import Testimonial from '@/components/homepage-33/Testimonial';
import WhyUsHomePage from '@/components/homepage-33/WhyUsHomePage';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarFive';
import type { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Ashavid — A Program with Purpose, A Path with Possibility',
  description:
    "Ashavid helps global founders, immigrants, and small businesses build real traction in Canada through mentorship, validation, and digital transformation.",
};

const Homepage33 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white dark:bg-background-9 border-b border-stroke-2"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-white"
      />

      <main className="bg-white dark:bg-background-9">
        {/* Hero (uses internal copy) */}
        <Hero />

        {/* Core divisions (internal copy) */}
        <Services />

        {/* Journey steps (internal copy) */}
        <Steps />

        {/* Why Ashavid (new homepage component with internal copy) */}
        <WhyUsHomePage />

        {/* Results / social proof (internal copy) */}
        <Results />

        {/* Testimonials */}
        <Testimonial />

        {/* Readiness Audit */}
        <Audit />

        {/* Blog */}
        <Blog />

        {/* CTA */}
        <CTA />
      </main>

      <FooterOne />
    </Fragment>
  );
};

export default Homepage33;