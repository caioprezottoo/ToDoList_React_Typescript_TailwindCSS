import type React from "react";
import type { VariantProps } from "class-variance-authority";

import Icon from "./Icon";
import Text from "./Text";

import { buttonVariants } from "../variants/button-variants"
import { buttonIconVariants } from "../variants/button-variants"
import { buttonTextVariants } from "../variants/button-variants"

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({ variant, size, disabled, className, children, icon: IconComponent, ...props }: ButtonProps) {
    return (
        <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
            {IconComponent && (
                <Icon
                    svg={IconComponent}
                    className={buttonIconVariants({ variant, size })}
                />
            )}
            <Text variant="body-md-bold" className={buttonTextVariants({ variant })} >
                {children}
            </Text>
        </button>
    )
}