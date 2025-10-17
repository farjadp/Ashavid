// ============================================================================
// Hardware Source: /src/components/homepage-33/Steps.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid copy only (no design changes) for the 3-step pathway.
// Env / Identity: Pre-Incubator focus; founders/immigrants/SMEs
// ============================================================================
'use client';

import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ProcessItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  progressWidth: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    stepNumber: '01',
    title: 'Apply & readiness check.',
    description:
      'Tell us about your idea or business. We review fit and map your best path in Canada.',
    progressWidth: '0%',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Mentorship & validation.',
    description:
      '4–8 weeks of focused work with founders and partners (Treefrog, DMZ, Schulich) to test and refine.',
    progressWidth: '0%',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Launch plan & ecosystem access.',
    description:
      'Set structure, next milestones, and warm introductions to move from idea to traction.',
    progressWidth: '0%',
  },
];

const Steps = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });

  return (
    <RevealAnimation delay={0.1}>
      <section
        className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] -mt-[160px] sm:-mt-0"
        aria-label="Application Steps">
        <div className="main-container">
          <div className="space-y-14">
            <div ref={ref} className="progress-container flex items-start xl:items-center flex-col md:flex-row gap-8">
              {processItems.map((process, index) => (
                <RevealAnimation key={process.id} delay={0.3 + index * 0.1}>
                  <div
                    className="space-y-3 max-w-[388px] md:w-full"
                    role="region"
                    aria-label={`Step ${process.stepNumber}`}>
                    <div className="w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full relative overflow-hidden">
                      <div
                        className={`progress-line w-[${process.progressWidth}] bg-ns-green rounded-full h-full absolute left-0`}
                      />
                    </div>
                    <p className="text-tagline-2 text-primary-500">{process.stepNumber}</p>

                    <div className="space-y-2">
                      <h2 className="text-heading-5">{process.title}</h2>
                      <p className="w-full">{process.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.6}>
              <div className="text-start">
                <LinkButton
                  href="/process-01"
                  className="btn btn-secondary btn-md dark:btn-transparent hover:btn-white"
                  role="button"
                  aria-label="Start your application">
                  See the Ashavid path.
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Steps;