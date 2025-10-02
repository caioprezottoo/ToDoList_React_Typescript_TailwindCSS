import { cx, type VariantProps } from 'class-variance-authority'

import Text from './Text'
import Skeleton from './Skeleton';

import { badgeVariants } from "../variants/badge-variants";
import { badgeTextVariants } from "../variants/badge-variants";
import { badgeSkeletonVariants } from "../variants/badge-variants";


interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
    loading?: boolean
}

export default function Badge({ variant, size, className, children, loading, ...props }: BadgeProps) {
    if (loading) {
        return (
            <Skeleton
                rounded="full"
                className={cx(
                    badgeVariants({ variant: "none" }),
                    badgeSkeletonVariants({ size }),
                    className
                )}
            />
        )
    }

    return (
        <div className={badgeVariants({ variant, size, className })} {...props}>
            <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>{children}</Text>
        </div>
    )
}