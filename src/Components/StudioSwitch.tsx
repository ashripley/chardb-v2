import { SegmentedControl, VisuallyHidden, rem } from "@mantine/core"
import { IconPlus, IconReload, IconDatabase } from "@tabler/icons-react"
import { customTheme } from "../customTheme"

export const StudioSwitch = () => {
  const iconProps = {
    style: {
      width: rem(20),
      height: rem(30),
      display: "flex",
      alignItems: "center",
    },
    stroke: 1.5,
  }

  return (
    <SegmentedControl
      orientation="vertical"
      withItemsBorders={false}
      size="sm"
      radius="xl"
      defaultValue="create"
      bg={customTheme.colours.bg.bgGray75}
      color={customTheme.colours.bg.bgDarkGray75}
      onChange={(value) => {
        console.log("value", value)
      }}
      data={[
        {
          value: "create",
          label: (
            <>
              <IconPlus color="white" {...iconProps} />
              <VisuallyHidden>Create</VisuallyHidden>
            </>
          ),
        },
        {
          value: "update",
          label: (
            <>
              <IconReload color="white" {...iconProps} />
              <VisuallyHidden>Update</VisuallyHidden>
            </>
          ),
        },
        {
          value: "db",
          label: (
            <>
              <IconDatabase color="white" {...iconProps} />
              <VisuallyHidden>DB</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  )
}
