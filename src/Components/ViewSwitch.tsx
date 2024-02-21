import { SegmentedControl, VisuallyHidden, rem } from "@mantine/core"
import {
  IconGridDots,
  IconLayoutGrid,
  IconLayoutList,
} from "@tabler/icons-react"
import { customTheme } from "../customTheme"

export const ViewSwitch = () => {
  const iconProps = {
    style: {
      width: rem(20),
      height: rem(20),
      display: "block",
    },
    stroke: 1.5,
  }

  return (
    <SegmentedControl
      orientation="vertical"
      withItemsBorders={false}
      size="sm"
      radius="lg"
      defaultValue="grid"
      bg={customTheme.colours.bg.bgGray75}
      color={customTheme.colours.bg.bgDarkGray75}
      onChange={(value) => {
        console.log("value", value)
      }}
      data={[
        {
          value: "tile",
          label: (
            <>
              <IconGridDots color="white" fill="white" {...iconProps} />
              <VisuallyHidden>Tile</VisuallyHidden>
            </>
          ),
        },
        {
          value: "grid",
          label: (
            <>
              <IconLayoutGrid color="white" fill="white" {...iconProps} />
              <VisuallyHidden>Grid</VisuallyHidden>
            </>
          ),
        },
        {
          value: "list",
          label: (
            <>
              <IconLayoutList color="white" fill="white" {...iconProps} />
              <VisuallyHidden>List</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  )
}
