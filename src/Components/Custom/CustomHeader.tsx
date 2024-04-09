import { ActionIcon, Button, Flex, Paper, Space } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { customTheme } from "../../customTheme"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { updateApp } from "../../redux/root"
import { AppType } from "../../config"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"
import { Fragment } from "react"

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
            <ActionIcon
              radius={"xl"}
              bg={"white"}
              variant="subtle"
              onClick={() => onAppChange("Home" as AppType)}
            >
              <IconFlame
                width={25}
                height={25}
                fill={customTheme.colours.accents.char}
                color={customTheme.colours.accents.char}
                stroke={1}
              />
            </ActionIcon>
          </Flex>
        </Paper>
      </Flex>
      <Space w={25} />
      <Flex justify="flex-start" h={"100%"} w={"100%"}>
        {apps.map((appName: string) => (
          <Fragment key={appName}>
            <Button
              fz={14}
              fw={500}
              c={appName === app ? "white" : customTheme.colours.font.primary}
              variant={appName === app ? "filled" : "transparent"}
              color={customTheme.colours.bg.bgDarkGray75}
              radius={"xl"}
              value={appName}
              onClick={() => onAppChange(upperCaseFirst(appName) as AppType)}
            >
              {appName}
            </Button>
            <Space w={25} />
          </Fragment>
        ))}
      </Flex>
    </Paper>
  )
}
