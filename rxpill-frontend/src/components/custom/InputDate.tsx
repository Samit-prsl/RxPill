import React from "react";
import DatePicker, { type DatePickerProps } from "react-datepicker";
import InputText from "./InputText";
import dayjs from "dayjs";

type InputDateProps = {
  value: Date | null;
  onChange: (date: Date | string | null) => void;
  placeholder?: string;
  disabled?: boolean;
} & Omit<
  DatePickerProps,
  | "selected"
  | "onChange"
  | "selectsMultiple"
  | "selectsRange"
  | "startDate"
  | "endDate"
>;

const InputDate: React.FC<InputDateProps> = ({
  value,
  onChange,
  placeholder = "MM/DD/YYYY",
  disabled,
  minDate,
  maxDate,
  dateFormat = "MM/dd/yyyy",
}) => {
  const onChangeFormatted = (date: Date | null) => {
    if (Array.isArray(date)) {
      onChange(date[0]);
    } else {
      onChange(date ? dayjs(date).format("YYYY-MM-DD") : date);
    }
  };

  const popperContainer = (props: any) => (
    <div {...props} style={{ zIndex: 1500, position: "absolute" }} />
  );

  return (
    <DatePicker
      selected={value}
      onChange={onChangeFormatted}
      placeholderText={placeholder}
      dateFormat={dateFormat}
      isClearable={!disabled}
      minDate={minDate}
      maxDate={maxDate}
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
      autoComplete="none"
      customInput={<InputText />}
      popperContainer={popperContainer}
      portalId="root"
    />
  );
};

export default InputDate;
