import { Button, Center, Flex, NumberInput, Select, Space } from "@mantine/core"
import classes from "../modules/Select.module.css"
import numberClasses from "../modules/NumberInput.module.css"
import { customTheme } from "../customTheme"

export const DataStudio = () => {
  return (
    <Center h={"100%"} w={"100%"}>
      <Flex
        h="100%"
        w="100%"
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        m="auto"
      >
        <Space h={50} />
        <Flex h="80%" direction={"column"} gap={25}>
          <Select
            placeholder="Name"
            data={["Bulbasaur", "Squirtle", "Charmander", "Pikachu"]}
            searchable
            radius={"lg"}
            w={"100%"}
            rightSection
            variant="filled"
            classNames={{ input: classes.input }}
          />
          <NumberInput
            variant="filled"
            radius="lg"
            placeholder="Year"
            classNames={{ input: numberClasses.input }}
            w={"100%"}
            hideControls
          />
        </Flex>
        <Space h={50} />
        <Flex h="10%">
          <Button
            variant="filled"
            bg={"white"}
            radius="lg"
            size="lg"
            miw={250}
            styles={{
              label: {
                color: customTheme.colours.bg.bgDarkGray100,
              },
            }}
          >
            Create
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
