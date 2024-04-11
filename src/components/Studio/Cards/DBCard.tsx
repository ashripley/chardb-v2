import {
  Card,
  Flex,
  Text,
  ScrollArea,
  Title,
  Space,
  CloseButton,
} from "@mantine/core"
import { useDispatch, useSelector } from "react-redux"
import { StudioStore } from "../../../redux/store"
import { deleteAttributeMutation } from "../../../api/attributes"
import { setAttributes } from "../../../redux/studio"
import { upperCaseFirst } from "../../../helpers/upperCaseFirst"
import { theme } from "../../../theme/theme"

export const DBCard = () => {
  const { attributes, dbType } = useSelector(
    (state: StudioStore) => state.studio
  )
  const dispatch = useDispatch()

  const excludedKeys = ["name", "attribute", "attributeId"]
  const keysToGap = ["set", "type"]

  const labelMap: Record<string, string> = {
    set: "Sets",
    cardType: "Card Types",
    type: "Types",
    condition: "Conditions",
    totalCards: "Total Cards",
    colour: "Colour",
    year: "Year",
  }

  const onDelete = (att: Record<string, any>) => {
    const { attribute, name, attributeId } = att

    const filteredAttributes = attributes[attribute].filter(
      (att: Record<string, any>) => att.attributeId !== attributeId
    )
    deleteAttributeMutation(`${attribute}_${name}`)
    dispatch(
      setAttributes({
        isCreate: false,
        ...attributes,
        ...{ [attribute]: filteredAttributes },
      })
    )
  }

  console.log("attributes?.[dbType]", attributes?.[dbType])

  const AttributeCard = () => (
    <>
      {attributes?.[dbType].map((att: Record<string, any>, index: number) => (
        <Flex justify={"space-between"} w={"100%"} key={index}>
          <Flex w={"80%"} direction={"column"} justify={"center"}>
            <Flex w={"100%"} direction={"row"} gap={5}>
              <Text fw={600} c={"white"}>
                Name:{" "}
              </Text>
              <Text c={"white"}>{upperCaseFirst(att.name)}</Text>
            </Flex>
            {Object.entries(att)?.map(
              ([key, value]: any, index: number) =>
                !excludedKeys.includes(key) && (
                  <Flex w={"100%"} direction={"row"} gap={5} key={index}>
                    <Text fw={600} c={"white"}>
                      {labelMap[key]}:
                    </Text>
                    <Text c={"white"}>{value}</Text>
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
        bg={theme.colours.bg.bgGray100}
      >
        <Flex
          justify="flex-start"
          align="center"
          direction={"column"}
          w="100%"
          h="100%"
          m="auto"
        >
          <Title
            size="h3"
            h={"5%"}
            fw={600}
            w={"100%"}
            display={"contents"}
            c="white"
          >
            {labelMap[dbType]}
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
