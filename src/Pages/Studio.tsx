import { Paper, Flex } from "@mantine/core"
import { customTheme } from "../customTheme"
import { StudioSwitch } from "../components/Switches/StudioSwitch"
import { CardStudio } from "../components/CardStudio"
import { StudioCard } from "../components/Custom/StudioCard"
import { DataStudio } from "../components/DataStudio"
import { DataCard } from "../components/DataCard"
import { GallerySortSwitch } from "../components/Switches/GallerySortSwitch"
import { StudioStore } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { AllPokemon } from "../api/queries/allPokemon"
import { setAllPokemon, setAttributes } from "../redux/studio"
import { AllAttributes } from "../api/queries/allAttributes"

export const Studio = () => {
  const { view } = useSelector((state: StudioStore) => state.studio)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchPokemonData()
    fetchAttributes()
  }, [])

  const fetchPokemonData = async () => {
    const fetchedPokemonData = await AllPokemon()

    dispatch(setAllPokemon(fetchedPokemonData))
  }

  const fetchAttributes = async () => {
    // let tempAttributeData: Record<string, any> = {}
    const fetchedAttributes: Record<string, any> = await AllAttributes()

    console.log("fetchedAttributes", fetchedAttributes)

    // Object.values(fetchedAttributes).map((att: Record<string, any>) => {s
    //   console.log("attribute", att)

    //   tempAttributeData = {
    //     ...tempAttributeData,
    //     [att.attribute]: [...tempAttributeData[att.attribute], att],
    //   }
    //   console.log("tempAttributeData", tempAttributeData)
    // })

    // dispatch(setAttributes(fetchedAttributes))
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
                    <CardStudio />
                  ) : view === "update" ? (
                    <CardStudio />
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
