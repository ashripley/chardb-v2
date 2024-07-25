import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconPlus, IconReload, IconDatabase } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { setCurrentCard, setStudioView } from '../../redux/root';
import { StudioViewType } from '../../config';
import { pxToRem } from '../../utils';
import { theme } from '../../styles/theme';

export const StudioSegment = () => {
  const dispatch = useDispatch();

  const iconProps = {
    style: {
      width: rem(20),
      height: rem(30),
      display: 'flex',
      alignItems: 'center',
    },
    stroke: 1.5,
  };

  function onViewChange(value: string) {
    dispatch(setStudioView(value as StudioViewType));
    dispatch(setCurrentCard(undefined));
  }

  return (
    <SegmentedControl
      orientation='vertical'
      withItemsBorders={false}
      size='sm'
      radius={pxToRem('sm')}
      defaultValue='create'
      bg={theme.colors.bg.bgGray75}
      color={theme.colors.bg.bgDarkGray75}
      onChange={onViewChange}
      data={[
        {
          value: 'create',
          label: (
            <>
              <IconPlus color='white' {...iconProps} />
              <VisuallyHidden>Create</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'update',
          label: (
            <>
              <IconReload color='white' {...iconProps} />
              <VisuallyHidden>Update</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'db',
          label: (
            <>
              <IconDatabase color='white' {...iconProps} />
              <VisuallyHidden>DB</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
};
