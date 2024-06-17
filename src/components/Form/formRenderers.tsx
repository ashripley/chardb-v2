import {
  TypeFormRenderer,
  SetFormRenderer,
  RarityFormRenderer,
  ConditionFormRenderer,
  CardTypeFormRenderer,
} from './FormRenderers/index';
import { FormRenderer } from './formRenderer';

type FormType = string;
export type FormRenderers = Record<FormType, FormRenderer>;

const formRenderers: FormRenderers = {
  set: SetFormRenderer,
  cardType: CardTypeFormRenderer,
  condition: ConditionFormRenderer,
  type: TypeFormRenderer,
  rarity: RarityFormRenderer,
};

export function useFormRenderer(formType: FormType) {
  if (formType in formRenderers) {
    return formRenderers[formType];
  }

  throw new Error(`No renderer for form type: "${formType}"`);
}
