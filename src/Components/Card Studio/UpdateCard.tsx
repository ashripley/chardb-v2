import {
  Button,
  Center,
  Flex,
  NumberInput,
  Select,
  Space,
  Switch,
  Title,
} from "@mantine/core"
import classes from "../../modules/Select.module.css"
import numberClasses from "../../modules/NumberInput.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  setCards,
  setIsDirty,
  updateCard,
  updatePokemon,
} from "../../redux/card"
import { CardStore, StudioStore } from "../../redux/store"
import { useEffect, useState } from "react"
import { upperCaseFirst } from "../../helpers/upperCaseFirst"
import { customTheme } from "../../customTheme"
import { updateCardMutation } from "../../api/cards"

export const UpdateCard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { isDirty, cards, card } = useSelector((state: CardStore) => state.card)
  const { attributes } = useSelector((state: StudioStore) => state.studio)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCard({}))
    dispatch(updatePokemon({}))
  }, [])

  const cardNames = Object.values(cards)
    .map((card) => upperCaseFirst(card.name))
    .sort()

  const onCardChange = (val: any) => {
    let cardToUpdate: Record<string, any> = {}
    Object.values(cards)?.forEach((card) => {
      if (card.name === val.toLowerCase()) {
        cardToUpdate = card
      }
    })

    dispatch(updateCard(cardToUpdate))
  }

  const onUpdate = async () => {
    const updatedCards = cards.map((c) => {
      if (c.cardId === card.cardId) {
        return card
      } else return c
    })

    try {
      setIsLoading(true)

      card && (await updateCardMutation(card))
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
        dispatch(setIsDirty(false))
        dispatch(setCards(updatedCards))
        dispatch(updateCard({}))
      }, 1000)
    }
  }

  return (
    <Center h={"100%"} w={"100%"}>
      <Flex
        h="100%"
        w="100%"
        direction={"column"}
        justify={"center"}
        align={"center"}
        m="auto"
      >
        <Flex h="10%">
          <Title size="h3" fw={600} c={customTheme.colours.font.primary}>
            Update Your Card
          </Title>
        </Flex>
        <Space h={50} />
        <Flex h="80%" direction={"column"} gap={25}>
          <Flex w={"100%"}>
            <Select
              placeholder={"Choose a Card..."}
              data={cardNames}
              searchable
              radius={"lg"}
              w={"100%"}
              rightSection
              required
              variant="filled"
              classNames={{ input: classes.input }}
              onChange={onCardChange}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Select
              placeholder="Set"
              data={attributes["set"].map((att: Record<string, any>) =>
                upperCaseFirst(att.name)
              )}
              searchable
              rightSection
              value={card.set ?? ""}
              radius={"lg"}
              variant="filled"
              w={"45%"}
              required
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updateCard({ set: val }))}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              w={"45%"}
              placeholder="Set Number"
              classNames={{ input: numberClasses.input }}
              hideControls
              required
              value={card.setNumber ?? ""}
              onChange={(val) => dispatch(updateCard({ setNumber: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Select
              placeholder="Card Type"
              data={attributes["cardType"].map((att: Record<string, any>) =>
                upperCaseFirst(att.name)
              )}
              searchable
              radius={"lg"}
              w={"45%"}
              rightSection
              variant="filled"
              required
              value={card.cardType ?? ""}
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updateCard({ cardType: val }))}
            />
            <Select
              placeholder="Condition"
              data={attributes["condition"].map((att: Record<string, any>) =>
                upperCaseFirst(att.name)
              )}
              searchable
              radius={"lg"}
              w={"45%"}
              rightSection
              variant="filled"
              required
              value={card.condition ?? ""}
              classNames={{ input: classes.input }}
              onChange={(val) => dispatch(updateCard({ condition: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Year"
              classNames={{ input: numberClasses.input }}
              w={"45%"}
              hideControls
              required
              value={card.year ?? ""}
              onChange={(val) => dispatch(updateCard({ year: val }))}
            />
            <NumberInput
              variant="filled"
              radius="lg"
              placeholder="Quantity"
              classNames={{ input: numberClasses.input }}
              w={"45%"}
              hideControls
              required
              value={card.quantity ?? ""}
              onChange={(val) => dispatch(updateCard({ quantity: val }))}
            />
          </Flex>
          <Flex w={"100%"} justify={"space-between"}>
            <Switch
              defaultChecked={false}
              color="gray"
              labelPosition="left"
              label="Graded?"
              size="md"
              w={"45%"}
              checked={card.isGraded ?? false}
              onChange={(val) =>
                dispatch(updateCard({ isGraded: val.target.checked }))
              }
              h={"100%"}
            />
            {card?.isGraded && (
              <NumberInput
                variant="filled"
                radius="lg"
                placeholder="Grading"
                classNames={{ input: numberClasses.input }}
                w={"45%"}
                hideControls
                required
                value={card.grading ?? ""}
                onChange={(val) => dispatch(updateCard({ grading: val }))}
              />
            )}
          </Flex>
        </Flex>
        <Space h={50} />
        <Flex h="10%">
          <Button
            variant="filled"
            bg={"white"}
            radius="lg"
            size="lg"
            miw={250}
            styles={{
              label: {
                color: customTheme.colours.bg.bgDarkGray100,
              },
            }}
            onClick={onUpdate}
            loading={isLoading}
            loaderProps={{
              type: "dots",
              color: customTheme.colours.accents.char,
            }}
            disabled={!isDirty}
          >
            Update
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
