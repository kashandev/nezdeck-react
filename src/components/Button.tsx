import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outlined' | 'filled' | 'styled';
    className?: string;
    children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = 'solid', className, children, ...rest }) => {
    const baseStyles = "px-7 py-3.5 text-sm font-medium transition-all";
    const solidStyles = "bg-black text-white hover:bg-green-300 border border-transparent hover:text-black hover:border-zinc-900";
    const solidFancyStyles = "bg-green-300 border text-black border-zinc-900";
    const outlinedStyles = "bg-white text-black hover:bg-black border border-black hover:text-white";
    const filledStyles = "bg-zinc-100 border border-transparent";

    const styles =
        variant === 'solid' ? solidStyles :
        variant === 'styled' ? solidFancyStyles :
            variant === 'outlined' ? outlinedStyles :
                filledStyles;

    return (
        <button {...rest} className={`${baseStyles} ${styles} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
