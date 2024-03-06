import { SegmentedControl, VisuallyHidden, rem } from "@mantine/core"
import {
  IconGridDots,
  IconLayoutGrid,
  IconLayoutList,
} from "@tabler/icons-react"
import { customTheme } from "../../customTheme"
import { updateView } from "../../redux/gallery"
import { GalleryViewType } from "../../config"
import { useDispatch } from "react-redux"

export const ViewSwitch = () => {
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

  const onViewChange = (value: string) =>
    dispatch(updateView(value as GalleryViewType))

  return (
    <SegmentedControl
      orientation="vertical"
      withItemsBorders={false}
      size="sm"
      mih={100}
      radius="xl"
      defaultValue="card"
      bg={customTheme.colours.bg.bgGray75}
      color={customTheme.colours.bg.bgDarkGray75}
      onChange={onViewChange}
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
          value: "card",
          label: (
            <>
              <IconLayoutGrid color="white" fill="white" {...iconProps} />
              <VisuallyHidden>Card</VisuallyHidden>
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
