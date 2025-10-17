// ============================================================================
// Hardware Source: /src/components/homepage-33/Audit.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid copy only (no structural changes)
// Env / Identity: Homepage-33 “Audit” section → now “Readiness Review”
// ============================================================================
import Image from 'next/image';
import auditImage from '../../../public/images/home-page-33/audit-image.png';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Audit = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-x-[165px]">
            {/* Left Section */}
            <div className="space-y-14">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-secondary dark:text-accent">
                    Get your free Startup Readiness Review.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60">
                    Ashavid’s team will evaluate your business concept, traction, and market readiness — 
                    then share a short personalized roadmap to help you qualify for real programs and investors.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href="/apply/readiness-review"
                    className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md">
                    Request my free review
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            {/* Right Section */}
            <RevealAnimation delay={0.4}>
              <figure className="bg-[#D9D9D9] rounded-2xl overflow-hidden">
                <Image src={auditImage} alt="Ashavid readiness review" className="size-full object-cover" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;