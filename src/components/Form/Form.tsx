import { FormRenderer } from './formRenderer';
import { useFormRenderer } from './formRenderers';

export const Form: FormRenderer = (props) => {
  const Form = useFormRenderer(props.type);
  return <Form onChange={props.onChange} type={props.type} />;
};
