import { Paper, Flex, ScrollArea, Button, TextInput, rem } from "@mantine/core"
import { customTheme } from "../customTheme"
import { ViewSwitch } from "../Components/ViewSwitch"
import { FilterSwitch } from "../Components/FilterSwitch"
import classes from "../modules/TextInput.module.css"
import { IconSearch } from "@tabler/icons-react"
import { CustomTile } from "../Components/CustomTile"

export const Gallery = () => {
  const icon = (
    <IconSearch style={{ width: rem(15), height: rem(15) }} color="white" />
  )

  return (
    <>
      <Flex direction={"row"} w={"100%"} h={"95%"}>
        <Flex
          w={"5%"}
          h={"100%"}
          align={"center"}
          justify={"center"}
          miw={70}
          pr={10}
        >
          <ViewSwitch />
        </Flex>
        <Flex
          direction={"column"}
          h={"100%"}
          w={"90%"}
          justify={"center"}
          align={"center"}
        >
          <Paper
            radius="xl"
            p="lg"
            m="auto"
            w="100%"
            h="90%"
            bg={customTheme.colours.bg.bgGray25}
          >
            <Flex w={"100%"} h={"100%"} justify={"center"}>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                h={"100%"}
                w={"100%"}
              >
                <Flex
                  w={"95%"}
                  h={"auto"}
                  mih={100}
                  align={"center"}
                  justify={"space-between"}
                  wrap={"wrap"}
                >
                  <Flex
                    w={"auto"}
                    miw={300}
                    justify={"flex-start"}
                    gap={10}
                    wrap={"wrap"}
                  >
                    <Button
                      variant="filled"
                      bg={"white"}
                      radius="lg"
                      w={"40%"}
                      miw={120}
                      styles={{
                        label: {
                          color: customTheme.colours.bg.bgDarkGray100,
                        },
                      }}
                    >
                      Cards
                    </Button>
                    <Button
                      variant="filled"
                      bg={"transparent"}
                      radius="lg"
                      w={"40%"}
                      miw={120}
                      styles={{
                        label: {
                          color: customTheme.colours.bg.bgDarkGray100,
                        },
                      }}
                    >
                      Pokedex
                    </Button>
                  </Flex>
                  <Flex w={"auto"} justify={"flex-end"} gap={10}>
                    <TextInput
                      radius="lg"
                      placeholder="Search for a Pokemon"
                      variant="filled"
                      classNames={{ input: classes.textInput }}
                      w={"70%"}
                      leftSection={icon}
                      miw={300}
                    />
                    <Button
                      variant="filled"
                      bg={"white"}
                      radius="lg"
                      w={"20%"}
                      miw={120}
                      styles={{
                        label: {
                          color: customTheme.colours.bg.bgDarkGray100,
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Flex>
                </Flex>
                <ScrollArea
                  h={"90%"}
                  w={"95%"}
                  type="never"
                  style={{ borderRadius: 35 }}
                >
                  <Flex justify="space-evenly" wrap="wrap" gap={20}>
                    <CustomTile />
                  </Flex>
                </ScrollArea>
              </Flex>
            </Flex>
          </Paper>
          <Flex
            w={"100%"}
            h={"auto"}
            mih={100}
            align={"center"}
            justify={"center"}
          >
            <FilterSwitch />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
