import React, { useState } from "react";
import InputText from "./InputText";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

interface InputTextPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputTextPassword({
  value,
  className,
  ...props
}: InputTextPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const hasValue = Boolean(value);

  return (
    <div className="relative">
      <InputText
        {...props}
        value={value}
        type={showPassword ? "text" : "password"}
        className={`pr-10 ${className ?? ""}`}
      />

      {hasValue && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
          aria-label="toggle password visibility"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
}
