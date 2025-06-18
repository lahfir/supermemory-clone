'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';
import { tabContents } from '@/lib/data/tabContent';

export default function Feature1() {
    const [activeTab, setActiveTab] = useState(0);
    const [copied, setCopied] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const tabContentRef = useRef<HTMLDivElement>(null);
    const gradient1Ref = useRef<HTMLDivElement>(null);
    const gradient2Ref = useRef<HTMLDivElement>(null);
    const gradient3Ref = useRef<HTMLDivElement>(null);
    const gradient4Ref = useRef<HTMLDivElement>(null);
    const tabIndicatorRef = useRef<HTMLDivElement>(null);
    const tabButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const tabPanelsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Set refs for tab buttons and panels
    const setTabButtonRef = (index: number) => (el: HTMLButtonElement | null) => {
        tabButtonsRef.current[index] = el;
    };

    const setTabPanelRef = (index: number) => (el: HTMLDivElement | null) => {
        tabPanelsRef.current[index] = el;
    };

    useGSAP(() => {
        // Header animation
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current.children,
                { y: 50, opacity: 0 },
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

        // Wrapper animation
        if (wrapperRef.current) {
            gsap.fromTo(
                wrapperRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        // Gradient columns scroll animations with proper y transform
        // 1st gradient: opposite direction (scroll down = move up)
        if (gradient1Ref.current) {
            gsap.fromTo(
                gradient1Ref.current,
                { y: '0%' },
                {
                    y: '-77.138%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        }

        // 2nd gradient: same direction (scroll down = move down)
        if (gradient2Ref.current) {
            gsap.fromTo(
                gradient2Ref.current,
                { y: '0%' },
                {
                    y: '77.138%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        }

        // 3rd gradient: opposite direction (same as 1st)
        if (gradient3Ref.current) {
            gsap.fromTo(
                gradient3Ref.current,
                { y: '0%' },
                {
                    y: '-77.138%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        }

        // 4th gradient: same direction (same as 2nd)
        if (gradient4Ref.current) {
            gsap.fromTo(
                gradient4Ref.current,
                { y: '0%' },
                {
                    y: '77.138%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    // Tab indicator animation with proper centering
    useEffect(() => {
        const activeButton = tabButtonsRef.current[activeTab];
        if (activeButton && tabIndicatorRef.current) {
            // Wait for DOM to update
            requestAnimationFrame(() => {
                const buttonRect = activeButton.getBoundingClientRect();
                // Get the tab buttons container (parent of the button), not the main container
                const tabButtonsContainer = activeButton.parentElement;
                const mainContainer = tabButtonsContainer?.parentElement;

                if (tabButtonsContainer && mainContainer) {
                    const containerRect = mainContainer.getBoundingClientRect();

                    // Calculate horizontal position relative to the main container
                    const relativeLeft = buttonRect.left - containerRect.left;
                    const width = buttonRect.width;

                    // Calculate vertical position relative to the main container
                    const relativeTop = buttonRect.top - containerRect.top;
                    const height = buttonRect.height;

                    // Update the indicator position and size
                    gsap.set(tabIndicatorRef.current, {
                        left: relativeLeft,
                        top: relativeTop,
                        width: width,
                        height: height
                    });

                    // Then animate it smoothly
                    gsap.to(tabIndicatorRef.current, {
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
        }
    }, [activeTab]);

    // Initialize indicator position on mount
    useEffect(() => {
        if (tabButtonsRef.current[0] && tabIndicatorRef.current) {
            requestAnimationFrame(() => {
                const activeButton = tabButtonsRef.current[activeTab];
                const tabButtonsContainer = activeButton?.parentElement;
                const mainContainer = tabButtonsContainer?.parentElement;

                if (activeButton && tabButtonsContainer && mainContainer) {
                    const buttonRect = activeButton.getBoundingClientRect();
                    const containerRect = mainContainer.getBoundingClientRect();

                    const relativeLeft = buttonRect.left - containerRect.left;
                    const relativeTop = buttonRect.top - containerRect.top;
                    const width = buttonRect.width;
                    const height = buttonRect.height;

                    gsap.set(tabIndicatorRef.current, {
                        left: relativeLeft,
                        top: relativeTop,
                        width: width,
                        height: height,
                        opacity: 1
                    });
                }
            });
        }
    }, [activeTab]);

    const handleTabChange = (newTab: number) => {
        if (newTab === activeTab) return;

        const currentPanel = tabPanelsRef.current[activeTab];
        const newPanel = tabPanelsRef.current[newTab];

        // Only animate the content panels, not the container
        if (currentPanel && newPanel) {
            // Create timeline for smooth tab transition
            const tl = gsap.timeline();

            // Fade out current panel content only
            tl.to(currentPanel.querySelector('.tab-content'), {
                opacity: 0,
                y: 10,
                duration: 0.15,
                ease: 'power2.in'
            });

            // Change active tab
            tl.call(() => setActiveTab(newTab));

            // Fade in new panel content only
            tl.fromTo(newPanel.querySelector('.tab-content'),
                { opacity: 0, y: -10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: 'power2.out'
                }
            );
        } else {
            // Fallback to simple state change if refs aren't available
            setActiveTab(newTab);
        }
    };

    const handleCopy = async () => {
        try {
            const code = tabContents[activeTab].content.code;
            await navigator.clipboard.writeText(code);
            setCopied(true);

            // Animate only the copy button, not the container
            const button = document.querySelector('.copy-button');
            if (button) {
                gsap.to(button, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            }

            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-56 relative overflow-hidden bg-[#1c2026] text-white"
        >
            <div className="w-[105rem] max-w-[calc(100%-3.5rem)] mx-auto relative z-[2]">
                <div
                    ref={wrapperRef}
                    className="flex flex-col justify-start items-center"
                >
                    {/* Header Section */}
                    <div className="text-center mb-16 max-w-[44ch]">
                        <div
                            ref={headerRef}
                            className="text-xs uppercase text-[#4d4d4d] mb-6 tracking-wider"
                        >
                            FEATURES&nbsp;&nbsp;•&nbsp;&nbsp;FEATURES&nbsp;&nbsp;•&nbsp;FEATURES
                        </div>
                        <h2 className="font-heading tracking-[-0.06em] mt-5 text-[32px] leading-[36px] md:text-3xl md:leading-none text-white font-medium">
                            Unlock the Full Potential of Your Data
                        </h2>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-[1fr_2fr_2fr_1fr] gap-0 w-full h-[500px] relative">
                        {/* Column 1 - Gradient animates opposite */}
                        <div className="h-full relative overflow-hidden flex flex-col justify-end items-stretch">
                            <div
                                ref={gradient1Ref}
                                className="absolute inset-0 w-full h-[200%]"
                                style={{
                                    willChange: 'transform',
                                    transformStyle: 'preserve-3d',
                                    background: 'linear-gradient(180deg, #a4e8f5 0%, #267ffa 61%, rgba(27, 51, 85, 0) 100%)'
                                }}
                            />
                        </div>

                        {/* Column 2 - Gradient animates same direction */}
                        <div className="h-full relative overflow-hidden flex flex-col justify-start items-stretch">
                            <div
                                ref={gradient2Ref}
                                className="absolute inset-0 w-full h-[200%]"
                                style={{
                                    willChange: 'transform',
                                    transformStyle: 'preserve-3d',
                                    background: 'linear-gradient(180deg, #a4e8f5 0%, #267ffa 61%, rgba(27, 51, 85, 0) 100%)'
                                }}
                            />
                        </div>

                        {/* Column 3 - Gradient animates opposite (same as 1st) */}
                        <div className="h-full relative overflow-hidden flex flex-col justify-end items-stretch">
                            <div
                                ref={gradient3Ref}
                                className="absolute inset-0 w-full h-[200%]"
                                style={{
                                    willChange: 'transform',
                                    transformStyle: 'preserve-3d',
                                    background: 'linear-gradient(180deg, #a4e8f5 0%, #267ffa 61%, rgba(27, 51, 85, 0) 100%)'
                                }}
                            />
                        </div>

                        {/* Column 4 - Gradient animates same direction (same as 2nd) */}
                        <div className="h-full relative overflow-hidden flex flex-col justify-start items-stretch">
                            <div
                                ref={gradient4Ref}
                                className="absolute inset-0 w-full h-[200%]"
                                style={{
                                    willChange: 'transform',
                                    transformStyle: 'preserve-3d',
                                    background: 'linear-gradient(180deg, #a4e8f5 0%, #267ffa 61%, rgba(27, 51, 85, 0) 100%)'
                                }}
                            />
                        </div>

                        {/* Main content grid item - moved down to avoid title overlap */}
                        <div
                            ref={tabContentRef}
                            className="
                absolute
                top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-[90vw] max-w-[98vw] min-w-[0]
                sm:w-[calc(60%+3rem)]
                z-10
              "
                            style={{ height: 'auto', minHeight: '420px' }}
                        >
                            {/* Content container with perfect spacing */}
                            <div className="bg-white border border-[#e1e1e1] rounded-xl w-full relative overflow-hidden shadow-xl">
                                {/* Tabs container */}
                                <div className="flex flex-col justify-start items-start">
                                    {/* Tab Navigation with properly centered indicator */}
                                    <div className="relative w-full">
                                        <div className="
                      relative flex gap-1 bg-[#efefef] rounded-[1.25rem] justify-between items-center
                      mt-4 mb-4 ml-2 mr-2 p-1
                      sm:ml-6 sm:mr-6
                    ">
                                            {/* Animated tab indicator */}
                                            <div
                                                ref={tabIndicatorRef}
                                                className="absolute bg-gray-900 rounded-full opacity-0"
                                                style={{
                                                    width: '0px',
                                                    height: '0px',
                                                    top: '0px',
                                                    left: '0px'
                                                }}
                                            />

                                            {/* Tab buttons container */}
                                            <div className="flex gap-1">
                                                {tabContents.map((tab, index) => (
                                                    <button
                                                        key={index}
                                                        ref={setTabButtonRef(index)}
                                                        onClick={() => handleTabChange(index)}
                                                        className={`
                              relative z-10 px-4 py-2 sm:px-6 sm:py-3
                              rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                              ${activeTab === index
                                                                ? 'text-white'
                                                                : 'text-gray-700 hover:text-gray-900'
                                                            }
                            `}
                                                        role="tab"
                                                        aria-selected={activeTab === index}
                                                        aria-controls={`w-tabs-0-data-w-pane-${index}`}
                                                        id={`w-tabs-0-data-w-tab-${index}`}
                                                    >
                                                        <div>{tab.label}</div>
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Copy Button - moved to tab bar for better accessibility */}
                                            <button
                                                onClick={handleCopy}
                                                className="copy-button relative z-10 flex gap-2 bg-white justify-center items-center 
                                 py-2 px-2 sm:px-4 text-gray-700 hover:text-gray-900 
                                 transition-all duration-200 cursor-pointer rounded-full 
                                 hover:bg-gray-50 shadow-sm border border-gray-200
                                 text-xs sm:text-sm font-medium
                                 w-9 h-9 sm:w-auto sm:h-auto sm:min-w-[90px]"
                                                title="Copy code to clipboard"
                                            >
                                                <div className="w-4 h-4 flex-shrink-0">
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
                                                <span className="whitespace-nowrap hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Tab Content with proper content display */}
                                    <div className="border-t border-[#e1e1e1] w-full relative">
                                        {tabContents.map((tab, index) => (
                                            <div
                                                key={index}
                                                ref={setTabPanelRef(index)}
                                                className={`${activeTab === index ? 'block' : 'hidden'
                                                    }`}
                                                role="tabpanel"
                                                aria-labelledby={`w-tabs-0-data-w-tab-${index}`}
                                                id={`w-tabs-0-data-w-pane-${index}`}
                                            >
                                                <div className="tab-content p-3 sm:p-6">
                                                    <pre
                                                        className="text-xs sm:text-sm overflow-x-auto block bg-[#fefefe] text-[#545454] rounded-lg"
                                                        style={{
                                                            fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
                                                            padding: '1.25rem',
                                                            margin: 0,
                                                            lineHeight: '1.6'
                                                        }}
                                                    >
                                                        <code
                                                            className="language-javascript"
                                                            style={{ whiteSpace: 'pre' }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: tab.content.html || tab.content.code
                                                            }}
                                                        />
                                                    </pre>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Grid Asset */}
            <Image
                src="/features-grid.svg"
                alt=""
                width={1680}
                height={800}
                className="absolute inset-x-0 bottom-0 w-full h-auto pointer-events-none opacity-60 z-0"
                loading="lazy"
            />
        </section>
    );
}