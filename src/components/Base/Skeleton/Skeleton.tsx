import { Skeleton as BaseSkeleton, SkeletonProps } from '@mantine/core';

interface Props extends SkeletonProps {}

export function Skeleton(props: Props) {
  return <BaseSkeleton {...props} />;
}
