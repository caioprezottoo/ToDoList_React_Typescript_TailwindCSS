import React from "react";
import type { VariantProps } from "class-variance-authority";

import Icon from "./Icon";
import CheckIcon from "../assets/icons/check.svg?react"

import { inputCheckboxWrapperVariants } from "../variants/input-checkbox-variants"
import { inputCheckboxVariants } from "../variants/input-checkbox-variants"
import { inputCheckboxIconVariants } from "../variants/input-checkbox-variants"
import Skeleton from "./Skeleton";


interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, Omit<React.ComponentProps<"input">, "size" | "disabled"> {
    loading?: boolean
}


export default function InputCheckbox({ variant, size, disabled, className, loading, ...props }: InputCheckboxProps) {
    if (loading) {
        return (
            <Skeleton rounded="sm" className={inputCheckboxVariants({ variant: "none", size })} />
        )
    }
    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input type="checkbox" className={inputCheckboxVariants({ variant, size, disabled })} {...props} />
            <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
        </label>
    )
}
