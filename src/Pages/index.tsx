import { Paper, Center, Space, Flex, SimpleGrid } from "@mantine/core"
import { CustomHeader } from "../Components/CustomHeader"
import { CustomCard } from "../Components/CustomCard"

export const Index = () => {
  return (
    <>
      <Center h="100vh" w={"100vw"} display={"block"}>
        <Paper p="sm" m="auto" w={"100%"} h={"100%"} mah={"100%"}>
          <Space h="1%" />
          <Flex
            w={"95%"}
            h={"5%"}
            justify="flex-start"
            align="center"
            m={"auto"}
          >
            <CustomHeader isCustomLabel customLabel="gallery" />
          </Flex>
          <Space h="1%" />
          <Paper
            radius="xl"
            p="lg"
            m="auto"
            w="95%"
            h="92%"
            bg="var(--mantine-color-gray-light)"
          >
            <Flex justify="space-evenly" wrap="wrap" gap={50}>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </Flex>
          </Paper>
          <Space h="1%" />
        </Paper>
      </Center>
    </>
  )
}
