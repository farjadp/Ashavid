// ============================================================================
// Hardware Source: /src/components/homepage-33/Audit.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid copy only (no structural changes)
// Env / Identity: Homepage-33 “Audit” section → now “Readiness Review”
// ============================================================================
import Image, { type StaticImageData } from 'next/image';
import auditImage from '../../../public/images/home-page-33/Futuristic-Technology-Design-Poster.jpg';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface AuditImage {
  src: StaticImageData | string;
  alt: string;
}

interface AuditProps {
  heading?: string;
  subheading?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  } | null;
  image?: AuditImage;
}

const DEFAULT_HEADING = 'Get your free Startup Readiness Review.';
const DEFAULT_DESCRIPTION =
  'Ashavid’s team will evaluate your business concept, traction, and market readiness — then share a short personalized roadmap to help you qualify for real programs and investors.';
const DEFAULT_CTA = {
  label: 'Request my free review',
  href: '/apply/readiness-review',
};
const DEFAULT_IMAGE: AuditImage = {
  src: auditImage,
  alt: 'Ashavid readiness review',
};

const Audit = ({
  heading = DEFAULT_HEADING,
  subheading,
  description,
  cta = DEFAULT_CTA,
  image = DEFAULT_IMAGE,
}: AuditProps) => {
  const resolvedDescription = description ?? subheading ?? DEFAULT_DESCRIPTION;

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-x-[165px]">
            {/* Left Section */}
            <div className="space-y-14">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-secondary dark:text-accent">{heading}</h2>
                </RevealAnimation>
                {resolvedDescription ? (
                  <RevealAnimation delay={0.2}>
                    <p className="text-secondary/60 dark:text-accent/60">{resolvedDescription}</p>
                  </RevealAnimation>
                ) : null}
              </div>
              {cta ? (
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href={cta.href}
                      className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md">
                      {cta.label}
                    </LinkButton>
                  </div>
                </RevealAnimation>
              ) : null}
            </div>

            {/* Right Section */}
            <RevealAnimation delay={0.4}>
              <figure className="bg-[#D9D9D9] rounded-2xl overflow-hidden">
                <Image src={image.src} alt={image.alt} className="size-full object-cover" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;
