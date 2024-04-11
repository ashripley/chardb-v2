import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "./styles.css"
import { Center, Flex, MantineProvider, Paper } from "@mantine/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import { Index } from "./pages"
import { theme } from "./theme"
import { theme as customTheme } from "../src/theme/theme"
import { Home } from "./pages/Home/Home"
import { Gallery } from "./pages/Gallery/Gallery"
import { Studio } from "./pages/Studio/Studio"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { NavigationBar } from "./components/Common/NavigationBar"

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
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
              <NavigationBar />
            </Flex>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Paper>
        </Center>
      </Router>
      {/* <Index /> */}
    </MantineProvider>
  )
}
