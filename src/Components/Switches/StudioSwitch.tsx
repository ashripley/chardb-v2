import { SegmentedControl, VisuallyHidden, rem } from "@mantine/core"
import { IconPlus, IconReload, IconDatabase } from "@tabler/icons-react"
import { theme } from "../../customTheme"
import { useDispatch } from "react-redux"
import { setView } from "../../redux/studio"
import { StudioViewType } from "../../config"

export const StudioSwitch = () => {
  const dispatch = useDispatch()

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
      bg={theme.colours.bg.bgGray75}
      color={theme.colours.bg.bgDarkGray75}
      onChange={(value) => dispatch(setView(value as StudioViewType))}
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
