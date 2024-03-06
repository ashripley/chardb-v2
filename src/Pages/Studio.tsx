import { Paper, Flex } from "@mantine/core"
import { customTheme } from "../customTheme"
import { StudioSwitch } from "../components/Switches/StudioSwitch"
import { CardStudio } from "../components/CardStudio"
import { CustomCard } from "../components/Custom/CustomCard"
import { DataStudio } from "../components/DataStudio"
import { DataCard } from "../components/DataCard"
import { GallerySortSwitch } from "../components/Switches/GallerySortSwitch"
import { StudioStore } from "../redux/store"
import { useSelector } from "react-redux"

export const Studio = () => {
  const { view } = useSelector((state: StudioStore) => state.studio)

  return (
    <>
      <Flex direction={"row"} w={"100%"} h={"calc(100% - 75px)"}>
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
            h="90%"
            bg={customTheme.colours.bg.bgGray25}
          >
            <Flex w={"100%"} h="100%" align={"center"}>
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
              <Flex w={"40%"} h={"60%"} mih={550}>
                {view === "create" ? (
                  <CustomCard />
                ) : view === "update" ? (
                  <CustomCard />
                ) : view === "db" ? (
                  <DataCard />
                ) : (
                  <></>
                )}
              </Flex>
            </Flex>
          </Paper>
          <Flex
            w={"100%"}
            h={"auto"}
            mih={100}
            align={"center"}
            justify={"center"}
          >
            <GallerySortSwitch />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
