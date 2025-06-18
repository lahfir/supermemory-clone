'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

const codeSnippet = `import OpenAI from "openai"

const client = new OpenAI({  
  baseUrl: "https://api.supermemory.ai/v3/https://api.openai.com/v1/"
})`;


export default function SolutionsSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const potentialWrapperRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const gradient1Ref = useRef<HTMLDivElement>(null);
  const gradient2Ref = useRef<HTMLDivElement>(null);
  const gradient3Ref = useRef<HTMLDivElement>(null);
  const gradient4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Top header animation
    if (topHeaderRef.current) {
      gsap.fromTo(
        topHeaderRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: topHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Main wrapper animation
    if (mainWrapperRef.current) {
      gsap.fromTo(
        mainWrapperRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mainWrapperRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Potential section animation
    if (potentialWrapperRef.current) {
      gsap.fromTo(
        potentialWrapperRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: potentialWrapperRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Tab content animation
    if (tabContentRef.current) {
      gsap.fromTo(
        tabContentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tabContentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Gradient columns scroll animations
    if (gradient1Ref.current) {
      gsap.fromTo(
        gradient1Ref.current,
        { y: '0%' },
        {
          y: '-99.914%',
          ease: 'none',
          scrollTrigger: {
            trigger: potentialWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    if (gradient2Ref.current) {
      gsap.fromTo(
        gradient2Ref.current,
        { y: '0%' },
        {
          y: '99.914%',
          ease: 'none',
          scrollTrigger: {
            trigger: potentialWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    if (gradient3Ref.current) {
      gsap.fromTo(
        gradient3Ref.current,
        { y: '0%' },
        {
          y: '-99.914%',
          ease: 'none',
          scrollTrigger: {
            trigger: potentialWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    if (gradient4Ref.current) {
      gsap.fromTo(
        gradient4Ref.current,
        { y: '0%' },
        {
          y: '99.914%',
          ease: 'none',
          scrollTrigger: {
            trigger: potentialWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      {/* First Solutions Section */}
      <section
        ref={sectionRef}
        className="relative text-white overflow-hidden bg-[var(--_super---primary)] mt-[4rem]"
      >
        {/* Container with z-index-2 */}
        <div className="relative z-[2] w-[105rem] max-w-[calc(100%-3.5rem)] bg-[var(--_super---primary)] mx-auto">
          <div ref={topHeaderRef} className="text-center mb-12 max-w-[44ch] mx-auto">
            <div className="text-xs uppercase text-text-tertiary mb-6 tracking-wider opacity-0">
              solution • solution • solution
            </div>
            <p className="text-base text-text-dedede max-w-3xl mx-auto opacity-0 tracking-[-.03em]">
              We&apos;ve seen what it&apos;s like to build memory infrastructure the hard way —
              so we built supermemory to make it disappear.
            </p>
          </div>

          {/* home-solutions-wrapper */}
          <div
            ref={mainWrapperRef}
            className="relative opacity-0 z-[1] w-full max-w-full mt-14 mx-auto p-4"
          >
            {/* home-solutions-gradient */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(#a4e8f5,#267ffa_61%,#1b335500)]" />

            {/* home-solutions-content_wrapper */}
            <div
              className="relative z-[4] bg-border-primary rounded-3xl md:rounded-tl-[1.5rem] md:rounded-br-[1.5rem] md:rounded-bl-[1.5rem] p-px overflow-hidden md:[clip-path:url(/rounded-polygon-clip.svg#roundedPolygon)] md:[-webkit-clip-path:url(/rounded-polygon-clip.svg#roundedPolygon)]"
            >
              {/* home-solutions-content */}
              <div className="bg-[var(--_super---primary)] rounded-tl-[23px] rounded-br-[23px] rounded-bl-[23px] p-4 pr-4 md:p-12 md:pr-16 lg:p-20 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6 md:gap-16 lg:gap-8">
                {/* home-solutions-content_left */}
                <div className="flex flex-col gap-4 lg:gap-12 max-w-[46ch]">
                  <div className="text-xs uppercase text-text-tertiary tracking-wider">
                    product • product • product
                  </div>
                  <h2 className="text-3xl md:text-5xl font-medium leading-tight md:leading-none tracking-[-.04em] md:tracking-[-.06em] line-height-[1]">
                    Edit one line.<br />
                    Get longer threads,<br />
                    cost savings<br />
                    memory.
                  </h2>
                  <p className="text-sm md:text-base text-text-dedede tracking-[-.02em] md:tracking-[-.03em] leading-[1.35] md:leading-[1.25] mb-0">
                    Just add{' '}
                    <a
                      href="http://api.supermemory.ai/v3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                    >
                      <span className="bg-text-gradient-custom1 bg-clip-text text-transparent">
                        api.supermemory.ai/v3
                      </span>
                    </a>{' '}
                    to your OpenAI base URL — and get automatic long-term
                    context across conversations.
                  </p>
                </div>

                {/* home-solutions-content_right */}
                <div className="flex flex-col gap-4 lg:gap-12 items-center">
                  {/* home-solutions-content_right-box */}
                  <div className="border border-border-primary rounded-[1.75rem] w-full max-w-[80ch] p-4 md:p-12 relative shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]" style={{ fontFamily: 'Menlo, Arial, sans-serif' }}>
                    {/* boxelement-content */}
                    <div className="text-xs sm:text-base lg:text-xl" style={{ overflowWrap: 'anywhere' }}>
                      <span className="text-pink-500">import</span> OpenAI <span className="text-pink-500">from</span> <span className="text-[#0aa49f]">&quot;openai&quot;</span><br />
                      <span className="text-pink-500"><br />const</span> <span className="text-blue-400">client</span> <span className="text-pink-500">= new</span> <span className="text-purple-400">OpenAI</span>{'({ '}&nbsp;<br />
                      &nbsp;&nbsp;baseUrl<span className="text-pink-500">:</span><span className="text-[#0aa49f]">&nbsp;&quot;https://api.supermemory.ai/v3/https://api.openai.com/v1/&quot;</span><br />
                      {'})'}
                    </div>

                    {/* home-solutions-button */}
                    <div className="absolute top-3 right-4">
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 bg-transparent justify-end p-1 px-2"
                      >
                        <div className="w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 16 17"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                            role="img"
                          >
                            <path
                              d="M13.334 5.83325H6.66732C5.93094 5.83325 5.33398 6.43021 5.33398 7.16659V13.8333C5.33398 14.5696 5.93094 15.1666 6.66732 15.1666H13.334C14.0704 15.1666 14.6673 14.5696 14.6673 13.8333V7.16659C14.6673 6.43021 14.0704 5.83325 13.334 5.83325Z"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.66732 11.1666C1.93398 11.1666 1.33398 10.5666 1.33398 9.83325V3.16659C1.33398 2.43325 1.93398 1.83325 2.66732 1.83325H9.33398C10.0673 1.83325 10.6673 2.43325 10.6673 3.16659"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                          {copied ? 'Copied!' : 'Copy'}
                        </div>
                      </button>
                    </div>
                  </div>

                  <Button
                    href="https://docs.supermemory.ai/"
                    isExternal
                    size="normal"
                    className="w-full md:w-[50%] text-white bg-transparent md:text-lg"
                  >
                    Start building <sup className="text-xs">DOCS</sup>
                  </Button>
                </div>
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--_super---primary)] pointer-events-none" />
      </section>
    </>
  );
}