import { Paper, Flex } from "@mantine/core"
import { theme } from "../customTheme"
import { StudioSwitch } from "../components/Switches/StudioSwitch"
import { StudioCard } from "../components/Cards/StudioCard"
import { StudioDatabaseEntry } from "../components/StudioDatabaseEntry"
import { GallerySortSwitch } from "../components/Switches/GallerySortSwitch"
import { StudioStore } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setView } from "../redux/studio"
import { updatePokemon } from "../redux/card"
import { StudioCardEntry } from "../components/Cards/StudioCardEntry"
import { StudioUpdateCardEntry } from "../components/Cards/StudioUpdateCardEntry"
import { allAttributes } from "../api/attributes"
import { allPokemon } from "../api/pokemon"
import { StudioDatabaseCanvas } from "../components/Cards/StudioDatabaseCanvas"

export const Studio = () => {
  const { view } = useSelector((state: StudioStore) => state.studio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setView("create"))
    dispatch(updatePokemon({}))
    allPokemon(dispatch)
    allAttributes(dispatch)
  }, [])

  const viewComponentContent = {
    create: {
      left: <StudioCardEntry />,
      right: <StudioCard />,
    },
    update: {
      left: <StudioUpdateCardEntry />,
      right: <StudioCard />,
    },
    db: {
      left: <StudioDatabaseEntry />,
      right: <StudioDatabaseCanvas />,
    },
  }

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
            bg={theme.colours.bg.bgGray25}
          >
            <Flex w={"100%"} h="100%" align={"center"} direction={"column"}>
              <Flex
                w={"100%"}
                h="100%"
                justify={"center"}
                align={"center"}
                direction={"row"}
              >
                <Flex w={"60%"}>{viewComponentContent[view].left}</Flex>
                <Flex w={"40%"} h={550}>
                  {viewComponentContent[view].right}
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
