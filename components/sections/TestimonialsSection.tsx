import Container from '@/components/ui/Container';
import Image from 'next/image';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    logo: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06557_producthunt-2.svg',
    description: '#1 Product of the day at Product hunt',
    logoAlt: 'Product Hunt',
  },
  {
    logo: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06563_github.svg',
    description: 'Starred by over 9,000 users on Github',
    logoAlt: 'GitHub',
  },
  {
    logo: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0657f_flow.webp',
    description: 'Flow uses supermemory to build the cursor for writing',
    logoAlt: 'Flow',
  },
  {
    logo: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0657e_medtech%20vendors.webp',
    description: 'Medtech Vendors uses supermemory to search through 500k vendors',
    logoAlt: 'Medtech Vendors',
  },
  {
    logo: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0657d_mixus.webp',
    description: 'Mixus uses Supermemory to power co-intelligence Agentic platform',
    logoAlt: 'Mixus',
  },
];

const Number35K = () => (
  <svg className="w-full max-w-lg h-auto" viewBox="0 0 579 166" fill="none">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2782FF" />
        <stop offset="100%" stopColor="#A4E8F5" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="url(#gradient)"
      fontSize="140"
      fontWeight="700"
      fontFamily="Space Grotesk, sans-serif"
    >
      35,000
    </text>
  </svg>
);

export default function TestimonialsSection() {
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
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Open Source, enterprise, and more than
          </h3>
          <div className="flex justify-center items-center gap-4">
            <Number35K />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">of you</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/50 transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.logoAlt || ''}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs uppercase text-gray-400">
                {testimonial.description}
              </p>
            </div>
          ))}
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