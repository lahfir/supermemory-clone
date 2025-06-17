'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Blog', href: 'https://supermemory.ai/blog', isExternal: true },
  { label: 'Docs', href: 'https://docs.supermemory.ai/introduction', isExternal: true },
  { label: 'Pricing', href: '/pricing', isExternal: false },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 20 21"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    role="img"
    className="icon-embed-xxsmall text-color-inherit"
  >
    <g clipPath="url(#Image_clip0-6288-1112)">
      <g clipPath="url(#Image_clip1-6288-1112)">
        <path d="M9.99711 0.916996C7.62311 0.917996 5.32711 1.749 3.51911 3.261C1.71811 4.761 0.515107 6.858 0.129107 9.17C-0.250893 11.475 0.216107 13.841 1.44311 15.829C2.68311 17.834 4.59211 19.334 6.83311 20.065C7.33111 20.156 7.51811 19.852 7.51811 19.593C7.51811 19.335 7.50811 18.585 7.50411 17.765C4.72311 18.359 4.13411 16.605 4.13411 16.605C3.68111 15.465 3.02511 15.166 3.02511 15.166C2.11811 14.558 3.09311 14.569 3.09311 14.569C4.09811 14.639 4.62611 15.583 4.62611 15.583C5.51711 17.085 6.96611 16.65 7.53611 16.396C7.62611 15.76 7.88611 15.327 8.17211 15.082C5.95011 14.834 3.61511 13.992 3.61511 10.227C3.60211 9.247 3.97211 8.301 4.64511 7.589C4.54211 7.342 4.19911 6.343 4.74211 4.986C4.74211 4.986 5.58211 4.722 7.49211 5.993C9.13311 5.552 10.8601 5.552 12.5011 5.993C14.4101 4.723 15.2481 4.986 15.2481 4.986C15.7931 6.34 15.4501 7.339 15.3471 7.589C16.0221 8.301 16.3931 9.248 16.3791 10.229C16.3791 14.003 14.0391 14.834 11.8131 15.077C12.1711 15.383 12.4911 15.98 12.4911 16.897C12.4911 18.212 12.4791 19.27 12.4791 19.594C12.4791 19.855 12.6591 20.161 13.1661 20.065C15.4081 19.335 17.3181 17.833 18.5581 15.828C19.7851 13.839 20.2511 11.474 19.8711 9.168C19.4851 6.856 18.2811 4.759 16.4791 3.259C14.6601 1.744 12.3671 0.914996 10.0001 0.916996H9.99711Z" fill="currentColor" />
      </g>
    </g>
    <defs>
      <clipPath id="Image_clip0-6288-1112">
        <rect width="20" height="20" fill="transparent" transform="translate(0 0.5)" />
      </clipPath>
      <clipPath id="Image_clip1-6288-1112">
        <rect width="20" height="20" fill="transparent" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    style={{ display: 'block' }}
    viewBox="0 0 16 15"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    role="img"
    className="icon-embed-xxsmall text-color-inherit"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M6.019 8.2L0.304 14.723H2.836L7.21 9.717L11.064 14.724L16 14.697L9.742 6.421L15.082 0.304001L12.592 0.276001L8.557 4.873L5.106 0.283001L0 0.278001L6.019 8.2ZM13.011 13.222L11.733 13.217L2.957 1.727H4.33L13.011 13.222Z" fill="currentColor" />
  </svg>
);

const socialLinks = [
  {
    platform: 'GitHub',
    href: 'https://github.com/supermemoryai/supermemory',
    count: '9.5K',
    icon: <GithubIcon />
  },
  {
    platform: 'X',
    href: 'https://x.com/supermemoryai?lang=en',
    count: '4.1K',
    icon: <XIcon />
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[99999] flex items-center mt-6 transition-all duration-500 ease-in-out ${isScrolled ? 'w-[calc(100%-4rem)] max-w-[65rem]' : 'w-[calc(100%-4rem)] max-w-[105rem]'
        } mx-auto`}
      style={{
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d'
      }}
      role="banner"
    >
      <div className="relative w-full">
        <div className="relative z-10 w-full bg-[var(--navbar-background)] border border-[var(--navbar-border)] rounded-[1.125rem] p-4 shadow-[0_2px_20px_rgba(0,0,0,0.25),inset_0_0_0_4px_rgba(6,6,6,0.25),inset_0_4px_2px_rgba(84,84,84,0.25)]">
          <div className="flex items-center justify-between w-full p-2">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0 gap-x-[0.875rem]" aria-label="home">
                <Image
                  src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06541_logo.svg"
                  alt=""
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                  loading="lazy"
                />
                <Image
                  src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06595_logo-navbag-long.svg"
                  alt=""
                  width={200}
                  height={32}
                  className={`h-6 w-auto mt-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                  style={{ display: isScrolled ? 'none' : 'block' }}
                  loading="lazy"
                />
              </Link>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6" role="navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-5 h-5">{social.icon}</div>
                    <span>{social.count}</span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <Button href="https://console.supermemory.ai/" isExternal>
                Get supermemory<sup className="text-xs ml-1">TM</sup>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-y-1.5 cursor-pointer"
              aria-label="menu"
            >
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'transform translate-y-[7px] rotate-45' : ''
                  }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen
                  ? 'transform -translate-y-[7px] -rotate-45'
                  : ''
                  }`}
              />
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        <div
          className={`absolute top-full w-full mt-1 lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
        >
          <nav className="bg-[var(--_super---primary)] border border-[var(--navbar-border)] rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.25),inset_0_0_0_4px_rgba(6,6,6,0.25),inset_0_4px_2px_rgba(84,84,84,0.25)] p-4">
            <div className="flex flex-col items-start gap-4 w-full">
              {/* Links */}
              <div className="flex flex-col items-start gap-4 w-full mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex flex-col items-stretch w-full gap-y-4">
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <div className="w-5 h-5">{social.icon}</div>
                      <span>{social.count}</span>
                    </a>
                  ))}
                </div>
                <Button href="https://console.supermemory.ai/" isExternal>
                  Get supermemory<sup className="text-xs ml-1">TM</sup>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}