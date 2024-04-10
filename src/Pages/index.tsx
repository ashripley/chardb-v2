import { Paper, Center, Flex } from "@mantine/core"
import { NavigationBar } from "../components/NavigationBar"
import { Gallery } from "./Gallery"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { Studio } from "./Studio"
import { theme } from "../customTheme"
import { Dashboard } from "./Dashboard"
import { Home } from "./Home"

export const Index = () => {
  const { page } = useSelector((state: RootStore) => state.root)

  const pages: Record<string, JSX.Element> = {
    Gallery: <Gallery />,
    Studio: <Studio />,
    Dashboard: <Dashboard />,
    Home: <Home />,
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
          bg={theme.colours.bg.bgGray15}
        >
          <Flex w={"95%"} h={75} justify="center" align="center" m={"auto"}>
            <NavigationBar />
          </Flex>
          {pages[page]}
        </Paper>
      </Center>
    </>
  )
}
