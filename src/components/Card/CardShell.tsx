import { Grid, Card as MantineCard } from '@mantine/core';
import { Types, theme } from '../../theme/theme';
import { CardShellRenderer } from './cardRenderer';

export const CardShell: CardShellRenderer = (props) => {
  const { children, type } = props;

  function assertTypeIsKeyofTypes(type: unknown): asserts type is keyof Types {
    if (!(type as keyof Types)) {
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
      bg={
        theme.colours.types[type as keyof Types] ?? theme.colours.bg.bgGray100
      }
    >
      <Grid w={'100%'} children={children} />
    </MantineCard>
  );
};
