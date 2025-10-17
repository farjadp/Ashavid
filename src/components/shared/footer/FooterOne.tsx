// ============================================================================
// Hardware Source: /src/components/shared/footer/FooterOne.tsx
// Version: 1.1.0 — 2025-10-17
// Why: Ashavid copy only (no design or structure changes)
// Env / Identity: Global footer for Ashavid site
// ============================================================================
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import behance from '@public/images/icons/behance.svg';
import dribbble from '@public/images/icons/dribbble.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
// brand: use dark variant from your /public/images/Logo package
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import FooterLeftGradient from './FooterLeftGradient';
import FooterRightGradient from './FooterRightGradient';

const FooterOne = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative overflow-hidden', className)}>
      {/* right gradient */}
      <FooterRightGradient />
      {/* left gradient */}
      <FooterLeftGradient />

      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          {/* Brand + blurb */}
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <figure>
                  <Image
                    src="/images/Logo/Ashavid-b3.svg"
                    alt="Ashavid"
                    width={180}
                    height={40}
                    className="h-auto w-auto"
                  />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Entrepreneurship • Immigration • Digital Transformation.  
                  Helping founders and SMEs launch real businesses in Canada with mentorship, validation, and partners.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com" className="footer-social-link">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.instagram.com" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.youtube.com" className="footer-social-link">
                    <span className="sr-only">YouTube</span>
                    <Image className="size-6" src={youtube} alt="YouTube" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.linkedin.com" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.dribbble.com" className="footer-social-link">
                    <span className="sr-only">Dribbble</span>
                    <Image className="size-6" src={dribbble} alt="Dribbble" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.behance.net" className="footer-social-link">
                    <span className="sr-only">Behance</span>
                    <Image className="size-6" src={behance} alt="Behance" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Link columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {/* Column 1 */}
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Ashavid</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li><Link href="/about" className="footer-link">About</Link></li>
                    <li><Link href="/programs" className="footer-link">Programs</Link></li>
                    <li><Link href="/about/partners" className="footer-link">Partners</Link></li>
                    <li><Link href="/apply" className="footer-link">Apply Now</Link></li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>

            {/* Column 2 */}
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.5}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Resources</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li><Link href="/faq" className="footer-link">FAQ</Link></li>
                    <li><Link href="/insights/articles" className="footer-link">Insights</Link></li>
                    <li><Link href="/insights/tools" className="footer-link">Tools & Guides</Link></li>
                    <li><Link href="/insights/success-stories" className="footer-link">Success Stories</Link></li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>

            {/* Column 3 */}
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.6}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Legal</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li><Link href="/terms-conditions" className="footer-link">Terms & Conditions</Link></li>
                    <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
                    <li><Link href="/refund-policy" className="footer-link">Refund Policy</Link></li>
                    <li><Link href="/gdpr" className="footer-link">GDPR Compliance</Link></li>
                    <li><Link href="/affiliate-policy" className="footer-link">Affiliate Policy</Link></li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="relative pt-[26px] pb-[100px] text-center">
          <FooterDivider />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              © {new Date().getFullYear()} Ashavid — Toronto, Canada
            </p>
          </RevealAnimation>
        </div>
      </div>

      <ThemeToggle />
    </footer>
  );
};

FooterOne.displayName = 'FooterOne';
export default FooterOne;