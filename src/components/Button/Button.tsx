import React from "react";
import clsx from "clsx";
import { ButtonVariants } from "src/types/Global";

export interface ButtonProps {
  /** Button content. */
  children?: React.ReactNode;

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
    "text-white bg-blue-500 border border-transparent hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 dark:disabled:hover:bg-blue-600",
  secondary:
    "text-white bg-slate-600 border border-transparent hover:bg-slate-500 focus:ring-4 focus:ring-slate-300 disabled:hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-900 dark:disabled:hover:bg-slate-600",
};

const Button = ({
  children,
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
        "group inline-flex items-center justify-center px-4 py-3 text-sm font-semibold transition-colors",
        variant && ButtonVariantClasses[variant],
        rounded ? "rounded-full" : "rounded-lg"
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
