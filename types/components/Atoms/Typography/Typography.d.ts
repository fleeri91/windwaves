/** Library import */
import React from 'react';
type Tags = 'mega' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'preamble' | 'p';
export interface TypographyProps {
    /** */
    children: React.ReactNode;
    /** */
    as: Tags;
    /** text style */
    styleAs?: Tags;
    /** */
    italic?: boolean;
    /** */
    marginBottom?: boolean;
    /** */
    className?: string;
}
declare const Typography: ({ children, as, styleAs, italic, marginBottom, className }: TypographyProps) => JSX.Element;
export default Typography;
