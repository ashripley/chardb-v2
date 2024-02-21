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
import { customTheme } from "../customTheme"

interface Props {
  pokemon?: Record<string, any>
  set?: string
  setNumber?: string
  typeOfCard?: string
  condition?: string
  year?: string
  quantity?: string
  isGraded?: boolean
  grading?: string
}

export const CustomBackTile = ({
  pokemon,
  set,
  setNumber,
  typeOfCard,
  condition,
  year,
  quantity,
  isGraded,
  grading,
}: Props) => {
  return (
    <>
      <Card
        w={200}
        mih={215}
        h={215}
        radius="xl"
        bg={pokemon?.type ?? customTheme.colours.bg.bgGray100}
      >
        <Grid w={"100%"}>
          <Grid.Col span={12}>
            <Flex justify="space-between" align="center" w="90%" m="auto">
              {pokemon?.name ? (
                <Text c="white">{pokemon?.name}</Text>
              ) : (
                <Divider size="xl" w="40%" color="white" />
              )}
              <Paper
                h={25}
                w={25}
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
          </Grid.Col>
          <Grid.Col span={12}>
            <Group w="100%" m="auto" p={"xs"} gap={5}>
              {pokemon?.type ? (
                <Text c="white" w="100%">
                  {pokemon?.type}
                </Text>
              ) : (
                <Flex w="100%" mih={10}>
                  <Divider size="xl" w="70%" color="white" />
                </Flex>
              )}
              {condition ? (
                <Text c="white" w="100%">
                  {condition}
                </Text>
              ) : (
                <Flex w="100%" mih={10}>
                  <Divider size="xl" w="50%" color="white" />
                </Flex>
              )}
              {typeOfCard ? (
                <Text c="white" w="100%">
                  {typeOfCard}
                </Text>
              ) : (
                <Flex w="100%" mih={10}>
                  <Divider size="xl" w="60%" color="white" />
                </Flex>
              )}
              {set ? (
                <Text c="white" w="100%">
                  {set}
                </Text>
              ) : (
                <Flex w="100%" mih={10}>
                  <Divider size="xl" w="90%" color="white" />
                </Flex>
              )}
              {quantity ? (
                <Text c="white" w="100%">
                  {quantity}
                </Text>
              ) : (
                <Flex w="100%" mih={10}>
                  <Divider size="xl" w="60%" color="white" />
                </Flex>
              )}
              {isGraded ? (
                <Text c="white" w="100%">
                  {grading}
                </Text>
              ) : (
                <Divider size="xl" w="40%" color="white" />
              )}
            </Group>
          </Grid.Col>

          <Grid.Col span={12}>
            <Flex
              m="auto"
              w="100%"
              justify="space-between"
              p={15}
              align="center"
            >
              {pokemon?.id ? (
                <Text c="white" w="100%">
                  Pokemon
                </Text>
              ) : (
                <Divider size="xl" w="30%" color="white" />
              )}
              {year ? (
                <Text c="white" w="100%">
                  Pokemon
                </Text>
              ) : (
                <Divider size="xl" w="30%" color="white" />
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
                <Divider size="xl" w="30%" color="white" />
              )}
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  )
}
