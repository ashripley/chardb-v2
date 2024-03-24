import { Button, Chip, Flex, Group, Paper, Space } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { customTheme } from "../../customTheme"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { updateApp } from "../../redux/root"
import { AppType } from "../../config"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"

export const CustomHeader = () => {
  const apps = ["Gallery", "Studio", "Dashboard"]
  const { app } = useSelector((state: RootStore) => state.root)
  const dispatch = useDispatch()

  const onAppChange = (name: AppType) => {
    dispatch(updateApp(name))
  }

  return (
    <Paper
      radius="xl"
      p="xs"
      w={"auto"}
      h={"auto"}
      display="flex"
      style={{ alignItems: "center" }}
    >
      <Space w={10} />
      <Flex justify="flex-start" align="center" h={"100%"}>
        <Paper h={30} w={30} radius={"xl"}>
          <Flex justify="center" align="center" h={"100%"} w={"100%"}>
            <IconFlame
              width={25}
              height={25}
              fill={customTheme.colours.accents.char}
              color={customTheme.colours.accents.char}
              stroke={1}
            />
          </Flex>
        </Paper>
      </Flex>
      <Space w={25} />
      <Flex justify="flex-start" h={"100%"} w={"100%"}>
        {apps.map((appName: string, index: number) => (
          <>
            <Button
              fz={14}
              fw={500}
              c={appName === app ? "white" : customTheme.colours.font.primary}
              key={index}
              variant={appName === app ? "filled" : "transparent"}
              color={customTheme.colours.bg.bgDarkGray75}
              radius={"xl"}
              value={appName}
              onClick={() => onAppChange(upperCaseFirst(appName) as AppType)}
            >
              {appName}
            </Button>
            <Space w={25} />
          </>
        ))}
      </Flex>
    </Paper>
  )
}
