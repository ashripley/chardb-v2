import { Flex, Paper, Space, Text, Divider } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { customTheme } from "../customTheme"

interface Props {
  isCustomLabel?: boolean
  customLabel?: string
}

export const CustomHeader = ({ isCustomLabel, customLabel }: Props) => {
  return (
    <Paper
      radius="xl"
      p="xs"
      w={"auto"}
      h={"auto"}
      bg={customTheme.colours.bg.bgGray25}
      display="flex"
    >
      <Flex justify="flex-start" align="center" h={"100%"}>
        <Paper
          h={30}
          w={30}
          bg={customTheme.colours.font.primary}
          radius={"xl"}
        >
          <Flex justify="center" align="center" h={"100%"} w={"100%"}>
            <IconFlame
              width={20}
              height={20}
              fill={customTheme.colours.accents.char}
              color={customTheme.colours.accents.char}
              stroke={1}
            />
          </Flex>
        </Paper>
      </Flex>
      <Space w={10} />
      <Flex justify="flex-start" align="center" h={"100%"} w={"100%"}>
        <Text fw={600} size="lg" c={customTheme.colours.accents.char}>
          char
        </Text>
        <Text fw={700} size="lg" c={customTheme.colours.font.primary}>
          db
        </Text>
        {isCustomLabel && (
          <>
            <Space w={10} />
            <Divider size="sm" orientation="vertical" />
            <Space w={10} />
            <Text
              fw={700}
              size="lg"
              c={customTheme.colours.font.primary}
              tt="uppercase"
            >
              {customLabel}
            </Text>
          </>
        )}
      </Flex>
    </Paper>
  )
}
