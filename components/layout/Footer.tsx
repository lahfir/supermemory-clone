'use client';

import Image from 'next/image';
import Script from 'next/script';
import Button from '@/components/ui/Button';
import GithubIcon from '@/icons/testimonials/GithubIcon';
import type { FC } from 'react';

const footerLinks = [
  { label: 'Updates', href: 'https://docs.supermemory.ai/changelog/overview' },
  { label: 'Contact us', href: 'mailto:support@supermemory.ai' },
  { label: 'Web app', href: 'https://supermemory.chat/' },
  { label: 'Docs', href: 'https://docs.supermemory.ai/introduction' },
];

type SocialLink = {
  label: string;
  href: string;
  count?: string;
  Icon?: FC<{ className?: string }>;
};

const socialLinks: ReadonlyArray<SocialLink> = [
  {
    label: 'GitHub',
    href: 'https://github.com/supermemoryai/supermemory',
    count: '9.5K',
    Icon: GithubIcon,
  },
  {
    label: 'X',
    href: 'https://x.com/supermemoryai',
    count: '4.1K',
  },
  {
    label: 'Terms',
    href: '/terms-of-service',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

export default function Footer() {
  return (
    <footer className="relative flex flex-col pb-8 -mb-px">
      {/* Gradient images - positioned as direct children like in original HTML */}
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06593_footer-gradient-top.svg"
        alt=""
        width={1920}
        height={40}
        className="w-full h-10 object-cover"
      />
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06592_footer-gradient-bottom.svg"
        alt=""
        width={1920}
        height={40}
        className="w-full h-10 object-cover"
      />

      <div className="relative z-10 px-8 flex flex-col items-center gap-16">
        {/* Logo */}
        <div className="flex justify-center px-8 pt-12">
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06591_footer-logo.svg"
            alt="Supermemory"
            width={200}
            height={80}
            className="w-full h-auto inline-block align-middle"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="https://console.supermemory.ai/" isExternal size='large' className='max-w-[24rem] w-[24rem]'>
            Get supermemory<sup className="text-xs">TM</sup>
          </Button>
          <Button href="https://docs.supermemory.ai/" isExternal size='large' className='max-w-[24rem] w-[24rem]'>
            Start building <sup className="text-xs">DOCS</sup>
          </Button>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm md:flex-1">
            <span className="text-gray-500 uppercase">© 2025 supermemory.ai</span>
            <a
              href="https://lahfir.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 uppercase hover:text-white transition-colors"
            >
              Cloned by lahfir
            </a>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-6 text-sm md:flex-1 justify-center">
            {socialLinks.map(({ label, href, count, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-500 hover:text-white transition-colors flex items-center gap-2"
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{label}</span>
                {count && <span>{count}</span>}
              </a>
            ))}
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6 text-sm md:flex-1 justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-500 uppercase hover:text-white transition-colors underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Unicorn Studio background */}
      <div className="absolute inset-0 -z-10">
        <div
          id="unicorn-container"
          data-us-project="uyHjeqAD3OkD10tavjsD"
          className="w-full h-full min-h-full"
          style={{ height: '100%', minHeight: '100%' }}
        />
      </div>
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error -- UnicornStudio is a global injected by external script
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            // @ts-expect-error -- UnicornStudio global init method
            window.UnicornStudio.init();
            // @ts-expect-error -- UnicornStudio mutation of global flag
            window.UnicornStudio.isInitialized = true;
          }
        }}
      />
    </footer>
  );
}