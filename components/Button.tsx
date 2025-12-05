import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  let baseStyles = 'font-semibold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant styles
  if (variant === 'primary') {
    // Adjusted hover to a darker shade of primary for WCAG AA/AAA compliance with white text
    baseStyles += ' bg-primary text-white hover:bg-[#1C3691] focus:ring-primary';
  } else if (variant === 'secondary') {
    // Uses the new light gray secondary theme color with dark text for WCAG AA/AAA compliance
    // Adjusted for dark mode: dark-secondary-btn with dark-text
    baseStyles += ' bg-secondary text-text hover:bg-gray-300 focus:ring-gray-400 dark:bg-dark-secondary-btn dark:text-dark-text dark:hover:bg-gray-600 dark:focus:ring-gray-500';
  } else if (variant === 'outline') {
    // Remains accessible with new primary color in both modes
    baseStyles += ' border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white dark:focus:ring-primary';
  } else if (variant === 'ghost') {
    // Remains accessible with new primary color in both modes
    baseStyles += ' text-primary hover:bg-primary/10 focus:ring-primary dark:text-primary dark:hover:bg-primary/20 dark:focus:ring-primary';
  }

  // Size styles
  if (size === 'sm') {
    baseStyles += ' px-3 py-1 text-sm';
  } else if (size === 'md') {
    baseStyles += ' px-4 py-2 text-base';
  } else if (size === 'lg') {
    baseStyles += ' px-6 py-3 text-lg';
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;