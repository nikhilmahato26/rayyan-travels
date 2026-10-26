import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'whatsapp' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  external = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-hover focus:ring-brand-blue shadow-md hover:shadow-lg",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy-light focus:ring-brand-navy shadow-md hover:shadow-lg",
    gold: "bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-hover focus:ring-brand-gold font-bold shadow-md hover:shadow-lg",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba5a] focus:ring-[#25D366] shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy",
    ghost: "text-brand-navy hover:bg-brand-blue-light focus:ring-brand-blue",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};
