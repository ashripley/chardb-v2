import { Paper, Center, Flex } from "@mantine/core"
import { CustomHeader } from "../components/Custom/CustomHeader"
import { Gallery } from "./Gallery"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { Studio } from "./Studio"
import { customTheme } from "../customTheme"
import { Dashboard } from "./Dashboard"

export const Index = () => {
  const { app } = useSelector((state: RootStore) => state.root)

  const apps: Record<string, JSX.Element> = {
    Gallery: <Gallery />,
    Studio: <Studio />,
    Dashboard: <Dashboard />,
  }

  return (
    <>
      <Center h="100vh" w={"100vw"} display={"block"}>
        <Paper
          p="sm"
          m="auto"
          w={"100%"}
          h={"100%"}
          mah={"100%"}
          bg={customTheme.colours.bg.bgGray15}
        >
          <Flex w={"95%"} h={75} justify="center" align="center" m={"auto"}>
            <CustomHeader />
          </Flex>
          {apps[app]}
        </Paper>
      </Center>
    </>
  )
}
