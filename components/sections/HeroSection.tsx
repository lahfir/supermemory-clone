'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation on load
    if (headingRef.current) {
      headingRef.current.style.opacity = '1';
      headingRef.current.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
      headingRef.current.style.transformStyle = 'preserve-3d';
    }

    if (contentRef.current) {
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = '1';
          contentRef.current.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
          contentRef.current.style.transformStyle = 'preserve-3d';
        }
      }, 200);
    }
  }, []);

  return (
    <section
      className="relative flex flex-row justify-start items-stretch min-h-0 md:min-h-screen overflow-hidden text-white bg-background pt-[30dvh] md:pt-32 pb-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[105rem] px-[1.75rem]">
        <div className="flex flex-col justify-end items-stretch h-full pt-14 pb-0 md:pb-8 gap-y-8 md:gap-y-20 lg:gap-y-40">
          {/* Main Graphics Image at Top - Absolutely Positioned */}
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06589_Main%20graphics.svg"
            alt=""
            width={1000}
            height={600}
            className="absolute top-0 w-full h-auto mx-auto"
            loading="lazy"
          />

          {/* Content Section */}
          <div className="flex flex-col items-start gap-10 max-w-[94ch]">
            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-[3rem] md:text-[5rem] font-medium text-white tracking-[-4px] leading-tight"
              style={{
                opacity: 0,
                transform: 'translate3d(0px, 20px, 0px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              The universal memory API for the AI era
            </h1>

            {/* Bottom Section with Button and Paragraph */}
            <div
              ref={contentRef}
              className="flex flex-col items-start md:flex-row md:items-center gap-10 w-full max-w-[86ch]"
              style={{
                opacity: 0,
                transform: 'translate3d(0px, 20px, 0px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Button href="https://console.supermemory.ai/" isExternal showArrow size="large">
                Get supermemory<sup className="text-sm ml-1">TM</sup>
              </Button>

              {/* Paragraph */}
              <p className="text-lg text-white/80 leading-tight flex-1">
                Context engine for your app. Personalise LLMs for your users.
                <br /><br />
                Built for developers who ship.{' '}
                <a
                  href="https://docs.supermemory.ai/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  Start building
                </a>
                <sup className="text-sm ml-1">DOCS</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid Asset */}
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
        alt=""
        width={1680}
        height={800}
        className="absolute inset-x-0 top-0 bottom-auto w-[105rem] mx-auto pointer-events-none opacity-40 object-bottom"
        style={{ zIndex: 0, objectPosition: '50% 100%' }}
        loading="lazy"
      />

      {/* Hero Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, var(--background) 0%, transparent 35%, transparent 65%, var(--background) 100%)'
        }}
      />
    </section>
  );
}