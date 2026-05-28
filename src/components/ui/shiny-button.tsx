'use client';

import type React from "react"
import "./shiny-button.css"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
  as?: React.ElementType
}

export function ShinyButton({ 
  children, 
  onClick, 
  disabled,
  type = "button",
  className = "", 
  as: Component = "button" 
}: ShinyButtonProps) {
  return (
    <Component 
      className={`shiny-cta ${className}`} 
      onClick={onClick}
      disabled={disabled}
      type={type}
      suppressHydrationWarning
    >
      <span>{children}</span>
    </Component>
  )
}
