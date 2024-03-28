import {
  Paper,
  Flex,
  ScrollArea,
  Button,
  TextInput,
  rem,
  Loader,
} from "@mantine/core"
import { customTheme } from "../customTheme"
import classes from "../modules/TextInput.module.css"
import { IconSearch } from "@tabler/icons-react"
import { GalleryContent } from "../components/GalleryContent"
import { useEffect, useState } from "react"
import { allCards } from "../api/queries/allCards"
import { useDispatch, useSelector } from "react-redux"
import { setCards } from "../redux/card"
import { ViewSwitch } from "../components/Switches/ViewSwitch"
import { fetchAttributes } from "../api/queries/attributes"
import { setApp } from "../redux/gallery"
import { GalleryApp } from "../config"
import { GalleryStore } from "../redux/store"
import { fetchPokemonData } from "../api/queries/pokemon"

export const Gallery = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { app } = useSelector((state: GalleryStore) => state.gallery)

  useEffect(() => {
    fetchPokemonCards()
    fetchPokemonData(dispatch)
    fetchAttributes(dispatch)
  }, [])

  const fetchPokemonCards = async () => {
    let mappedCardsArray: Record<string, any>[] = []

    try {
      setIsLoading(true)

      const cards = await allCards()

      Object.entries(cards[0]).forEach(
        ([key, value]) =>
          (mappedCardsArray = [
            ...mappedCardsArray,
            { ["cardId"]: key, ...value },
          ])
      )

      dispatch(setCards(mappedCardsArray))
    } catch (e) {
    } finally {
      setIsLoading(false)
    }
  }

  const onGalleryChange = (name: GalleryApp) => {
    dispatch(setApp(name))
  }

  const icon = (
    <IconSearch style={{ width: rem(15), height: rem(15) }} color="white" />
  )

  return (
    <>
      <Flex direction={"row"} w={"100%"} h={"calc(100% - 75px)"} p="xs">
        <Flex direction={"column"} h={"100%"} w={"100%"} align={"center"}>
          <Paper
            radius="xl"
            p="lg"
            m="auto"
            w="100%"
            h="100%"
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
                      bg={app === "cards" ? "white" : "transparent"}
                      radius="lg"
                      w={"40%"}
                      miw={120}
                      onClick={() => onGalleryChange("cards")}
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
                      bg={app === "pokedex" ? "white" : "transparent"}
                      radius="lg"
                      w={"40%"}
                      miw={120}
                      onClick={() => onGalleryChange("pokedex")}
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
                    {app === "cards" && <ViewSwitch />}
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
                  {isLoading ? (
                    <Flex justify="center" align={"center"} h={"65vh"}>
                      <Loader
                        color={customTheme.colours.accents.char}
                        size="lg"
                        type="dots"
                      />
                    </Flex>
                  ) : (
                    <Flex justify="space-evenly" wrap="wrap" gap={20}>
                      <GalleryContent />
                    </Flex>
                  )}
                </ScrollArea>
              </Flex>
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  )
}
