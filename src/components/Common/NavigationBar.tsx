import { ActionIcon, Button, Flex, Paper, Space } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { theme } from "../../theme/theme"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { updateApp } from "../../redux/root"
import { AppType, isMobile } from "../../config"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"
import { Fragment } from "react"
import { Link } from "react-router-dom"

export const NavigationBar = () => {
  const apps = isMobile
    ? ["Gallery", "Dashboard"]
    : ["Gallery", "Studio", "Dashboard"]
  const { page: app } = useSelector((state: RootStore) => state.root)
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
          <Flex justify="center" align="flex-start" h={"100%"} w={"100%"}>
            <Link to={"/"} onClick={() => onAppChange("Home" as AppType)}>
              <ActionIcon radius={"xl"} bg={"white"} variant="subtle">
                <IconFlame
                  width={25}
                  height={25}
                  fill={theme.colours.accents.char}
                  color={theme.colours.accents.char}
                  stroke={1}
                />
              </ActionIcon>
            </Link>
          </Flex>
        </Paper>
      </Flex>
      <Space w={10} />
      <Flex justify="flex-start" h={"100%"} w={"100%"}>
        {apps.map((appName: string) => (
          <Fragment key={appName}>
            <Link
              to={`/${appName.toLowerCase()}`}
              onClick={() => onAppChange(upperCaseFirst(appName) as AppType)}
            >
              <Button
                fz={14}
                fw={500}
                c={appName === app ? "white" : theme.colours.fonts.primary}
                variant={appName === app ? "filled" : "transparent"}
                color={theme.colours.bg.bgDarkGray75}
                radius={"xl"}
                value={appName}
              >
                {appName}
              </Button>
              <Space w={25} />
            </Link>
          </Fragment>
        ))}
      </Flex>
    </Paper>
  )
}
