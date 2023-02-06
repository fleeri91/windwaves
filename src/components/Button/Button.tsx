import React from "react";
import clsx from "clsx";
import { ButtonVariants } from "src/types/Global";

export interface ButtonProps {
  /** Button content. */
  label?: string;

  /** Button variant. */
  variant?: ButtonVariants;

  /** Link path. Button will be represented as an anchor element instead. */
  href?: string;

  /** If the button should be rounded. */
  rounded?: boolean;

  /** If the button should be disabled. */
  disabled?: boolean;

  /** If the button be in loading state. */
  loading?: boolean;

  /** On click handler. */
  onClick?: () => void;
}

const ButtonVariantClasses = {
  primary:
    "text-white bg-blue-500 border border-transparent hover:bg-blue-400 focus:ring-blue-300 disabled:bg-blue-500/80",
  secondary:
    "text-white bg-slate-600 border border-transparent hover:bg-slate-500 focus:ring-slate-300 disabled:bg-slate-700",
};

const Button = ({
  label,
  variant = "primary",
  href,
  rounded,
  disabled,
  loading,
}: ButtonProps) => {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";

  return (
    <Component
      type={isLink ? undefined : "button"}
      disabled={disabled}
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed",
        variant && ButtonVariantClasses[variant],
        rounded ? "rounded-full" : "rounded-lg",
        loading && "cursor-progress"
      )}
    >
      {label}
    </Component>
  );
};

export default Button;
