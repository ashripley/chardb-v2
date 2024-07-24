import { ReactNode } from 'react';
import { AttributeDefinition } from '../../api/attribute';
import { CardDefinition } from '../../api/card';
import { FormType } from '../../config';
import { TempCardDefinition } from '../../api/card/cardDefinition';

export type FormDefinition = AttributeDefinition &
  CardDefinition &
  TempCardDefinition;

export interface FormRendererOptions {
  formDefinition: FormDefinition;
  type: FormType;
  onChange: (props: Partial<FormDefinition>) => void;
}

export type FormRenderer = (props: FormRendererOptions) => ReactNode;
