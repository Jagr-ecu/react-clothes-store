import { Group, FormInputLabel, Input } from './FormInputStyles.jsx'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
        <Input {...otherProps} />
        {
            label
            &&
            <FormInputLabel shrink={otherProps.value.length}>
                {label}
            </FormInputLabel>
        }
    </Group>
  );
};

export default FormInput;

// <label
//   className={`${
//     otherProps.value.length ? "shrink" : ""
//   } form-input-label`}
// ></label>
