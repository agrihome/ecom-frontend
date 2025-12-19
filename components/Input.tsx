import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
    return (
        <input 
            className={`w-full bg-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500 ${className}`}
            {...props}
        />
    )
}