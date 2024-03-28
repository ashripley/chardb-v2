import { Paper, Flex } from "@mantine/core"
import { customTheme } from "../customTheme"
import { StudioSwitch } from "../components/Switches/StudioSwitch"
import { StudioCard } from "../components/Custom/StudioCard"
import { DataStudio } from "../components/DataStudio"
import { DataCard } from "../components/DataCard"
import { GallerySortSwitch } from "../components/Switches/GallerySortSwitch"
import { StudioStore } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { AllPokemon } from "../api/queries/allPokemon"
import { setAllPokemon, setView } from "../redux/studio"
import { updatePokemon } from "../redux/card"
import { CreateCard } from "../components/Card Studio/CreateCard"
import { UpdateCard } from "../components/Card Studio/UpdateCard"
import { fetchAttributes } from "../api/queries/attributes"
import { fetchPokemonData } from "../api/queries/pokemon"

export const Studio = () => {
  const { view } = useSelector((state: StudioStore) => state.studio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setView("create"))
    dispatch(updatePokemon({}))
    fetchPokemonData(dispatch)
    fetchAttributes(dispatch)
  }, [])

  return (
    <>
      <Flex direction={"row"} w={"100%"} h={"calc(100% - 75px)"} p="xs">
        <Flex
          w={"5%"}
          h={"95%"}
          align={"center"}
          justify={"center"}
          miw={70}
          pr={10}
        >
          <StudioSwitch />
        </Flex>
        <Flex direction={"column"} h={"100%"} w={"90%"} align={"center"}>
          <Paper
            radius="xl"
            p="lg"
            m="auto"
            w="100%"
            h={"100%"}
            bg={customTheme.colours.bg.bgGray25}
          >
            <Flex w={"100%"} h="100%" align={"center"} direction={"column"}>
              <Flex
                w={"100%"}
                h="100%"
                justify={"center"}
                align={"center"}
                direction={"row"}
              >
                <Flex w={"60%"}>
                  {view === "create" ? (
                    <CreateCard />
                  ) : view === "update" ? (
                    <UpdateCard />
                  ) : view === "db" ? (
                    <DataStudio />
                  ) : (
                    <></>
                  )}
                </Flex>
                <Flex w={"40%"} h={550}>
                  {view === "create" ? (
                    <StudioCard />
                  ) : view === "update" ? (
                    <StudioCard />
                  ) : view === "db" ? (
                    <DataCard />
                  ) : (
                    <></>
                  )}
                </Flex>
              </Flex>
              {view === "db" && (
                <Flex
                  w={"100%"}
                  h={"auto"}
                  mih={100}
                  align={"center"}
                  justify={"center"}
                >
                  <GallerySortSwitch />
                </Flex>
              )}
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  )
}
