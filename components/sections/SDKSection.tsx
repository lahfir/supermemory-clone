'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

const codeSnippets = {
    typescript: `npm install 'supermemory'`,
    python: `pip install supermemory`
};

export default function SDKSection() {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState<'typescript' | 'python'>('typescript');
    const sectionRef = useRef<HTMLElement>(null);
    const topHeaderRef = useRef<HTMLDivElement>(null);
    const mainWrapperRef = useRef<HTMLDivElement>(null);
    const codeBoxRef = useRef<HTMLDivElement>(null);

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
    }, []);

    // Flash animation when tab changes
    useEffect(() => {
        if (codeBoxRef.current) {
            gsap.fromTo(
                codeBoxRef.current,
                { opacity: 0.3, scale: 0.98 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                }
            );
        }
    }, [activeTab]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeSnippets[activeTab]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleTabChange = (tab: 'typescript' | 'python') => {
        setActiveTab(tab);
        setCopied(false); // Reset copied state when switching tabs
    };

    return (
        <section
            ref={sectionRef}
            className="relative text-white overflow-hidden bg-[var(--_super---primary)] mt-[4rem]"
        >
            {/* Container with z-index-2 */}
            <div className="relative z-[2] w-[105rem] max-w-[calc(100%-3.5rem)] bg-[var(--_super---primary)] mx-auto">
                <div ref={topHeaderRef} className="text-center mb-12 max-w-[44ch] mx-auto">
                    <div className="text-xs uppercase text-text-tertiary mb-6 tracking-wider opacity-0">
                        product • product • product
                    </div>
                </div>

                {/* SDK wrapper */}
                <div
                    ref={mainWrapperRef}
                    className="relative opacity-0 z-[1] w-full max-w-full mt-14 mx-auto p-4"
                >
                    {/* Gradient background */}
                    <div className="absolute inset-0 z-0 bg-[linear-gradient(#a4e8f5,#267ffa_61%,#1b335500)]" />

                    {/* Content wrapper with clippath */}
                    <div
                        className="relative z-[4] bg-border-primary rounded-3xl md:rounded-tl-[1.5rem] md:rounded-br-[1.5rem] md:rounded-bl-[1.5rem] p-px overflow-hidden md:[clip-path:url(/rounded-polygon-clip.svg#roundedPolygon)] md:[-webkit-clip-path:url(/rounded-polygon-clip.svg#roundedPolygon)]"
                    >
                        {/* Content */}
                        <div className="bg-[var(--_super---primary)] rounded-tl-[23px] rounded-br-[23px] rounded-bl-[23px] p-4 pr-4 md:p-12 md:pr-16 lg:p-20 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6 md:gap-16 lg:gap-8">
                            {/* Left content */}
                            <div className="flex flex-col gap-4 lg:gap-12 max-w-[46ch]">
                                <h2 className="text-3xl md:text-5xl font-medium leading-tight md:leading-none tracking-[-.04em] md:tracking-[-.06em] line-height-[1]">
                                    Add context to your<br />
                                    agentic apps with few<br />
                                    lines of code
                                </h2>
                                <p className="text-sm md:text-base text-text-dedede tracking-[-.02em] md:tracking-[-.03em] leading-[1.35] md:leading-[1.25] mb-0">
                                    Supermemory provides SDKs to make integration as simple as possible
                                </p>
                            </div>

                            {/* Right content */}
                            <div className="flex flex-col gap-4 lg:gap-12 items-center">
                                {/* Language tabs */}
                                <div className="flex self-center mb-4 bg-[#090b0e] rounded-[1.25rem] p-1 gap-1">
                                    <button
                                        onClick={() => handleTabChange('typescript')}
                                        className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ease-out cursor-pointer ${activeTab === 'typescript'
                                            ? 'bg-[#21252a] border border-[#383838] text-white'
                                            : 'bg-transparent border border-transparent text-[#b0b0b0] hover:text-white hover:bg-[#21252a]'
                                            }`}
                                    >
                                        <div>Typescript</div>
                                    </button>
                                    <button
                                        onClick={() => handleTabChange('python')}
                                        className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ease-out cursor-pointer ${activeTab === 'python'
                                            ? 'bg-[#21252a] border border-[#383838] text-white'
                                            : 'bg-transparent border border-transparent text-[#b0b0b0] hover:text-white hover:bg-[#21252a]'
                                            }`}
                                    >
                                        <div>Python</div>
                                    </button>
                                </div>

                                {/* Code box */}
                                <div
                                    ref={codeBoxRef}
                                    className="border border-border-primary rounded-[1.75rem] w-full max-w-[80ch] p-4 md:p-12 relative shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]"
                                    style={{ fontFamily: 'Menlo, Arial, sans-serif' }}
                                >
                                    {/* Code content */}
                                    <div className="text-xs sm:text-base lg:text-xl" style={{ overflowWrap: 'anywhere' }}>
                                        {activeTab === 'typescript' && (
                                            <>
                                                <span className="text-pink-500">npm</span> install <span className="bg-text-gradient-custom1 bg-clip-text text-transparent">&apos;supermemory&apos;</span>
                                            </>
                                        )}
                                        {activeTab === 'python' && (
                                            <>
                                                <span className="text-pink-500">pip</span> install <span className="bg-text-gradient-custom1 bg-clip-text text-transparent">supermemory</span>
                                            </>
                                        )}
                                    </div>

                                    {/* Copy button */}
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
                                    size="large"
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
    );
} 