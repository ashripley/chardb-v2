import { Paper, Flex, ScrollArea, Button, Loader } from "@mantine/core"
import { customTheme } from "../customTheme"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { DashboardContent } from "../components/DashboardContent"
import styled from "styled-components"
import { allAttributes } from "../api/attributes"
import { allCards } from "../api/cards"
import { allPokemon } from "../api/pokemon"

const StyledScrollArea = styled(ScrollArea)`
  & > div > div {
    height: 95%;
  }
`

export const Dashboard = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    try {
      setIsLoading(true)
      allCards(dispatch)
      allPokemon(dispatch)
      allAttributes(dispatch)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

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
                      bg={"white"}
                      radius="lg"
                      w={"40%"}
                      miw={120}
                      onClick={() => {}}
                      styles={{
                        label: {
                          color: customTheme.colours.bg.bgDarkGray100,
                        },
                      }}
                    >
                      Analytics
                    </Button>
                  </Flex>
                </Flex>
                <StyledScrollArea
                  h={"90%"}
                  w={"95%"}
                  type="never"
                  style={{ borderRadius: 15 }}
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
                    <Flex
                      justify="space-evenly"
                      wrap="wrap"
                      gap={20}
                      h={"100%"}
                    >
                      <DashboardContent />
                    </Flex>
                  )}
                </StyledScrollArea>
              </Flex>
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  )
}
