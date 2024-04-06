import { Card, Flex, Grid, Group, Paper, Text } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { IconChartBubble } from "@tabler/icons-react"
import { customTheme } from "../../customTheme"
import { Carousel } from "@mantine/carousel"
import classes from "../../modules/Carousel.module.css"
import { createElement } from "react"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"
import styled from "styled-components"

interface Props {
  card: Record<string, any>
}

const StyledGrid = styled(Grid)`
  .mantine-Grid-inner {
    height: 100%;
  }
`

const styles = {
  text: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
  },
}

export const GalleryTile = ({ card }: Props) => {
  const {
    name,
    type,
    image,
    set,
    setNumber,
    cardType,
    condition,
    quantity,
    isGraded,
    grading,
    id,
    year,
  } = card

  return (
    <>
      <Card
        w={"200px"}
        h={"200px"}
        radius="xl"
        bg={customTheme.colours.types[type]}
      >
        <StyledGrid w={"100%"} h={"100%"}>
          <Grid.Col span={12} h={"20%"}>
            <Flex justify="space-between" align="center" w="90%" m="auto">
              <Text c="white">{upperCaseFirst(name)}</Text>
              <Paper
                h={25}
                w={25}
                bg="var(--mantine-color-white)"
                radius={"xl"}
                display={"flex"}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                {type ? (
                  createElement(customTheme.icons[type], {
                    style: { width: 15, height: 15 },
                    stroke: 1.5,
                    color: customTheme.colours.types[type],
                  })
                ) : (
                  <IconFlame
                    style={{ width: 15, height: 15 }}
                    stroke={1.5}
                    color="var(--mantine-color-white)"
                    fill={customTheme.colours.types[type]}
                  />
                )}
              </Paper>
            </Flex>
          </Grid.Col>
          <Carousel
            h={"70%"}
            w={"100%"}
            controlsOffset="xs"
            classNames={classes}
          >
            <Carousel.Slide>
              <Grid.Col span={12} h={"85%"}>
                <Card w="90%" h={"100%"} radius="lg" m="auto" p={"sm"}>
                  <Flex direction="column" h={"100%"} justify={"center"}>
                    <Card
                      h="100%"
                      radius="lg"
                      m="auto"
                      display={"flex"}
                      style={{ justifyContent: "center" }}
                    >
                      {image ? (
                        <img src={image} width={75} height={75} />
                      ) : (
                        <IconFlame
                          width={100}
                          height={100}
                          stroke={1}
                          color={customTheme.colours.bg.bgGray100}
                        />
                      )}
                    </Card>
                  </Flex>
                </Card>
              </Grid.Col>
            </Carousel.Slide>
            <Carousel.Slide>
              <Grid.Col span={12}>
                <Group w="100%" m="auto" p={"xs"} gap={0}>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Set: <b>{set}</b>
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Card Type: <b>{cardType}</b>
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Condition: <b>{condition}</b>
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Quantity: <b>{quantity}</b>
                  </Text>
                  {isGraded && (
                    <Text
                      c="white"
                      w="100%"
                      mih={15}
                      fz={12}
                      style={{ ...styles.text }}
                    >
                      Grading: <b>{grading}</b>
                    </Text>
                  )}
                </Group>
              </Grid.Col>
            </Carousel.Slide>
          </Carousel>
          <Grid.Col span={12} h={"20%"}>
            <Flex
              justify="space-between"
              align="center"
              w="90%"
              m="auto"
              direction={"row"}
            >
              <Text c="white" w="100%" fz={12}>
                #{id}
              </Text>
              <Text c="white" w="100%" fz={12}>
                {year}
              </Text>
              <Flex align="center">
                <Text c="white" fz={12}>
                  {setNumber}
                </Text>
                <Text c="white" fz={12}>
                  /84
                </Text>
              </Flex>
            </Flex>
          </Grid.Col>
        </StyledGrid>
      </Card>
    </>
  )
}
