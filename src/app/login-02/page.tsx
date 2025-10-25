import LoginHeroV2 from '@/components/authentication/LoginHeroV2';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login Page 02 - NextSaaS',
};

const LoginPage02 = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <LoginHeroV2 />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </>
  );
};
export default LoginPage02;
