import { Paper, Flex } from "@mantine/core"
import { customTheme } from "../customTheme"
import { StudioSwitch } from "../Components/StudioSwitch"
import { CardStudio } from "../Components/CardStudio"
import { CustomCard } from "../Components/CustomCard"
import { DataStudio } from "../Components/DataStudio"
import { DataCard } from "../Components/DataCard"

export const Studio = () => {
  return (
    <>
      <Flex direction={"row"} w={"100%"} h={"95%"}>
        <Flex
          w={"5%"}
          h={"100%"}
          align={"center"}
          justify={"center"}
          miw={70}
          pr={10}
        >
          <StudioSwitch />
        </Flex>
        <Flex
          direction={"column"}
          h={"100%"}
          w={"90%"}
          justify={"center"}
          align={"center"}
        >
          <Paper
            radius="xl"
            p="lg"
            m="auto"
            w="100%"
            h="95%"
            bg={customTheme.colours.bg.bgGray25}
          >
            <Flex w={"100%"} h="100%" align={"center"}>
              <Flex w={"60%"}>
                <DataStudio />
              </Flex>
              <Flex w={"40%"} h={"60%"}>
                <DataCard />
              </Flex>
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  )
}
