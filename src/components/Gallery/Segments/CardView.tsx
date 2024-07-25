import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconGridDots, IconLayoutGrid } from '@tabler/icons-react';
import { theme } from '../../../theme/theme';
import { GalleryViewType } from '../../../config';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setGalleryView } from '../../../redux/root';

export const CardViewSegment = () => {
  const dispatch = useDispatch();
  const [tileColor, setTileColor] = useState<string>(
    theme.colors.bg.bgDarkGray75
  );
  const [cardColor, setCardColor] = useState<string>('white');

  const iconProps = {
    style: {
      width: rem(20),
      height: rem(20),
      display: 'block',
    },
    stroke: 1.5,
  };

  const onViewChange = (value: string) => {
    if (value === 'tile') {
      setTileColor('white');
      setCardColor(theme.colors.bg.bgDarkGray75);
    } else if (value === 'card') {
      setCardColor('white');
      setTileColor(theme.colors.bg.bgDarkGray75);
    } else {
      return;
    }

    dispatch(setGalleryView(value as GalleryViewType));
  };

  return (
    <SegmentedControl
      orientation='horizontal'
      withItemsBorders={false}
      size='sm'
      w={'100%'}
      radius='xl'
      defaultValue='card'
      bg={'transparent'}
      color={theme.colors.bg.bgDarkGray75}
      onChange={onViewChange}
      data={[
        {
          value: 'tile',
          label: (
            <>
              <IconGridDots color={tileColor} fill={tileColor} {...iconProps} />
              <VisuallyHidden>Tile</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'card',
          label: (
            <>
              <IconLayoutGrid
                color={cardColor}
                fill={cardColor}
                {...iconProps}
              />
              <VisuallyHidden>Card</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
};
