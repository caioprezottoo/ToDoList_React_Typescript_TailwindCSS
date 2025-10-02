import { type VariantProps, cx } from "class-variance-authority";
import { textVariants } from "../variants/text-variants";

import { inputTextVariants } from "../variants/input-text-variants"


interface InputTextProps extends Omit<React.ComponentProps<"input">, "size" | "disabled">, VariantProps<typeof inputTextVariants> { }

export default function InputText({ size, disabled, className, ...props }: InputTextProps) {
    return (
        <input
            className={cx(
                inputTextVariants({ size, disabled }),
                textVariants(),
                className
            )}
            {...props}
        />
    )
}