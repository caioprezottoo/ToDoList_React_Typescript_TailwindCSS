import { type VariantProps } from "class-variance-authority";
import { skeletonVariants } from "../variants/skeleton-variants";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> { }

export default function Skeleton({ rounded, className, ...props }: SkeletonProps) {
    return (
        <div className={skeletonVariants({ rounded, className })} {...props} />
    )
}