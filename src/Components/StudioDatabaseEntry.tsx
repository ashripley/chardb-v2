import { Button, Center, Flex, Space, Title } from "@mantine/core"
import { theme } from "../customTheme"
import { Sets } from "./Sections/Sets"
import { CardTypes } from "./Sections/CardTypes"
import { Types } from "./Sections/Types"
import { Conditions } from "./Sections/Conditions"
import { StudioStore } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addAttributeMutation } from "../api/attributes"
import { setAttributes, updateAttribute } from "../redux/studio"

export const StudioDatabaseEntry = () => {
  const { dbType, attribute, isDirty } = useSelector(
    (state: StudioStore) => state.studio
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const dbTypeMap: Record<string, any> = {
    set: { label: "Set", component: <Sets /> },
    cardType: { label: "Card Type", component: <CardTypes /> },
    type: { label: "Type", component: <Types /> },
    condition: { label: "Condition", component: <Conditions /> },
  }

  const onSave = async () => {
    try {
      setIsLoading(true)

      await addAttributeMutation(dbType, {
        ...attribute[dbType],
      })
      // clearFields()
    } catch (e) {
      console.error("Error saving attribute DB: ", e)
    } finally {
      setTimeout(() => {
        dispatch(updateAttribute({}))
        dispatch(setAttributes({ isCreate: true, ...attribute }))
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <Center h={"100%"} w={"100%"}>
      <Flex
        h="100%"
        w="100%"
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        m="auto"
      >
        <Title size="h3" fw={600} c={theme.colours.fonts.primary}>
          Create {dbTypeMap[dbType].label}
        </Title>
        <Space h={50} />
        {dbTypeMap[dbType].component}
        <Space h={50} />
        <Flex h="10%">
          <Button
            variant="filled"
            bg={"white"}
            radius="lg"
            size="lg"
            miw={250}
            styles={{
              label: {
                color: theme.colours.bg.bgDarkGray100,
              },
            }}
            onClick={onSave}
            loading={isLoading}
            loaderProps={{
              type: "dots",
              color: theme.colours.accents.char,
            }}
            disabled={!isDirty}
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
