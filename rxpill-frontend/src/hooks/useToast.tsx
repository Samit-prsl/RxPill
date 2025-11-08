import { toast } from "sonner"
import type { ToastOptions, ToastType } from "@/types/Toast"

export function useToast() {
  const show = (type: ToastType, message: string, options?: ToastOptions) => {
    const { title, description, duration = 2000 } = options || {}

    const content = title ? `${title}: ${message}` : message

    switch (type) {
      case "success":
        toast.success(content, { description, duration })
        break
      case "error":
        toast.error(content, { description, duration })
        break
      case "warning":
        toast.warning(content, { description, duration })
        break
      case "info":
        toast.info(content, { description, duration })
        break
      default:
        toast(content, { description, duration })
        break
    }
  }

  return {
    show,
    success: (message: string, options?: ToastOptions) => show("success", message, options),
    error: (message: string, options?: ToastOptions) => show("error", message, options),
    warning: (message: string, options?: ToastOptions) => show("warning", message, options),
    info: (message: string, options?: ToastOptions) => show("info", message, options),
    default: (message: string, options?: ToastOptions) => show("default", message, options),
  }
}
