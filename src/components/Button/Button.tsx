import React from 'react';

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className='text-2xl text-red-400'>{label}</button>;
};

export default Button;
