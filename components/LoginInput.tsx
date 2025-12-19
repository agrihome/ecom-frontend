import React from 'react';

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function LoginInput({ className = "", ...props }: LoginInputProps) {
    return (
        <input 
            className={`w-full max-w-md border-b border-gray-300 py-2 focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-400 ${className} select-none`}
            {...props}
        />
    )
}