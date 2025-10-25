// src/components/homepage-33/WhyUs.tsx
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

type FeatureSide = 'left' | 'right';

interface FeatureItem {
  id: number;
  icon?: string;
  title: string;
  description: string;
  side: FeatureSide;
}

interface FeaturePropItem {
  id?: number;
  icon?: string;
  title: string;
  description?: string;
  text?: string;
  side?: FeatureSide;
}

interface FeatureImage {
  src: string;
  alt: string;
}

interface WhyUsProps {
  heading?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  } | null;
  items?: FeaturePropItem[];
  image?: FeatureImage;
}

/** 1) Update the feature items (left/right columns) */
const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-15',
    title: 'Startups',
    description: 'Validate, structure, and gain early traction with our Pre-Incubator and partner network.',
    side: 'left',
  },
  {
    id: 2,
    icon: 'ns-shape-24',
    title: 'Immigrant founders',
    description: 'Choose the right path: Startup Visa readiness or launch a real business in Canada.',
    side: 'left',
  },
  {
    id: 3,
    icon: 'ns-shape-9',
    title: 'SMEs & local businesses',
    description: 'Modernize your brand, channels, and operations with practical digital transformation.',
    side: 'left',
  },
  {
    id: 4,
    icon: 'ns-shape-7',
    title: 'Innovation hubs access',
    description: 'Warm intros to Treefrog, DMZ, MaRS, Schulich, and more—when you’re truly ready.',
    side: 'right',
  },
  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Market research & validation',
    description: 'Investor-ready reports: market sizing, competitor scan, risks, and next steps.',
    side: 'right',
  },
  {
    id: 6,
    icon: 'ns-shape-36',
    title: 'Mentorship that’s honest',
    description: '1:1 guidance from founders and operators. Real feedback, clear milestones.',
    side: 'right',
  },
];

const DEFAULT_HEADING = 'Why AshaVid?';
const DEFAULT_DESCRIPTION =
  'Move from idea to traction with mentorship, validation, and access to Canada’s innovation ecosystem.';
const DEFAULT_CTA = {
  label: 'Explore programs',
  href: '/programs',
};
const DEFAULT_IMAGE: FeatureImage = {
  src: '/images/home-page-33/feature-img.png',
  alt: 'Investment platform interface showing key features',
};

const renderFeatureIcon = (icon?: string) => {
  if (!icon) {
    return (
      <span className="text-[28px] text-accent" aria-hidden="true">
        •
      </span>
    );
  }

  if (icon.startsWith('ns-')) {
    return <span className={`${icon} text-[36px] text-accent`}> </span>;
  }

  return (
    <span className="text-[28px]" aria-hidden="true">
      {icon}
    </span>
  );
};

const WhyUs = ({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  cta = DEFAULT_CTA,
  items,
  image = DEFAULT_IMAGE,
}: WhyUsProps) => {
  const sourceItems: (FeatureItem | FeaturePropItem)[] = items ?? featureItems;

  const normalizedItems = sourceItems.map<FeatureItem>((item, index) => ({
    id: item.id ?? index + 1,
    icon: item.icon,
    title: item.title,
    description: item.description ?? ('text' in item ? item.text ?? '' : ''),
    side: item.side ?? (index % 2 === 0 ? 'left' : 'right'),
  }));

  const leftFeatures = normalizedItems.filter((item) => item.side === 'left');
  const rightFeatures = normalizedItems.filter((item) => item.side === 'right');

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="main-container">
          <div className="py-[42px] bg-secondary rounded-4xl px-6 sm:px-14 relative z-10 overflow-hidden">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="-z-10 absolute -right-[120%] -top-[44%] sm:-right-[100%] sm:-top-[35%] md:-right-[104%] md:-top-[78%] lg:-right-[74%] lg:-top-[78%] xl:-right-[54%] xl:-top-[58%] -rotate-[290deg] sm:-rotate-[260deg] size-[1060px] pointer-events-none select-none">
                <Image src="/images/gradient/gradient-6.png" alt="gradient" width={1060} height={1060} />
              </figure>
            </RevealAnimation>
            <div className="space-y-[70px] relative z-10">
              <div className="md:w-full space-y-7 text-center md:text-left">
                <div className="md:w-full space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[571px] text-accent">{heading}</h2>
                  </RevealAnimation>
                  {description ? (
                    <RevealAnimation delay={0.3}>
                      <p className="max-w-[448px] md:w-full text-accent/60">{description}</p>
                    </RevealAnimation>
                  ) : null}
                </div>
                {cta ? (
                  <RevealAnimation delay={0.4}>
                    <div>
                      <LinkButton href={cta.href} className="btn btn-dark btn-md hover:btn-white">
                        {cta.label}
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                ) : null}
              </div>

              <div className="max-w-[1178px] mx-auto flex items-center flex-col gap-y-8 sm:gap-y-0 sm:gap-x-8 md:flex-row justify-between">
                <div className="max-w-[300px] md:w-full space-y-8">
                  {leftFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left">
                      <div className="space-y-4">
                        <div className="overflow-hidden inline-block">
                          {renderFeatureIcon(feature.icon)}
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                <RevealAnimation delay={0.4} offset={100}>
                  <figure className="md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px] rounded-2xl md:w-full order-last md:order-none">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="rounded-2xl"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                <div className="max-w-[300px] md:w-full space-y-8">
                  {rightFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right">
                      <div className="space-y-3">
                        <div className="overflow-hidden inline-block">
                          {renderFeatureIcon(feature.icon)}
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

export default WhyUs;
