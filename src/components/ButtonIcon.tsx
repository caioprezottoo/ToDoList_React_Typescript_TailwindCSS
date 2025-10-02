import React from 'react'
import Icon from './Icon'

import type { VariantProps } from 'class-variance-authority'

import { buttonIconVariants } from "../variants/button-icon-variants"
import { buttonIconIconVariants } from "../variants/button-icon-variants"
import Skeleton from './Skeleton'


interface ButtonIconProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonIconVariants> {
    icon: React.ComponentProps<typeof Icon>["svg"]
    loading?: boolean
}

export default function ButtonIcon({ variant, size, disabled, className, icon, loading, ...props }: ButtonIconProps) {
    if (loading) {
        return <Skeleton rounded="sm" className={buttonIconVariants({ variant: "none", size, className })} />
    }

    return (
        <button className={buttonIconVariants({ variant, size, disabled, className })} {...props}>
            <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
        </button>
    )
}