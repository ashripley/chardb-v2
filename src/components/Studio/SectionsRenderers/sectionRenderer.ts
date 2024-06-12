import { ReactNode } from 'react';
import { AttributeDefinition } from '../../../api/attribute';

interface SectionRendererOptions {
  onChange: (props: AttributeDefinition) => void;
}

export type SectionRenderer = (props: SectionRendererOptions) => ReactNode;
