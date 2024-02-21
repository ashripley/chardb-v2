import {
  Paper,
  Center,
  Space,
  Flex,
  ScrollArea,
  Button,
  TextInput,
  rem,
} from "@mantine/core"
import { CustomHeader } from "../Components/CustomHeader"
import { customTheme } from "../customTheme"
import { CustomCard } from "../Components/CustomCard"
import { ViewSwitch } from "../Components/ViewSwitch"
import { FilterSwitch } from "../Components/FilterSwitch"
import classes from "../modules/TextInput.module.css"
import { IconSearch } from "@tabler/icons-react"

export const Index = () => {
  const icon = (
    <IconSearch style={{ width: rem(15), height: rem(15) }} color="white" />
  )

  return (
    <>
      <Center h="100vh" w={"100vw"} display={"block"}>
        <Paper p="sm" m="auto" w={"100%"} h={"100%"} mah={"100%"}>
          <Flex
            w={"90%"}
            maw={"95%"}
            h={"5%"}
            justify="flex-start"
            align="center"
            m={"auto"}
          >
            <CustomHeader isCustomLabel customLabel="gallery" />
          </Flex>
          <Flex direction={"row"} w={"100%"} h={"95%"}>
            <Flex
              w={"auto"}
              h={"100%"}
              miw={100}
              align={"center"}
              justify={"center"}
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
                    >
                      <Flex
                        w={"auto"}
                        miw={300}
                        justify={"flex-start"}
                        gap={10}
                      >
                        <Button
                          variant="filled"
                          bg={"white"}
                          radius="lg"
                          w={"40%"}
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
                          styles={{
                            label: {
                              color: customTheme.colours.bg.bgDarkGray100,
                            },
                          }}
                        >
                          Pokedex
                        </Button>
                      </Flex>
                      <Flex w={"auto"} miw={600} justify={"flex-end"} gap={10}>
                        <TextInput
                          radius="lg"
                          placeholder="Search for a Pokemon"
                          variant="filled"
                          classNames={{ input: classes.textInput }}
                          w={"70%"}
                          leftSection={icon}
                        />
                        <Button
                          variant="filled"
                          bg={"white"}
                          radius="lg"
                          w={"20%"}
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
                    <ScrollArea h={"90%"} w={"95%"} type="never">
                      <Flex justify="space-between" wrap="wrap" gap={20}>
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
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
        </Paper>
      </Center>
    </>
  )
}
