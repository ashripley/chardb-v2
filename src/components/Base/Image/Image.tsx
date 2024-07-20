import { Image as BaseImage, ImageProps } from '@mantine/core';

interface Props extends ImageProps {}

export function Image(props: Props) {
  return <BaseImage {...props} />;
}
