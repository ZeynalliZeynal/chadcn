import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import "../../tailwindcss.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  size?: "lg" | "md" | "sm";
  full?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  primary?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void | Promise<void>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      size = "md",
      full = false,
      href,
      prefix = null,
      suffix = null,
      primary,
      onClick,
      disabled,
      type = "button",
      className,
      ...etc
    },
    forwardRef,
  ) => {
    const [hovering, setHovering] = React.useState(false);
    const ref = React.useRef<HTMLButtonElement | HTMLAnchorElement | null>(
      null,
    );
    React.useImperativeHandle(
      forwardRef,
      () => ref.current as HTMLButtonElement | HTMLAnchorElement,
    );
    const cl = clsx(
      `flex items-center justify-center transition duration-200 font-medium border select-none rounded-md`,
      {
        "text-gray-900 border bg-background-100 hover:text-foreground hover:bg-gray-alpha-200":
          primary,
        "text-gray-500 border-gray-200 bg-gray-1000 hover:text-background-100 hover:bg-button-invert-hover":
          !primary,
        "text-xs h-8 px-1.5": size === "sm",
        "px-2.5 h-10 text-sm": size === "md",
        "px-3.5 h-12": size === "lg",
        "w-full": full,
        "w-fit": !full,
        "data-[highlighted]:text-foreground data-[highlighted]:bg-gray-alpha-200":
          primary && hovering,
        "disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400":
          primary && disabled,
        "data-[highlighted]:text-background-100 data-[highlighted]:bg-button-invert-hover":
          !primary && hovering,
        "disabled:bg-button-invert-disabled disabled:text-gray-700 disabled:border-gray-400":
          !primary && disabled,
      },
      className,
    );
    const commonAttributed = {
      "data-testid": "button",
      "data-highlighted": !disabled && hovering ? true : null,
      className: cl,
      onMouseEnter: () => !disabled && setHovering(true),
      onMouseLeave: () => !disabled && setHovering(false),
    };

    if (href)
      return (
        <Link
          ref={ref as React.MutableRefObject<HTMLAnchorElement>}
          to={href}
          {...commonAttributed}
          {...etc}
        >
          {prefix} <span className="px-1.5">{children}</span> {suffix}
        </Link>
      );
    else
      return (
        <button
          ref={ref as React.MutableRefObject<HTMLButtonElement>}
          type={type}
          onClick={onClick}
          disabled={disabled}
          {...commonAttributed}
          {...etc}
        >
          {prefix} <span className="px-1.5">{children}</span> {suffix}
        </button>
      );
  },
);

Button.displayName = "Button";
export default Button;
