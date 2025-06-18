'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { featureItems, bigFeature } from '@/lib/data/features';

gsap.registerPlugin(ScrollTrigger);

export default function Feature3() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="border-b border-[#e1e1e1] bg-[#efefef] pt-40 pb-40 relative overflow-hidden"
        >
            <div className="relative z-2 w-[105rem] max-w-[calc(100%-1.5rem)] md:max-w-[calc(100%-3.5rem)] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-6">
                    {/* Left Column - Header */}
                    <div className="flex flex-col relative z-10 lg:self-start">
                        <div className="text-xs text-[#4d4d4d] uppercase tracking-wide">
                            FEATURES&nbsp;&nbsp;•&nbsp;&nbsp;FEATURES&nbsp;&nbsp;•&nbsp;&nbsp;FEATURES
                        </div>
                        <div className="h-12"></div>
                        <div className="max-w-[32ch]">
                            <h2 className="text-5xl font-medium leading-none tracking-[-0.06em] text-black">
                                It just clicks with your stack
                            </h2>
                        </div>
                    </div>

                    {/* Right Column - Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-8 relative z-20 md:flex md:flex-col sm:flex sm:flex-col">
                        {/* First Row - Two Cards */}
                        <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-8">
                            {/* First Feature Item */}
                            <div className="flex">
                                <div className="w-full p-[1px] bg-[#e1e1e1] feature-clip-wrapper">
                                    <div className="bg-white w-full h-full flex flex-col justify-start items-start feature-clip-item p-6 pr-8 sm:p-12 sm:pr-16 lg:p-12 lg:pr-16">
                                        {/* Icon and optional logos */}
                                        <div className="flex flex-col md:flex-row items-center mb-12 gap-4">
                                            <Image
                                                src={featureItems[0].icon}
                                                alt=""
                                                width={72}
                                                height={72}
                                                className="w-[4.5rem] h-[4.5rem]"
                                            />
                                            {featureItems[0].logos && (
                                                <Image
                                                    src={featureItems[0].logos}
                                                    alt=""
                                                    width={120}
                                                    height={30}
                                                    className="h-[30px] w-auto"
                                                />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-6 max-w-[40ch]">
                                            <div className="text-xs text-[#4d4d4d] uppercase">
                                                {featureItems[0].category}
                                            </div>
                                            <h4 className="font-medium leading-tight text-black">
                                                {featureItems[0].title}
                                            </h4>
                                            <div className="text-base text-[#4d4d4d] leading-relaxed">
                                                {featureItems[0].description.split('\n').map((line, i) => (
                                                    <div key={i}>
                                                        {line}
                                                        {i < featureItems[0].description.split('\n').length - 1 && <br />}
                                                    </div>
                                                ))}
                                                {featureItems[0].link && (
                                                    <>
                                                        <br /><br />
                                                        <a
                                                            href={featureItems[0].link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline text-[#4d4d4d] hover:text-black transition-colors"
                                                        >
                                                            {featureItems[0].link.text}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Feature Item */}
                            <div className="flex">
                                <div className="w-full p-[1px] bg-[#e1e1e1] feature-clip-wrapper">
                                    <div className="bg-white w-full h-full flex flex-col justify-start items-start feature-clip-item p-6 pr-8 sm:p-12 sm:pr-16 lg:p-12 lg:pr-16">
                                        {/* Icon and optional logos */}
                                        <div className="flex flex-col md:flex-row items-center mb-12 gap-4">
                                            <Image
                                                src={featureItems[1].icon}
                                                alt=""
                                                width={72}
                                                height={72}
                                                className="w-[4.5rem] h-[4.5rem]"
                                            />
                                            {featureItems[1].logos && (
                                                <Image
                                                    src={featureItems[1].logos}
                                                    alt=""
                                                    width={120}
                                                    height={30}
                                                    className="h-[30px] w-auto"
                                                />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-6 max-w-[40ch]">
                                            <div className="text-xs text-[#4d4d4d] uppercase">
                                                {featureItems[1].category}
                                            </div>
                                            <h4 className="font-medium leading-tight text-black">
                                                {featureItems[1].title}
                                            </h4>
                                            <div className="text-base text-[#4d4d4d] leading-relaxed">
                                                {featureItems[1].description.split('\n').map((line, i) => (
                                                    <div key={i}>
                                                        {line}
                                                        {i < featureItems[1].description.split('\n').length - 1 && <br />}
                                                    </div>
                                                ))}
                                                {featureItems[1].link && (
                                                    <>
                                                        <br /><br />
                                                        <a
                                                            href={featureItems[1].link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline text-[#4d4d4d] hover:text-black transition-colors"
                                                        >
                                                            {featureItems[1].link.text}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row - Big Feature Item Spanning Full Width */}
                        <div className="flex w-full">
                            <div className="w-full p-[1px] bg-[#e1e1e1] feature-clip-wrapper bigger">
                                <div className="bg-white w-full h-full feature-clip-item bigger p-6 pr-8 sm:p-12 sm:pr-16 lg:p-12 lg:pr-16">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 h-full">
                                        {/* Left Side */}
                                        <div className="flex flex-col justify-between items-start h-full gap-12">
                                            <Image
                                                src={bigFeature.icon}
                                                alt=""
                                                width={72}
                                                height={72}
                                                className="w-[4.5rem] h-[4.5rem]"
                                            />
                                            <div className="flex flex-col gap-6 max-w-[40ch]">
                                                <div className="text-xs text-[#4d4d4d] uppercase">
                                                    {bigFeature.category}
                                                </div>
                                                <h4 className="text-2xl font-medium leading-tight text-black">
                                                    {bigFeature.title.replace(' ', '\n').split('\n').map((line, i) => (
                                                        <div key={i}>{line}</div>
                                                    ))}
                                                </h4>
                                                <p className="text-base text-[#4d4d4d] leading-relaxed">
                                                    {bigFeature.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="flex flex-col justify-center items-center h-full gap-10 text-center">
                                            <div className="max-w-xs">
                                                <div className="text-xs uppercase text-[#4d4d4d]">
                                                    {bigFeature.chart.title}{' '}
                                                    <span className="text-[#267bf1]">supermemory</span>{' '}
                                                    {bigFeature.chart.subtitle}
                                                </div>
                                            </div>
                                            <Image
                                                src={bigFeature.chart.image}
                                                alt="Performance comparison chart"
                                                width={400}
                                                height={300}
                                                className="w-full max-w-md h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Row - Two Cards */}
                        <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-8">
                            {/* Third Feature Item */}
                            <div className="flex">
                                <div className="w-full p-[1px] bg-[#e1e1e1] feature-clip-wrapper">
                                    <div className="bg-white w-full h-full flex flex-col justify-start items-start feature-clip-item p-6 pr-8 sm:p-12 sm:pr-16 lg:p-12 lg:pr-16">
                                        {/* Icon and optional logos */}
                                        <div className="flex flex-col md:flex-row items-center mb-12 gap-4">
                                            <Image
                                                src={featureItems[2].icon}
                                                alt=""
                                                width={72}
                                                height={72}
                                                className="w-[4.5rem] h-[4.5rem]"
                                            />
                                            {featureItems[2].logos && (
                                                <Image
                                                    src={featureItems[2].logos}
                                                    alt=""
                                                    width={120}
                                                    height={30}
                                                    className="h-[30px] w-auto"
                                                />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-6 max-w-[40ch]">
                                            <div className="text-xs text-[#4d4d4d] uppercase">
                                                {featureItems[2].category}
                                            </div>
                                            <h4 className="font-medium leading-tight text-black">
                                                {featureItems[2].title}
                                            </h4>
                                            <div className="text-base text-[#4d4d4d] tracking-[-0.03em] leading-[1.25]">
                                                {featureItems[2].description}
                                                {featureItems[2].link && (
                                                    <>
                                                        <br />
                                                        <a
                                                            href={featureItems[2].link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline text-[#4d4d4d] hover:text-black transition-colors"
                                                        >
                                                            {featureItems[2].link.text}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fourth Feature Item */}
                            <div className="flex">
                                <div className="w-full p-[1px] bg-[#e1e1e1] feature-clip-wrapper">
                                    <div className="bg-white w-full h-full flex flex-col justify-start items-start feature-clip-item p-6 pr-8 sm:p-12 sm:pr-16 lg:p-12 lg:pr-16">
                                        {/* Icon and optional logos */}
                                        <div className="flex flex-col md:flex-row items-center mb-12 gap-4">
                                            <Image
                                                src={featureItems[3].icon}
                                                alt=""
                                                width={72}
                                                height={72}
                                                className="w-[4.5rem] h-[4.5rem]"
                                            />
                                            {featureItems[3].logos && (
                                                <Image
                                                    src={featureItems[3].logos}
                                                    alt=""
                                                    width={120}
                                                    height={30}
                                                    className="h-[30px] w-auto"
                                                />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-6 max-w-[40ch]">
                                            <div className="text-xs text-[#4d4d4d] uppercase">
                                                {featureItems[3].category}
                                            </div>
                                            <h4 className="font-medium leading-tight text-black">
                                                {featureItems[3].title}
                                            </h4>
                                            <div className="text-base text-[#4d4d4d] tracking-[-0.03em] leading-[1.25]">
                                                {featureItems[3].description}
                                                {featureItems[3].link && (
                                                    <>
                                                        <br /><br />
                                                        <a
                                                            href={featureItems[3].link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="border-b border-[#4d4d4d] hover:text-black transition-colors"
                                                        >
                                                            {featureItems[3].link.text}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
                alt=""
                width={1680}
                height={800}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[105rem] h-auto opacity-2 pointer-events-none z-0"
            />
            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06569_big-symbol.svg"
                alt=""
                width={900}
                height={900}
                className="absolute bottom-0 left-0 z-0"
            />
        </section>
    );
}