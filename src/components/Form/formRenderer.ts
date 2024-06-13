import { ReactNode } from 'react';
import { AttributeDefinition } from '../../api/attribute';
// import { CardDefinition } from '../../api/card';

interface FormRendererOptions {
  onChange: (props: AttributeDefinition) => void;
  type: string;
}

export type FormRenderer = (props: FormRendererOptions) => ReactNode;
