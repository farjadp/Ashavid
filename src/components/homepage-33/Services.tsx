// ============================================================================
// Hardware Source: /src/components/homepage-33/Services.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid copy only (no design changes) for Services section on homepage-33.
// Env / Identity: Programs overview for founders, immigrants, and SMEs.
// ============================================================================

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface ServiceCard {
  id: number;
  icon: string;
  iconType: 'shape' | 'svg';
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: 'ns-shape-25',
    iconType: 'shape',
    title: 'Pre-Incubator',
    description: '4–8 weeks with Treefrog: validate your idea, structure the business, and build early traction.',
  },
  {
    id: 2,
    icon: 'ns-shape-19',
    iconType: 'shape',
    title: 'Startup Visa Readiness (SUV)',
    description: 'Prepare for endorsement with clear milestones, investor docs, and ecosystem alignment.',
  },
  {
    id: 3,
    icon: 'ns-shape-17',
    iconType: 'shape',
    title: 'Mentorship & Coaching',
    description: 'Work 1:1 with founders and experts on strategy, pitch, and go-to-market execution.',
  },
  {
    id: 4,
    icon: 'ns-shape-34',
    iconType: 'shape',
    title: 'Business Consulting',
    description: 'Company setup, operations, and market entry guidance tailored to Canada.',
  },
  {
    id: 5,
    icon: 'local-seo',
    iconType: 'svg',
    title: 'Launch Business in Canada',
    description: 'Registration to launch: legal structure, channels, and first customers.',
  },
  {
    id: 6,
    icon: 'analytics',
    iconType: 'svg',
    title: 'Market Research & Validation',
    description: 'Investor-ready reports: market sizing, competitor scan, risks, and next steps.',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-[220px] sm:pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="main-container">
          <div className="flex flex-col md:flex-row items-start max-md:gap-y-18 md:gap-x-[120px] justify-center md:justify-between">
            {/* Left: Intro */}
            <div className="lg:sticky lg:top-28">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Programs overview</span>
              </RevealAnimation>
              <div className="space-y-2 md:max-w-[595px] mb-14">
                <RevealAnimation delay={0.2}>
                  <h2>Our mission-driven programs.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[512px]">
                    Ashavid helps founders, immigrants, and SMEs launch and grow in Canada with real mentorship,
                    validation, and ecosystem access.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/programs"
                    className="btn btn-secondary hover:btn-white dark:btn-transparent btn-md">
                    Explore all programs
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            {/* Right: Features List */}
            <StackCardWrapper topOffset="13vh" gap="20px" initDelay={100} className="w-full max-w-xl">
              {servicesData.map((service) => (
                <StackCardItem key={service.id}>
                  <div
                    key={service.id}
                    className="border border-stroke-8/20 dark:border-stroke-5 bg-background-2 dark:bg-background-8 min-h-[170px] rounded-[20px] space-y-4 p-8 relative overflow-hidden z-0 w-full">
                    <div className="inline-block">
                      {service.iconType === 'shape' ? (
                        <span className={`${service.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                      ) : service.icon === 'local-seo' ? (
                        <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M47.6693 13.4643L26.0026 0.953125L4.33594 13.4643M47.6693 13.4643L26.0026 25.6406M47.6693 13.4643V18.1908L43.1449 20.8227M26.0026 50.998L47.6693 38.1518V33.1116M26.0026 50.998L4.33594 38.1518V33.1116M26.0026 50.998V46.0505M4.33594 13.4643L26.0026 25.6406M4.33594 13.4643V18.1908L8.86032 20.8227M26.0026 25.6406V30.7947M26.0026 30.7947L8.86032 20.8227M26.0026 30.7947L43.1449 20.8227M26.0026 35.8919L47.6693 23.0099M26.0026 35.8919L4.33594 23.0099M26.0026 35.8919V40.9533M47.6693 23.0099V27.9218L43.1449 30.573M47.6693 23.0099L43.1449 20.8227M4.33594 23.0099V27.9218L8.86032 30.573M4.33594 23.0099L8.86032 20.8227M26.0026 40.9533L8.86032 30.573M26.0026 40.9533L43.1449 30.573M26.0026 46.0505L47.6693 33.1116M26.0026 46.0505L4.33594 33.1116M47.6693 33.1116L43.1449 30.573M4.33594 33.1116L8.86032 30.573"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-black dark:stroke-accent"
                          />
                        </svg>
                      ) : service.icon === 'analytics' ? (
                        <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M47.6693 13.4781L26.0026 0.953125L17.317 5.97407M47.6693 13.4781V38.528L26.0026 51.0529M47.6693 13.4781L38.9367 18.5261M26.0026 51.0529V26.003M26.0026 51.0529L17.317 46.032V40.6548M4.33594 13.4781V38.528L12.7853 43.4123M4.33594 13.4781L26.0026 26.003M4.33594 13.4781L12.7853 8.59371L17.317 11.2247M26.0026 26.003L34.4051 21.1458M12.7853 43.4123V29.1393L17.317 32.0697V40.6548M12.7853 43.4123L17.317 40.6548M38.9367 33.6746V18.5261M38.9367 33.6746L34.4051 36.4632V31.0714M38.9367 33.6746L34.4051 31.0714M38.9367 18.5261L17.317 5.97407M34.4051 21.1458V31.0714M34.4051 21.1458L17.317 11.2247M17.317 5.97407V11.2247"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-black dark:stroke-accent"
                          />
                        </svg>
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-heading-5">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;