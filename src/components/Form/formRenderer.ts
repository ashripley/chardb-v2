import { ReactNode } from 'react';
import { AttributeDefinition, Type } from '../../api/attribute';
// import { CardDefinition } from '../../api/card';

export type FormDefinition = AttributeDefinition;

interface FormRendererOptions {
  formDefinition: FormDefinition;
  type: Type;
  onChange: (props: Partial<FormDefinition>) => void;
}

export type FormRenderer = (props: FormRendererOptions) => ReactNode;
