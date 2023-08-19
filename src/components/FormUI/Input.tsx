import { useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";
import { FC } from "react";

interface InputProps {
  label?: string;
  labelShrink?: boolean;
  minRows?: string | number;
  multiline?: boolean;
  name: string;
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "number"
    | "password"
    | "text"
    | "time";
  value?: any;
  variant?: "filled" | "outlined" | "standard" | undefined;
}

const Input: FC<InputProps> = ({
  labelShrink = false,
  name,
  type = "text",
  variant = "outlined",
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (evt: any) => {
    setFieldValue(name, evt.target.value);
  };

  const configTextfield = {
    ...field,
    ...otherProps,
    error: false,
    fullWidth: true,
    helperText: "",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <>
      <TextField
        {...configTextfield}
        type={type}
        variant={variant}
        InputLabelProps={{
          shrink: labelShrink ? labelShrink : undefined,
        }}
      />
    </>
  );
};

export default Input;
