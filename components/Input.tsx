import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
  const baseStyles = 'block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';

  return (
    <div className="mb-4">
      {label && (
        // Adjusted label text color for dark mode
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 dark:text-dark-text">
          {label}
        </label>
      )}
      <input
        id={id}
        // Adjusted input colors for dark mode: background, text, border, placeholder
        className={`${baseStyles} ${errorStyles} ${className} dark:bg-gray-700 dark:text-dark-text dark:border-gray-600 dark:placeholder-gray-400`}
        {...props}
      />
      {/* Error text color remains consistent for high visibility */}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;