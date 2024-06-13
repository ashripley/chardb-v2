import { FormRenderer } from './formRenderer';
import SetFormRenderer from './FormRenderers/SetFormRenderer';
import CardTypeFormRenderer from './FormRenderers/CardTypeFormRenderer';
import ConditionFormRenderer from './FormRenderers/ConditionFormRenderer';
import TypeFormRenderer from './FormRenderers/TypeFormRenderer';

type FormType = string;
export type FormRenderers = Record<FormType, FormRenderer>;

const formRenderers: FormRenderers = {
  set: SetFormRenderer,
  cardType: CardTypeFormRenderer,
  condition: ConditionFormRenderer,
  type: TypeFormRenderer,
};

export function useFormRenderer(formType: FormType) {
  if (formType in formRenderers) {
    return formRenderers[formType];
  }

  throw new Error(`No renderer for form type: "${formType}"`);
}
