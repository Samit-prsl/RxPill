import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { ReactNode } from "react"

// __define-ocg__
interface FormInputProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  defaultLabel?: string
  label?: string
  labelIcon?: ReactNode
  errorMsg?: string
  children?: ReactNode
  required?: boolean
  name?: string
  bold?: boolean
  useFormControl?: boolean
  containerClassName?: string
}

export function FormInput({
  id,
  defaultLabel,
  label,
  labelIcon,
  errorMsg,
  children,
  required,
  name,
  bold,
  useFormControl = true,
  containerClassName,
  className,
  ...props
}: FormInputProps) {
  return (
    <div className={cn("w-full flex flex-col gap-1.5", containerClassName)}>
      {(label || required) && (
        <Label
          htmlFor={id ?? name}
          className={cn(
            "text-sm text-foreground flex items-center gap-1",
            bold && "font-semibold"
          )}
        >
          {labelIcon && <span>{labelIcon}</span>}
          {label ?? defaultLabel}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}

      {useFormControl ? (
        <div className="flex flex-col gap-1" {...props}>
          {/* child input */}
          {children ? (
            children
          ) : (
            <Input id={id ?? name} className={cn("h-9", className)} />
          )}

          {errorMsg && (
            <p className="text-xs text-destructive mt-0.5">{errorMsg}</p>
          )}
        </div>
      ) : (
        <>
          {children}
          {errorMsg && (
            <p className="text-xs text-destructive mt-0.5">{errorMsg}</p>
          )}
        </>
      )}
    </div>
  )
}
