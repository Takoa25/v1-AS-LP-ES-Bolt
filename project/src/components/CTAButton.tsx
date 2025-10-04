interface CTAButtonProps {
  text: string;
  size?: 'large' | 'medium';
  className?: string;
}

export default function CTAButton({ text, size = 'medium', className = '' }: CTAButtonProps) {
  const sizeClasses = size === 'large'
    ? 'text-xl sm:text-2xl py-5 sm:py-6 px-8 sm:px-12'
    : 'text-lg sm:text-xl py-4 sm:py-5 px-6 sm:px-10';

  return (
    <a
      href="/checkout"
      className={`
        inline-block bg-[#059669] text-white font-bold rounded-lg
        shadow-lg hover:shadow-xl transform hover:scale-105
        transition-all duration-300 text-center w-full sm:w-auto
        ${sizeClasses}
        ${className}
      `}
      style={{ minHeight: '44px' }}
    >
      {text}
    </a>
  );
}
