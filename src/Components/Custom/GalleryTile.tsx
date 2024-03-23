import { Card, Flex, Grid, Group, Paper, Space, Text } from "@mantine/core"
import { IconFlame } from "@tabler/icons-react"
import { IconCircleFilled } from "@tabler/icons-react"
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

export const GalleryTile = ({ card }: Props) => {
  const {
    name,
    type,
    image,
    set,
    setNumber,
    typeOfCard,
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
              <Grid.Col span={12} h={"80%"}>
                <Card w="90%" h={"90%"} radius="lg" m="auto" p={"sm"}>
                  <Flex direction="column" h={"100%"} justify={"center"}>
                    <Card
                      h="90%"
                      radius="lg"
                      m="auto"
                      top={5}
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
                    <Flex
                      h="10%"
                      w="100%"
                      justify={"flex-end"}
                      align={"center"}
                    >
                      <IconChartBubble
                        height={15}
                        width={15}
                        stroke={1}
                        color={customTheme.colours.bg.bgDarkGray100}
                      />
                    </Flex>
                  </Flex>
                </Card>
              </Grid.Col>
            </Carousel.Slide>
            <Carousel.Slide>
              <Grid.Col span={12}>
                <Group w="100%" m="auto" p={"xs"} gap={0}>
                  <Text c="white" w="100%" mih={15} fz={12}>
                    Set: <b>{set}</b>
                  </Text>
                  <Text c="white" w="100%" mih={15} fz={12}>
                    Type Of Card: <b>{typeOfCard}</b>
                  </Text>
                  <Text c="white" w="100%" mih={15} fz={12}>
                    Condition: <b>{condition}</b>
                  </Text>
                  <Text c="white" w="100%" mih={15} fz={12}>
                    Quantity: <b>{quantity}</b>
                  </Text>
                  {isGraded && (
                    <Text c="white" w="100%" mih={15} fz={12}>
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
                <Space w={10} />
                <IconCircleFilled
                  width={10}
                  height={10}
                  style={{ color: "white" }}
                />
              </Flex>
            </Flex>
          </Grid.Col>
        </StyledGrid>
      </Card>
    </>
  )
}
