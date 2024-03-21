import {
  Card,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Space,
  Text,
} from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { IconCircleFilled } from "@tabler/icons-react"
import { IconChartBubble } from "@tabler/icons-react"
import { customTheme } from "../../customTheme"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"
import { createElement } from "react"

interface Props {
  card: Record<string, any>
}

export const GalleryCard = ({ card }: Props) => {
  const {
    name,
    type,
    image,
    set,
    setNumber,
    typeOfCard,
    condition,
    quantity,
    isGraded,
    grading,
    id,
    year,
  } = card

  console.log("card", card)

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
              {name ? (
                <Text c="white">{upperCaseFirst(name)}</Text>
              ) : (
                <Divider size="xl" w="40%" color="white" />
              )}
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
                  {image ? (
                    <img src={image} width={100} height={100} />
                  ) : (
                    <IconFlame
                      width={100}
                      height={100}
                      stroke={1}
                      color={customTheme.colours.bg.bgGray100}
                    />
                  )}
                </Card>
                <Flex h="10%" w="100%" justify={"flex-end"} align={"center"}>
                  <IconChartBubble
                    height={25}
                    width={25}
                    stroke={1}
                    color={customTheme.colours.bg.bgGray100}
                  />
                </Flex>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group w="100%" m="auto" p={15} gap={5}>
              {set ? (
                <Text c="white" w="100%" mih={25}>
                  Set: <b>{set}</b>
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider size="xl" w="90%" color="white" mih={25} />
                </Flex>
              )}
              {typeOfCard ? (
                <Text c="white" w="100%" mih={25}>
                  Type Of Card: <b>{typeOfCard}</b>
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider size="xl" w="60%" color="white" mih={25} />
                </Flex>
              )}
              {condition ? (
                <Text c="white" w="100%" mih={25}>
                  Condition: <b>{condition}</b>
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider size="xl" w="50%" color="white" mih={25} />
                </Flex>
              )}
              {quantity ? (
                <Text c="white" w="100%" mih={25}>
                  Quantity: <b>{quantity}</b>
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider
                    size="xl"
                    w="60%"
                    color="white"
                    mih={25}
                    display={"flex"}
                  />
                </Flex>
              )}
              {isGraded && grading ? (
                <Text c="white" w="100%" mih={25}>
                  Grading: <b>{grading}</b>
                </Text>
              ) : (
                <Divider size="xl" w="40%" color="white" mih={25} />
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
              {id ? (
                <Text c="white" w="100%">
                  #{id}
                </Text>
              ) : (
                <Divider size="xl" w="30%" color="white" />
              )}
              {year ? (
                <Text c="white" w="100%">
                  {year}
                </Text>
              ) : (
                <Divider size="xl" w="30%" color="white" />
              )}
              {setNumber ? (
                <Flex align="center">
                  <Text c="white">{setNumber}</Text>
                  <Text c="white">{setNumber && "/" + 83}</Text>
                  <Space w={10} />
                  <IconCircleFilled
                    width={10}
                    height={10}
                    style={{ color: "white" }}
                  />
                </Flex>
              ) : (
                <Divider size="xl" w="30%" color="white" />
              )}
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  )
}
