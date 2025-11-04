// components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
