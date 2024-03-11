/** Library import */
import React from 'react'
import clsx from 'clsx'

/** Type import */
import { GridSize } from 'src/types/Tailwind'

export interface GridProps {
  /** Content rendered as children */
  children: React.ReactNode

  /** Grid columns */
  cols?: GridSize

  /** Grid columns 2xl */
  cols2Xl?: GridSize

  /** Grid columns xl */
  colsXl?: GridSize

  /** Grid columns lg */
  colsLg?: GridSize

  /** Grid columns md */
  colsMd?: GridSize

  /** Grid flow */
  flow?: 'row' | 'col'

  /** Additional styling */
  className?: string
}

/** Cell properties */
export interface CellProps {
  /** Content rendered as children */
  children: React.ReactNode

  /** Cell span */
  span?: GridSize

  /** Grid columns 2xl */
  span2Xl?: GridSize

  /** Grid columns xl */
  spanXl?: GridSize

  /** Grid columns lg */
  spanLg?: GridSize

  /** Grid columns md */
  spanMd?: GridSize

  /** If content should be centered */
  center?: boolean

  /** Additional styling */
  classname?: string
}

const colsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
  auto: 'grid-cols-auto',
  full: 'grid-cols-full',
}
const cols2XlClasses = {
  1: '2xl:grid-cols-1',
  2: '2xl:grid-cols-2',
  3: '2xl:grid-cols-3',
  4: '2xl:grid-cols-4',
  5: '2xl:grid-cols-5',
  6: '2xl:grid-cols-6',
  7: '2xl:grid-cols-7',
  8: '2xl:grid-cols-8',
  9: '2xl:grid-cols-9',
  10: '2xl:grid-cols-10',
  11: '2xl:grid-cols-11',
  12: '2xl:grid-cols-12',
  auto: '2xl:grid-cols-auto',
  full: '2xl:grid-cols-full',
}
const colsXlClasses = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  7: 'xl:grid-cols-7',
  8: 'xl:grid-cols-8',
  9: 'xl:grid-cols-9',
  10: 'xl:grid-cols-10',
  11: 'xl:grid-cols-11',
  12: 'xl:grid-cols-12',
  auto: 'xl:grid-cols-auto',
  full: 'xl:grid-cols-full',
}
const colsLgClasses = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
  8: 'lg:grid-cols-8',
  9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10',
  11: 'lg:grid-cols-11',
  12: 'lg:grid-cols-12',
  auto: 'lg:grid-cols-auto',
  full: 'lg:grid-cols-full',
}
const colsMdClasses = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
  auto: 'md:grid-cols-auto',
  full: 'md:grid-cols-full',
}

const spanClasses = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  auto: 'col-auto',
  full: 'col-span-full',
}

const span2XlClasses = {
  1: '2xl:col-span-1',
  2: '2xl:col-span-2',
  3: '2xl:col-span-3',
  4: '2xl:col-span-4',
  5: '2xl:col-span-5',
  6: '2xl:col-span-6',
  7: '2xl:col-span-7',
  8: '2xl:col-span-8',
  9: '2xl:col-span-9',
  10: '2xl:col-span-10',
  11: '2xl:col-span-11',
  12: '2xl:col-span-12',
  auto: '2xl:col-auto',
  full: '2xl:col-span-full',
}

const spanXlClasses = {
  1: 'xl:col-span-1',
  2: 'xl:col-span-2',
  3: 'xl:col-span-3',
  4: 'xl:col-span-4',
  5: 'xl:col-span-5',
  6: 'xl:col-span-6',
  7: 'xl:col-span-7',
  8: 'xl:col-span-8',
  9: 'xl:col-span-9',
  10: 'xl:col-span-10',
  11: 'xl:col-span-11',
  12: 'xl:col-span-12',
  auto: 'xl:col-auto',
  full: 'xl:col-span-full',
}

const spanLgClasses = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
  auto: 'lg:col-auto',
  full: 'lg:col-span-full',
}

const spanMdClasses = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
  auto: 'md:col-auto',
  full: 'md:col-span-full',
}

const flowClasses = {
  col: 'grid-flow-col',
  row: 'grid-flow-row',
}

/** Grid component */
const Grid = ({ children, cols, cols2Xl, colsXl, colsLg, colsMd, flow, className }: GridProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'grid gap-4',
        cols && colsClasses[cols],
        cols2Xl && cols2XlClasses[cols2Xl],
        colsXl && colsXlClasses[colsXl],
        colsLg && colsLgClasses[colsLg],
        colsMd && colsMdClasses[colsMd],
        flow && flowClasses[flow],
        className
      )}
    >
      {children}
    </div>
  )
}

/** Cell component */
const Cell = ({ children, span, span2Xl, spanXl, spanLg, spanMd, center, classname }: CellProps): JSX.Element => {
  return (
    <div
      className={clsx(
        span && spanClasses[span],
        span2Xl && span2XlClasses[span2Xl],
        spanXl && spanXlClasses[spanXl],
        spanLg && spanLgClasses[spanLg],
        spanMd && spanMdClasses[spanMd],
        center && 'flex justify-center',
        classname
      )}
    >
      {children}
    </div>
  )
}

export { Grid, Cell }
