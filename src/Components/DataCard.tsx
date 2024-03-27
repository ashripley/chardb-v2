import {
  Card,
  Flex,
  Text,
  ScrollArea,
  Title,
  Space,
  ActionIcon,
} from "@mantine/core"
import { customTheme } from "../customTheme"
import { IconX } from "@tabler/icons-react"
import { StudioStore } from "../redux/store"
import { useSelector } from "react-redux"
import { upperCaseFirst } from "../helpers/upperCaseFirst"
import { useEffect } from "react"

export const DataCard = () => {
  const { attributes, dbType } = useSelector(
    (state: StudioStore) => state.studio
  )

  useEffect(
    () => console.log("type attributes: ", attributes.type),
    [attributes.type]
  )

  const excludedKeys = ["name", "attribute", "attributeId"]

  const labelMap: Record<string, string> = {
    set: "Sets",
    cardType: "Card Types",
    type: "Types",
    condition: "Conditions",
  }

  const AttributeCard = () => (
    <>
      {attributes?.[dbType].map((att: Record<string, any>, index: number) => (
        <Flex justify={"space-between"} w={"100%"}>
          <Flex w={"80%"} direction={"column"} justify={"center"} key={index}>
            <Text c={"white"}>Name: {upperCaseFirst(att.name)}</Text>
            {Object.entries(att)?.map(
              ([key, value]: any, index: number) =>
                !excludedKeys.includes(key) && (
                  <Text c={"white"} key={index}>
                    {key}: {value}
                  </Text>
                )
            )}
          </Flex>
          <Flex w={"10%"} align={"center"}>
            <ActionIcon
              variant="transparent"
              size="xl"
              radius="lg"
              aria-label="delete"
            >
              <IconX
                style={{
                  width: "50%",
                  height: "70%",
                  color: "white",
                }}
                stroke={1.5}
              />
            </ActionIcon>
          </Flex>
        </Flex>
      ))}
    </>
  )

  return (
    <>
      <Card
        miw={400}
        mih={500}
        w={"auto"}
        h={"auto"}
        radius="xl"
        bg={customTheme.colours.bg.bgGray100}
      >
        <Flex
          justify="flex-start"
          align="center"
          direction={"column"}
          w="100%"
          h="100%"
          m="auto"
        >
          <Title size="h3" h={"5%"} fw={600} w={"100%"} c="white">
            Current {labelMap[dbType]}
          </Title>
          <Space h={20} />
          <ScrollArea
            h={"90%"}
            w={"100%"}
            type="never"
            style={{ borderRadius: 5 }}
          >
            <Flex justify={"flex-start"} direction={"column"} gap={15}>
              <AttributeCard />
            </Flex>
          </ScrollArea>
        </Flex>
      </Card>
    </>
  )
}
