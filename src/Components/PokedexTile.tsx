import { Card, Divider, Flex, Grid, Paper, Text } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { IconChartBubble } from "@tabler/icons-react"
import { customTheme } from "../customTheme"

interface Props {
  pokemon?: Record<string, any>
}

export const PokedexTile = ({ pokemon }: Props) => {
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
            <Card w="90%" h={100} radius="lg" m="auto" p={"sm"}>
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
                <Flex h="10%" w="100%" justify={"flex-end"} align={"center"}>
                  <IconChartBubble
                    height={15}
                    width={15}
                    stroke={1}
                    color={customTheme.colours.bg.bgGray100}
                  />
                </Flex>
              </Flex>
            </Card>
          </Grid.Col>

          <Grid.Col span={12}>
            <Flex m="auto" w="100%" justify="center" p={15} align="center">
              {pokemon?.id ? (
                <Text c="white" w="100%">
                  Pokemon
                </Text>
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
