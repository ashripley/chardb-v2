import { Paper, Flex } from "@mantine/core"
import { customTheme } from "../customTheme"
import { StudioSwitch } from "../Components/StudioSwitch"
import { CreateCard } from "../Components/CreateCard"
import { CustomCard } from "../Components/CustomCard"

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
            <Flex w={"100%"}>
              <Flex w={"60%"}>
                <CreateCard />
              </Flex>
              <Flex w={"40%"}>
                <CustomCard />
              </Flex>
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  )
}
