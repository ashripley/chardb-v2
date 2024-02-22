import { Center, Flex, NumberInput, Select, Switch, Title } from "@mantine/core"
import classes from "../modules/Select.module.css"
import numberClasses from "../modules/NumberInput.module.css"

export const CreateCard = () => {
  return (
    <Center>
      <Flex h="100%" direction={"column"}>
        <Flex h="10%">
          <Title>Create Your Card</Title>
        </Flex>
        <Flex h="80%" direction={"column"}>
          <Flex>
            <Select
              placeholder="Name"
              data={["Bulbasaur", "Squirtle", "Charmander", "Pikachu"]}
              searchable
              radius={"lg"}
              rightSection
              variant="filled"
              classNames={{ input: classes.input }}
            />
          </Flex>
          <Flex>
            <Select
              placeholder="Set"
              data={["Base", "Base Set 2", "Jungle", "Fossil"]}
              searchable
              rightSection
              radius={"lg"}
              variant="filled"
              classNames={{ input: classes.input }}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Set Number"
              classNames={{ input: numberClasses.input }}
            />
          </Flex>
          <Flex>
            <Select
              placeholder="Type Of Card"
              data={["Holo", "Standard", "Full Art", "Shadowless"]}
              searchable
              radius={"lg"}
              rightSection
              variant="filled"
              classNames={{ input: classes.input }}
            />
            <Select
              placeholder="Condition"
              data={["Excellent", "Good", "Great", "Poor"]}
              searchable
              radius={"lg"}
              rightSection
              variant="filled"
              classNames={{ input: classes.input }}
            />
          </Flex>
          <Flex>
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Year"
              classNames={{ input: numberClasses.input }}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Quantity"
              classNames={{ input: numberClasses.input }}
            />
          </Flex>
          <Flex>
            <Switch
              defaultChecked
              color="gray"
              labelPosition="left"
              label="Graded?"
              size="md"
            />{" "}
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Grading"
              classNames={{ input: numberClasses.input }}
            />
          </Flex>
        </Flex>
        <Flex h="10%"></Flex>
      </Flex>
    </Center>
  )
}
