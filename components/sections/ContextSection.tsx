'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const commandGridItems = [
  {
    command: '$ init vector_database',
    errors: [
      { message: 'Way too expensive. Time to switch.', type: 'error' },
      { message: 'Painfully slow. Let\'s try another.', type: 'error' },
      { message: 'Won\'t scale. Back to square one.', type: 'error' },
      { message: 'Maintenance nightmare. Need alternatives.', type: 'error' },
    ]
  },
  {
    command: '$ choose embedding_model',
    errors: [
      { message: 'Which model fits your use case?', type: 'warning' },
      { message: 'Confusing performance tradeoffs', type: 'warning' },
      { message: 'Can\'t keep up with new releases', type: 'warning' },
    ]
  },
  {
    command: '$ handle format_parsing',
    errors: [
      { message: 'Markdown: Tables break everything', type: 'error' },
      { message: 'HTML: Scripts and styles interfere', type: 'error' },
      { message: 'PDF: Layout ruins extraction', type: 'error' },
      { message: 'Word docs: Unpredictable formatting', type: 'error' },
    ]
  },
  {
    command: '$ calculate scaling_costs',
    errors: [
      { message: 'Costs explode at production scale', type: 'warning' },
      { message: 'Performance degrades as data grows', type: 'warning' },
      { message: 'Engineering hours pile up fast', type: 'warning' },
    ]
  },
  {
    command: '$ setup connection_sync',
    errors: [
      { message: 'Sync failures between data sources', type: 'error' },
      { message: 'API rate limits during large syncs', type: 'error' },
      { message: 'Images: Need vision models now?', type: 'error' },
      { message: 'Audio/Video: Transcription costs soar', type: 'error' },
    ]
  },
  {
    command: '$ init multimodal_support',
    errors: [
      { message: 'Websites: JS & rate limits are messy', type: 'error' },
      { message: 'PDFs: OCR fails, extraction inconsistent', type: 'error' },
      { message: 'Authentication tokens expire constantly', type: 'error' },
    ]
  },
];

const ErrorIcon = ({ type }: { type: 'error' | 'warning' }) => {
  if (type === 'error') {
    return (
      <div className="w-2 h-2 flex-shrink-0">
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none">
          <path d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z" fill="#FB2C36"/>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="w-3.5 h-3 flex-shrink-0">
      <svg width="100%" height="100%" viewBox="0 0 14 13" fill="none">
        <path d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z" fill="#FFB900"/>
      </svg>
    </div>
  );
};

export default function ContextSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate content on load
    if (contentRef.current) {
      contentRef.current.style.opacity = '1';
      contentRef.current.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
      contentRef.current.style.transformStyle = 'preserve-3d';
    }

    // Animate grid on load with horizontal scroll effect
    if (gridRef.current) {
      gridRef.current.style.opacity = '1';
      gridRef.current.style.transform = 'translate(-97.1805px, 0px)';
      gridRef.current.style.transformStyle = 'preserve-3d';
    }
  }, []);

  return (
    <section 
      className="relative block overflow-hidden text-white"
      style={{
        backgroundColor: 'var(--_super---primary)',
        paddingTop: '14rem',
        paddingBottom: '15rem'
      }}
    >
      <div className="container relative z-10 mx-auto px-6 md:px-8">
        {/* Header Content */}
        <div 
          ref={contentRef}
          className="text-center mb-16"
          style={{ 
            opacity: 0, 
            transform: 'translate3d(0px, 20px, 0px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}
        >
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0658a_gradient-ish-symbol.svg"
            alt=""
            width={80}
            height={80}
            className="mx-auto mb-8"
            loading="lazy"
          />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Context<br />is everything
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-base text-white/80">
              Without it, even the smartest AI is just an expensive chatbot
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <div className="relative">
          {/* Horizontal Border Image */}
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06596_HorizontalBorder.png"
            alt=""
            width={2706}
            height={200}
            className="w-full h-auto mb-8"
            loading="lazy"
            sizes="(max-width: 2706px) 100vw, 2706px"
          />

          {/* Grid Inner Wrapper */}
          <div className="relative">
            {/* Left and Right Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Grid */}
            <div 
              ref={gridRef}
              className="flex gap-4 overflow-hidden"
              style={{ 
                opacity: 0,
                width: 'max-content',
                whiteSpace: 'nowrap',
                padding: '0 1vw 0 0',
                transform: 'translate(-97.1805px, 0px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
              }}
            >
              {/* Duplicate the items to create seamless loop */}
              {[...commandGridItems, ...commandGridItems].map((item, index) => (
                <div 
                  key={index} 
                  className="flex-none w-80 bg-gray-900/30 border border-gray-800/50 rounded-lg p-6"
                >
                  <div className="text-white font-mono text-base mb-4">{item.command}</div>
                  <div className="space-y-3">
                    {item.errors.map((error, errorIndex) => (
                      <div key={errorIndex} className="flex items-start gap-3">
                        <ErrorIcon type={error.type} />
                        <div className="text-xs text-gray-500 uppercase font-medium leading-relaxed">
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
        className="absolute inset-0 object-cover opacity-100"
        loading="lazy"
      />

      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </section>
  );
}