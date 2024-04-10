import { Flex, TextInput } from "@mantine/core"
import numberClasses from "../../../modules/NumberInput.module.css"
import { useDispatch, useSelector } from "react-redux"
import { StudioStore } from "../../../redux/store"
import { updateAttribute } from "../../../redux/studio"

export const Conditions = () => {
  const dispatch = useDispatch()
  const { attribute } = useSelector((state: StudioStore) => state.studio)

  return (
    <Flex h="80%" direction={"column"} gap={25}>
      <TextInput
        placeholder="Name"
        value={attribute["condition"]?.name ?? ""}
        radius={"lg"}
        w={"100%"}
        rightSection
        variant="filled"
        classNames={{ input: numberClasses.input }}
        onChange={(event) =>
          dispatch(
            updateAttribute({
              condition: {
                ...attribute["condition"],
                name: event.currentTarget.value,
              },
            })
          )
        }
      />
    </Flex>
  )
}
