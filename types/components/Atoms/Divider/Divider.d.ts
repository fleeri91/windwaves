/// <reference types="react" />
export interface DividerProps {
    /** */
    label?: string;
    /** */
    orientation?: 'left' | 'right' | 'center';
}
declare const Divider: ({ label, orientation }: DividerProps) => JSX.Element;
export default Divider;
