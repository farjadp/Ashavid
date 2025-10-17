// ============================================================================
// Hardware Source: /src/app/page.tsx
// Version: 1.0.1 — 2025-10-16
// Why: Set homepage to “Homepage 33” layout using Ashavid’s real content (no design changes)
// Env / Identity: Ashavid main site — Entrepreneurship • Immigration • Digital Transformation
// ============================================================================

import Audit from "@/components/homepage-33/Audit";
import Blog from "@/components/homepage-33/Blog";
import CTA from "@/components/homepage-33/CTA";
import Hero from "@/components/homepage-33/Hero";
import Results from "@/components/homepage-33/Results";
import Services from "@/components/homepage-33/Services";
import Steps from "@/components/homepage-33/Steps";
import Testimonial from "@/components/homepage-33/Testimonial";
import WhyUs from "@/components/homepage-33/WhyUs";
import FooterOne from "@/components/shared/footer/FooterOne";
import NavbarOne from "@/components/shared/header/NavbarOne";
import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Ashavid — A Program with Purpose, A Path with Possibility",
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
        {/* Hero */}
        <Hero
          title="A Program with Purpose. A Path with Possibility."
          subtitle="Where your global journey meets Canadian opportunity."
          ctaLabel="Apply Now"
          ctaHref="/apply/pre-incubator"
          badge="Canadian Entrepreneur Readiness Program"
        />

        {/* Core Divisions */}
        <Services
          heading="Our Core Divisions"
          services={[
            {
              title: "Startups",
              text: "We help early-stage founders move from idea to traction with expert mentorship and validation programs.",
              icon: "🚀",
            },
            {
              title: "Immigrants",
              text: "We guide entrepreneurs and investors to build real, legal, and scalable businesses in Canada.",
              icon: "🇨🇦",
            },
            {
              title: "Businesses (SMEs)",
              text: "We modernize traditional companies through digital transformation, automation, and growth strategy.",
              icon: "💻",
            },
          ]}
        />

        {/* Journey Steps */}
        <Steps
          heading="How the Ashavid Path Works"
          steps={[
            {
              number: "01",
              title: "Apply for the Program",
              text: "Tell us about your idea or business plan — and let’s find your best pathway.",
            },
            {
              number: "02",
              title: "Validate and Learn",
              text: "Join our 4–8 week pre-incubation cohort with visits to Treefrog, DMZ, and Schulich.",
            },
            {
              number: "03",
              title: "Launch in Canada",
              text: "Build a real foundation, connect with partners, and start your business journey here.",
            },
          ]}
        />

        {/* Why Ashavid */}
        <WhyUs
          heading="Why Choose Ashavid?"
          items={[
            {
              title: "Real Mentorship",
              text: "You’ll work directly with experienced founders and Canadian experts — not just advisors.",
            },
            {
              title: "Trusted Pathways",
              text: "All programs are structured for Startup Visa, market entry, and investor readiness.",
            },
            {
              title: "Tangible Results",
              text: "Every participant receives clear feedback, progress reports, and real ecosystem access.",
            },
          ]}
        />

        {/* Results */}
        <Results
          heading="Our Growing Impact"
          stats={[
            { value: "30+", label: "Startups Supported" },
            { value: "5+", label: "Accelerator Partners" },
            { value: "80%", label: "Launch Success Rate" },
          ]}
        />

        {/* Testimonials */}
        <Testimonial heading="What Founders Say About Ashavid" />

        {/* Readiness Audit */}
        <Audit
          heading="Not sure if you’re ready?"
          subheading="Get a free readiness check and learn which Ashavid program fits you best."
        />

        {/* Blog */}
        <Blog heading="Insights from the Ashavid Community" />

        {/* CTA */}
        <CTA
          heading="Start Your Journey with Ashavid"
          description="Apply for the next Pre-Incubator Cohort in Toronto and take your first step toward building a real business in Canada."
          ctaLabel="Apply Today"
          ctaHref="/apply/pre-incubator"
        />
      </main>

      <FooterOne />
    </Fragment>
  );
};

export default Homepage33;