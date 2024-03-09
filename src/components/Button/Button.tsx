import { MouseEventHandler } from 'react'
import clsx from 'clsx'

import { ButtonVariants } from 'src/types/Global'

export interface ButtonProps {
  /** Button content. */
  label?: string

  /** Button variant. */
  variant?: ButtonVariants

  /** Link path. Button will be represented as an anchor element instead. */
  href?: string

  /** If the button should be rounded. */
  rounded?: boolean

  /** If the button should be disabled. */
  disabled?: boolean

  /** If the button should be in loading state. */
  loading?: boolean

  /** On click handler. */
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

const ButtonVariantClasses = {
  primary:
    'text-white bg-blue-500 border border-transparent hover:bg-blue-400 focus:ring-blue-300 disabled:bg-blue-500/50',
  secondary:
    'text-white bg-slate-600 border border-transparent hover:bg-slate-500 focus:ring-slate-300 disabled:bg-slate-600/50',
}

const Button = ({ label, variant = 'primary', href, rounded, disabled, loading, onClick }: ButtonProps) => {
  const isLink = typeof href !== 'undefined'
  const Component = isLink ? 'a' : 'button'

  return (
    <Component
      type={isLink ? undefined : 'button'}
      disabled={disabled}
      href={href}
      onClick={onClick}
      className={clsx(
        'group inline-flex items-center justify-center px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed',
        variant && ButtonVariantClasses[variant],
        rounded ? 'rounded-full' : 'rounded-lg',
        loading && 'cursor-progress'
      )}
    >
      {loading && (
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {label}
    </Component>
  )
}

export default Button
