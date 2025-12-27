import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Option {
  value: string | number;
  label: string;
}

export interface InputCheckboxGroupProps {
  options: Option[];
  onChange?: (selectedValues: (string | number)[]) => void;
  value?: (string | number)[];
  name?: string;
  row?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function InputCheckboxGroup({
  options,
  onChange,
  value = [],
  name,
  row = false,
  disabled = false,
  className,
}: InputCheckboxGroupProps) {
  const handleChange = (option: Option, checked: boolean) => {
    if (!onChange) return;

    const newValue = checked
      ? [...value, option.value]
      : value.filter((v) => v !== option.value);

    onChange(newValue);
  };

  return (
    <div
      className={cn(
        "flex gap-3",
        row ? "flex-row flex-wrap" : "flex-col",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {options.map((option) => {
        const isChecked = value.includes(option.value);

        return (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <Checkbox
              checked={isChecked}
              disabled={disabled}
              name={name}
              onCheckedChange={(checked) => {
                if (typeof checked === "boolean") {
                  handleChange(option, checked);
                }
              }}
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
