import {
  ActionIcon,
  Card,
  Flex,
  Grid,
  Group,
  Paper,
  Space,
  Text,
} from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { IconChartBubble } from "@tabler/icons-react"
import { customTheme } from "../../customTheme"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"
import { createElement, useState } from "react"
import { StudioStore } from "../../redux/store"
import { useSelector } from "react-redux"

interface Props {
  card: Record<string, any>
}

export const GalleryCard = ({ card }: Props) => {
  const [isEvolutions, setIsEvolutions] = useState<boolean>(false)

  const {
    name,
    type,
    image,
    set,
    setNumber,
    cardType,
    condition,
    quantity,
    isGraded,
    grading,
    id,
    year,
  } = card

  const { attributes } = useSelector((state: StudioStore) => state.studio)

  return (
    <>
      <Card
        miw={350}
        mih={450}
        maw={350}
        radius="xl"
        bg={customTheme.colours.types[type] ?? customTheme.colours.bg.bgGray100}
      >
        <Grid w={"100%"}>
          <Grid.Col span={12}>
            <Flex justify="space-between" align="center" w="90%" m="auto">
              <Text c="white">{upperCaseFirst(name)}</Text>
              <Paper
                h={30}
                w={30}
                bg="var(--mantine-color-white)"
                radius={"xl"}
              >
                <Flex justify="center" align="center" h={"100%"} w={"100%"}>
                  {type ? (
                    createElement(customTheme.icons[type], {
                      style: { width: 20, height: 20 },
                      stroke: 1.5,
                      color: customTheme.colours.types[type],
                    })
                  ) : (
                    <IconFlame
                      style={{ width: 25, height: 25 }}
                      stroke={1.5}
                      color="var(--mantine-color-white)"
                      fill={customTheme.colours.types[type]}
                    />
                  )}
                </Flex>
              </Paper>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card w="90%" h={180} radius="lg" m="auto" p={"sm"}>
              <Flex direction="column" h="100%" justify={"center"}>
                <Card h="90%" radius="lg" m="auto" top={5}>
                  {isEvolutions ? (
                    <Flex
                      direction={"row"}
                      h={"100%"}
                      w={"100%"}
                      justify={"center"}
                      align={"center"}
                    >
                      {Object.values(card.evolutions).map(
                        (evo: any) =>
                          evo?.image !== "" && (
                            <img src={evo.image} width={85} height={85} />
                          )
                      )}
                    </Flex>
                  ) : (
                    <img src={image} width={125} height={125} />
                  )}
                </Card>
                <Flex h="10%" w="100%" justify={"flex-end"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    color="gray"
                    size="sm"
                    aria-label="evolutions"
                    onClick={() => setIsEvolutions(!isEvolutions)}
                  >
                    <IconChartBubble
                      height={25}
                      width={25}
                      stroke={1}
                      color={customTheme.colours.bg.bgGray100}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group w="100%" m="auto" p={15} gap={5}>
              <Text c="white" w="100%" mih={25}>
                Set: <b>{set}</b>
              </Text>
              <Text c="white" w="100%" mih={25}>
                Card Type: <b>{cardType}</b>
              </Text>
              <Text c="white" w="100%" mih={25}>
                Condition: <b>{condition}</b>
              </Text>
              <Text c="white" w="100%" mih={25}>
                Quantity: <b>{quantity}</b>
              </Text>
              {isGraded ? (
                <Text c="white" w="100%" mih={25}>
                  Grading: <b>{grading}</b>
                </Text>
              ) : (
                <Space h={25} />
              )}
            </Group>
          </Grid.Col>
          <Grid.Col span={12}>
            <Space h={30} />
            <Flex
              m="auto"
              w="100%"
              justify="space-between"
              p={15}
              align="center"
            >
              <Text c="white" w="100%">
                #{id}
              </Text>
              <Text c="white" w="100%">
                {year}
              </Text>
              <Flex align="center">
                <Text c="white">{setNumber}</Text>
                <Text c="white">
                  {setNumber &&
                    "/" +
                      attributes["set"]?.filter((att: Record<string, any>) => {
                        return att.name === set
                      })?.[0]?.totalCards}
                </Text>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  )
}
