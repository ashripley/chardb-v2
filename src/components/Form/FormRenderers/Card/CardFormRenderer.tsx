import { Flex, NumberInput, Select, Switch } from '@mantine/core';
import classes from '../../../../modules/Select.module.css';
import numberClasses from '../../../../modules/NumberInput.module.css';
import { useSelector } from 'react-redux';
import { FormRenderer } from '../../formRenderer';
import { RootStore } from '../../../../redux/store';
import { upperCaseFirst } from '../../../../helpers/upperCaseFirst';
import { CardDefinition } from '../../../../api/card';
import { ChangeEvent } from 'react';

export const CardFormRenderer: FormRenderer = (props) => {
  const { formDefinition } = props;

  const { pokemon, attributes } = useSelector((state: RootStore) => state.root);

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

  const onEventChange = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    props.onChange({
      ...formDefinition,
      attributes: {
        ...formDefinition.attributes,
        isGraded: event?.currentTarget.value as boolean | undefined,
      },
    });
  };

  return (
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
          radius={'lg'}
          variant='filled'
          w={'45%'}
          required
          classNames={{ input: classes.input }}
          onChange={(val) => onAttributeChange(val, 'set')}
        />
        <NumberInput
          variant='filled'
          radius='lg'
          w={'45%'}
          placeholder='Set Number'
          classNames={{ input: numberClasses.input }}
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
          radius={'lg'}
          w={'45%'}
          rightSection
          variant='filled'
          required
          value={formDefinition?.attributes?.cardType}
          classNames={{ input: classes.input }}
          onChange={(val) => onAttributeChange(val, 'cardType')}
        />
        <Select
          placeholder='Condition'
          data={attributes
            .filter((att) => att.type === 'condition')
            ?.map((att) => upperCaseFirst(att.name))}
          searchable
          radius={'lg'}
          w={'45%'}
          rightSection
          variant='filled'
          required
          value={formDefinition?.attributes?.condition}
          classNames={{ input: classes.input }}
          onChange={(val) => onAttributeChange(val, 'condition')}
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
          value={formDefinition?.quantity ?? ''}
          onChange={(val) => onBaseChange(val, 'quantity')}
        />
        <Switch
          defaultChecked={false}
          color='gray'
          labelPosition='left'
          label='Graded?'
          size='md'
          w={'45%'}
          value={formDefinition?.attributes?.isGraded?.toString()}
          onChange={onEventChange}
          h={'100%'}
        />
      </Flex>
      <Flex w={'100%'} justify={'space-between'}>
        {formDefinition?.attributes?.isGraded ? (
          <NumberInput
            variant='filled'
            radius='lg'
            placeholder='Grading'
            classNames={{ input: numberClasses.input }}
            w={'45%'}
            hideControls
            required
            value={formDefinition.attributes.grading}
            onChange={(val) => onAttributeChange(val, 'grading')}
          />
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
