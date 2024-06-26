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
import { Theme, theme } from "../../../theme/theme"
import { useSelector } from "react-redux"
import { CardStore, StudioStore } from "../../../redux/store"
import { upperCaseFirst } from "../../../helpers/upperCaseFirst"
import { createElement } from "react"

export const StudioCard = () => {
  const { tempPokemon, isDirty, card } = useSelector(
    (state: CardStore) => state.card
  )
  const { attributes, view } = useSelector((state: StudioStore) => state.studio)

  const pokemon = isDirty && view === "create" ? tempPokemon : card

  console.log("attributes[set]", attributes["set"])

  return (
    <>
      <Card
        miw={350}
        mih={450}
        maw={350}
        radius="xl"
        bg={
          theme.colours.types[
            pokemon?.type as keyof Theme["colours"]["types"]
          ] ?? theme.colours.bg.bgGray100
        }
      >
        <Grid w={"100%"}>
          <Grid.Col span={12}>
            <Flex justify="space-between" align="center" w="90%" m="auto">
              {pokemon?.name ? (
                <Text c="white">{upperCaseFirst(pokemon?.name)}</Text>
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
                  {pokemon?.type ? (
                    createElement(
                      theme.icons[pokemon.type as keyof Theme["icons"]],
                      {
                        style: { width: 20, height: 20 },
                        stroke: 1.5,
                        color:
                          theme.colours.types[
                            pokemon.type as keyof Theme["colours"]["types"]
                          ],
                      }
                    )
                  ) : (
                    <IconFlame
                      style={{ width: 25, height: 25 }}
                      stroke={1.5}
                      color="var(--mantine-color-white)"
                      fill={theme.colours.bg.bgGray100}
                    />
                  )}
                </Flex>
              </Paper>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card w="90%" h={180} radius="lg" m="auto" p={"sm"}>
              <Flex direction="column" h="100%" justify={"center"}>
                <Card h="100%" radius="lg" m="auto">
                  {pokemon?.image ? (
                    <img src={pokemon?.image} width={135} height={135} />
                  ) : (
                    <></>
                  )}
                </Card>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group w="100%" m="auto" p={15} gap={5}>
              {pokemon?.set ? (
                <Text c="white" w="100%" mih={25}>
                  Set: {pokemon.set}
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider size="xl" w="90%" color="white" mih={25} />
                </Flex>
              )}
              {pokemon?.cardType ? (
                <Text c="white" w="100%" mih={25}>
                  Card Type: {pokemon.cardType}
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider size="xl" w="60%" color="white" mih={25} />
                </Flex>
              )}
              {pokemon?.condition ? (
                <Text c="white" w="100%" mih={25}>
                  Condition: {pokemon.condition}
                </Text>
              ) : (
                <Flex w="100%" mih={25}>
                  <Divider size="xl" w="50%" color="white" mih={25} />
                </Flex>
              )}
              {pokemon?.quantity ? (
                <Text c="white" w="100%" mih={25}>
                  Quantity: {pokemon.quantity}
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
              {pokemon?.isGraded && pokemon?.grading ? (
                <Text c="white" w="100%" mih={25}>
                  Grading: {pokemon.grading}
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
              {pokemon?.id || pokemon?.set ? (
                <>
                  <Text c="white" w="100%">
                    #{pokemon.id}
                  </Text>
                  <Text c="white" w="100%">
                    {pokemon.set
                      ? attributes["set"]?.find(
                          (set: Record<string, any>) => set.name === pokemon.set
                        )?.year
                      : ""}
                  </Text>
                  <Flex align="center">
                    <Text c="white">{pokemon.setNumber ?? ""}</Text>
                    <Text c="white">
                      {pokemon.set
                        ? "/" +
                          attributes["set"]?.find(
                            (set: Record<string, any>) =>
                              set.name === pokemon.set
                          )?.totalCards
                        : ""}
                    </Text>
                  </Flex>
                </>
              ) : (
                <Divider size="xl" w={"100%"} color="white" />
              )}
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  )
}
