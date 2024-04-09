import {
  Container,
  Flex,
  Title,
  Text,
  TextInput,
  rem,
  Button,
  Card,
  Space,
  Paper,
} from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import classes from "../modules/TextInput.module.css"
import { customTheme } from "../customTheme"
import { createElement } from "react"

const icon = (
  <IconSearch style={{ width: rem(15), height: rem(15) }} color="white" />
)

const styles = {
  borderRadius: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}

export const Home = () => {
  return (
    <>
      <Container h={"calc(100% - 75px)"} m={"auto"}>
        <Flex
          direction={"column"}
          m={"auto"}
          gap={25}
          h={"100%"}
          justify={"space-evenly"}
        >
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            h={"35%"}
          >
            <Title
              order={1}
              fw={600}
              c={customTheme.colours.font.primary}
              ff={customTheme.font.primary}
            >
              A Place To Store Your Nostalgia
            </Title>
            <Space h={10} />
            <Text
              size="md"
              fw={400}
              c={customTheme.colours.font.primary}
              ff={customTheme.font.primary}
            >
              Welcome to chardb. A collection site for your Pokémon cards.
            </Text>
            <Space h={35} />
            <Flex w={"auto"} justify={"center"} gap={10} align={"center"}>
              <TextInput
                radius="lg"
                placeholder="Search for a Pokemon"
                variant="filled"
                classNames={{ input: classes.textInput }}
                w={300}
                leftSection={icon}
              />
              <Button
                variant="filled"
                bg={customTheme.colours.accents.char}
                radius="lg"
                w={100}
                styles={{
                  label: {
                    color: "white",
                  },
                }}
              >
                Search
              </Button>
            </Flex>
          </Flex>
          <Flex
            w={"100%"}
            justify={"center"}
            direction={"column"}
            align={"center"}
            h={"60%"}
          >
            <Card
              h={100}
              w={"70%"}
              bg={customTheme.colours.accents.squir}
              style={{ ...styles.borderRadius }}
            >
              <Flex
                justify={"space-between"}
                m={"auto"}
                p={"xl"}
                w={"100%"}
                h={"100%"}
                align={"center"}
              >
                <Title
                  order={3}
                  fw={600}
                  c={"white"}
                  ff={customTheme.font.primary}
                >
                  Squirtle
                </Title>
                <Paper
                  h={35}
                  w={35}
                  bg="var(--mantine-color-white)"
                  radius={"xl"}
                >
                  <Flex justify="center" align="center" h={"100%"} w={"100%"}>
                    {createElement(customTheme.icons.water, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: customTheme.colours.types.water,
                    })}
                  </Flex>
                </Paper>
              </Flex>
            </Card>
            <Card
              h={100}
              w={"80%"}
              bg={customTheme.colours.accents.bulb}
              style={{ ...styles.borderRadius }}
            >
              <Flex
                justify={"space-between"}
                m={"auto"}
                p={"xl"}
                w={"100%"}
                h={"100%"}
                align={"center"}
              >
                <Title
                  order={3}
                  fw={600}
                  c={"white"}
                  ff={customTheme.font.primary}
                >
                  Bulbasaur
                </Title>
                <Paper
                  h={35}
                  w={35}
                  bg="var(--mantine-color-white)"
                  radius={"xl"}
                >
                  <Flex justify="center" align="center" h={"100%"} w={"100%"}>
                    {createElement(customTheme.icons.grass, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: customTheme.colours.types.grass,
                    })}
                  </Flex>
                </Paper>
              </Flex>
            </Card>
            <Card
              h={300}
              w={"90%"}
              bg={customTheme.colours.accents.char}
              style={{ ...styles.borderRadius }}
              pb={0}
            >
              <Flex
                justify={"space-between"}
                m={"auto"}
                p={"xl"}
                w={"100%"}
                align={"flex-start"}
                h={"30%"}
              >
                <Title
                  order={3}
                  fw={600}
                  c={"white"}
                  ff={customTheme.font.primary}
                >
                  Charmander
                </Title>
                <Paper
                  h={35}
                  w={35}
                  bg="var(--mantine-color-white)"
                  radius={"xl"}
                >
                  <Flex justify="center" align="center" h={"100%"} w={"100%"}>
                    {createElement(customTheme.icons.fire, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: customTheme.colours.types.fire,
                    })}
                  </Flex>
                </Paper>
              </Flex>
              <Space h={20} />
              <Flex w={"100%"} justify={"center"} h={"70%"}>
                <Paper
                  w={"90%"}
                  h={"100%"}
                  bg={"white"}
                  radius={"lg"}
                  style={{ ...styles.borderRadius }}
                >
                  <Flex
                    w={"100%"}
                    h={"100%"}
                    justify={"center"}
                    align={"center"}
                  >
                    <img
                      src={
                        "https://img.pokemondb.net/sprites/home/normal/charmander.png"
                      }
                      width={"auto"}
                      height={"auto"}
                      style={{
                        position: "relative",
                        top: "25%",
                        maxWidth: 250,
                      }}
                    />
                  </Flex>
                </Paper>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
