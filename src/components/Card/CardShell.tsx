import { Card as MantineCard } from '@mantine/core';
import { Types, theme } from '../../theme/theme';
import { CardShellRenderer } from './cardRenderer';

export const CardShell: CardShellRenderer = (props) => {
  const { type, children } = props;

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
      bg={theme.colors.types[type as keyof Types] ?? theme.colors.bg.bgGray100}
      children={children}
    />
  );
};
