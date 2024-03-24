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

interface Props {
  pokemon?: Record<string, any>
  set?: string
  setNumber?: string
  cardType?: string
  condition?: string
  year?: string
  quantity?: string
  isGraded?: boolean
  grading?: string
}

export const GalleryList = ({
  pokemon,
  set,
  setNumber,
  cardType,
  condition,
  year,
  quantity,
  isGraded,
  grading,
}: Props) => {
  return (
    <>
      <Card
        w={"100%"}
        mih={120}
        h={"auto"}
        radius="xl"
        bg={pokemon?.type ?? customTheme.colours.bg.bgGray100}
      >
        <Grid w={"100%"} h={"100%"} align="center" display={"flex"}>
          <Grid.Col span={2} miw={250}>
            <Card w="95%" h={80} radius="lg" m="auto" p={"xs"} miw={200}>
              <Flex direction="column" h="100%" justify={"center"}>
                <Card h="90%" radius="lg" m="auto" top={5}>
                  {pokemon?.image ? (
                    <IconFlame
                      width={100}
                      height={100}
                      stroke={1}
                      color={customTheme.colours.bg.bgGray100}
                    />
                  ) : (
                    <></>
                  )}
                </Card>
                <Flex
                  h="10%"
                  w="100%"
                  justify={"flex-end"}
                  align={"center"}
                  pos={"relative"}
                  top={-10}
                >
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
          <Grid.Col span={6}>
            <Flex
              justify="space-between"
              direction={"column"}
              align="center"
              w="90%"
              m={"auto 0"}
              miw={400}
            >
              <Flex direction={"row"} w={"100%"} align={"center"} gap={15}>
                {pokemon?.name ? (
                  <Text c="white">{pokemon?.name}</Text>
                ) : (
                  <Divider size="xl" w="10%" color="white" />
                )}
                <Paper
                  h={20}
                  w={20}
                  bg="var(--mantine-color-white)"
                  radius={"xl"}
                >
                  <Flex justify="center" align="center" h={"100%"} w={"100%"}>
                    {pokemon?.type ? (
                      <IconFlame
                        style={{ width: 25, height: 25 }}
                        stroke={1.5}
                        color="var(--mantine-color-white)"
                        fill="white"
                        fillOpacity={0.5}
                      />
                    ) : (
                      <></>
                    )}
                  </Flex>
                </Paper>
              </Flex>
              <Space h={10} />
              <Group
                w="100%"
                m="auto"
                gap={5}
                display={"flex"}
                align="center"
                justify="flex-start"
              >
                {pokemon?.type ? (
                  <Text c="white" w="10%">
                    {pokemon?.type}
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {condition ? (
                  <Text c="white" w="10%">
                    {condition}
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {cardType ? (
                  <Text c="white" w="10%">
                    {cardType}
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {set ? (
                  <Text c="white" w="10%">
                    {set}
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {quantity ? (
                  <Text c="white" w="10%">
                    {quantity}
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {isGraded ? (
                  <Text c="white" w="10%">
                    {grading}
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
              </Group>
              <Flex m="auto" w="100%" justify="flex-start" align="center">
                {pokemon?.id ? (
                  <Text c="white" w="10%">
                    Pokemon
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {year ? (
                  <Text c="white" w="10%">
                    Pokemon
                  </Text>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
                {setNumber ? (
                  <Flex align="center">
                    <Text c="white">12</Text>
                    <Text c="white">/84</Text>
                    <Space w={10} />
                    <IconCircleFilled
                      width={10}
                      height={10}
                      style={{ color: "white" }}
                    />
                  </Flex>
                ) : (
                  <Flex w="10%" mih={25} align={"center"}>
                    <Divider size="xl" w="60%" color="white" />
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  )
}
