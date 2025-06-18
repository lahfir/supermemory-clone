'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { featuresData } from '@/lib/data/features';

gsap.registerPlugin(ScrollTrigger);

export default function Feature2() {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const gradientWrapperRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const items = itemsRef.current.filter(Boolean);
        const gradientWrappers = gradientWrapperRef.current.filter(Boolean);

        if (items.length === 0 || gradientWrappers.length === 0) return;

        // Set initial inactive state for all items
        items.forEach((item) => {
            if (item) {
                item.style.backgroundColor = '#efefef';
                const numberText = item.querySelector('[data-number]') as HTMLElement;
                const titleText = item.querySelector('[data-title]') as HTMLElement;
                if (numberText) numberText.style.opacity = '0.25';
                if (titleText) titleText.style.opacity = '0.25';
            }
        });

        // Add no-gradient class to all gradient wrappers initially
        gradientWrappers.forEach((wrapper) => {
            if (wrapper) {
                wrapper.classList.add('no-gradient');
            }
        });

        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const triggerLine = viewportHeight * 0.55;

            items.forEach((item, index) => {
                if (item) {
                    const rect = item.getBoundingClientRect();
                    const itemTop = rect.top;
                    const gradientWrapper = gradientWrappers[index];

                    if (itemTop <= triggerLine && itemTop >= 0) {
                        // Active state
                        item.style.backgroundColor = '#fff';
                        const numberText = item.querySelector('[data-number]') as HTMLElement;
                        const titleText = item.querySelector('[data-title]') as HTMLElement;
                        if (numberText) numberText.style.opacity = '1';
                        if (titleText) titleText.style.opacity = '1';

                        // Remove no-gradient
                        if (gradientWrapper) {
                            gradientWrapper.classList.remove('no-gradient');
                        }
                    } else {
                        // Inactive state
                        item.style.backgroundColor = '#efefef';
                        const numberText = item.querySelector('[data-number]') as HTMLElement;
                        const titleText = item.querySelector('[data-title]') as HTMLElement;
                        if (numberText) numberText.style.opacity = '0.25';
                        if (titleText) titleText.style.opacity = '0.25';

                        // Add no-gradient
                        if (gradientWrapper) {
                            gradientWrapper.classList.add('no-gradient');
                        }
                    }
                }
            });
        };

        // Initial call and scroll listener
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="border-b border-[#e1e1e1] bg-[#efefef] pt-20 pb-20 lg:pt-40 lg:pb-40 relative overflow-hidden"
        >
            {/* Container with z-index */}
            <div className="w-full max-w-[calc(100%-1.5rem)] lg:w-[105rem] lg:max-w-[calc(100%-3.5rem)] mx-auto relative z-[2]">
                {/* Home features wrapper */}
                <div className="flex flex-col relative z-[1]">
                    {/* Home features container - header section */}
                    <div className="px-4 lg:px-10">
                        {/* Features text */}
                        <div className="text-[10px] lg:text-xs text-[#4d4d4d] uppercase">
                            FEATURES&nbsp;&nbsp;•&nbsp;&nbsp;FEATURES&nbsp;&nbsp;•&nbsp;FEATURES
                        </div>

                        {/* Spacer 24px mobile, 48px desktop */}
                        <div className="h-6 lg:h-12"></div>

                        {/* Main heading */}
                        <div className="max-w-[60ch]">
                            <h2 className="text-2xl lg:text-4xl font-medium leading-none tracking-[-0.06em] m-0 text-black">
                                Build the memory layer your product deserves
                            </h2>
                        </div>

                        {/* Spacer 44px mobile, 88px desktop */}
                        <div className="h-11 lg:h-[5.5rem]"></div>
                    </div>

                    {/* Home features list */}
                    <div className="flex flex-col gap-3 lg:gap-6">
                        {featuresData.map((feature, index) => (
                            <div
                                key={index}
                                ref={(el) => { gradientWrapperRef.current[index] = el; }}
                                className="feature-gradient-wrapper [clip-path:polygon(0_0,92.5%_0%,100%_20%,100%_70%,100%_100%,0_100%,0%_70%,0%_30%)] lg:[clip-path:polygon(0_0,92.5%_0%,100%_40%,100%_70%,100%_100%,0_100%,0%_70%,0%_30%)] bg-gradient-to-r from-[#a4e8f5] via-[#94c6ff] via-[14%] to-[#2782ff] to-[66%] pt-px pb-px pr-px text-black"
                            >
                                <div
                                    ref={(el) => { itemsRef.current[index] = el; }}
                                    className="[clip-path:polygon(0_0,92.5%_0%,100%_20%,100%_70%,100%_100%,0_100%,0%_70%,0%_30%)] lg:[clip-path:polygon(0_0,92.5%_0%,100%_40%,100%_70%,100%_100%,0_100%,0%_70%,0%_30%)] bg-white flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-end gap-6 lg:gap-16 p-6 lg:p-[5.5rem_4rem_5.5rem_2.5rem] transition-colors duration-[250ms] ease relative"
                                >
                                    {/* Mobile: Header with number and logo */}
                                    <div className="flex lg:hidden items-center gap-4 mb-2">
                                        {/* Number */}
                                        <div
                                            data-number
                                            className="text-2xl leading-none font-medium"
                                        >
                                            {feature.number}
                                        </div>

                                        {/* Logo */}
                                        <div className="flex flex-col justify-center items-center flex-none">
                                            <Image
                                                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0655e_logo-border.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-auto h-12"
                                            />
                                        </div>
                                    </div>

                                    {/* Desktop: Left content */}
                                    <div className="hidden lg:flex flex-none justify-start items-center gap-10">
                                        {/* Number */}
                                        <div
                                            data-number
                                            className="text-[2rem] leading-none font-medium"
                                        >
                                            {feature.number}
                                        </div>

                                        {/* Logo */}
                                        <div className="flex flex-col justify-center items-center flex-none">
                                            <Image
                                                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0655e_logo-border.svg"
                                                alt=""
                                                width={80}
                                                height={80}
                                                className="w-auto h-20"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-center items-start gap-6 w-[35ch] max-w-[35ch]">
                                            {/* Subtitle */}
                                            <div className="text-xs uppercase text-[#4d4d4d]">
                                                {feature.subtitle}
                                            </div>

                                            {/* Title */}
                                            <h4
                                                data-title
                                                className="text-[2rem] font-medium leading-none tracking-[-0.06em] mt-0 mb-0"
                                                dangerouslySetInnerHTML={{ __html: feature.title }}
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile: Content section */}
                                    <div className="flex flex-col lg:hidden gap-3">
                                        {/* Subtitle */}
                                        <div className="text-[10px] uppercase text-[#4d4d4d]">
                                            {feature.subtitle}
                                        </div>

                                        {/* Title */}
                                        <h4
                                            data-title
                                            className="text-xl font-medium leading-tight tracking-[-0.06em] mt-0 mb-0"
                                            dangerouslySetInnerHTML={{ __html: feature.title }}
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-none lg:max-w-[40ch]">
                                        <p className="tracking-[-0.03em] text-sm lg:text-base leading-normal m-0">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid background asset */}
            <Image
                src="/features-grid.svg"
                alt=""
                width={1680}
                height={800}
                className="absolute inset-x-0 top-0 z-0 opacity-40 pointer-events-none object-[50%_100%] w-[105rem] mx-auto"
            />

            <style jsx>{`
        .feature-gradient-wrapper.no-gradient {
          background-color: #e1e1e1;
          background-image: none;
          padding-left: 1px;
        }
      `}</style>
        </section>
    );
}