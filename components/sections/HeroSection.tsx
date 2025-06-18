'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Image animation
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { y: 0, opacity: 0, scale: 1 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
      );
    }

    // Heading animation
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
    }

    // Content animation
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-row justify-start items-stretch min-h-0 md:min-h-screen overflow-hidden text-white bg-background pt-[30dvh] md:pt-32 pb-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[105rem] px-[1.75rem]">
        <div className="relative flex flex-col justify-end items-stretch h-full pt-14 pb-0 md:pb-8 gap-y-8 md:gap-y-20 lg:gap-y-40">
          {/* Main Graphics Image at Top - Absolutely Positioned */}
          <Image
            ref={imageRef}
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06589_Main%20graphics.svg"
            alt=""
            width={1000}
            height={600}
            className="absolute top-0 inset-x-0 w-full h-auto opacity-0"
            loading="lazy"
          />

          {/* Content Section */}
          <div className="flex flex-col items-start gap-10 max-w-[94ch]">
            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-[3rem] md:text-[5rem] font-medium text-white tracking-[-4px] leading-tight opacity-0"
            >
              The universal memory API for the AI era
            </h1>

            {/* Bottom Section with Button and Paragraph */}
            <div
              ref={contentRef}
              className="flex flex-col items-start md:flex-row md:items-center gap-10 w-full max-w-[86ch] opacity-0"
            >
              <Button href="https://console.supermemory.ai/" isExternal showArrow size="large">
                Get supermemory<sup className="text-sm ml-1">TM</sup>
              </Button>

              {/* Paragraph */}
              <p className="text-whiteleading-[1.25] flex-1 font-size-[1rem] mb-0">
                Context engine for your app. Personalise LLMs for your users.
                <br /><br />
                Built for developers who ship.{' '}
                <a
                  href="https://docs.supermemory.ai/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-white hover:text-white hover:border-b-0 transition-colors"
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