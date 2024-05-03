import { Card, Flex, Text, Group, Badge, Button, Image } from "@mantine/core"
import { CardStore, StudioStore } from "../../redux/store"
import { useSelector } from "react-redux"
import { dbTypeMap } from "../Studio/Details/DBDetails"

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
        <Card padding="lg" radius="md" withBorder miw={450} w={"30%"}>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
              height={160}
              alt="Woods"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Cards</Text>
            <Badge color="pink">Gallery</Badge>
          </Group>

          <Flex direction={"column"} gap={5}>
            <Text fw={400} c="dimmed" size="sm">
              Cards: {cards.length}
            </Text>
            <Text fw={400} c="dimmed" size="sm">
              Graded Cards: {cards.filter((card) => !!card?.grading).length}
            </Text>
            {attributes["set"] &&
              Object.values(attributes["set"]).map((set: any) => (
                <Text fw={400} c="dimmed" size="sm">
                  {set.name}:{" "}
                  {cards.filter((card) => card.set === set.name).length}/
                  {set.totalCards}
                </Text>
              ))}
          </Flex>

          <Button color="blue" fullWidth mt="md" radius="md">
            Gallery
          </Button>
        </Card>

        <Card padding="lg" radius="md" withBorder miw={450} w={"30%"}>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
              height={160}
              alt="Lighthouse"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Attributes</Text>
            <Badge color="pink">Studio</Badge>
          </Group>

          <Flex direction={"column"}>
            {Object.entries(attributes).map(
              (attribute: Record<string, any>) => (
                <Text fw={400} c="dimmed" size="sm">
                  {dbTypeMap[attribute[0]].label}s: {attribute[1].length}
                </Text>
              )
            )}
            <Text fw={400} c="dimmed" size="sm">
              Attributes: {Object.keys(attributes)?.length}
            </Text>
          </Flex>

          <Button color="blue" fullWidth mt="md" radius="md">
            Studio
          </Button>
        </Card>

        <Card padding="lg" radius="md" withBorder miw={450} w={"30%"}>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Pokémon</Text>
            <Badge color="pink">Pokédex</Badge>
          </Group>

          <Text fw={400} c="dimmed" size="sm">
            Pokémon: {Object.keys(allPokemon).length}
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Pokemondb
          </Button>
        </Card>
      </Flex>
    </>
  )
}
