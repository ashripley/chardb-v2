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
import { useDispatch, useSelector } from "react-redux"
import { setIsDirty, updatePokemon } from "../redux/card"
import { CardStore, StudioStore } from "../redux/store"
import { useState } from "react"
import { upperCaseFirst } from "../helpers/upperCaseFirst"
import { customTheme } from "../customTheme"
import { addPokemonCard } from "../api/mutations/addCard"

export const CardStudio = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { tempPokemon, isDirty } = useSelector((state: CardStore) => state.card)
  const { allPokemon } = useSelector((state: StudioStore) => state.studio)
  const dispatch = useDispatch()

  const pokemonNames = Object.keys(allPokemon)
    .map((name) => upperCaseFirst(name))
    .sort()

  const onPokemonChange = (val: any) => {
    dispatch(updatePokemon({ ...allPokemon[val?.toLowerCase()] }))
  }

  const onCreate = async () => {
    try {
      setIsLoading(true)
      // mutate the created card
      tempPokemon && (await addPokemonCard(tempPokemon))
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
        dispatch(setIsDirty(false))
        dispatch(updatePokemon({}))
      }, 1000)
    }
  }

  console.log("tempPokemon", tempPokemon)

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
              data={pokemonNames}
              searchable
              radius={"lg"}
              w={"100%"}
              rightSection
              required
              variant="filled"
              classNames={{ input: classes.input }}
              onChange={onPokemonChange}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Select
              placeholder="Set"
              data={["Base", "Base Set 2", "Jungle", "Fossil"]}
              searchable
              rightSection
              value={tempPokemon.set ?? null}
              radius={"lg"}
              variant="filled"
              w={"45%"}
              required
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
              required
              value={tempPokemon.setNumber ?? ""}
              onChange={(val) => dispatch(updatePokemon({ setNumber: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Select
              placeholder="Card Type"
              data={["Holo", "Standard", "Full Art", "Shadowless"]}
              searchable
              radius={"lg"}
              w={"45%"}
              rightSection
              variant="filled"
              required
              value={tempPokemon.cardType ?? null}
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updatePokemon({ cardType: val }))}
            />
            <Select
              placeholder="Condition"
              data={["Excellent", "Good", "Great", "Poor"]}
              searchable
              radius={"lg"}
              w={"45%"}
              rightSection
              variant="filled"
              required
              value={tempPokemon.condition ?? null}
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
              required
              value={tempPokemon.year ?? ""}
              onChange={(val) => dispatch(updatePokemon({ year: val }))}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Quantity"
              classNames={{ input: numberClasses.input }}
              w={"45%"}
              hideControls
              required
              value={tempPokemon.quantity ?? ""}
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
              value={tempPokemon.isGraded ?? null}
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
                required
                value={tempPokemon.grading ?? ""}
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
            onClick={onCreate}
            loading={isLoading}
            loaderProps={{
              type: "dots",
              color: customTheme.colours.accents.char,
            }}
            disabled={!isDirty}
          >
            Create
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
