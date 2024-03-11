/** Library import */
import { HTMLAttributes } from 'react';
import { Size } from 'src/types/Tailwind';
interface ToggleProps extends HTMLAttributes<HTMLElement> {
    /** Toggle size */
    size?: Size;
    /** Disabled state */
    disabled?: boolean;
}
/** Main description for this component. */
declare const Toggle: ({ children, className, size, disabled, ...htmlAttributes }: ToggleProps) => JSX.Element | null;
export default Toggle;
