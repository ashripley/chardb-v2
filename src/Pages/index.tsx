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
          <Space h="1%" />
          <Flex
            w={"95%"}
            maw={"95%"}
            h={"5%"}
            justify="flex-start"
            align="center"
            m={"auto"}
          >
            <CustomHeader isCustomLabel customLabel="gallery" />
          </Flex>
          <Space h="1%" />
          <Paper
            radius="xl"
            p="lg"
            m="auto"
            w="95%"
            h="92%"
            bg={customTheme.colours.bg.bgGray25}
          >
            <Flex w={"100%"} h={"100%"}>
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
                justify={"center"}
                align={"center"}
                direction={"column"}
                h={"100%"}
                w={"90%"}
              >
                <Flex
                  w={"95%"}
                  h={"auto"}
                  mih={100}
                  align={"center"}
                  justify={"space-between"}
                >
                  <Flex w={"auto"} miw={300} justify={"space-between"}>
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
                  <Flex w={"auto"} miw={600} justify={"space-between"}>
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
                <ScrollArea h={"90%"} type="scroll">
                  <Flex justify="space-evenly" wrap="wrap" gap={20}>
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
              <Space w={"auto"} h={"100%"} miw={100} />
            </Flex>
          </Paper>
          <Space h="1%" />
        </Paper>
      </Center>
    </>
  )
}
