export type ToastType = "success" | "error" | "warning" | "info" | "default"

export interface ToastOptions {
  title?: string
  description?: string
  duration?: number
}