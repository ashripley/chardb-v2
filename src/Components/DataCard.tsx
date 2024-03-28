import {
  Card,
  Flex,
  Text,
  ScrollArea,
  Title,
  Space,
  CloseButton,
} from "@mantine/core"
import { customTheme } from "../customTheme"
import { StudioStore } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { upperCaseFirst } from "../helpers/upperCaseFirst"
import { useEffect } from "react"
import { deleteAttribute } from "../api/mutations/deleteAttribute"
import { setAttributes } from "../redux/studio"

export const DataCard = () => {
  const { attributes, dbType } = useSelector(
    (state: StudioStore) => state.studio
  )
  const dispatch = useDispatch()

  useEffect(
    () => console.log("type attributes: ", attributes.type),
    [attributes.type]
  )

  const excludedKeys = ["name", "attribute", "attributeId"]
  const keysToGap = ["set", "type"]

  const labelMap: Record<string, string> = {
    set: "Sets",
    cardType: "Card Types",
    type: "Types",
    condition: "Conditions",
    totalCards: "Total Cards",
    colour: "Colour",
  }

  const onDelete = (att: Record<string, any>) => {
    const { attribute, name, attributeId } = att

    const filteredAttributes = attributes[attribute].filter(
      (att: Record<string, any>) => att.attributeId !== attributeId
    )
    deleteAttribute(`${attribute}_${name}`)
    dispatch(
      setAttributes({
        isCreate: false,
        ...attributes,
        ...{ [attribute]: filteredAttributes },
      })
    )
  }

  const AttributeCard = () => (
    <>
      {attributes?.[dbType].map((att: Record<string, any>, index: number) => (
        <Flex justify={"space-between"} w={"100%"}>
          <Flex w={"80%"} direction={"column"} justify={"center"} key={index}>
            <Flex w={"100%"} direction={"row"} gap={5}>
              <Text fw={600} c={"white"}>
                Name:{" "}
              </Text>
              <Text c={"white"}>{upperCaseFirst(att.name)}</Text>
            </Flex>
            {Object.entries(att)?.map(
              ([key, value]: any, index: number) =>
                !excludedKeys.includes(key) && (
                  <Flex w={"100%"} direction={"row"} gap={5}>
                    <Text fw={600} c={"white"} key={index}>
                      {labelMap[key]}:
                    </Text>
                    <Text c={"white"} key={index}>
                      {value}
                    </Text>
                  </Flex>
                )
            )}
          </Flex>
          <Flex w={"10%"} align={"center"}>
            <CloseButton
              c={"white"}
              variant="transparent"
              onClick={() => onDelete(att)}
            />
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
        p={"lg"}
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
            <Flex
              justify={"flex-start"}
              direction={"column"}
              gap={keysToGap.includes(dbType) ? 15 : 0}
            >
              <AttributeCard />
            </Flex>
          </ScrollArea>
        </Flex>
      </Card>
    </>
  )
}
