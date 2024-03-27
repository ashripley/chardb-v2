import { Flex, NumberInput, TextInput } from "@mantine/core"
import numberClasses from "../../modules/NumberInput.module.css"
import { useDispatch, useSelector } from "react-redux"
import { updateAttribute } from "../../redux/studio"
import { StudioStore } from "../../redux/store"

export const Sets = () => {
  const dispatch = useDispatch()
  const { attribute } = useSelector((state: StudioStore) => state.studio)

  return (
    <>
      <Flex h="80%" direction={"column"} gap={25}>
        <TextInput
          placeholder="Set"
          value={attribute["set"]?.name ?? ""}
          radius={"lg"}
          w={"100%"}
          rightSection
          variant="filled"
          classNames={{ input: numberClasses.input }}
          onChange={(event) =>
            dispatch(
              updateAttribute({
                set: { ...attribute["set"], name: event.currentTarget.value },
              })
            )
          }
        />
        <NumberInput
          variant="filled"
          radius="lg"
          placeholder="Total Cards"
          value={attribute["set"]?.totalCards ?? ""}
          classNames={{ input: numberClasses.input }}
          w={"100%"}
          hideControls
          onChange={(val) =>
            dispatch(
              updateAttribute({
                set: { ...attribute["set"], totalCards: val },
              })
            )
          }
        />
      </Flex>
    </>
  )
}
