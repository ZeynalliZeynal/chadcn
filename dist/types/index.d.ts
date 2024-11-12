import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    size?: "lg" | "md" | "sm";
    full?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    primary?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

export { Button };
