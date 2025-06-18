'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ErrorIcon } from '@/icons/ErrorIcon';
import { commandGridItems } from '@/lib/data/commandGridItems';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

export default function ContextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Grid container animation
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative block overflow-hidden text-white bg-background pt-[13.75rem] pb-[15rem]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[105rem] px-[1.75rem]">
        {/* Header Content */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center w-full max-w-[68rem] mx-auto gap-12"
        >
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0658a_gradient-ish-symbol.svg"
            alt=""
            width={128}
            height={96}
            className="w-[8rem] h-[6rem] -mb-4 opacity-0"
            loading="lazy"
          />
          <h2 className="text-white text-[2.5rem] sm:text-[5rem] font-medium tracking-[-4px] pt-0 pl-0 leading-none opacity-0">
            Context<br />is everything
          </h2>
          <div className="max-w-[22ch] opacity-0">
            <p className="text-base text-white tracking-[-0.03em]">
              Without it, even the smartest AI is just an expensive chatbot
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <div ref={gridRef} className="mt-[7.5rem] flex flex-col items-center opacity-0">
          {/* Horizontal Border Image */}
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06596_HorizontalBorder.png"
            alt=""
            width={880}
            height={20}
            className="w-full max-w-[55rem] h-auto"
            loading="lazy"
          />

          {/* Grid Inner Wrapper */}
          <div className="relative w-full overflow-clip pt-8 pb-16">
            {/* Left and Right Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1c2026] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1c2026] to-transparent z-[100]" />

            {/* Scrolling Grid */}
            <div
              className="flex gap-4 animate-marquee"
              style={{
                width: 'max-content',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Duplicate the items to create seamless loop */}
              {[...commandGridItems, ...commandGridItems].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-none w-80 p-8 gap-8 rounded-[1.75rem] bg-[#21252a] shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]"
                >
                  <div className="text-white font-mono text-base">{item.command}</div>
                  <div className="flex flex-col gap-2">
                    {item.errors.map((error, errorIndex) => (
                      <div key={errorIndex} className="flex items-center gap-2">
                        <ErrorIcon type={error.type as 'error' | 'warning'} />
                        <div className="text-xs text-gray-400 uppercase font-medium leading-relaxed">
                          {error.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid Asset */}
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
        alt=""
        fill
        className="absolute inset-0 object-cover opacity-20"
        loading="lazy"
      />

      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,var(--background),transparent_44%),linear-gradient(to_bottom,var(--background),transparent)]" />
    </section>
  );
}