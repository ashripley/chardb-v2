import { FormRenderer } from './formRenderer';
import { useFormRenderer } from './formRenderers';

export const Form: FormRenderer = (props) => {
  const { formDefinition, type, onChange } = props;
  const Form = useFormRenderer(type);
  return (
    <Form onChange={onChange} formDefinition={formDefinition} type={type} />
  );
};
