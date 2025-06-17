import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const footerLinks = [
  { label: 'Updates', href: 'https://docs.supermemory.ai/changelog/overview' },
  { label: 'Contact us', href: 'mailto:support@supermemory.ai' },
  { label: 'Web app', href: 'https://supermemory.chat/' },
  { label: 'Docs', href: 'https://docs.supermemory.ai/introduction' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/supermemoryai/supermemory', count: '9.5K' },
  { label: 'X', href: 'https://x.com/supermemoryai', count: '4.1K' },
  { label: 'Terms', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-20">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <Image
          src="/footer-gradient-top.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <Image
          src="/footer-gradient-bottom.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06541_logo.svg"
            alt="Supermemory"
            width={200}
            height={80}
            className="w-48 h-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button href="https://console.supermemory.ai/" isExternal>
            Get supermemory<sup className="text-xs">TM</sup>
          </Button>
          <Button href="https://docs.supermemory.ai/" isExternal variant="secondary">
            Start building <sup className="text-xs">DOCS</sup>
          </Button>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <span className="text-gray-500 uppercase">© 2025 supermemory.ai</span>
            <a 
              href="http://tonik.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 uppercase hover:text-white transition-colors"
            >
              made by tonik
            </a>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-6 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-500 hover:text-white transition-colors flex items-center gap-2"
              >
                {link.label}
                {link.count && <span>{link.count}</span>}
              </a>
            ))}
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-500 uppercase hover:text-white transition-colors underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background element (placeholder for Unicorn Studio) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-blue-900/20 to-transparent" />
      </div>
    </footer>
  );
}