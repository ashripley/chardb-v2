import { SelectStyles } from '.';

interface Props extends SelectProps {}

export function Select(props: Props) {
  return (
    <BaseSelect
      {...props}
      classNames={{
        input: SelectStyles.input,
        dropdown: SelectStyles.dropdown,
      }}
    />
  );
}
