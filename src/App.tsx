import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "./styles.css"
import { MantineProvider } from "@mantine/core"
import { Index } from "./pages"
import { theme } from "./theme"

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Index />
    </MantineProvider>
  )
}
