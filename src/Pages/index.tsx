import { Paper, Center, Flex } from "@mantine/core"
import { CustomHeader } from "../Components/CustomHeader"
import { Studio } from "./Studio"
import { Gallery } from "./Gallery"

export const Index = () => {
  return (
    <>
      <Center h="100vh" w={"100vw"} display={"block"}>
        <Paper p="sm" m="auto" w={"100%"} h={"100%"} mah={"100%"}>
          <Flex
            w={"90%"}
            maw={"95%"}
            h="75"
            justify="flex-start"
            align="center"
            m={"auto"}
          >
            <CustomHeader isCustomLabel customLabel="studio" />
          </Flex>
          {/* <Gallery /> */}
          <Studio />
        </Paper>
      </Center>
    </>
  )
}
