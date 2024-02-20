import { Flex, Paper, Space, Text, Divider } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"

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
      bg="var(--mantine-color-gray-light)"
      display="flex"
    >
      <Flex justify="flex-start" align="center" h={"100%"}>
        <Paper h={30} w={30} bg="var(--mantine-color-gray-text)" radius={"xl"}>
          <Flex justify="center" align="center" h={"100%"} w={"100%"}>
            <IconFlame
              style={{ width: 25, height: 25 }}
              stroke={1.5}
              color="var(--mantine-color-white)"
              fill="white"
              fillOpacity={0.5}
            />
          </Flex>
        </Paper>
      </Flex>
      <Space w={10} />
      <Flex justify="flex-start" align="center" h={"100%"} w={"100%"}>
        <Text fw={600} size="lg" c="var(--mantine-color-orange-text)">
          char
        </Text>
        <Text fw={700} size="lg" c="var(--mantine-color-gray-text)">
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
              c="var(--mantine-color-gray-text)"
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
