/** Library import */
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

import { Size } from 'src/types/Tailwind'

interface ToggleProps extends HTMLAttributes<HTMLElement> {
  /** Toggle size */
  size?: Size

  /** Disabled state */
  disabled?: boolean
}

/** Main description for this component. */
const Toggle = ({ children, className, size, disabled, ...htmlAttributes }: ToggleProps): JSX.Element | null => {
  return (
    <label
      className={clsx('inline-flex cursor-pointer items-center', disabled && 'cursor-not-allowed', className)}
      {...htmlAttributes}
    >
      <input type="checkbox" value="" className="peer sr-only" disabled={disabled} />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{children}</span>
    </label>
  )
}

export default Toggle
