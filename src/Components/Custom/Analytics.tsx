import { Card, Flex, Title, Text } from "@mantine/core"
import { theme } from "../../customTheme"
import { CardStore, StudioStore } from "../../redux/store"
import { useSelector } from "react-redux"

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",
  },
}

export const Analytics = () => {
  const { attributes, allPokemon } = useSelector(
    (state: StudioStore) => state.studio
  )
  const { cards } = useSelector((state: CardStore) => state.card)

  return (
    <>
      <Flex
        h={"100%"}
        w={"100%"}
        align={"flex-start"}
        justify={"space-between"}
        gap={25}
        wrap={"wrap"}
      >
        <Card h={"100%"} miw={450} radius={"lg"} p={"xl"}>
          <Flex gap={15} direction={"column"}>
            <Title
              size="h4"
              fw={600}
              c={theme.colours.fonts.primary}
              style={{ ...styles.title }}
              ff={theme.fonts.primary}
            >
              Cards
            </Title>
            <Flex direction={"column"} gap={10}>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Cards: {cards.length}
              </Text>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Graded Cards: {cards.filter((card) => !!card?.grading).length}
              </Text>
              {Object.values(attributes["set"]).map((set: any) => (
                <Text fw={400} c={theme.colours.fonts.primary}>
                  {set.name}:{" "}
                  {cards.filter((card) => card.set === set.name).length}/
                  {set.totalCards}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Card>
        <Card h={"100%"} miw={450} radius={"lg"} p={"xl"}>
          <Flex gap={15} direction={"column"}>
            <Title
              size="h4"
              fw={600}
              c={theme.colours.fonts.primary}
              style={{ ...styles.title }}
              ff={theme.fonts.primary}
            >
              Attributes
            </Title>
            <Flex direction={"column"} gap={10}>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Types: {attributes["type"]?.length}
              </Text>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Conditions: {attributes["condition"]?.length}
              </Text>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Card Types: {attributes["cardType"]?.length}
              </Text>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Sets: {attributes["set"]?.length}
              </Text>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Attributes: {Object.keys(attributes)?.length}
              </Text>
            </Flex>
          </Flex>
        </Card>
        <Card h={"100%"} miw={450} radius={"lg"} p={"xl"}>
          <Flex gap={15} direction={"column"}>
            <Title
              size="h4"
              fw={600}
              c={theme.colours.fonts.primary}
              style={{ ...styles.title }}
              ff={theme.fonts.primary}
            >
              Pokémon
            </Title>
            <Flex direction={"column"}>
              <Text fw={400} c={theme.colours.fonts.primary}>
                Pokémon: {Object.keys(allPokemon).length}
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}
