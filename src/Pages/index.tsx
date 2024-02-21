import { Paper, Center, Space, Flex, ScrollArea } from "@mantine/core"
import { CustomHeader } from "../Components/CustomHeader"
import { customTheme } from "../customTheme"
import { CustomList } from "../Components/CustomList"
import { CustomTile } from "../Components/CustomTile"
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
            bg={customTheme.colours.bg.bgGray25}
          >
            <ScrollArea h={"100%"} type="scroll">
              <Flex justify="space-evenly" wrap="wrap" gap={20}>
                {/* <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard /> */}
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
                {/* <CustomList />
                <CustomList />
                <CustomList />
                <CustomList />
                <CustomList />
                <CustomList />
                <CustomList />
                <CustomList />
                <CustomList /> */}
              </Flex>
            </ScrollArea>
          </Paper>
          <Space h="1%" />
        </Paper>
      </Center>
    </>
  )
}
