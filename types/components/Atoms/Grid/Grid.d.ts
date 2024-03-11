/** Library import */
import React from 'react';
/** Type import */
import { GridSize } from 'src/types/Tailwind';
export interface GridProps {
    /** Content rendered as children */
    children: React.ReactNode;
    /** Grid columns */
    cols?: GridSize;
    /** Grid columns 2xl */
    cols2Xl?: GridSize;
    /** Grid columns xl */
    colsXl?: GridSize;
    /** Grid columns lg */
    colsLg?: GridSize;
    /** Grid columns md */
    colsMd?: GridSize;
    /** Grid flow */
    flow?: 'row' | 'col';
    /** Additional styling */
    className?: string;
}
/** Cell properties */
export interface CellProps {
    /** Content rendered as children */
    children: React.ReactNode;
    /** Cell span */
    span?: GridSize;
    /** Grid columns 2xl */
    span2Xl?: GridSize;
    /** Grid columns xl */
    spanXl?: GridSize;
    /** Grid columns lg */
    spanLg?: GridSize;
    /** Grid columns md */
    spanMd?: GridSize;
    /** If content should be centered */
    center?: boolean;
    /** Additional styling */
    classname?: string;
}
/** Grid component */
declare const Grid: ({ children, cols, cols2Xl, colsXl, colsLg, colsMd, flow, className }: GridProps) => JSX.Element;
/** Cell component */
declare const Cell: ({ children, span, span2Xl, spanXl, spanLg, spanMd, center, classname }: CellProps) => JSX.Element;
export { Grid, Cell };
