import {
  Button,
  Center,
  Flex,
  NumberInput,
  Select,
  Space,
  Switch,
  Title,
} from '@mantine/core';
import classes from '../../../modules/Select.module.css';
import numberClasses from '../../../modules/NumberInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { upperCaseFirst } from '../../../helpers/upperCaseFirst';
import { theme } from '../../../theme/theme';
import {
  AttributeCardDefinition,
  CardDefinition,
  addCardMutation,
} from '../../../api/card';
import { PokemonDefinition } from '../../../api/pokemon';
import { SetAttributeDefinition } from '../../../api/attribute';

export const CardDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tempCard, setTempCard] = useState<Partial<CardDefinition>>();

  // useEffect(() => {
  //   // dispatch(updatePokemon({}));
  //   dispatch(updateCard({}));
  // }, []);

  useEffect(() => {
    console.log('temp card updated: ', tempCard);
  }, [tempCard]);

  const { pokemon, attributes } = useSelector((state: RootStore) => state.root);
  // console.log(
  //   'attributes',
  //   attributes.find((att) => att.type === 'set')
  // );

  const dispatch = useDispatch();

  const pokemonNames = pokemon
    .map((pokemon) => upperCaseFirst(pokemon.name))
    .sort();

  // const onPokemonChange = (val: any) => {
  //   dispatch(updatePokemon({ ...allPokemon[val?.toLowerCase()] }));
  // };

  const onCreate = async () => {
    try {
      setIsLoading(true);

      console.log('tempCard', tempCard);
      tempCard && (await addCardMutation(tempCard as CardDefinition));
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        // dispatch(setIsDirty(false));
        // dispatch(updatePokemon({}));
      }, 1000);
    }
  };

  // const requiredFields = [
  //   'name',
  //   'set',
  //   'setNumber',
  //   'cardType',
  //   'quantity',
  //   'condition',
  // ];

  // const isCreateDisabled = temp.every((field) => tempCard[field]);

  return (
    <Center h={'100%'} w={'100%'}>
      <Flex
        h='100%'
        w='100%'
        direction={'column'}
        justify={'center'}
        align={'center'}
        m='auto'
      >
        <Flex h='10%'>
          <Title size='h3' fw={600} c={theme.colors.fonts.primary}>
            Create Your Card
          </Title>
        </Flex>
        <Space h={50} />
        <Flex h='80%' direction={'column'} gap={25}>
          <Flex w={'100%'}>
            <Select
              placeholder={'Name'}
              data={pokemonNames}
              searchable
              radius={'lg'}
              w={'100%'}
              rightSection
              required
              variant='filled'
              classNames={{ input: classes.input }}
              onChange={(val) => {
                if (val !== null) {
                  setTempCard({
                    ...tempCard,
                    pokemonData: {
                      ...(tempCard?.pokemonData as PokemonDefinition),
                      name: val,
                    },
                  });
                }
              }}
              nothingFoundMessage='No Pokemon found...'
            />
          </Flex>
          <Flex w={'100%'} justify={'space-between'}>
            <Select
              placeholder='Set'
              data={attributes
                .filter((att) => att.type === 'set')
                ?.map((att) => upperCaseFirst(att.name))}
              searchable
              rightSection
              value={tempCard?.attributes?.set?.name ?? ''}
              radius={'lg'}
              variant='filled'
              w={'45%'}
              required
              classNames={{ input: classes.input }}
              onChange={(val) =>
                setTempCard({
                  ...tempCard,
                  attributes: {
                    ...(tempCard?.attributes as AttributeCardDefinition),
                    set: {
                      ...(tempCard?.attributes?.set as SetAttributeDefinition),
                      name: val as string,
                      // year: cardAttributes['type']['set'].find(
                      //   (set: Record<string, any>) => set.name === val
                      // ).year,
                    },
                  },
                })
              }
            />
            <NumberInput
              variant='filled'
              radius='lg'
              w={'45%'}
              placeholder='Set Number'
              classNames={{ input: numberClasses.input }}
              hideControls
              required
              value={tempCard?.setNumber ?? ''}
              onChange={(val) =>
                setTempCard({ ...tempCard, setNumber: val as number })
              }
            />
          </Flex>
          <Flex w={'100%'} justify={'space-between'}>
            <Select
              placeholder='Card Type'
              // data={attributes['cardType']?.map((att: Record<string, any>) =>
              //   upperCaseFirst(att.name)
              // )}
              searchable
              radius={'lg'}
              w={'45%'}
              rightSection
              variant='filled'
              required
              value={tempCard?.attributes?.cardType ?? ''}
              classNames={{ input: classes.input }}
              onChange={(val) =>
                setTempCard({
                  ...tempCard,
                  attributes: {
                    ...(tempCard?.attributes as AttributeCardDefinition),
                    cardType: val as string,
                  },
                })
              }
            />
            <Select
              placeholder='Condition'
              // data={attributes['condition']?.map((att: Record<string, any>) =>
              //   upperCaseFirst(att.name)
              // )}
              searchable
              radius={'lg'}
              w={'45%'}
              rightSection
              variant='filled'
              required
              value={tempCard?.attributes?.condition ?? ''}
              classNames={{ input: classes.input }}
              onChange={(val) =>
                setTempCard({
                  ...tempCard,
                  attributes: {
                    ...(tempCard?.attributes as AttributeCardDefinition),
                    condition: val as string,
                  },
                })
              }
            />
          </Flex>
          <Flex w={'100%'} justify={'space-between'}>
            <NumberInput
              variant='filled'
              radius='lg'
              placeholder='Quantity'
              classNames={{ input: numberClasses.input }}
              w={'45%'}
              hideControls
              required
              value={tempCard?.quantity ?? ''}
              onChange={(val) =>
                setTempCard({ ...tempCard, quantity: val as number })
              }
            />
            <Switch
              defaultChecked={false}
              color='gray'
              labelPosition='left'
              label='Graded?'
              size='md'
              w={'45%'}
              value={tempCard?.attributes?.isGraded?.toString() ?? ''}
              onChange={(val) => {
                if (val !== null) {
                  setTempCard({
                    ...tempCard,
                    attributes: {
                      ...(tempCard?.attributes as AttributeCardDefinition),
                      isGraded: val.target.checked,
                    },
                  });
                }
              }}
              h={'100%'}
            />
          </Flex>
          <Flex w={'100%'} justify={'space-between'}>
            {tempCard?.attributes?.isGraded && (
              <NumberInput
                variant='filled'
                radius='lg'
                placeholder='Grading'
                classNames={{ input: numberClasses.input }}
                w={'45%'}
                hideControls
                required
                value={tempCard.attributes.grading ?? ''}
                onChange={(val) =>
                  setTempCard({
                    ...tempCard,
                    attributes: {
                      ...(tempCard.attributes as AttributeCardDefinition),
                      grading: val as number,
                    },
                  })
                }
              />
            )}
          </Flex>
        </Flex>
        <Space h={50} />
        <Flex h='10%'>
          <Button
            variant='filled'
            bg={'white'}
            radius='lg'
            size='lg'
            miw={250}
            styles={{
              label: {
                color: theme.colors.bg.bgDarkGray100,
              },
            }}
            onClick={onCreate}
            loading={isLoading}
            loaderProps={{
              type: 'dots',
              color: theme.colors.accents.char,
            }}
            // disabled={isCreateDisabled}
          >
            Create
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};
