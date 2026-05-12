"use client"

import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

interface PasswordStrengthProps {
  password: string
  showRequirements?: boolean
}

interface Requirement {
  test: (password: string) => boolean
  label: string
}

const requirements: Requirement[] = [
  { test: (p) => p.length >= 8, label: "At least 8 characters" },
  { test: (p) => /[a-z]/.test(p), label: "One lowercase letter" },
  { test: (p) => /[A-Z]/.test(p), label: "One uppercase letter" },
  { test: (p) => /\d/.test(p), label: "One number" },
  { test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), label: "One special character" },
]

function getStrength(password: string): { level: number; label: string; color: string } {
  const metRequirements = requirements.filter((r) => r.test(password)).length
  
  if (password.length === 0) return { level: 0, label: "", color: "" }
  if (metRequirements <= 1) return { level: 1, label: "Weak", color: "bg-error" }
  if (metRequirements <= 2) return { level: 2, label: "Fair", color: "bg-warning" }
  if (metRequirements <= 3) return { level: 3, label: "Good", color: "bg-primary" }
  if (metRequirements <= 4) return { level: 4, label: "Strong", color: "bg-success" }
  return { level: 5, label: "Very Strong", color: "bg-success" }
}

export function PasswordStrength({ password, showRequirements = true }: PasswordStrengthProps) {
  const strength = getStrength(password)
  const metCount = requirements.filter((r) => r.test(password)).length

  if (password.length === 0) return null

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300",
              strength.color,
              strength.level > 0 ? "opacity-100" : "opacity-0"
            )}
            style={{ width: `${(strength.level / 5) * 100}%` }}
          />
        </div>
        <span
          className={cn(
            "text-xs font-semibold",
            strength.level <= 1 ? "text-error" :
            strength.level <= 2 ? "text-warning" :
            strength.level <= 3 ? "text-primary" :
            "text-success"
          )}
        >
          {strength.label}
        </span>
      </div>

      {showRequirements && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {requirements.map((req, idx) => {
            const isMet = req.test(password)
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-1.5 text-[11px]",
                  isMet ? "text-success" : "text-on-surface-variant/50"
                )}
              >
                {isMet ? (
                  <Check className="size-3 flex-shrink-0" />
                ) : (
                  <X className="size-3 flex-shrink-0" />
                )}
                <span className="truncate">{req.label}</span>
              </div>
            )
          })}
        </div>
      )}

      <p className="text-[10px] text-on-surface-variant/60">
        {metCount} of {requirements.length} requirements met
      </p>
    </div>
  )
}