import clsx from 'clsx'
import React from 'react'

export interface DividerProps {
  /** */
  label?: string

  /** */
  orientation?: 'left' | 'right' | 'center'
}

const OrientationClasses = {
  left: 'before:border-t before:w-[5%] before:relative before:top-1/2 before:translate-y-1/2 before:w-1/2 before:content-[""] after:border-t after:w-[95%] after:relative after:top-1/2 after:translate-y-1/2 after:w-1/2 after:content-[""]',
  right:
    'before:border-t before:w-[95%] before:relative before:top-1/2 before:translate-y-1/2 before:w-1/2 before:content-[""] after:border-t after:w-[5%] after:relative after:top-1/2 after:translate-y-1/2 after:w-1/2 after:content-[""]',
  center:
    'before:border-t before:w-1/2 before:relative before:top-1/2 before:translate-y-1/2 before:w-1/2 before:content-[""] after:border-t after:w-1/2 after:relative after:top-1/2 after:translate-y-1/2 after:w-1/2 after:content-[""]',
}

const Divider = ({ label, orientation }: DividerProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'clear-both my-6 flex w-full items-center whitespace-nowrap text-center',
        orientation ? OrientationClasses[orientation] : 'border'
      )}
    >
      {label && orientation && <span className={clsx('inline-block px-4')}>{label}</span>}
    </div>
  )
}

export default Divider
