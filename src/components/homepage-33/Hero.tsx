// ============================================================================
// Hardware Source: /src/components/homepage-33/Hero.tsx
// Version: 1.0.2 — 2025-10-17
// Why: Allow optional props (title/subtitle/cta/badge) to fix TS error in page.
// Env / Identity: Client component used by /src/app/page.tsx
// ============================================================================

import Image, { StaticImageData } from 'next/image';
import avatar1 from '../../../public/images/avatar/logo3.png';
import avatar2 from '../../../public/images/avatar/logo4.png';
import avatar3 from '../../../public/images/avatar/Logo5.png';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// NEW: Props type
type HeroProps = Partial<{
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  badge: string;
}>;

interface AvatarData {
  id: number;
  src: StaticImageData;
  alt: string;
}

const avatarData: AvatarData[] = [
  { id: 1, src: avatar1, alt: 'Avatar 1' },
  { id: 2, src: avatar2, alt: 'Avatar 2' },
  { id: 3, src: avatar3, alt: 'Avatar 3' },
];

const Hero = ({
  title = 'A Program with Purpose. A Path with Possibility.',
  subtitle = 'Where your global journey meets Canadian opportunity.',
  ctaLabel = 'Apply Now',
  ctaHref = '/apply/pre-incubator',
  badge = 'Strategy, Implementation, and Enablement for Global Founders',
}: HeroProps) => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="relative pt-[200px] 2xl:pt-[280px] pb-[100px] bg-[url('/images/home-page-33/hero-bg.png')] bg-no-repeat bg-center bg-cover z-10">
        {/* dot bg */}
        <figure className="absolute left-1/2 -translate-x-1/2 bottom-0 h-full w-full max-w-[1362px] -z-10">
          <Image src="/images/home-page-33/hero-dot.svg" alt="Hero shape" className="w-full h-full" width={1362} height={800} />
        </figure>

        <div className="main-container z-10">
          <div className="flex flex-col items-center text-center mb-[70p]">
            <RevealAnimation delay={0.1}>
              {/* badge (kept same styling) */}
              <span className="badge badge-cyan mb-5">{badge}</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-secondary font-medium mb-4 max-w-[1000px]">
                {title}
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/60 max-w-[850px] mb-7 md:mb-14">
                {subtitle}
              </p>
            </RevealAnimation>

            <ul className="flex flex-col md:flex-row gap-4 mb-7 md:mb-14 w-[90%] md:w-auto">
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href={ctaHref}
                    className="btn btn-secondary btn-xl dark:btn-accent w-[90%] sm:w-auto hover:btn-white dark:hover:btn-white-dark"
                  >
                    {ctaLabel}
                  </LinkButton>
                </li>
              </RevealAnimation>

              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/programs"
                    className="btn hover:btn-secondary dark:btn-dark btn-white border-0 btn-xl dark:bg-accent/20 dark:text-secondary w-[90%] sm:w-auto"
                  >
                    Explore our work
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>

          {/* Avatars and trust indicator — unchanged */}
          <div className="flex items-center justify-center gap-x-4 mb-[100px]">
            <div className="flex -space-x-3.5">
              {avatarData.map((avatar, index) => (
                <RevealAnimation key={avatar.id} delay={0.5 + index * 0.1} direction="right" offset={50}>
                  <Image className="inline-block size-12 rounded-full ring-2 ring-white dark:ring-black bg-[#98AAC3]" src={avatar.src} alt={avatar.alt} width={48} height={48} />
                </RevealAnimation>
              ))}
              <RevealAnimation delay={0.8} direction="right" offset={50}>
                <div className="inline-flex items-center justify-center size-12 rounded-full ring-2 ring-white dark:ring-black text-secondary/80 bg-[#98AAC3] text-tagline-3 font-medium">
                  300+
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.9} direction="right" offset={50}>
              <div>
                <p className="font-medium block text-left text-secondary text-tagline-2">Trusted by over 300 clients.</p>
                <p className="text-secondary/60 text-tagline-3 max-w-[172px]">Your brand&apos;s success will be our next case study.</p>
              </div>
            </RevealAnimation>
          </div>

          {/* client logos (unchanged) */}
          {/* ... keep your existing logo markup ... */}
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;