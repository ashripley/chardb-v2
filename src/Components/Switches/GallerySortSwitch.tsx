import { SegmentedControl, Text } from "@mantine/core"
import { customTheme } from "../../customTheme"

export const GallerySortSwitch = () => {
  return (
    <SegmentedControl
      withItemsBorders={false}
      size="sm"
      radius="xl"
      defaultValue="name"
      bg={customTheme.colours.bg.bgGray75}
      color={customTheme.colours.bg.bgDarkGray75}
      onChange={(value) => {
        console.log("value", value)
      }}
      data={[
        {
          value: "sets",
          label: <Text c={"white"}>Sets</Text>,
        },
        {
          value: "cardTypes",
          label: <Text c={"white"}>Card Types</Text>,
        },
        {
          value: "types",
          label: <Text c={"white"}>Types</Text>,
        },
        {
          value: "conditions",
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
