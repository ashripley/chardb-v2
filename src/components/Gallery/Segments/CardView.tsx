import { SegmentedControl, VisuallyHidden, rem } from "@mantine/core"
import { IconGridDots, IconLayoutGrid } from "@tabler/icons-react"
import { theme } from "../../../theme/theme"
import { setView } from "../../../redux/gallery"
import { GalleryViewType } from "../../../config"
import { useDispatch } from "react-redux"

export const CardViewSegment = () => {
  const dispatch = useDispatch()

  const iconProps = {
    style: {
      width: rem(20),
      height: rem(20),
      display: "block",
    },
    stroke: 1.5,
  }

  const onViewChange = (value: string) =>
    dispatch(setView(value as GalleryViewType))

  return (
    <SegmentedControl
      orientation="horizontal"
      withItemsBorders={false}
      size="sm"
      w={"100%"}
      radius="xl"
      defaultValue="card"
      bg={"transparent"}
      color={theme.colours.bg.bgDarkGray75}
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
      ]}
    />
  )
}
