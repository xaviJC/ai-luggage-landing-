import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';

    const variants = {
        primary: 'bg-brand-500 hover:bg-brand-400 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95',
        secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 active:scale-95',
        outline: 'bg-transparent border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400',
        ghost: 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
