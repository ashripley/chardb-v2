import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import { Index } from "./Pages"

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {/* <Welcome /> */}
      <Index />
      {/* <ColorSchemeToggle /> */}
    </MantineProvider>
  )
}
