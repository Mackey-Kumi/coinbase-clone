// Button component — variants match exact coinbase.com computed styles
// primary:   #0052FF bg / white text / 56px radius / 0 24px padding
// secondary: #EEF0F3 bg / #0A0B0D text / 56px radius
// dark:      #0A0B0D bg / white text  / 56px radius / 16px 32px padding

const variantClasses = {
  primary:
    'bg-[#0052FF] text-white hover:bg-[#0039B3] border border-[#0052FF] hover:border-[#0039B3]',
  secondary:
    'bg-[#EEF0F3] text-[#0A0B0D] hover:bg-[#E2E5EA] border border-[#EEF0F3] hover:border-[#E2E5EA]',
  dark:
    'bg-[#0A0B0D] text-white hover:bg-[#282B31] border border-[#0A0B0D] hover:border-[#282B31]',
  outline:
    'bg-transparent text-[#0A0B0D] border border-[#0A0B0D] hover:bg-[#EEF0F3]',
};

const sizeClasses = {
  sm:  'px-5 h-9  text-sm  font-semibold',
  md:  'px-6 h-12 text-base font-semibold',
  lg:  'px-8 py-4 text-base font-semibold',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-[56px] transition-colors duration-200 leading-none whitespace-nowrap';
  const classes = `${base} ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size] ?? sizeClasses.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
