// ============================================================================
// Hardware Source: /src/components/homepage-33/Results.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid copy only (no design changes) for results carousel.
// Env / Identity: Ashavid cohorts, mentorship, and partners
// ============================================================================
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ResultCard {
  id: number;
  category: string;
  value: string;
  description: string;
}

interface ResultPropItem {
  id?: number;
  category?: string;
  label?: string;
  value: string;
  description?: string;
}

interface ResultsProps {
  heading?: string;
  description?: string;
  stats?: ResultPropItem[];
  cta?: {
    label: string;
    href: string;
  } | null;
}

const resultCards: ResultCard[] = [
  {
    id: 1,
    category: 'Ecosystem partners',
    value: '5+',
    description: 'Treefrog, DMZ, MaRS, Schulich, OneEleven.',
  },
  {
    id: 2,
    category: 'Invitations per cohort',
    value: '30',
    description: 'Kept small for quality, access, and real support.',
  },
  {
    id: 3,
    category: 'Launches per cohort',
    value: '2–5',
    description: 'Real, operating businesses — not theory.',
  },
  {
    id: 4,
    category: 'Mentor response time',
    value: '<24h',
    description: 'Average on weekdays for active participants.',
  },
  {
    id: 5,
    category: '1:1 sessions delivered',
    value: '200+',
    description: 'Strategy, pitch, validation, and market entry.',
  },
];

const DEFAULT_HEADING = 'Results that start real businesses.';
const DEFAULT_DESCRIPTION =
  'Ashavid helps founders and immigrant entrepreneurs move from idea to traction in Canada.';
const DEFAULT_CTA = {
  label: 'Read founder stories.',
  href: '/insights/success-stories',
};

const Results = ({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  stats,
  cta = DEFAULT_CTA,
}: ResultsProps) => {
  const sourceCards: (ResultCard | ResultPropItem)[] = stats ?? resultCards;

  const normalizedCards = sourceCards.map<ResultCard>((item, index) => ({
    id: item.id ?? index + 1,
    category: item.category ?? ('label' in item && item.label ? item.label : ''),
    value: item.value,
    description: item.description ?? '',
  }));

  return (
    <RevealAnimation delay={0.1}>
      <section className="relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="space-y-14 mb-[70px] text-center sm:text-left mx-4 sm:mx-0">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="text-secondary dark:text-accent">{heading}</h2>
              </RevealAnimation>
              {description ? (
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60">{description}</p>
                </RevealAnimation>
              ) : null}
            </div>
            {cta ? (
              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href={cta.href}
                    className="btn btn-secondary dark:btn-transparent btn-md hover:btn-white">
                    {cta.label}
                  </LinkButton>
                </div>
              </RevealAnimation>
            ) : null}
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative">
            <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
            <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
            <Marquee>
              <div className="flex items-center justify-center gap-8 mb-14">
                {normalizedCards.map((result, index) => (
                  <div
                    key={result.id}
                    className={cn(
                      'min-w-[320px] sm:min-w-[360px] min-h-[270px] bg-white hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out',
                      index === 0 && 'ml-8',
                    )}>
                    <div className="-z-10 absolute -top-[107%] -right-[90%] size-[500px] -rotate-[60deg] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 select-none pointer-events-none">
                      <Image src="/images/gradient/gradient-26.png" alt="gradient" width={500} height={500} />
                    </div>

                    <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                      <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                        {result.category}
                      </p>
                      <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                        {result.value}
                      </h3>
                    </div>

                    {result.description ? (
                      <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                        {result.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </section>
    </RevealAnimation>
  );
};

export default Results;
