'use client';

import { useRef } from 'react';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import { Testimonial } from '@/types';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';
import ProductHuntIcon from '@/icons/testimonials/ProductHuntIcon';
import GithubIcon from '@/icons/testimonials/GithubIcon';
import DynamicNumber from '@/components/ui/DynamicNumber';

const testimonials: Testimonial[] = [
  {
    logo: <ProductHuntIcon />,
    description: '#1 Product of the day at Product hunt',
    logoAlt: 'Product Hunt',
  },
  {
    logo: <GithubIcon />,
    description: 'Starred by over 9,000 users on Github',
    logoAlt: 'GitHub',
    marginTop: 'mt-[4.875rem]',
  },
  {
    logo: (
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06543_Flow%20logo.png"
        alt="Flow"
        width={64}
        height={64}
        className="w-16 h-16 object-contain"
      />
    ),
    description: 'Flow uses supermemory to build the cursor for writing',
    logoAlt: 'Flow',
    marginTop: 'mt-[6.875rem]',
  },
  {
    logo: (
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06544_medtech%20vendors%20logo.png"
        alt="Medtech Vendors"
        width={120}
        height={32}
        className="w-[7.5rem] h-8 object-contain"
      />
    ),
    description: 'Medtech Vendors uses supermemory to search through 500k vendors',
    logoAlt: 'Medtech Vendors',
    marginTop: 'mt-[4.875rem]',
  },
  {
    logo: (
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06542_mixus-logo-primary-horizontal-black%201.png"
        alt="Mixus"
        width={122}
        height={38}
        className="w-[7.625rem] h-[2.375rem] object-contain"
      />
    ),
    description: 'Mixus uses Supermemory to power co-intelligence Agentic platform',
    logoAlt: 'Mixus',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
      className="relative text-white overflow-hidden bg-super-primary pt-[13.75rem] pb-[15rem]"
    >
      <Container className="relative z-10 flex flex-col items-center">
        <div
          ref={headerRef}
          className="text-center flex flex-col items-center max-w-[68rem] w-full"
        >
          <h4 className="text-3xl md:text-4xl font-bold mb-4 max-w-[40ch]">
            Trusted by Open Source,<br /> enterprise, and more than
          </h4>
          <div
            className="opacity-0 mt-4 flex flex-col items-center justify-center flex-none w-full h-40 lg:w-auto lg:h-60"
          >
            <DynamicNumber />
          </div>
          <h4 className="text-3xl md:text-4xl font-bold mt-4">of you</h4>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-5 gap-x-20 gap-y-20 w-full mt-16 max-w-6xl"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-7 opacity-0 ${testimonial.marginTop || ''}`}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {testimonial.logo}
              </div>
              <p className="text-xs uppercase text-white text-center">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
        alt=""
        width={1680}
        height={800}
        className="absolute inset-x-0 top-0 bottom-auto w-[105rem] mx-auto pointer-events-none opacity-40 object-bottom z-0"
        style={{ objectPosition: '50% 100%' }}
        loading="lazy"
      />
    </section>
  );
}