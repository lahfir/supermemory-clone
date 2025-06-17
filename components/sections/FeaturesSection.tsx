'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { TabContent } from '@/types';

const tabContents: TabContent[] = [
  {
    label: 'Add memories',
    content: {
      language: 'javascript',
      code: `const response = await fetch('https://api.supermemory.ai/v3/memories', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf'
  },
  body: JSON.stringify({
    content: 'You can add text',
      // or a url https://example.com 
      // or pdfs, videos, images. https://example.com/page.pdf
    metadata: {
      user_id: '123'
    }
  }),
})

const data = await response.json()`
    }
  },
  {
    label: 'Search memories',
    content: {
      language: 'javascript',
      code: `const response = await fetch('https://api.supermemory.ai/v3/memories', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf',
  },
  body: JSON.stringify({
    q: "What's my name?"
  })
})

const data = await response.json()`
    }
  },
  {
    label: 'Connect apps',
    content: {
      language: 'javascript',
      code: `const response = await fetch('https://api.supermemory.ai/v3/connections/onedrive', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf',
  }
});

const data = await response.json();`
    }
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(2); // Connect apps is active by default
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const code = tabContents[activeTab].content.code;
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section 
      className="relative text-white overflow-hidden"
      style={{
        backgroundColor: 'var(--_super---primary)',
        paddingTop: '5rem',
        paddingBottom: '5rem'
      }}
    >
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <div className="text-xs uppercase text-gray-500 mb-6 tracking-wider">
            FEATURES • FEATURES • FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Unlock the Full Potential of Your Data
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
            {/* Tab Navigation */}
            <div className="flex gap-6 mb-6 border-b border-gray-800">
              {tabContents.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`pb-4 text-sm font-medium transition-colors relative ${
                    activeTab === index 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                  )}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-gray-300">
                  {tabContents[activeTab].content.code}
                </code>
              </pre>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mt-4"
            >
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M13.334 5.83325H6.66732C5.93094 5.83325 5.33398 6.43021 5.33398 7.16659V13.8333C5.33398 14.5696 5.93094 15.1666 6.66732 15.1666H13.334C14.0704 15.1666 14.6673 14.5696 14.6673 13.8333V7.16659C14.6673 6.43021 14.0704 5.83325 13.334 5.83325Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.66732 11.1666C1.93398 11.1666 1.33398 10.5666 1.33398 9.83325V3.16659C1.33398 2.43325 1.93398 1.83325 2.66732 1.83325H9.33398C10.0673 1.83325 10.6673 2.43325 10.6673 3.16659" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </Container>

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
    </section>
  );
}