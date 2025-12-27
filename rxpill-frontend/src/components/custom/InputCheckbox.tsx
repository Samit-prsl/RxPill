import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface InputCheckboxProps {
  label: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  className?: string;
}

export default function InputCheckbox({
  label,
  onChange,
  checked = false,
  name,
  disabled = false,
  className,
}: InputCheckboxProps) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 text-sm",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <Checkbox
        checked={checked}
        disabled={disabled}
        name={name}
        onCheckedChange={(value) => {
          // shadcn checkbox emits boolean | "indeterminate"
          if (typeof value === "boolean") {
            onChange?.(value);
          }
        }}
        onClick={(e) => {
          // match your MUI behavior
          e.stopPropagation();
        }}
      />
      <span>{label}</span>
    </label>
  );
}
