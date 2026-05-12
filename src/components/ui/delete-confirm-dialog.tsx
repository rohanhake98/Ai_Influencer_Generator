"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface DeleteConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  itemName?: string
  onConfirm: () => Promise<void> | void
  variant?: "default" | "destructive"
}

export function DeleteConfirmDialog({
  open,
  onOpenChange,
  title = "Delete this item?",
  description = "This action cannot be undone. This will permanently delete the item and remove all associated data.",
  itemName,
  onConfirm,
  variant = "default",
}: DeleteConfirmDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [confirmText, setConfirmText] = useState("")
  const [error, setError] = useState<string | null>(null)

  const isDestructive = variant === "destructive"
  const needsConfirmation = isDestructive && itemName

  const handleConfirm = async () => {
    if (needsConfirmation && confirmText.toLowerCase() !== itemName.toLowerCase()) {
      setError(`Type "${itemName}" to confirm`)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      await onConfirm()
      onOpenChange(false)
      setConfirmText("")
    } catch {
      setError("Failed to delete. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    onOpenChange(false)
    setConfirmText("")
    setError(null)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-surface border-white/[0.08] rounded-2xl">
        <DialogHeader className="space-y-3">
          <div className={cn(
            "mx-auto size-12 rounded-full flex items-center justify-center",
            isDestructive ? "bg-error/10" : "bg-warning/10"
          )}>
            <AlertTriangle className={cn(
              "size-6",
              isDestructive ? "text-error" : "text-warning"
            )} />
          </div>
          <div className="text-center">
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-on-surface-variant mt-2">
              {itemName && <span className="font-semibold text-on-surface">{itemName}</span>}
              {" "}{description}
            </DialogDescription>
          </div>
        </DialogHeader>

        {needsConfirmation && (
          <div className="space-y-2">
            <label htmlFor="confirm-delete" className="text-sm font-medium text-on-surface-variant">
              Type <span className="font-semibold">{itemName}</span> to confirm
            </label>
            <input
              id="confirm-delete"
              type="text"
              value={confirmText}
              onChange={(e) => {
                setConfirmText(e.target.value)
                setError(null)
              }}
              placeholder={itemName}
              className="w-full h-10 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] focus:border-error/50 focus:ring-2 focus:ring-error/20 outline-none transition-colors text-sm"
              autoComplete="off"
            />
            {error && (
              <p className="text-xs text-error">{error}</p>
            )}
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="flex-1 border-white/[0.08] bg-white/[0.03]"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant={isDestructive ? "destructive" : "default"}
            onClick={handleConfirm}
            className={cn("flex-1", isDestructive && "bg-error text-white hover:bg-error/90")}
            disabled={isLoading || (needsConfirmation && confirmText.toLowerCase() !== itemName.toLowerCase())}
          >
            {isLoading ? "Deleting..." : isDestructive ? "Delete Forever" : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}