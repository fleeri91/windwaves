/** Library import */
import React from 'react'
import clsx from 'clsx'

type Tags = 'mega' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'preamble' | 'p'

export interface TypographyProps {
  /** */
  children: React.ReactNode

  /** */
  as: Tags

  /** text style */
  styleAs?: Tags

  /** */
  italic?: boolean

  /** */
  marginBottom?: boolean

  /** */
  className?: string
}

const TagMapper = {
  mega: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  preamble: 'p',
  p: 'p',
}

const Margin = {
  mega: 'mb-16',
  h1: 'mb-14',
  h2: 'mb-12',
  h3: 'mb-10',
  h4: 'mb-8',
  h5: 'mb-6',
  preamble: 'mb-4',
  p: 'mb-2',
}

const TypograhyClasses = {
  mega: 'font-semibold text-6xl sm:text-7xl',
  h1: 'font-semibold text-5xl sm:text-6xl',
  h2: 'font-semibold text-4xl sm:text-5xl',
  h3: 'font-semibold text-3xl sm:text-4xl',
  h4: 'font-semibold text-2xl sm:text-3xl',
  h5: 'font-semibold text-xl sm:text-2xl',
  preamble: 'font-medium text-base sm:text-lg',
  p: 'text-sm sm:text-base',
}

const Typography = ({ children, as, styleAs, italic, marginBottom, className }: TypographyProps): JSX.Element => {
  const Component: any = TagMapper[as]

  return (
    <Component
      className={clsx(
        TypograhyClasses[styleAs || as],
        marginBottom && Margin[styleAs || as],
        italic && 'italic',
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Typography
