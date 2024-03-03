import {
  Card,
  Flex,
  Text,
  ScrollArea,
  Title,
  Space,
  ActionIcon,
} from "@mantine/core"
import { customTheme } from "../customTheme"
import { IconTrashFilled } from "@tabler/icons-react"

export const DataCard = () => {
  return (
    <>
      <Card
        miw={400}
        mih={500}
        w={"auto"}
        h={"auto"}
        radius="xl"
        bg={customTheme.colours.bg.bgGray100}
      >
        <Flex
          justify="flex-start"
          align="center"
          direction={"column"}
          w="100%"
          h="100%"
          m="auto"
        >
          <Title size="h3" h={"5%"} fw={600} w={"100%"} c="white">
            Current Sets
          </Title>
          <Space h={20} />
          <ScrollArea
            h={"90%"}
            w={"100%"}
            type="never"
            style={{ borderRadius: 15 }}
          >
            <Flex justify={"flex-start"} direction={"column"} gap={15}>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} w={"100%"}>
                <Flex w={"80%"} direction={"column"}>
                  <Text c={"white"}>Base Set 2</Text>
                  <Text c={"white"}>Total Cards: 10</Text>
                </Flex>
                <Flex w={"10%"} align={"center"}>
                  <ActionIcon
                    variant="transparent"
                    size="xl"
                    radius="lg"
                    aria-label="delete"
                  >
                    <IconTrashFilled
                      style={{ width: "50%", height: "70%", color: "white" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>
              </Flex>
            </Flex>
          </ScrollArea>
        </Flex>
      </Card>
    </>
  )
}
