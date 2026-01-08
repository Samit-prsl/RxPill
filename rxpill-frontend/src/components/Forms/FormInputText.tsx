import React from "react";
import {
  useController,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
import InputText from "../custom/InputText";
import { FormInput } from "./FormInput";
import InputTextPassword from "../custom/InputTextPassword";
import InputTextPhone from "../custom/InputTextPhone";

interface FormInputTextProps {
  id: string;
  control: Control<any>;
  rules?: RegisterOptions;
  defaultLabel?: string;
  label?: string;
  required?: boolean;
  errorMsg?: string;
  disabledFn?: (id: string) => boolean;
  readonly?: boolean;
  isHidden?: boolean;
  bold?: boolean;
  type?: string;
  [key: string]: any; // additional props for InputText
}

export default function FormInputText({
  id,
  control,
  rules,
  defaultLabel,
  label,
  required,
  errorMsg = "",
  disabledFn,
  readonly = false,
  isHidden,
  bold = false,
  type = "text",
  ...props
}: FormInputTextProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: id,
    control,
    rules,
  });

  const computedErrorMsg =
    error?.message ||
    (error?.type === "required" &&
      (errorMsg || `${label ?? defaultLabel ?? id} is required`));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
  };

  const isDisabled = props.disabled || (disabledFn ? disabledFn(id) : false);

  if (isHidden) return null;

  return (
    <FormInput
      defaultLabel={defaultLabel}
      label={label}
      errorMsg={computedErrorMsg || ""}
      required={required}
      bold={bold}
    >
      {type === "phone" ? (
        <InputTextPhone
          {...props}
          disabled={isDisabled}
          readOnly={readonly}
          value={field.value || ""}
          onChange={(value) => {
            const normalized = value.startsWith("+") ? value : `+${value}`;
            field.onChange(normalized);
          }}
        />
      ) : type === "password" ? (
        <InputTextPassword
          {...props}
          disabled={isDisabled}
          readOnly={readonly}
          value={field.value || ""}
          name={field.name}
          onChange={onChange}
        />
      ) : (
        <InputText
          {...props}
          type={type}
          disabled={isDisabled}
          readOnly={readonly}
          value={field.value || ""}
          name={field.name}
          onChange={onChange}
        />
      )}
    </FormInput>
  );
}
