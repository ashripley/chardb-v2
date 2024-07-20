import { Carousel as BaseCarousel, CarouselProps } from '@mantine/carousel';

interface Props extends CarouselProps {}

export function Carousel(props: Props) {
  return <BaseCarousel {...props} />;
}
