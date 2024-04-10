import { Card, Flex, Grid, Group, Paper, Text } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { Theme, theme } from "../../customTheme"
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
        bg={theme.colours.types[type as keyof Theme["colours"]["types"]]}
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
                  createElement(theme.icons[type as keyof Theme["icons"]], {
                    style: { width: 15, height: 15 },
                    stroke: 1.5,
                    color:
                      theme.colours.types[
                        type as keyof Theme["colours"]["types"]
                      ],
                  })
                ) : (
                  <IconFlame
                    style={{ width: 15, height: 15 }}
                    stroke={1.5}
                    color="var(--mantine-color-white)"
                    fill={
                      theme.colours.types[
                        type as keyof Theme["colours"]["types"]
                      ]
                    }
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
                          color={theme.colours.bg.bgGray100}
                        />
                      )}
                    </Card>
                  </Flex>
                </Card>
              </Grid.Col>
            </Carousel.Slide>
            <Carousel.Slide>
              <Grid.Col span={12}>
                <Group w="100%" m="auto" pl={8} gap={0}>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Type: {upperCaseFirst(type)}
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Set: {set}
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Card Type: {cardType}
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Condition: {condition}
                  </Text>
                  <Text
                    c="white"
                    w="100%"
                    mih={15}
                    fz={12}
                    style={{ ...styles.text }}
                  >
                    Quantity: {quantity}
                  </Text>
                  {isGraded && (
                    <Text
                      c="white"
                      w="100%"
                      mih={15}
                      fz={12}
                      style={{ ...styles.text }}
                    >
                      Grading: {grading}
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
