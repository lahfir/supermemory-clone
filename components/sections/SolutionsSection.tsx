'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const codeSnippet = `import OpenAI from "openai"

const client = new OpenAI({  
  baseUrl: "https://api.supermemory.ai/v3/https://api.openai.com/v1/"
})`;

export default function SolutionsSection() {
  const [copied, setCopied] = useState(false);

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
            solution • solution • solution
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We've seen what it's like to build memory infrastructure the hard way — 
            so we built supermemory to make it disappear.
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase text-gray-500 mb-6 tracking-wider">
                product • product • product
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Edit one line.<br />
                Get longer threads,<br />
                cost savings<br />
                memory.
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Just add{' '}
                <a 
                  href="http://api.supermemory.ai/v3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient"
                >
                  api.supermemory.ai/v3
                </a>{' '}
                to your OpenAI base URL — and get automatic long-term context across conversations.
              </p>
            </div>

            <div>
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6 mb-4">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    <span className="text-pink-500">import</span> OpenAI{' '}
                    <span className="text-pink-500">from</span>{' '}
                    <span className="text-green-500">"openai"</span>
                    {'\n\n'}
                    <span className="text-pink-500">const</span>{' '}
                    <span className="text-blue-400">client</span>{' '}
                    <span className="text-pink-500">= new</span>{' '}
                    <span className="text-purple-400">OpenAI</span>
                    {'({  \n'}
                    {'  baseUrl'}
                    <span className="text-pink-500">:</span>{' '}
                    <span className="text-green-500">"https://api.supermemory.ai/v3/https://api.openai.com/v1/"</span>
                    {'\n})'}
                  </code>
                </pre>
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

              <Button 
                href="https://docs.supermemory.ai/" 
                isExternal 
                variant="secondary"
                className="w-full justify-center"
              >
                Start building <sup className="text-xs">DOCS</sup>
              </Button>
            </div>
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