import React, { type ChangeEvent } from 'react';
import { Input } from '../ui/input';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}


export default function InputText({ type = 'text', onChange, ...props }: InputTextProps) {

  const patterns: Record<string, string> = {
    numeric: '^-?[0-9]\\d*\\.?\\d*$', // positive & negative numbers, decimals
    integer: '^[0-9]\\d*$', // integers only
    tel: '^\\d{0,10}$', // up to 10 digits
    alpha: '^(?!.*\\d).+$', // letters only (no digits)
    text: '.*', // fallback pattern, allow anything
  }

  const onChangeFinal = (e: ChangeEvent<HTMLInputElement>) => {
    const changeVal = e.target.value

    if (
      ['numeric', 'int', 'tel', 'alpha', 'positivenumeric'].includes(type) &&
      !e.target.validity.valid &&
      changeVal !== '' &&
      changeVal !== '-'
    ) {
      return
    }

    if (type === 'positivenumeric') {
      const numericValue = parseFloat(changeVal)
      if (isNaN(numericValue) || numericValue <= 0) {
        return
      }
    }

    onChange?.(e)
  }

  const inputType =
      ['numeric', 'int', 'positivenumeric'].includes(type) ? 'text' : type

  const inputMode = React.useMemo(() => {
    if (type === 'positivenumeric') return 'decimal'
    if (type === 'numeric' || type === 'int') return 'numeric'
    return undefined
  }, [type]);

  return (
    <Input
      {...props}
      type={inputType}
      inputMode={inputMode}
      pattern={patterns[type] ?? patterns.text}
      onChange={onChangeFinal}
      autoComplete="new-password"
      className={`h-9 border-2 border-gray-300 focus-visible:ring-0 focus:border-primary rounded-md ${props.className ?? ""}`}
    />
  )
}