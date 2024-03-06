import {
  Button,
  Center,
  Flex,
  NumberInput,
  Select,
  Space,
  Switch,
  Title,
} from "@mantine/core"
import classes from "../modules/Select.module.css"
import numberClasses from "../modules/NumberInput.module.css"
import { customTheme } from "../customTheme"
import { useDispatch, useSelector } from "react-redux"
import { updatePokemon } from "../redux/card"
import { CardStore } from "../redux/store"

export const CardStudio = () => {
  const { tempPokemon } = useSelector((state: CardStore) => state.card)
  const dispatch = useDispatch()

  return (
    <Center h={"100%"} w={"100%"}>
      <Flex
        h="100%"
        w="100%"
        direction={"column"}
        justify={"center"}
        align={"center"}
        m="auto"
      >
        <Flex h="10%">
          <Title size="h3" fw={600} c={customTheme.colours.font.primary}>
            Create Your Card
          </Title>
        </Flex>
        <Space h={50} />
        <Flex h="80%" direction={"column"} gap={25}>
          <Flex w={"100%"}>
            <Select
              placeholder="Name"
              data={["Bulbasaur", "Squirtle", "Charmander", "Pikachu"]}
              searchable
              radius={"lg"}
              w={"100%"}
              rightSection
              variant="filled"
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updatePokemon({ name: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Select
              placeholder="Set"
              data={["Base", "Base Set 2", "Jungle", "Fossil"]}
              searchable
              rightSection
              radius={"lg"}
              variant="filled"
              w={"45%"}
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updatePokemon({ set: val }))}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              w={"45%"}
              placeholder="Set Number"
              classNames={{ input: numberClasses.input }}
              hideControls
              onChange={(val) => dispatch(updatePokemon({ setNumber: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Select
              placeholder="Type Of Card"
              data={["Holo", "Standard", "Full Art", "Shadowless"]}
              searchable
              radius={"lg"}
              w={"45%"}
              rightSection
              variant="filled"
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updatePokemon({ typeOfCard: val }))}
            />
            <Select
              placeholder="Condition"
              data={["Excellent", "Good", "Great", "Poor"]}
              searchable
              radius={"lg"}
              w={"45%"}
              rightSection
              variant="filled"
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updatePokemon({ condition: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Year"
              classNames={{ input: numberClasses.input }}
              w={"45%"}
              hideControls
              onChange={(val) => dispatch(updatePokemon({ year: val }))}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Quantity"
              classNames={{ input: numberClasses.input }}
              w={"45%"}
              hideControls
              onChange={(val) => dispatch(updatePokemon({ quantity: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Switch
              defaultChecked={false}
              color="gray"
              labelPosition="left"
              label="Graded?"
              size="md"
              w={"45%"}
              onChange={(val) =>
                dispatch(updatePokemon({ isGraded: val.target.checked }))
              }
              h={"100%"}
            />
            {tempPokemon?.isGraded && (
              <NumberInput
                variant="filled"
                radius="lg"
                placeholder="Grading"
                classNames={{ input: numberClasses.input }}
                w={"45%"}
                hideControls
                onChange={(val) => dispatch(updatePokemon({ grading: val }))}
              />
            )}
          </Flex>
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
