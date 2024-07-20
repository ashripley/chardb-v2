import { Flex } from '@mantine/core';
import { useSelector } from 'react-redux';
import { FormRenderer } from '../../formRenderer';
import { RootStore } from '../../../../redux/store';
import { upperCaseFirst } from '../../../../helpers/upperCaseFirst';
import { CardDefinition } from '../../../../api/card';
import { ChangeEvent } from 'react';
import { Checkbox, Select, NumberInput } from '../../../Base';
import { pxToRem } from '../../../../utils';

export const CardFormRenderer: FormRenderer = (props) => {
  const { formDefinition, type } = props;

  const { pokemon, attributes, cards } = useSelector(
    (state: RootStore) => state.root
  );

  const cardNames = cards.map((card) => upperCaseFirst(card.pokemonData.name));

  const pokemonNames = pokemon
    .map((pokemon) => upperCaseFirst(pokemon.name))
    .sort();

  const onNameChange = (val: string | null) => {
    if (val !== null) {
      props.onChange({
        ...formDefinition,
        pokemonData: {
          ...formDefinition?.pokemonData,
          name: val,
        },
      });
    }
  };

  const onBaseChange = (
    val: string | number | undefined,
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
    val: string | number | null,
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
        isGraded: event?.currentTarget.checked,
      },
    });
  };

  return (
    <Flex h='80%' direction={'column'} gap={25}>
      <Flex w={'100%'}>
        <Select
          placeholder={'Name'}
          data={type === 'newCard' ? pokemonNames : cardNames}
          searchable
          radius={pxToRem('xs')}
          w={'100%'}
          rightSection
          required
          variant='filled'
          onChange={onNameChange}
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
          value={formDefinition?.attributes?.set}
          radius={pxToRem('xs')}
          variant='filled'
          w={'45%'}
          required
          onChange={(val) => onAttributeChange(val, 'set')}
        />
        <NumberInput
          variant='filled'
          radius={pxToRem('xs')}
          w={'45%'}
          placeholder='Set Number'
          hideControls
          required
          value={formDefinition?.setNumber}
          onChange={(val) => onBaseChange(val, 'setNumber')}
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
        />
      </Flex>
      <Flex w={'100%'} justify={'space-between'} align={'center'}>
        <NumberInput
          variant='filled'
          radius={pxToRem('xs')}
          placeholder='Quantity'
          w={'45%'}
          hideControls
          required
          value={formDefinition?.quantity ?? ''}
          onChange={(val) => onBaseChange(val, 'quantity')}
        />
        <Checkbox
          color='gray'
          labelPosition='left'
          label='Graded'
          radius={pxToRem('xxxs')}
          size='md'
          w={'45%'}
          checked={formDefinition?.attributes?.isGraded || false}
          onChange={onEventChange}
          h={'100%'}
        />
      </Flex>
      <Flex w={'100%'} justify={'space-between'}>
        {formDefinition?.attributes?.isGraded ? (
          <NumberInput
            variant='filled'
            radius={pxToRem('xs')}
            placeholder='Grading'
            w={'45%'}
            hideControls
            required
            value={formDefinition?.attributes?.grading}
            onChange={(val) => onAttributeChange(val, 'grading')}
          />
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
