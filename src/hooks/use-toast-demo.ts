"use client"

import { useToast } from "@/components/ui/toast"

export function useToastDemo() {
  const { addToast } = useToast()

  const showSuccess = (message: string) => addToast("success", message)
  const showError = (message: string) => addToast("error", message)
  const showInfo = (message: string) => addToast("info", message)
  const showWarning = (message: string) => addToast("warning", message)

  return { showSuccess, showError, showInfo, showWarning }
}