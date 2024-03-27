import { Button, Center, Flex, Space } from "@mantine/core"
import { customTheme } from "../customTheme"
import { Sets } from "./DB/Sets"
import { CardTypes } from "./DB/CardTypes"
import { Types } from "./DB/Types"
import { Conditions } from "./DB/Conditions"
import { StudioStore } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { AddAttributeMutation } from "../api/mutations/addAttribute"
import { setAttributes, updateAttribute } from "../redux/studio"

export const DataStudio = () => {
  const { dbType, attribute, isDirty } = useSelector(
    (state: StudioStore) => state.studio
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const dbTypeMap: Record<string, JSX.Element> = {
    set: <Sets />,
    cardType: <CardTypes />,
    type: <Types />,
    condition: <Conditions />,
  }

  const onCreate = async () => {
    try {
      setIsLoading(true)

      await AddAttributeMutation(dbType, {
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
        <Space h={50} />
        {dbTypeMap[dbType]}
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
                color: customTheme.colours.bg.bgDarkGray100,
              },
            }}
            onClick={onCreate}
            loading={isLoading}
            loaderProps={{
              type: "dots",
              color: customTheme.colours.accents.char,
            }}
            disabled={!isDirty}
          >
            Create
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
