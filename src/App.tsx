import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { Index } from "./Pages"
import { theme } from "./theme"

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {/* <Welcome /> */}
      <Index />
      {/* <ColorSchemeToggle /> */}
    </MantineProvider>
  )
}
