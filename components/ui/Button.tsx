import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  isExternal?: boolean;
  className?: string;
  size?: 'normal' | 'large';
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  isExternal = false,
  className = '',
  size = 'normal',
  showArrow = false,
}: ButtonProps) {
  const wrapperClasses = `button-wrapper inline-block rounded-[1rem] p-[2px] transition-transform duration-200 hover:scale-102 ${className}`;
  const wrapperStyle = {
    backgroundImage:
      'linear-gradient(111deg, #a4e8f5, #267ffa 26%, #464646 49%, #747474 74%, #a4e8f5)',
    transformStyle: 'preserve-3d' as const,
  };

  const sizeClasses = {
    normal: 'py-3 px-[1.125rem] text-sm',
    large: 'py-4 px-6 text-xl',
  };

  const innerButtonClasses = `button navbar flex w-full justify-center items-center bg-[#21252a] text-white font-medium rounded-[calc(1rem-2px)] transition-colors duration-200 hover:bg-[#060707] shadow-[inset_0_4px_2px_rgba(84,84,84,0.25),inset_0_0_0_4px_rgba(6,6,6,0.25)] ${sizeClasses[size]}`;

  const content = (
    <div className={innerButtonClasses}>
      <div className="flex items-center gap-x-8">
        <div>{children}</div>
        {showArrow && (
          <div className="w-9 h-4 hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 36 16" fill="none">
              <path
                d="M12.666 0C14.5326 0 15.9998 1.4665 16 3.33301C16 5.19946 14.5333 6.66567 12.667 6.66602V6.66699H10.666V9.33398H12.667C14.5333 9.33433 16 10.8005 16 12.667C15.9999 14.5336 14.5326 16 12.666 16C10.7996 15.9998 9.33309 14.5335 9.33301 12.667V10.667H6.66602V12.6553C6.66606 12.6591 6.66699 12.6632 6.66699 12.667C6.66686 14.5335 5.19959 16 3.33301 16C1.46657 15.9998 0.0001363 14.5334 0 12.667C0 10.8004 1.46648 9.33317 3.33301 9.33301C3.3365 9.33301 3.34028 9.33394 3.34375 9.33398H5.33301V6.66699H3.33398L3.33301 6.66602V6.66699C1.4665 6.66682 0 5.19957 0 3.33301C0.000170386 1.4666 1.4666 0.000170386 3.33301 0C5.19957 0 6.66682 1.4665 6.66699 3.33301C6.66699 3.33649 6.66606 3.34029 6.66602 3.34375V5.33398H9.33301V3.33301C9.33318 1.4666 10.7996 0.000170386 12.666 0ZM3.33301 10.667C2.19982 10.6671 1.33301 11.5338 1.33301 12.667C1.33314 13.8001 2.19991 14.6668 3.33301 14.667C4.46625 14.667 5.33288 13.8002 5.33301 12.667V10.667H3.33398L3.33301 10.666V10.667ZM10.666 10.667V12.667C10.6661 13.8001 11.5329 14.6668 12.666 14.667C13.7993 14.667 14.6659 13.8002 14.666 12.667C14.666 11.5337 13.7993 10.667 12.666 10.667H10.666ZM6.66602 9.33398H9.33301V6.66699H6.66602V9.33398ZM3.33301 1.33301C2.19994 1.33317 1.33317 2.19994 1.33301 3.33301C1.33301 4.46623 2.19983 5.33284 3.33301 5.33301C3.33649 5.33301 3.34029 5.33394 3.34375 5.33398H5.33301V3.33301C5.33284 2.19983 4.46623 1.33301 3.33301 1.33301ZM12.666 1.33301C11.533 1.33317 10.6662 2.19994 10.666 3.33301V5.33398H12.6553C12.6588 5.33394 12.6624 5.33301 12.666 5.33301C13.7993 5.33301 14.666 4.46634 14.666 3.33301C14.6658 2.19983 13.7992 1.33301 12.666 1.33301Z"
                fill="#4C4C4C"
              />
              <path
                d="M33.9987 2.6665C34.3406 2.6665 34.6224 2.92386 34.6609 3.25542L34.6654 3.33317V7.6665C34.6654 8.91221 33.6892 9.92992 32.4601 9.99638L32.332 9.99984H23.6087L25.8034 12.1951C26.0438 12.4354 26.0622 12.8136 25.8589 13.0751L25.8034 13.1379C25.5631 13.3782 25.185 13.3967 24.9234 13.1934L24.8606 13.1379L21.5273 9.80457C21.5037 9.78098 21.4822 9.75605 21.4629 9.73004L21.4151 9.65588L21.3795 9.58073L21.3559 9.5105L21.3394 9.43215L21.3347 9.39304L21.332 9.33317L21.3339 9.28301L21.3455 9.19935L21.3652 9.12508L21.3945 9.05102L21.4294 8.98603L21.4718 8.92457L21.5273 8.86177L24.8606 5.52843C25.121 5.26808 25.5431 5.26808 25.8034 5.52843C26.0438 5.76876 26.0622 6.14691 25.8589 6.40844L25.8034 6.47124L23.6087 8.6665H32.332C32.8518 8.6665 33.279 8.26991 33.3275 7.76281L33.332 7.6665V3.33317C33.332 2.96498 33.6305 2.6665 33.9987 2.6665Z"
                fill="#4C4C4C"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={wrapperClasses}
          style={wrapperStyle}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={wrapperClasses} style={wrapperStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={wrapperClasses} style={wrapperStyle}>
      {content}
    </button>
  );
}