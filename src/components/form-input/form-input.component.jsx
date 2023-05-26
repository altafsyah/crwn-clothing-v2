import { FormGroup, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <FormGroup>
      <Input {...inputOptions}></Input>
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;
