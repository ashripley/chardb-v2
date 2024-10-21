import { useDispatch } from 'react-redux';
import { setFormType } from '../../redux/root';
import { pxToRem } from '../../utils';
import { theme } from '../../styles/theme';

export const DatabaseSegment = () => {
  const dispatch = useDispatch();

  const onChange = (val: any) => {
    dispatch(setFormType(val));
  };

  return (
    <SegmentedControl
      withItemsBorders={false}
      size='sm'
      radius={pxToRem('sm')}
      defaultValue='set'
      bg={theme.colors.bg.bgGray75}
      color={theme.colors.bg.bgDarkGray75}
      onChange={onChange}
      data={[
        {
          value: 'set',
          label: <Text c={'white'}>Sets</Text>,
        },
        {
          value: 'cardType',
          label: <Text c={'white'}>Card Types</Text>,
        },
        {
          value: 'type',
          label: <Text c={'white'}>Types</Text>,
        },
        {
          value: 'condition',
          label: <Text c={'white'}>Conditions</Text>,
        },
        // {
        //   value: "pokemon",
        //   label: <Text c={"white"}>Pokemon</Text>,
        // },
      ]}
    />
  );
};
