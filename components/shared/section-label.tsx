import React from "react"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-[0.2em] font-medium uppercase text-[#000823]/45 bg-[#000823]/[0.04] ${className}`}
    >
      {children}
    </span>
  )
}
