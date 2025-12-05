import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({ children, className, id, ...props }) => {
    return (
        <section
            id={id}
            className={twMerge('py-20 md:py-32 relative overflow-hidden', className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
