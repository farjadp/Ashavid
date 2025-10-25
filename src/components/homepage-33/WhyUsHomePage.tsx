// src/components/homepage-33/WhyUsHomePage.tsx

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureItem {
  id: number;
  icon: string; // existing icon utility classes (ns-shape-*)
  title: string;
  description: string;
  side: 'left' | 'right';
}

const featureItems: FeatureItem[] = [
  // LEFT COLUMN — Who we serve
  {
    id: 1,
    icon: 'ns-shape-15',
    title: 'Startups',
    description:
      'Move from idea to traction with mentor-led sprints, validation, and a clear go-to-market path.',
    side: 'left',
  },
  {
    id: 2,
    icon: 'ns-shape-24',
    title: 'Immigrant founders',
    description:
      'Navigate Canada’s ecosystem with structured guidance, practical milestones, and SUV readiness support.',
    side: 'left',
  },
  {
    id: 3,
    icon: 'ns-shape-9',
    title: 'Small & mid-size businesses',
    description:
      'Modernize operations with digital transformation, automation, and measurable growth planning.',
    side: 'left',
  },

  // RIGHT COLUMN — Why Ashavid
  {
    id: 4,
    icon: 'ns-shape-7',
    title: 'Real mentorship',
    description:
      'Work directly with founders and operators who’ve launched, scaled, and advised in Canada.',
    side: 'right',
  },
  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Ecosystem access',
    description:
      'Tap into partners like Treefrog, DMZ, Schulich, MaRS, and OneEleven to accelerate your journey.',
    side: 'right',
  },
  {
    id: 6,
    icon: 'ns-shape-36',
    title: 'Outcome-driven process',
    description:
      'Scorecards, KPIs, and tangible deliverables—readiness reports, pitch decks, and referral pathways.',
    side: 'right',
  },
];

const WhyUsHomePage = () => {
  const leftFeatures = featureItems.filter((item) => item.side === 'left');
  const rightFeatures = featureItems.filter((item) => item.side === 'right');

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="main-container">
          <div className="py-[42px] bg-secondary rounded-4xl px-6 sm:px-14 relative z-10 overflow-hidden">
            {/* Background gradient */}
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="-z-10 absolute -right-[120%] -top-[44%] sm:-right-[100%] sm:-top-[35%] md:-right-[104%] md:-top-[78%] lg:-right-[74%] lg:-top-[78%] xl:-right-[54%] xl:-top-[58%] -rotate-[290deg] sm:-rotate-[260deg] size-[1060px] pointer-events-none select-none">
                <Image src="/images/gradient/gradient-6.png" alt="brand gradient" width={1060} height={1060} />
              </figure>
            </RevealAnimation>

            <div className="space-y-[70px] relative z-10">
              {/* Heading */}
              <div className="md:w-full space-y-7 text-center md:text-left">
                <div className="md:w-full space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[571px] text-accent">Why Ashavid?</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[448px] md:w-full text-accent/60">
                      A practical bridge between entrepreneurship, immigration, and digital transformation—built in
                      Canada, for global founders and growing businesses.
                    </p>
                  </RevealAnimation>
                </div>

                <RevealAnimation delay={0.4}>
                  <div>
                    <LinkButton href="/programs/pre-incubator" className="btn btn-dark btn-md hover:btn-white">
                      Explore our programs
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>

              {/* Feature grid */}
              <div className="max-w-[1178px] mx-auto flex items-center flex-col gap-y-8 sm:gap-y-0 sm:gap-x-8 md:flex-row justify-between">
                {/* Left column */}
                <div className="max-w-[300px] md:w-full space-y-8">
                  {leftFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left">
                      <div className="space-y-4">
                        <div className="overflow-hidden inline-block">
                          <span className={`${feature.icon} text-[36px] text-accent`} />
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                {/* Center image */}
                <RevealAnimation delay={0.4} offset={100}>
                  <figure className="md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px] rounded-2xl md:w-full order-last md:order-none">
                    <Image
                      src="/images/home-page-33/ashavid-digital-tramnsformation-homepage.png"
                      alt="Ashavid program preview"
                      className="rounded-2xl"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                {/* Right column */}
                <div className="max-w-[300px] md:w-full space-y-8">
                  {rightFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right">
                      <div className="space-y-3">
                        <div className="overflow-hidden inline-block">
                          <span className={`${feature.icon} text-[36px] text-accent`} />
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default WhyUsHomePage;