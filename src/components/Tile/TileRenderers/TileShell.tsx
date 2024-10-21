import { theme } from '../../../styles/theme';
import { TileShellRenderer } from '../tileRenderer';

export const TileShell: TileShellRenderer = (props) => {
  const { type } = props;

  function assertTypeIsKeyofTypes(type: unknown): asserts type is string {
    if (typeof type !== 'string') {
      throw new Error(`Invalid type: "${type}" is not a valid key of Types.`);
    }
  }

  assertTypeIsKeyofTypes(type);

  return (
    <MantineCard
      w={'200px'}
      h={'200px'}
      radius='xl'
      bg={theme.colors.types[type] ?? theme.colors.bg.bgGray100}
      {...props}
    />
  );
};
