import { Card as MantineCard } from '@mantine/core';
import { CardShellRenderer } from '../cardRenderer';
import { theme } from '../../../theme/theme';

export const CardShell: CardShellRenderer = (props) => {
  const { type } = props;

  function assertTypeIsKeyofTypes(type: unknown): asserts type is string {
    if (typeof type !== 'string') {
      throw new Error(`Invalid type: "${type}" is not a valid key of Types.`);
    }
  }

  assertTypeIsKeyofTypes(type);

  return (
    <MantineCard
      miw={350}
      mih={450}
      maw={350}
      radius='xl'
      bg={theme.colors.types[type] ?? theme.colors.bg.bgGray100}
      {...props}
    />
  );
};
