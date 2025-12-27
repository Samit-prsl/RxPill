import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface Option {
  value: string | number;
  label: string;
}

export interface InputRadioGroupProps {
  options: Option[];
  onChange?: (value: string) => void;
  value?: string | number;
  name?: string;
  row?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function InputRadioGroup({
  options,
  onChange,
  value,
  name,
  row = false,
  disabled = false,
  className,
}: InputRadioGroupProps) {
  return (
    <RadioGroup
      value={value?.toString()}
      onValueChange={(val) => onChange?.(val)}
      className={cn(
        "flex gap-3",
        row ? "flex-row" : "flex-col",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      name={name}
    >
      {options.map((option) => {
        const optionValue = option.value.toString();

        return (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <RadioGroupItem value={optionValue} disabled={disabled} />
            <span>{option.label}</span>
          </label>
        );
      })}
    </RadioGroup>
  );
}
