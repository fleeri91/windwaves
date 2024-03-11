import { MouseEventHandler } from 'react';
import { Colors } from 'src/types/Tailwind';
export interface ButtonProps {
    /** Button content. */
    label?: string;
    /** Button color. */
    color?: Colors;
    /** Link path. Button will be represented as an anchor element instead. */
    href?: string;
    /** If the button should be rounded. */
    rounded?: boolean;
    /** If the button should be disabled. */
    disabled?: boolean;
    /** If the button should be in loading state. */
    loading?: boolean;
    /** On click handler. */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
declare const Button: ({ label, color, href, rounded, disabled, loading, onClick }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
