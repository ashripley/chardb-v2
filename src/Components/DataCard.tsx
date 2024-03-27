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
import { IconTrashFilled } from "@tabler/icons-react"
import { StudioStore } from "../redux/store"
import { useSelector } from "react-redux"
import { upperCaseFirst } from "../helpers/upperCaseFirst"
import { useEffect, useMemo } from "react"

export const DataCard = () => {
  const { attributes, dbType } = useSelector(
    (state: StudioStore) => state.studio
  )

  useEffect(
    () => console.log("type attributes: ", attributes.type),
    [attributes.type]
  )

  console.log("attributes", attributes)

  const Sets = useMemo(
    () => (
      <Flex justify={"flex-start"} direction={"column"} gap={15}>
        {attributes?.set.map((att: Record<string, any>, index: number) => (
          <Flex justify={"space-between"} w={"100%"} key={index}>
            <Flex w={"80%"} direction={"column"} justify={"center"}>
              <Text c={"white"}>Name: {upperCaseFirst(att.name)}</Text>
              <Text c={"white"}>Total Cards: {att.totalCards}</Text>
            </Flex>
            <Flex w={"10%"} align={"center"}>
              <ActionIcon
                variant="transparent"
                size="xl"
                radius="lg"
                aria-label="delete"
              >
                <IconTrashFilled
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
      </Flex>
    ),
    [attributes.set]
  )

  const CardTypes = useMemo(
    () => (
      <Flex justify={"flex-start"} direction={"column"}>
        {attributes?.cardType.map((att: Record<string, any>, index: number) => (
          <Flex justify={"space-between"} w={"100%"} key={index}>
            <Flex w={"80%"} direction={"column"} justify={"center"}>
              <Text c={"white"}>Name: {upperCaseFirst(att.name)}</Text>
            </Flex>
            <Flex w={"10%"} align={"center"}>
              <ActionIcon
                variant="transparent"
                size="xl"
                radius="lg"
                aria-label="delete"
              >
                <IconTrashFilled
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
      </Flex>
    ),
    [attributes.cardType]
  )

  const Conditions = useMemo(
    () => (
      <Flex justify={"flex-start"} direction={"column"}>
        {attributes?.condition.map(
          (att: Record<string, any>, index: number) => (
            <Flex justify={"space-between"} w={"100%"} key={index}>
              <Flex w={"80%"} direction={"column"} justify={"center"}>
                <Text c={"white"}>Name: {upperCaseFirst(att.name)}</Text>
              </Flex>
              <Flex w={"10%"} align={"center"}>
                <ActionIcon
                  variant="transparent"
                  size="xl"
                  radius="lg"
                  aria-label="delete"
                >
                  <IconTrashFilled
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
          )
        )}
      </Flex>
    ),
    [attributes.condition]
  )

  const Types = useMemo(
    () => (
      <Flex justify={"flex-start"} direction={"column"} gap={15}>
        {attributes?.type.map((att: Record<string, any>, index: number) => (
          <Flex justify={"space-between"} w={"100%"} key={index}>
            <Flex w={"80%"} direction={"column"} justify={"center"}>
              <Text c={"white"}>Name: {upperCaseFirst(att.name)}</Text>
              <Text c={"white"}>Colour: {att.colour}</Text>
            </Flex>
            <Flex w={"10%"} align={"center"}>
              <ActionIcon
                variant="transparent"
                size="xl"
                radius="lg"
                aria-label="delete"
              >
                <IconTrashFilled
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
      </Flex>
    ),
    [attributes.type]
  )

  const componentMap: Record<string, JSX.Element> = {
    set: Sets,
    cardType: CardTypes,
    type: Types,
    condition: Conditions,
  }

  console.log("attributes", attributes)
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
            Current Sets
          </Title>
          <Space h={20} />
          <ScrollArea
            h={"90%"}
            w={"100%"}
            type="never"
            style={{ borderRadius: 5 }}
          >
            {componentMap[dbType]}
          </ScrollArea>
        </Flex>
      </Card>
    </>
  )
}
