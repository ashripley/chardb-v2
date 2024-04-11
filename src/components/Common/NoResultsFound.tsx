import { Card, Flex, Space, Title } from "@mantine/core"
import { theme } from "../../theme/theme"

export const NoResultsFound = () => {
  return (
    <>
      <Card m={"auto"} p={"xl"} bg={"none"} h={"100%"} w={"100%"}>
        <Flex
          direction={"column"}
          gap={35}
          align={"center"}
          justify={"center"}
          bg={theme.colours.bg.bgGray0}
        >
          <Space h={"50%"} />
          <img
            src={"https://img.pokemondb.net/sprites/home/normal/snorlax.png"}
            width={180}
            height={180}
          />
          <Title
            size="h3"
            fw={400}
            c={theme.colours.fonts.primary}
            ff={theme.fonts.primary}
          >
            No Results Found...
          </Title>
        </Flex>
      </Card>
    </>
  )
}
