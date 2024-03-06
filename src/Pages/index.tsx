import { Paper, Center, Flex } from "@mantine/core"
import { CustomHeader } from "../components/Custom/CustomHeader"
import { Gallery } from "./Gallery"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { Studio } from "./Studio"

export const Index = () => {
  const { app } = useSelector((state: RootStore) => state.root)

  return (
    <>
      <Center h="100vh" w={"100vw"} display={"block"}>
        <Paper p="sm" m="auto" w={"100%"} h={"100%"} mah={"100%"}>
          <Flex
            w={"90%"}
            maw={"95%"}
            h={75}
            justify="flex-start"
            align="center"
            m={"auto"}
          >
            <CustomHeader isCustomLabel customLabel={app} />
          </Flex>
          {app === "gallery" ? <Gallery /> : <Studio />}
        </Paper>
      </Center>
    </>
  )
}
