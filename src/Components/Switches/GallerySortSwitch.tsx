import { SegmentedControl, Text } from "@mantine/core"
import { customTheme } from "../../customTheme"
import { useDispatch } from "react-redux"
import { setDBType } from "../../redux/studio"

export const GallerySortSwitch = () => {
  const dispatch = useDispatch()

  const onChange = (val: any) => {
    dispatch(setDBType(val))
  }

  return (
    <SegmentedControl
      withItemsBorders={false}
      size="sm"
      radius="xl"
      defaultValue="set"
      bg={customTheme.colours.bg.bgGray75}
      color={customTheme.colours.bg.bgDarkGray75}
      onChange={onChange}
      data={[
        {
          value: "set",
          label: <Text c={"white"}>Sets</Text>,
        },
        {
          value: "cardType",
          label: <Text c={"white"}>Card Types</Text>,
        },
        {
          value: "type",
          label: <Text c={"white"}>Types</Text>,
        },
        {
          value: "condition",
          label: <Text c={"white"}>Conditions</Text>,
        },
        {
          value: "pokemon",
          label: <Text c={"white"}>Pokemon</Text>,
        },
      ]}
    />
  )
}
