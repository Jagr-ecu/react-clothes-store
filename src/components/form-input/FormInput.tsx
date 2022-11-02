import { InputHTMLAttributes, FC } from "react";

import { Group, FormInputLabel, Input } from "./FormInputStyles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

// <label
//   className={`${
//     otherProps.value.length ? "shrink" : ""
//   } form-input-label`}
// ></label>
