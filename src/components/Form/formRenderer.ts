import {
  AttributeDefinition,
  CardDefinition,
  TempCardDefinition,
} from '../../api';
import { FormType } from '../../config';

export type FormDefinition = AttributeDefinition &
  CardDefinition &
  TempCardDefinition;

export interface FormRendererOptions {
  formDefinition: FormDefinition;
  type: FormType;
  onChange: (props: Partial<FormDefinition>) => void;
}

export type FormRenderer = (props: FormRendererOptions) => JSX.Element;
