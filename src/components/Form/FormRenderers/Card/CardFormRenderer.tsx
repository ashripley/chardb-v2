import { Flex } from '@mantine/core';
import { useSelector } from 'react-redux';
import { FormRenderer } from '../../formRenderer';
import { RootStore } from '../../../../redux/store';
import { upperCaseFirst, pxToRem } from '../../../../utils';
import { CardDefinition } from '../../../../api/card';
import { ChangeEvent } from 'react';
import { Select } from '../../../Select';
import { StyledCheckbox, StyledNumberField } from '../../../Input';

export const CardFormRenderer: FormRenderer = (props) => {
  const { formDefinition, type } = props;

  const { pokemon, attributes, cards } = useSelector(
    (state: RootStore) => state.root
  );

  function cardNames() {
    const cardsArray: string[] = [];

    for (const c of cards) {
      if (cardsArray.includes(upperCaseFirst(c.pokemonData.name))) {
        cardsArray.push(
          `${upperCaseFirst(c.pokemonData.name)} - ${
            cardsArray.filter(
              (name) => name === upperCaseFirst(c.pokemonData.name)
            ).length + 1
          }`
        );
      } else {
        cardsArray.push(upperCaseFirst(c.pokemonData.name));
      }
    }

    return cardsArray;
  }

  const pokemonNames = pokemon
    .map((pokemon) => upperCaseFirst(pokemon.name))
    .sort();

  const onNameChange = (val: string | null) => {
    if (val !== null) {
      const pokemonDataDTO = pokemon.find(
        (mon) => mon.name === val.toLowerCase()
      );

      props.onChange({
        ...formDefinition,
        pokemonData: {
          ...formDefinition?.pokemonData,
          ...pokemonDataDTO,
        },
      });
    }
  };

  const onBaseChange = (
    val: ChangeEvent<HTMLInputElement>,
    key: keyof CardDefinition
  ) => {
    if (val !== null) {
      props.onChange({
        ...formDefinition,
        [key]: val,
      });
    }
  };

  const onAttributeChange = (
    val: ChangeEvent<HTMLInputElement> | string | null,
    key: keyof CardDefinition['attributes']
  ) => {
    if (val !== null) {
      props.onChange({
        ...formDefinition,
        attributes: {
          ...formDefinition.attributes,
          [key]: val,
        },
      });
    }
  };

  const onEventChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...formDefinition,
      attributes: {
        ...formDefinition.attributes,
        isGraded: event.currentTarget.checked,
      },
    });
  };

  return (
    <Flex h='80%' direction={'column'} gap={25}>
      <Flex w={'100%'}>
        <Select
          placeholder={'Name'}
          data={type === 'newCard' ? pokemonNames : cardNames()}
          searchable
          radius={pxToRem('xs')}
          w={'100%'}
          rightSection
          required
          variant='filled'
          onChange={onNameChange}
          nothingFoundMessage={`No ${
            type === 'newCard' ? 'pokemon' : 'cards'
          } found...`}
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
          value={formDefinition?.attributes?.set}
          radius={pxToRem('xs')}
          variant='filled'
          w={'45%'}
          required
          onChange={(val) => onAttributeChange(val, 'set')}
          disabled={!formDefinition?.['pokemonData']}
        />
        <StyledNumberField
          label='Set Number: '
          required
          value={formDefinition?.setNumber}
          onChange={(val) => onBaseChange(val, 'setNumber')}
          disabled={!formDefinition?.['pokemonData']}
        />
      </Flex>
      <Flex w={'100%'} justify={'space-between'}>
        <Select
          placeholder='Card Type'
          data={attributes
            .filter((att) => att.type === 'cardType')
            ?.map((att) => upperCaseFirst(att.name))}
          searchable
          radius={pxToRem('xs')}
          w={'45%'}
          rightSection
          variant='filled'
          required
          value={formDefinition?.attributes?.cardType}
          onChange={(val) => onAttributeChange(val, 'cardType')}
          disabled={!formDefinition?.['pokemonData']}
        />
        <Select
          placeholder='Condition'
          data={attributes
            .filter((att) => att.type === 'condition')
            ?.map((att) => upperCaseFirst(att.name))}
          searchable
          radius={pxToRem('xs')}
          w={'45%'}
          rightSection
          variant='filled'
          required
          value={formDefinition?.attributes?.condition}
          onChange={(val) => onAttributeChange(val, 'condition')}
          disabled={!formDefinition?.['pokemonData']}
        />
      </Flex>
      <Flex w={'100%'} justify={'space-between'} align={'center'}>
        <StyledNumberField
          label='Quantity: '
          required
          value={formDefinition?.quantity ?? ''}
          onChange={(val) => onBaseChange(val, 'quantity')}
          disabled={!formDefinition?.['pokemonData']}
        />
        <StyledCheckbox
          label='Graded'
          checked={formDefinition?.attributes?.isGraded}
          onChange={onEventChange}
          disabled={!formDefinition?.['pokemonData']}
        />
      </Flex>
      <Flex w={'100%'} justify={'space-between'}>
        {formDefinition?.attributes?.isGraded ? (
          <StyledNumberField
            label='Grading: '
            required
            value={formDefinition?.attributes?.grading}
            onChange={(val) => onAttributeChange(val, 'grading')}
            disabled={!formDefinition?.['pokemonData']}
          />
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
