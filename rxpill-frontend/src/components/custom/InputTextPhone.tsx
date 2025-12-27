import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { cn } from "@/lib/utils";

interface InputTextPhoneProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export default function InputTextPhone({
  value = "",
  onChange,
  disabled = false,
  readOnly = false,
  className,
}: InputTextPhoneProps) {
  return (
    <PhoneInput
      country="us"
      onlyCountries={["us", "in"]}
      value={value}
      onChange={(phone) => onChange?.(phone)}
      countryCodeEditable={false}
      disabled={disabled || readOnly}
      inputProps={{
        name: "phone",
        required: true,
        disabled,
        readOnly,
      }}
      containerClass={cn("w-full", className)}
      inputClass={cn(
        // match shadcn Input
        "w-full h-9 rounded-md border-2 border-gray-300 bg-background px-3 text-sm",
        "focus:outline-none focus:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "pl-12" // space for flag button
      )}
      buttonClass={cn(
        "border-none bg-transparent hover:bg-muted focus:bg-muted"
      )}
      dropdownClass={cn(
        "rounded-md border border-border shadow-md z-50 bg-background"
      )}
    />
  );
}
