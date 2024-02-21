import { SegmentedControl, Text } from "@mantine/core"
import { customTheme } from "../customTheme"

export const FilterSwitch = () => {
  return (
    <SegmentedControl
      withItemsBorders={false}
      size="sm"
      radius="lg"
      defaultValue="name"
      bg={customTheme.colours.bg.bgGray75}
      color={customTheme.colours.bg.bgDarkGray75}
      onChange={(value) => {
        console.log("value", value)
      }}
      data={[
        {
          value: "id",
          label: <Text c={"white"}>Id</Text>,
        },
        {
          value: "name",
          label: <Text c={"white"}>Name</Text>,
        },
        {
          value: "set",
          label: <Text c={"white"}>Set</Text>,
        },
        {
          value: "type",
          label: <Text c={"white"}>Type</Text>,
        },
        {
          value: "year",
          label: <Text c={"white"}>Year</Text>,
        },
        {
          value: "grade",
          label: <Text c={"white"}>Grade</Text>,
        },
      ]}
    />
  )
}
