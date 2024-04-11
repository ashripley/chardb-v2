import {
  Button,
  Center,
  Flex,
  Group,
  HoverCard,
  NumberInput,
  Select,
  Space,
  Switch,
  Title,
  Text,
  Tooltip,
} from "@mantine/core"
import classes from "../../../modules/Select.module.css"
import numberClasses from "../../../modules/NumberInput.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  Card,
  setCards,
  setIsDirty,
  updateCard,
  updatePokemon,
} from "../../../redux/card"
import { CardStore, StudioStore } from "../../../redux/store"
import { useEffect, useState } from "react"
import { upperCaseFirst } from "../../../helpers/upperCaseFirst"
import { theme } from "../../../theme/theme"
import { deleteCardMutation, updateCardMutation } from "../../../api/cards"

interface ActionButtonProps {
  bg: string
  w: number
  c: string
  actionLoading: boolean
  label: string
  loaderColour: string
}

export const UpdateCardDetails = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [cardName, setCardName] = useState<string>("")
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

    setCardName(cardToUpdate.name)
    dispatch(updateCard(cardToUpdate))
  }

  const onUpdate = async (action: "update" | "delete") => {
    const updatedCards = cards.map((c: Card | Record<string, any>) => {
      if (c.cardId === card.cardId) {
        return card
      } else return c
    })

    try {
      action === "update" ? setIsUpdating(true) : setIsDeleting(true)

      card &&
        (action === "update"
          ? await updateCardMutation(card)
          : await deleteCardMutation(card))
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => {
        action === "update" ? setIsUpdating(false) : setIsDeleting(false)
        dispatch(setIsDirty(false))
        dispatch(setCards(updatedCards))
        dispatch(updateCard({}))
      }, 1000)
    }
  }

  const ActionButton: React.FC<ActionButtonProps> = ({
    bg,
    actionLoading,
    c,
    label,
    w,
    loaderColour,
  }) => (
    <Button
      variant="filled"
      bg={bg}
      radius="lg"
      size="lg"
      miw={w}
      styles={{
        label: {
          color: c,
        },
      }}
      onClick={() => onUpdate(label.toLowerCase() as "update" | "delete")}
      loading={actionLoading}
      loaderProps={{
        type: "dots",
        color: loaderColour,
      }}
      disabled={!isDirty}
    >
      {label}
    </Button>
  )

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
          <Title size="h3" fw={600} c={theme.colours.fonts.primary}>
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
        <Flex h="10%" gap={25}>
          <ActionButton
            bg={"white"}
            c={theme.colours.bg.bgDarkGray100}
            label="Update"
            w={150}
            actionLoading={isUpdating}
            loaderColour={theme.colours.accents.char}
          />
          <ActionButton
            bg={theme.colours.status.error}
            c="white"
            label="Delete"
            w={150}
            actionLoading={isDeleting}
            loaderColour="white"
          />
        </Flex>
      </Flex>
    </Center>
  )
}
