// ============================================================================
// Hardware Source: /src/components/homepage-33/CTA.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid CTA copy only (no structural or design change)
// Env / Identity: Homepage final call-to-action section
// ============================================================================
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface CallToActionProps {
  badge?: string;
  heading?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  } | null;
}

const DEFAULT_BADGE = 'Let’s begin';
const DEFAULT_HEADING = 'Ready to take your next step in Canada?';
const DEFAULT_DESCRIPTION =
  'Whether you’re a founder, immigrant entrepreneur, or growing business — Ashavid helps you find clarity, mentorship, and the right partners to move forward with confidence.';
const DEFAULT_CTA = {
  label: 'Start your application',
  href: '/apply',
};

const CTA = ({
  badge = DEFAULT_BADGE,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  cta = DEFAULT_CTA,
}: CallToActionProps) => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[112px] xl:pt-[100px] border-t border-stroke-4 dark:border-stroke-6 dark:bg-background-5">
        <div className="main-container">
          <div className="text-center max-w-[649px] mx-auto">
            {badge ? (
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">{badge}</span>
              </RevealAnimation>
            ) : null}

            {heading ? (
              <RevealAnimation delay={0.2}>
                <h2 className="mb-3">{heading}</h2>
              </RevealAnimation>
            ) : null}

            {description ? (
              <RevealAnimation delay={0.3}>
                <p className="mb-6">{description}</p>
              </RevealAnimation>
            ) : null}

            {cta ? (
              <RevealAnimation delay={0.4}>
                <div className="flex justify-center">
                  <LinkButton
                    href={cta.href}
                    className="btn btn-secondary hover:btn-white btn-md dark:btn-accent dark:hover:btn-white-dark">
                    {cta.label}
                  </LinkButton>
                </div>
              </RevealAnimation>
            ) : null}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
